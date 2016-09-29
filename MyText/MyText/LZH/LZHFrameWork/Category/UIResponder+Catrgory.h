//
//  UIResponder+Catrgory.h
//  MyText
//
//  Created by issuser on 16/2/17.
//  Copyright © 2016年 刘志豪. All rights reserved.
//

#import <UIKit/UIKit.h>

@interface UIResponder (Catrgory)
/**
 *  @brief  当前第一响应者
 *
 *  @return 当前第一响应者
 */
+ (id)currentFirstResponder;
/**
 *  @brief  响应者链
 *
 *  @return  响应者链
 */
- (NSString *)responderChainDescription;
@end
