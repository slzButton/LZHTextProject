//
//  UIControl+Category.h
//  MyText
//
//  Created by issuser on 16/2/25.
//  Copyright © 2016年 刘志豪. All rights reserved.
//

#import <UIKit/UIKit.h>
#import "ALActionBlockWrapper.h"
@interface UIControl (Category)
- (void)handleControlEvents:(UIControlEvents)controlEvents withBlock:(ALActionBlock)actionBlock;
- (void)removeActionBlocksForControlEvents:(UIControlEvents)controlEvents;
@end
