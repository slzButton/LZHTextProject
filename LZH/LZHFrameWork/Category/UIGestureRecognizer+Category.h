//
//  UIGestureRecognizer+Category.h
//  MyText
//
//  Created by issuser on 16/2/25.
//  Copyright © 2016年 刘志豪. All rights reserved.
//

#import <UIKit/UIKit.h>
#import "ALActionBlockWrapper.h"
@interface UIGestureRecognizer (Category)
- (instancetype)initWithBlock:(ALActionBlock)actionBlock;
- (void)setBlock:(ALActionBlock)actionBlock;
@end
