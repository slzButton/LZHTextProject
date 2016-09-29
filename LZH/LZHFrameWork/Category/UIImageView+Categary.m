//
//  UIImageView+Categary.m
//  MyText
//
//  Created by issuser on 16/2/17.
//  Copyright © 2016年 刘志豪. All rights reserved.
//

#import "UIImageView+Categary.h"

@implementation UIImageView (Categary)
+ (instancetype)imageViewWithImageNamed:(NSString *)imageName
{
    return [[UIImageView alloc] initWithImage:[UIImage imageNamed:imageName]];
}
@end
