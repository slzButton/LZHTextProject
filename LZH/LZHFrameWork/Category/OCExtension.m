//
//  OCExtension.m
//  MyText
//
//  Created by issuser on 16/7/18.
//  Copyright © 2016年 刘志豪. All rights reserved.
//

#import "OCExtension.h"

//自定义通知的名字
NSString *const MYCHANGENSNOTIFICATIONNAME = @"change";
NSString *const MYAPPDIDBECOMEACTIVE = @"DidBecomeActive";

//存储user信息是用的ID
NSString *const USER = @"user";
//自定义文件夹的名字
NSString *const LZHFILEPATH = @"/lzh";

static CGFloat const XIB_WIDTH = 320.0;

CGRect CGAdaptRectMake(CGFloat x, CGFloat y, CGFloat width, CGFloat height)
{
    //UIScreenMode *currentMode = [[UIScreen mainScreen]currentMode];
    CGRect sreenBounds = [UIScreen mainScreen].bounds;
    CGFloat scale  = sreenBounds.size.width/XIB_WIDTH;
    return CGRectMake(x*scale, y*scale, width *scale, height*scale);
}

CGPoint CGAdaptPointMake(CGFloat x, CGFloat y){
    //UIScreenMode *currentMode = [[UIScreen mainScreen]currentMode];
    CGRect sreenBounds = [UIScreen mainScreen].bounds;
    CGFloat scale  = sreenBounds.size.width/XIB_WIDTH;
    return CGPointMake(x*scale, y*scale);
}

CGFloat factorAdapt(){
    //IScreenMode *currentMode = [[UIScreen mainScreen]currentMode];
    CGRect sreenBounds = [UIScreen mainScreen].bounds;
    CGFloat scale  = sreenBounds.size.width/XIB_WIDTH;
    return scale;
}























