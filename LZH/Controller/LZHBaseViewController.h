//
//  LZHBaseViewController.h
//  MyText
//
//  Created by key:isoftstone on 15/11/5.
//  Copyright (c) 2015年 key:isoftstone. All rights reserved.
//

#import <UIKit/UIKit.h>
#import "LZHBaseView.h"
@interface LZHBaseViewController : UIViewController
@property(nonatomic,assign)CGFloat width;
@property(nonatomic,assign)CGFloat height;
@property(nonatomic,assign)CGSize size;
@property(nonatomic,assign)CGRect bounds;
@property(nonatomic,assign)BOOL navigationBarHidden;
@end
