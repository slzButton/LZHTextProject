//
//  LZHBaseView.m
//  VehicleWorld
//
//  Created by cltx on 16/8/31.
//  Copyright © 2016年 cltx. All rights reserved.
//

#import "LZHBaseView.h"

@implementation LZHBaseView
+(instancetype)createViewWithFullSuperView:(UIView *)superview{
    LZHBaseView *view = [[self alloc]init];
    [superview addSubview:view];
    view.sd_layout.spaceToSuperView(UIEdgeInsetsMake(0, 0, 0, 0));
    return view;
}
+(instancetype)createViewWithSuperView:(UIView *)superview andConstraint:(void (^)(UIView *view))constraintBlock{
    LZHBaseView *view = [self new];
    [superview addSubview:view];
    constraintBlock(view);
    return view;
}
-(instancetype)init{
    if (self = [super init]) {
        [self drawView];
    }
    return self;
}
-(void)drawView{
    
}
/*
// Only override drawRect: if you perform custom drawing.
// An empty implementation adversely affects performance during animation.
- (void)drawRect:(CGRect)rect {
    // Drawing code
}
*/

@end
