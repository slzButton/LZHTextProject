//
//  XIBViewController.m
//  MyText
//
//  Created by issuser on 16/5/23.
//  Copyright © 2016年 刘志豪. All rights reserved.
//

#import "XIBViewController.h"

@interface XIBViewController ()
@property (weak, nonatomic) IBOutlet UIImageView *imgView;
@property (weak, nonatomic) IBOutlet UISlider *sliderView;
@property(nonatomic,strong)GPUImagePicture *pic;
/**
 调整图像的对比度
 */
@property(nonatomic,strong)GPUImageContrastFilter *dbdfilter;
/**
 调整图像的饱和度
 */
@property(nonatomic,strong)GPUImageSaturationFilter *bhdfilter;
/**
 调整图像的曝光度
 */
@property(nonatomic,strong)GPUImageExposureFilter *pgdfilter;
/**
 *  调整图像的色温
 */
@property(nonatomic,strong)GPUImageWhiteBalanceFilter *swfilter;
@end

@implementation XIBViewController

- (IBAction)sliderViewAction:(id)sender {
    UIImage *img = self.imgView.image;
    self.dbdfilter.contrast = self.sliderView.value;
    [self.dbdfilter forceProcessingAtSize:img.size];
    [self.pic processImage];
    [self.dbdfilter useNextFrameForImageCapture];
    self.imgView.image = [self.dbdfilter imageFromCurrentFramebuffer];
}
- (void)viewDidLoad {
    [super viewDidLoad];
    UIImage *img = self.imgView.image;
    
    self.dbdfilter = [[GPUImageContrastFilter alloc] init];
    self.dbdfilter.contrast = self.sliderView.value;
    [self.dbdfilter forceProcessingAtSize:img.size];
    self.pic = [[GPUImagePicture alloc] initWithImage:img];
    [self.pic addTarget:self.dbdfilter];
    
    [self.pic processImage];
    [self.dbdfilter useNextFrameForImageCapture];
    self.imgView.image = [self.dbdfilter imageFromCurrentFramebuffer];
    
    self.bhdfilter = [[GPUImageSaturationFilter alloc] init];
    
    self.pgdfilter = [[GPUImageExposureFilter alloc] init];
    
    self.swfilter = [[GPUImageWhiteBalanceFilter alloc] init];
    
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

/*
#pragma mark - Navigation

// In a storyboard-based application, you will often want to do a little preparation before navigation
- (void)prepareForSegue:(UIStoryboardSegue *)segue sender:(id)sender {
    // Get the new view controller using [segue destinationViewController].
    // Pass the selected object to the new view controller.
}
*/

@end
