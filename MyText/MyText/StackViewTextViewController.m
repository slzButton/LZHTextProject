//
//  StackViewTextViewController.m
//  MyText
//
//  Created by issuser on 16/2/15.
//  Copyright © 2016年 刘志豪. All rights reserved.
//

#import "StackViewTextViewController.h"

@implementation StackViewTextViewController
-(void)viewDidLoad{
    [super viewDidLoad];
    UIStackView *myStackView = [[UIStackView alloc] initWithFrame:CGRectMake(0, 64, self.view.frame.size.width, 300)];
    myStackView.backgroundColor = [UIColor grayColor];
    [self.view addSubview:myStackView];
    
    UILabel *label0 = [[UILabel alloc] init];
    label0.backgroundColor = [UIColor orangeColor];
    label0.textAlignment = NSTextAlignmentCenter;
    label0.text = @"1. 一只向往飞翔的猪";
    
    UILabel *label1 = [[UILabel alloc] init];
    label1.backgroundColor = [UIColor cyanColor];
    label1.textAlignment = NSTextAlignmentCenter;
    label1.text = @"2. 爱上帝企鹅的北极熊";
    
    UILabel *label2 = [[UILabel alloc] init];
    label2.backgroundColor = [UIColor blueColor];
    label2.textAlignment = NSTextAlignmentCenter;
    label2.text = @"3. 流浪在海洋中的老虎";
    
    //属性们
    [myStackView addArrangedSubview:label0];
    [myStackView addArrangedSubview:label1];
    [myStackView addArrangedSubview:label2];
    //布局方向  水平／竖直
    [myStackView setAxis:UILayoutConstraintAxisVertical];
    //items size
    [myStackView setDistribution:UIStackViewDistributionFillEqually];
    //在stack中的位置
    [myStackView setAlignment:UIStackViewAlignmentFirstBaseline];
    //items 之间间隔
    [myStackView setSpacing:10];
}
@end
