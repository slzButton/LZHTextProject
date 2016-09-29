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

//我的自定义缓存文件管理类
#import "LZHCacheManager.h"

//自定义类目
#import "NSDate+Category.h"
#import "NSDateFormatter+Category.h"
#import "NSObject+LZHCategory.h"
#import "NSString+Category.h"
#import "UIScrollView+Category.h"
#import "UIView+Category.h"
#import "UIViewController+Category.h"
#import "UINavigationController+Category.h"
#import "UITabBarController+Category.h"
#import "UIColor+Category.h"
#import "UIImageView+Categary.h"
#import "UITableView+Catrgory.h"
#import "UIResponder+Catrgory.h"
#import "UITextView+Category.h"
#import "UIControl+Category.h"
#import "UIGestureRecognizer+Category.h"
#import "UIBarButtonItem+Category.h"
//第三方
//自定义AlertView
#import "JKAlertDialog.h"
//切换
#import "VOSegmentedControl.h"


//自定义通知的名字
static NSString *const MYCHANGENSNOTIFICATIONNAME = @"change";
#define MYAPPDIDBECOMEACTIVE @"DidBecomeActive"



//存储user信息是用的ID
static NSString *const USER = @"user";
//自定义文件夹的名字
static NSString *const LZHFILEPATH = @"/lzh";
//自定义文件夹的位置
#define DEFAULTFILE [NSSearchPathForDirectoriesInDomains(NSCachesDirectory, NSUserDomainMask, YES)[0] stringByAppendingString:LZHFILEPATH]



#define PI 3.1415926
//计算竖直相对位置
#define HEIGHT(h) [UIScreen mainScreen].bounds.size.height * h / 480.0
//计算水平相对位置
#define WIDTH(w) [UIScreen mainScreen].bounds.size.width * w / 320.0
//计算宽高比之后的高度
#define RELATIVEHEIGHT(w,width,height) (WIDTH(w)) / (width / height)
//头部 高度
#define MAINHEADERHEIGHT 64.0
//状态栏 高度
#define STATUSBAR 20.0
//UINavigationBar 高度
#define UINAVIGATIONBARHEIGHT 44.0
//UITabBar 高度
#define MAINFOOTERHEIGHT 49.0
//UIScrollView添加子视图时在底部空余高度
#define SCROLLVIEWMOREHEIGHT 0.0
//UIScrollView添加子视图时在右边空余高度
#define SCROLLVIEWMOREWIDTH 0.0
//全屏宽
#define SCREENW [UIScreen mainScreen].bounds.size.width
//全屏高
#define SCREENH [UIScreen mainScreen].bounds.size.height
//除去头部和底部的高度
#define DEfAULTSRECT CGRectMake(0, 0, [UIScreen mainScreen].bounds.size.width, ([UIScreen mainScreen].bounds.size.height - MAINHEADERHEIGHT - MAINFOOTERHEIGHT))


#endif
