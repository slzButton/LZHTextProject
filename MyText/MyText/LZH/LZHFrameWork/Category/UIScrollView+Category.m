//
//  UIScrollView+Category.m
//  MyText
//
//  Created by issuser on 16/2/15.
//  Copyright © 2016年 刘志豪. All rights reserved.
//

#import "UIScrollView+Category.h"
#import "LZHContext.h"
@implementation UIScrollView (Category)

-(void)addSubview:(UIView *)view{
    [super addSubview:view];
    CGFloat height = view.frame.size.height + view.frame.origin.y;
    CGFloat width = view.frame.origin.x + view.frame.size.width;
    if (self.contentSize.height < height) {
        self.contentSize = CGSizeMake(self.contentSize.width, height + SCROLLVIEWMOREHEIGHT);
    }
    if (self.contentSize.width < width) {
        self.contentSize = CGSizeMake(width + SCROLLVIEWMOREWIDTH, self.contentSize.height);
    }
}
@end
