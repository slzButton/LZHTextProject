//
//  UIImage+Category.m
//  MyText
//
//  Created by issuser on 16/5/24.
//  Copyright © 2016年 刘志豪. All rights reserved.
//

#import "UIImage+Category.h"

@implementation UIImage (Category)

- (UIImage*)imageWaterMarkWithImage:(UIImage *)image imageRect:(CGRect)imgRect alpha:(CGFloat)alpha
{
    return [self imageWaterMarkWithString:nil rect:CGRectZero attribute:nil image:image imageRect:imgRect alpha:alpha];
}

- (UIImage*)imageWaterMarkWithImage:(UIImage*)image imagePoint:(CGPoint)imgPoint alpha:(CGFloat)alpha
{
    return [self imageWaterMarkWithString:nil point:CGPointZero attribute:nil image:image imagePoint:imgPoint alpha:alpha];
}

- (UIImage*)imageWaterMarkWithString:(NSString*)str rect:(CGRect)strRect attribute:(NSDictionary *)attri
{
    return [self imageWaterMarkWithString:str rect:strRect attribute:attri image:nil imageRect:CGRectZero alpha:0];
}

- (UIImage*)imageWaterMarkWithString:(NSString*)str point:(CGPoint)strPoint attribute:(NSDictionary*)attri
{
    return [self imageWaterMarkWithString:str point:strPoint attribute:attri image:nil imagePoint:CGPointZero alpha:0];
}

- (UIImage*)imageWaterMarkWithString:(NSString*)str point:(CGPoint)strPoint attribute:(NSDictionary*)attri image:(UIImage*)image imagePoint:(CGPoint)imgPoint alpha:(CGFloat)alpha
{
    UIGraphicsBeginImageContext(self.size);
    [self drawAtPoint:CGPointMake(0, 0) blendMode:kCGBlendModeNormal alpha:1.0];
    if (image) {
        [image drawAtPoint:imgPoint blendMode:kCGBlendModeNormal alpha:alpha];
    }
    
    if (str) {
        [str drawAtPoint:strPoint withAttributes:attri];
    }
    UIImage *resultImage = UIGraphicsGetImageFromCurrentImageContext();
    UIGraphicsEndImageContext();
    return resultImage;
    
}

- (UIImage*)imageWaterMarkWithString:(NSString*)str rect:(CGRect)strRect attribute:(NSDictionary *)attri image:(UIImage *)image imageRect:(CGRect)imgRect alpha:(CGFloat)alpha
{
    UIGraphicsBeginImageContext(self.size);
    [self drawInRect:CGRectMake(0, 0, self.size.width, self.size.height) blendMode:kCGBlendModeNormal alpha:1.0];
    if (image) {
        [image drawInRect:imgRect blendMode:kCGBlendModeNormal alpha:alpha];
    }
    
    if (str) {
        [str drawInRect:strRect withAttributes:attri];
    }
    UIImage *resultImage = UIGraphicsGetImageFromCurrentImageContext();
    UIGraphicsEndImageContext();
    return resultImage;
}
// 改变图像的尺寸，方便上传服务器
-(UIImage *)imageScaleFromImageToSize:(CGSize)size
{
    UIGraphicsBeginImageContext(size);
    [self drawInRect:CGRectMake(0, 0, size.width, size.height)];
    UIImage *newImage = UIGraphicsGetImageFromCurrentImageContext();
    UIGraphicsEndImageContext();
    return newImage;
}


//2.保持原来的长宽比，生成一个缩略图
-(UIImage *)imageThumbnailWithImageWithoutScaleSize:(CGSize)asize
{
    UIImage *newimage;
    if (nil == self) {
        newimage = nil;
    }
    else{
        CGSize oldsize = self.size;
        CGRect rect;
        if (asize.width/asize.height > oldsize.width/oldsize.height) {
            rect.size.width = asize.height*oldsize.width/oldsize.height;
            rect.size.height = asize.height;
            rect.origin.x = (asize.width - rect.size.width)/2;
            rect.origin.y = 0;
        }
        else{
            rect.size.width = asize.width;
            rect.size.height = asize.width*oldsize.height/oldsize.width;
            rect.origin.x = 0;
            rect.origin.y = (asize.height - rect.size.height)/2;
        }
        // 下面方法，第一个参数表示区域大小。第二个参数表示是否是非透明的。如果需要显示半透明效果，需要传NO，否则传YES。第三个参数就是屏幕密度了
        UIGraphicsBeginImageContextWithOptions(asize,NO, [UIScreen mainScreen].scale);
        CGContextRef context = UIGraphicsGetCurrentContext();
        CGContextSetFillColorWithColor(context, [[UIColor clearColor] CGColor]);
        UIRectFill(CGRectMake(0, 0, asize.width, asize.height));
        [self drawInRect:rect];
        newimage = UIGraphicsGetImageFromCurrentImageContext();
        UIGraphicsEndImageContext();
    }
    return newimage;
}
@end
