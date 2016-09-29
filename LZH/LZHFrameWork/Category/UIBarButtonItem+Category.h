//
//  UIBarButtonItem+Category.h
//  MyText
//
//  Created by issuser on 16/2/25.
//  Copyright © 2016年 刘志豪. All rights reserved.
//

#import <UIKit/UIKit.h>
#import "UIControl+Category.h"
@interface UIBarButtonItem (Category)
- (instancetype)initWithBarButtonSystemItem:(UIBarButtonSystemItem)systemItem block:(ALActionBlock)actionBlock;
- (instancetype)initWithImage:(UIImage *)image landscapeImagePhone:(UIImage *)landscapeImagePhone style:(UIBarButtonItemStyle)style block:(ALActionBlock)actionBlock;
- (instancetype)initWithImage:(UIImage *)image style:(UIBarButtonItemStyle)style block:(ALActionBlock)actionBlock;
- (instancetype)initWithTitle:(NSString *)title style:(UIBarButtonItemStyle)style block:(ALActionBlock)actionBlock;

- (void)setBlock:(ALActionBlock)actionBlock;
@end
