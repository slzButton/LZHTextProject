//
//  UIViewController+Category.m
//  MyText
//
//  Created by issuser on 16/2/15.
//  Copyright © 2016年 刘志豪. All rights reserved.
//

#import "UIViewController+Category.h"

@implementation UIViewController (Category)
- (BOOL)isCurrentlyVisible
{
    return [self isViewLoaded] && (self.view.window != nil);
}
-(void)removeAllChildVC{
    [self.childViewControllers makeObjectsPerformSelector:@selector(removeFromParentViewController)];
}
-(void)removeAllSubView{
    [self.view.subviews makeObjectsPerformSelector:@selector(removeFromSuperview)];
}
- (BOOL)isVisible {
    return [self isViewLoaded] && self.view.window;
}
@end
