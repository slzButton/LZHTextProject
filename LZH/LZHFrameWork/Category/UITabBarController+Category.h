//
//  UITabBarController+Category.h
//  MyText
//
//  Created by issuser on 16/2/15.
//  Copyright © 2016年 刘志豪. All rights reserved.
//

#import <UIKit/UIKit.h>

@interface UITabBarController (Category)
/// Wheter the UITabBar is hidden. Modifying this value shows/hides the tabBar.
@property(nonatomic,getter=isTabBarHidden) BOOL tabBarHidden;

/// Show/hide the UITabBar with animation.
/// @param hidden Whether the tabBar should be hidden.
/// @param animated Whether the change should be animated.
- (void)setTabBarHidden:(BOOL)hidden
               animated:(BOOL)animated;
@end
