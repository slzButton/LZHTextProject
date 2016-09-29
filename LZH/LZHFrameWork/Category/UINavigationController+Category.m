//
//  UINavigationController+Category.m
//  MyText
//
//  Created by issuser on 16/2/15.
//  Copyright © 2016年 刘志豪. All rights reserved.
//

#import "UINavigationController+Category.h"

@implementation UINavigationController (Category)
-(BOOL)shouldAutorotate{
    return self.topViewController.shouldAutorotate;
}
- (UIViewController *)rootViewController
{
    NSArray * controllers = self.viewControllers;
    return controllers.count > 0 ? controllers[0] : nil;
}
- (void)setRootViewController:(UIViewController *)rootViewController
{
    self.viewControllers = rootViewController ? @[rootViewController] : nil;
}
/**
 *  @brief  寻找Navigation中的某个viewcontroler对象
 *
 *  @param className viewcontroler名称
 *
 *  @return viewcontroler对象
 */
- (id)findViewController:(NSString*)className
{
    for (UIViewController *viewController in self.viewControllers) {
        if ([viewController isKindOfClass:NSClassFromString(className)]) {
            return viewController;
        }
    }
    
    return nil;
}
/**
 *  @brief  返回指定的viewcontroler
 *
 *  @param className 指定viewcontroler类名
 *  @param animated  是否动画
 *
 *  @return pop之后的viewcontrolers
 */
- (NSArray *)popToViewControllerWithClassName:(NSString*)className animated:(BOOL)animated;
{
    return [self popToViewController:[self findViewController:className] animated:YES];
}
/**
 *  @brief  pop n层
 *
 *  @param level  n层
 *  @param animated  是否动画
 *
 *  @return pop之后的viewcontrolers
 */
- (NSArray *)popToViewControllerWithLevel:(NSInteger)level animated:(BOOL)animated
{
    NSInteger viewControllersCount = self.viewControllers.count;
    if (viewControllersCount > level) {
        NSInteger idx = viewControllersCount - level - 1;
        UIViewController *viewController = self.viewControllers[idx];
        return [self popToViewController:viewController animated:animated];
    } else {
        return [self popToRootViewControllerAnimated:animated];
    }
}
@end
