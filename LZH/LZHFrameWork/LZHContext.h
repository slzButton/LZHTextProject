//
//  LZHContext.h
//  svaDemo
//
//  Created by key:isoftstone on 15/10/27.
//  Copyright (c) 2015年 刘志豪. All rights reserved.
//

#ifndef svaDemo_LZHContext_h
#define svaDemo_LZHContext_h
#import <CoreData/CoreData.h>
//获取用户设备信息
#import <sys/utsname.h>
//获取用户IP地址
#import <ifaddrs.h>
#import <arpa/inet.h>

//自定义类目
#import "NSDate+Category.h"
#import "NSDateFormatter+Category.h"
#import "NSObject+Category.h"
#import "NSData+Category.h"
#import "NSString+Category.h"
#import "NSDictionary+Category.h"
#import "UIScrollView+Category.h"
#import "UIView+Category.h"
#import "UIViewController+Category.h"
#import "UINavigationController+Category.h"
#import "UITabBarController+Category.h"
#import "UIColor+Category.h"
#import "UIImage+Category.h"
#import "UIImageView+Categary.h"
#import "UITableView+Catrgory.h"
#import "UIResponder+Catrgory.h"
#import "UITextView+Category.h"
#import "UIControl+Category.h"
#import "UIGestureRecognizer+Category.h"
#import "UIBarButtonItem+Category.h"

#define PI 3.1415926
//计算竖直相对位置
#define HEIGHT(h) [UIScreen mainScreen].bounds.size.height * (h) / (1334.0)
//计算水平相对位置
#define WIDTH(w) [UIScreen mainScreen].bounds.size.width * (w) / (750.0)
//计算宽高比之后的高度
#define RELATIVEHEIGHT(w,width,height) (WIDTH(w)) / (width / height)
//头部 高度
#define MAINHEADERHEIGHT (64.0)
//状态栏 高度
#define STATUSBAR (20.0)
//UINavigationBar 高度
#define UINAVIGATIONBARHEIGHT (44.0)
//UITabBar 高度
#define MAINFOOTERHEIGHT (49.0)
//UIScrollView添加子视图时在底部空余高度
#define SCROLLVIEWMOREHEIGHT (0.0)
//UIScrollView添加子视图时在右边空余高度
#define SCROLLVIEWMOREWIDTH (0.0)
//全屏宽
#define SCREENW [UIScreen mainScreen].bounds.size.width
//全屏高
#define SCREENH [UIScreen mainScreen].bounds.size.height
//除去头部和底部的高度
#define DEfAULTSRECT CGRectMake(0, 0, [UIScreen mainScreen].bounds.size.width, ([UIScreen mainScreen].bounds.size.height - MAINHEADERHEIGHT - MAINFOOTERHEIGHT))

#ifndef __OPTIMIZE__
#define NSLog(fmt, ...) NSLog(@"%s: " fmt, __PRETTY_FUNCTION__, ## __VA_ARGS__)
#else
#define NSLog(...) {}
#endif

#endif
