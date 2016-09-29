//
//  LZHBaseViewController.h
//  MyText
//
//  Created by key:isoftstone on 15/11/5.
//  Copyright (c) 2015年 key:isoftstone. All rights reserved.
//

#import <UIKit/UIKit.h>
#import "LZHContext.h"
#import "JKAlertDialog.h"
@interface LZHBaseViewController : UIViewController
@property(nonatomic,assign)CGFloat width;
@property(nonatomic,assign)CGFloat height;
@property(nonatomic,assign)CGSize size;
@property(nonatomic,strong)LZHCacheManager *cacheManager;

/**网络出错*/
-(void)showJKAlertDialogWhenNetWorkError;
/**alertView*/
-(void)showJKAlertDialogTitle:(NSString *)title message:(NSString *)message handlerBlock:(void(^)(JKAlertDialogItem *item))handlerBlock;
/**
 *  提示视图
 *
 *  @param text 提示信息
 */
- (void)toastWithText:(NSString *)text;
/**
 *  alertView
 *
 *  @param title   传入标题
 *  @param message 传入字段
 */
-(void)showJKAlertDialogTitle:(NSString *)title message:(NSString *)message;

/**
 *  自适应高度
 *
 *  @param string 需要计算的String
 *  @param font   字体
 *  @param width  最多多宽
 *  @param height 最多多高
 *
 *  @return 返回高度
 */
-(CGFloat)autoHeight:(NSString *)string withFont:(UIFont *)font withWidth:(CGFloat)width withHeight:(CGFloat)height;
/**
 *  自适应宽度
 *
 *  @param string 需要计算的String
 *  @param font   字体
 *  @param width  最多多宽
 *  @param height 最多多高
 *
 *  @return 返回宽度
 */
-(CGFloat)autoWidth:(NSString *)string withFont:(UIFont *)font withWidth:(CGFloat)width withHeight:(CGFloat)height;
/**
 *  倒计时按钮
 *
 *  @param countdownButton 倒计时按钮
 *  @param time            设置时间
 */
-(void)countdownButtonAction:(UIButton *)countdownButton withTime:(int)time;
/**筛选数据返回值是数组*/
-(NSArray *)returnResponseArrayWithKeyString:(NSString *)keyString keyDictionary:(NSDictionary *)dictionary;
-(NSArray *)returnResponseArrayWithKeyString:(NSString *)keyString keyDictionary:(NSDictionary *)dictionary showMessageWhenError:(void(^)(NSString *message))messageBlock;
/**筛选数据返回值是字典*/
-(NSDictionary *)returnResponseDictionaryWithKeyString:(NSString *)keyString keyDictionary:(NSDictionary *)dictionary;
-(NSDictionary *)returnResponseDictionaryWithKeyString:(NSString *)keyString keyDictionary:(NSDictionary *)dictionary showMessageWhenError:(void(^)(NSString *message))messageBlock;
/**筛选数据返回值是字符串*/
-(NSString *)returnResponseStringWithKeyString:(NSString *)keyString keyDictionary:(NSDictionary *)dictionary;
-(NSString *)returnResponseStringWithKeyString:(NSString *)keyString keyDictionary:(NSDictionary *)dictionary showMessageWhenError:(void(^)(NSString *message))messageBlock;
@end

