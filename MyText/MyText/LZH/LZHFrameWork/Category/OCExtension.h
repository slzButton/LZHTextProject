//
//  OCExtension.h
//  MyText
//
//  Created by issuser on 16/7/18.
//  Copyright © 2016年 刘志豪. All rights reserved.
//

#import <UIKit/UIKit.h>

//自定义通知的名字
extern NSString *const MYCHANGENSNOTIFICATIONNAME;
extern NSString *const MYAPPDIDBECOMEACTIVE;

//存储user信息是用的ID
extern NSString *const USER;
//自定义文件夹的名字
extern NSString *const LZHFILEPATH;


CGRect CGAdaptRectMake(CGFloat x, CGFloat y, CGFloat width, CGFloat height);

CGPoint CGAdaptPointMake(CGFloat x, CGFloat y);

CGFloat factorAdapt();























