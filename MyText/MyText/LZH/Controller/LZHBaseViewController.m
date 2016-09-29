//
//  LZHBaseViewController.m
//  MyText
//
//  Created by key:isoftstone on 15/11/5.
//  Copyright (c) 2015年 key:isoftstone. All rights reserved.
//

#import "LZHBaseViewController.h"

@interface LZHBaseViewController ()

@end

@implementation LZHBaseViewController
-(CGFloat)width{
    _width = self.view.bounds.size.width;
    return _width;
}
-(CGFloat)height{
    _height = self.view.bounds.size.height;
    return _height;
}
-(CGSize)size{
    _size = self.view.bounds.size;
    return _size;
}

-(LZHCacheManager *)cacheManager{
    if (_cacheManager == nil) {
        _cacheManager = [LZHCacheManager shareCacheManager];
    }
    return _cacheManager;
}


-(BOOL)shouldAutorotate{
    return NO;
}
-(void)loadView{
    [super loadView];
    self.view.backgroundColor = [UIColor whiteColor];
}

-(void)viewWillAppear:(BOOL)animated{
    [super viewWillAppear:animated];
    for (UIView *t in self.view.subviews) {
        if ([t isMemberOfClass:[UITableView class]]) {
            [(UITableView *)t deselectRowAtIndexPath:[(UITableView *)t indexPathForSelectedRow] animated:YES];
        }
    }
}
#pragma mark - 通知
-(void)changeAction:(NSNotification *)notification{
    [self changeWith:(NSNotification *)notification];
}
#pragma mark - 视图设置
-(void)changeWith:(NSNotification *)notification{
    
}
-(void)showJKAlertDialogWhenNetWorkError{
    [self showJKAlertDialogTitle:@"网络错误" message:@"请检查您的网络"];
}
-(void)showJKAlertDialogTitle:(NSString *)title message:(NSString *)message{
    [self showJKAlertDialogTitle:title message:message handlerBlock:^(JKAlertDialogItem *item) {
        
    }];
}
-(void)showJKAlertDialogTitle:(NSString *)title message:(NSString *)message handlerBlock:(void(^)(JKAlertDialogItem *item))handlerBlock{
    JKAlertDialog *jk = [[JKAlertDialog alloc]initWithTitle:title message:message];
    [jk addButton:Button_CANCEL withTitle:@"确认" handler:handlerBlock];
    [jk show];
}

-(CGFloat)autoHeight:(NSString *)string withFont:(UIFont *)font withWidth:(CGFloat)width withHeight:(CGFloat)height
{
    NSDictionary *dict = @{NSFontAttributeName:font};
    CGRect rect = [string boundingRectWithSize:CGSizeMake(width, height) options:NSStringDrawingUsesLineFragmentOrigin attributes:dict context:nil];
    return rect.size.height;
}
-(CGFloat)autoWidth:(NSString *)string withFont:(UIFont *)font withWidth:(CGFloat)width withHeight:(CGFloat)height
{
    NSDictionary *dict = @{NSFontAttributeName:font};
    CGRect rect = [string boundingRectWithSize:CGSizeMake(width, height) options:NSStringDrawingUsesLineFragmentOrigin attributes:dict context:nil];
    return rect.size.width;
}

-(void)countdownButtonAction:(UIButton *)countdownButton withTime:(int)time{
    __block int timeout = time; // 设置倒计时时间
    dispatch_queue_t queue = dispatch_get_global_queue(DISPATCH_QUEUE_PRIORITY_DEFAULT, 0);
    dispatch_source_t timer = dispatch_source_create(DISPATCH_SOURCE_TYPE_TIMER, 0, 0, queue);
    dispatch_source_set_timer(timer, dispatch_walltime(NULL, 0), 1.0 * NSEC_PER_SEC, 0); // 设置执行间隔时间
    dispatch_source_set_event_handler(timer, ^{
        if (timeout <= 0) {
            // 倒计时结束
            dispatch_source_cancel(timer);
            // 回到主线程执行动作
            dispatch_async(dispatch_get_main_queue(), ^{
                [countdownButton setTitle:@"获取验证码" forState:UIControlStateNormal];
                countdownButton.userInteractionEnabled = YES;
            });
        }else {
            int seconds = timeout % 60;
            NSString *timeStr = [NSString stringWithFormat:@"%.2d",seconds];
            dispatch_async(dispatch_get_main_queue(), ^{
                [countdownButton setTitle:[NSString stringWithFormat:@"%@秒后重新获取",timeStr] forState:UIControlStateNormal];
                countdownButton.userInteractionEnabled = NO;
            });
            timeout--;
        }
    });
    dispatch_resume(timer);
}
-(NSArray *)returnResponseArrayWithKeyString:(NSString *)keyString keyDictionary:(NSDictionary *)dictionary{
    return [self returnResponseArrayWithKeyString:keyString keyDictionary:dictionary showMessageWhenError:^(NSString *message) {
        
    }];
}
-(NSArray *)returnResponseArrayWithKeyString:(NSString *)keyString keyDictionary:(NSDictionary *)dictionary showMessageWhenError:(void(^)(NSString *message))messageBlock{
    NSArray *responseJSONObjectArray = nil;
    if ([dictionary[REQUESTCODE] isEqualToString:REQUESTCODEVALUE]) {
        responseJSONObjectArray = dictionary[keyString];
    }else{
        messageBlock(dictionary[REQUESTMESSAGE]);
    }
    return responseJSONObjectArray;
}
-(NSDictionary *)returnResponseDictionaryWithKeyString:(NSString *)keyString keyDictionary:(NSDictionary *)dictionary{
    return [self returnResponseDictionaryWithKeyString:keyString keyDictionary:dictionary showMessageWhenError:^(NSString *message) {
        
    }];
}
-(NSDictionary *)returnResponseDictionaryWithKeyString:(NSString *)keyString keyDictionary:(NSDictionary *)dictionary showMessageWhenError:(void(^)(NSString *message))messageBlock{
    NSDictionary *responseJSONObjectDictionary = nil;
    if ([dictionary[REQUESTCODE] isEqualToString:REQUESTCODEVALUE]) {
        responseJSONObjectDictionary = dictionary[keyString];
    }else{
        messageBlock(dictionary[REQUESTMESSAGE]);
    }
    return responseJSONObjectDictionary;
}
-(NSString *)returnResponseStringWithKeyString:(NSString *)keyString keyDictionary:(NSDictionary *)dictionary{
    return [self returnResponseStringWithKeyString:keyString keyDictionary:dictionary showMessageWhenError:^(NSString *message) {
        
    }];
}
-(NSString *)returnResponseStringWithKeyString:(NSString *)keyString keyDictionary:(NSDictionary *)dictionary showMessageWhenError:(void(^)(NSString *message))messageBlock{
    NSString *responseJSONObjectString = nil;
    if ([dictionary[REQUESTCODE] isEqualToString:REQUESTCODEVALUE]) {
        responseJSONObjectString = dictionary[keyString];
    }else{
        messageBlock(dictionary[REQUESTMESSAGE]);
    }
    return responseJSONObjectString;
}

/*
 #pragma mark - Navigation
 
 // In a storyboard-based application, you will often want to do a little preparation before navigation
 - (void)prepareForSegue:(UIStoryboardSegue *)segue sender:(id)sender {
 // Get the new view controller using [segue destinationViewController].
 // Pass the selected object to the new view controller.
 }
 */

@end
