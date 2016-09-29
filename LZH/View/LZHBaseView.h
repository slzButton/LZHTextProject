//
//  LZHBaseView.h
//  VehicleWorld
//
//  Created by cltx on 16/8/31.
//  Copyright © 2016年 cltx. All rights reserved.
//

#import <UIKit/UIKit.h>

@interface LZHBaseView : UIView
+(instancetype)createViewWithFullSuperView:(UIView *)superview;
+(instancetype)createViewWithSuperView:(UIView *)superview andConstraint:(void (^)(UIView *view))constraintBlock;
-(void)drawView;
@end
