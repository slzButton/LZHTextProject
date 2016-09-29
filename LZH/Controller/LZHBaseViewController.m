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
-(CGRect)bounds{
    _bounds = self.view.bounds;
    return _bounds;
}
-(void)loadView{
    [super loadView];
    self.view.backgroundColor = [UIColor whiteColor];
}
-(void)viewDidLoad{
    [super viewDidLoad];
    self.navigationBarHidden = YES;
}
-(void)viewWillAppear:(BOOL)animated{
    [super viewWillAppear:animated];
    self.navigationController.navigationBarHidden = self.navigationBarHidden;
}
@end
