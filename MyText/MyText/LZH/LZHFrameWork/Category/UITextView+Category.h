//
//  UITextView+Category.h
//  MyText
//
//  Created by issuser on 16/2/17.
//  Copyright © 2016年 刘志豪. All rights reserved.
//

#import <UIKit/UIKit.h>

@interface UITextView (Category)
@property (nonatomic, strong) UITextView *placeHolderTextView;
- (void)addPlaceHolder:(NSString *)placeHolder;
// 用于计算textview输入情况下的字符数，解决实现限制字符数时，计算不准的问题
- (NSInteger)getInputLengthWithText:(NSString *)text;
/*
 - (BOOL)textView:(UITextView *)textView shouldChangeTextInRange:(NSRange)range replacementText:(NSString *)text
 {
 NSInteger textLength = [textView getInputLengthWithText:text];
 if (textLength > 20) {
 //超过20个字可以删除
 if ([text isEqualToString:@""]) {
 return YES;
 }
 return NO;
 }
 return YES;
 }
 
 - (void)textViewDidChange:(UITextView *)textView
 {
 if ([textView getInputLengthWithText:nil] > 20) {
 textView.text = [textView.text substringToIndex:20];
 }
 }
 */
@end
