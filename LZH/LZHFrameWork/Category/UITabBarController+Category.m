//
//  UITabBarController+Category.m
//  MyText
//
//  Created by issuser on 16/2/15.
//  Copyright © 2016年 刘志豪. All rights reserved.
//

#import "UITabBarController+Category.h"
#import <objc/runtime.h>
@implementation UITabBarController (Category)
-(BOOL)shouldAutorotate{
    UIViewController *vc = (UIViewController *)self.viewControllers[0];
    return vc.shouldAutorotate;
}

- (BOOL)isTabBarHidden
{
    return CGRectGetMaxY(self.view.frame) > CGRectGetMaxY(self.originalViewFrame);
}

- (void)setTabBarHidden:(BOOL)hidden
{
    CGRect frame = self.originalViewFrame;
    if (hidden)
    {
        frame.size.height += self.tabBar.frame.size.height;
    }
    
    self.view.frame = frame;
}

- (void)setTabBarHidden:(BOOL)hidden
               animated:(BOOL)animated
{
    
    [UIView animateWithDuration:animated ? UINavigationControllerHideShowBarDuration : 0.0
                          delay:0.0
                        options:(UIViewAnimationOptionAllowUserInteraction |
                                 UIViewAnimationOptionLayoutSubviews |
                                 UIViewAnimationOptionBeginFromCurrentState)
                     animations:^
     {
         self.tabBarHidden = hidden;
     }
                     completion:NULL];
}
- (CGRect)originalViewFrame
{
    NSValue * value = objc_getAssociatedObject(self,
                                               @selector(originalViewFrame));
    if (value)
    {
        return value.CGRectValue;
    }
    else
    {
        self.originalViewFrame = self.view.frame;
        return self.view.frame;
    }
}

- (void)setOriginalViewFrame:(CGRect)originalViewFrame
{
    objc_setAssociatedObject(self,
                             @selector(originalViewFrame),
                             [NSValue valueWithCGRect:originalViewFrame],
                             OBJC_ASSOCIATION_RETAIN_NONATOMIC);
}
@end
