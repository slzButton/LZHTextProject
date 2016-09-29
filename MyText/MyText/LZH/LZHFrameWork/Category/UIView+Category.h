//
//  UIView+Category.h
//  MyText
//
//  Created by issuser on 16/2/15.
//  Copyright © 2016年 刘志豪. All rights reserved.
//

#import <UIKit/UIKit.h>

typedef NS_ENUM(NSInteger, ShakeDirection) {
    ShakeDirectionHorizontal = 0,
    ShakeDirectionVertical
};

typedef NS_OPTIONS(NSUInteger, ExcludePoint) {
    ExcludeStartPoint = 1 << 0,
    ExcludeEndPoint = 1 << 1,
    ExcludeAllPoint = ~0UL
};
/**
 *  Direction of flip animation
 */
typedef NS_ENUM(NSInteger, UIViewAnimationFlipDirection) {
    /**
     *  Flip animation from top
     */
    UIViewAnimationFlipDirectionFromTop = 0,
    /**
     *  Flip animation from left
     */
    UIViewAnimationFlipDirectionFromLeft,
    /**
     *  Flip animation from right
     */
    UIViewAnimationFlipDirectionFromRight,
    /**
     *  Flip animation from bottom
     */
    UIViewAnimationFlipDirectionFromBottom
};

/**
 *  Direction of the translation
 */
typedef NS_ENUM(NSInteger, UIViewAnimationTranslationDirection) {
    /**
     *  Translation from left to right
     */
    UIViewAnimationTranslationDirectionFromLeftToRight = 0,
    /**
     *  Translation from right to left
     */
    UIViewAnimationTranslationDirectionFromRightToLeft
};

/**
 *  Direction of the linear gradient
 */
typedef NS_ENUM(NSInteger, UIViewLinearGradientDirection) {
    /**
     *  Linear gradient vertical
     */
    UIViewLinearGradientDirectionVertical = 0,
    /**
     *  Linear gradient horizontal
     */
    UIViewLinearGradientDirectionHorizontal,
    /**
     *  Linear gradient from left to right and top to down
     */
    UIViewLinearGradientDirectionDiagonalFromLeftToRightAndTopToDown,
    /**
     *  Linear gradient from left to right and down to top
     */
    UIViewLinearGradientDirectionDiagonalFromLeftToRightAndDownToTop,
    /**
     *  Linear gradient from right to left and top to down
     */
    UIViewLinearGradientDirectionDiagonalFromRightToLeftAndTopToDown,
    /**
     *  Linear gradient from right to left and down to top
     */
    UIViewLinearGradientDirectionDiagonalFromRightToLeftAndDownToTop
};

/**
 *  This category adds some useful methods to UIView
 */
@interface UIView (Category)

/**
 *  Create an UIView with the given frame and background color
 *
 *  @param frame           UIView's frame
 *  @param backgroundColor UIView's background color
 */
+ (instancetype _Nonnull)viewCreatWithFrame:(CGRect)frame
                       backgroundColor:(UIColor * _Nonnull)backgroundColor;

/**
 *  Create a border around the UIView
 *
 *  @param color  Border's color
 *  @param radius Border's radius
 *  @param width  Border's width
 */
- (void)createBordersWithColor:(UIColor * _Nonnull)color
              withCornerRadius:(CGFloat)radius
                      andWidth:(CGFloat)width;

/**
 *  Remove the borders around the UIView
 */
- (void)removeBorders;

/**
 *  Create a shadow on the UIView
 *
 *  @param offset  Shadow's offset
 *  @param opacity Shadow's opacity
 *  @param radius  Shadow's radius
 */
- (void)createRectShadowWithOffset:(CGSize)offset
                           opacity:(CGFloat)opacity
                            radius:(CGFloat)radius;

/**
 *  Create a corner radius shadow on the UIView
 *
 *  @param cornerRadius Corner radius value
 *  @param offset       Shadow's offset
 *  @param opacity      Shadow's opacity
 *  @param radius       Shadow's radius
 */
- (void)createCornerRadiusShadowWithCornerRadius:(CGFloat)cornerRadius
                                          offset:(CGSize)offset
                                         opacity:(CGFloat)opacity
                                          radius:(CGFloat)radius;

/**
 *  Remove the shadow around the UIView
 */
- (void)removeShadow;

/**
 *  Set the corner radius of UIView
 *
 *  @param radius Radius value
 */
- (void)setCornerRadius:(CGFloat)radius;

/**
 *  指定位置切圆角
 *
 *  @param corner 切的位置
 *  @param value  切的值
 */
-(void)setCornerRadiusWithRoundingCorners:(UIRectCorner)corner cornerRediusFloat:(CGFloat)value;




/**
 *  Create a linear gradient
 *
 *  @param colors    NSArray of UIColor instances
 *  @param direction Direction of the gradient
 */
- (void)createGradientWithColors:(NSArray * _Nonnull)colors
                       direction:(UIViewLinearGradientDirection)direction;

/**
 *  Create a pulse effect on th UIView
 *
 *  @param duration Seconds of animation
 */
- (void)pulseViewWithDuration:(CGFloat)duration;

/**
 *  Create a pulse effect on the UIView
 *
 *  @param seconds Seconds of animation
 */
- (void)pulseViewWithTime:(CGFloat)seconds DEPRECATED_MSG_ATTRIBUTE("Use -pulseViewWithDuration:");

/**
 *  Create a heartbeat effect on the UIView
 *
 *  @param duration Seconds of animation
 */
- (void)heartbeatViewWithDuration:(CGFloat)duration;

/**
 *  Adds a motion effect to the view
 */
- (void)applyMotionEffects;

/**
 *  Flip the view
 *
 *  @param duration  Seconds of animation
 *  @param direction Direction of the flip animation
 */
- (void)flipWithDuration:(NSTimeInterval)duration
               direction:(UIViewAnimationFlipDirection)direction;

/**
 *  Translate the UIView around the topView
 *
 *  @param topView       Top view to translate to
 *  @param duration      Duration of the translation
 *  @param direction     Direction of the translation
 *  @param repeat        If the animation must be repeat or no
 *  @param startFromEdge If the animation must start from the edge
 */
- (void)translateAroundTheView:(UIView * _Nonnull)topView
                      duration:(CGFloat)duration
                     direction:(UIViewAnimationTranslationDirection)direction
                        repeat:(BOOL)repeat
                 startFromEdge:(BOOL)startFromEdge;

/**
 *  @brief  view截图
 *
 *  @return 截图
 */
- (UIImage * _Nonnull)screenshot;

/**
 *  Take a screenshot of the current view an saving to the saved photos album
 *
 *  @return Returns screenshot as UIImage
 */
- (UIImage * _Nonnull)saveScreenshot;

/**
 *  移除所有子视图
 */
-(void)myViewRemoveMyAllSubViews;

//StrokeColor 线条颜色
//FillColor 内部填充色

/**矩形*/
-(void)drawRectangle:(CGRect)rect WithStrokeColor:(UIColor *)strokeColor WithFillColor:(UIColor *)fillColor WithLineWidth:(CGFloat)width;

/**圆角矩形*/
-(void)drawRectangle:(CGRect)rect withRadius:(float)radius WithStrokeColor:(UIColor *)strokeColor WithFillColor:(UIColor *)fillColor WithLineWidth:(CGFloat)width;

/**多边形
 //pointArray = @[[NSValue valueWithCGPoint:CGPointMake(200, 400)]];
 */
-(void)drawPolygon:(NSArray *)pointArray WithStrokeColor:(UIColor *)strokeColor WithFillColor:(UIColor *)fillColor WithLineWidth:(CGFloat)width;

/**圆形*/
-(void)drawCircleWithCenter:(CGPoint)center
                     radius:(float)radius WithStrokeColor:(UIColor *)strokeColor WithFillColor:(UIColor *)fillColor WithLineWidth:(CGFloat)width;

/**曲线*/
-(void)drawCurveFrom:(CGPoint)startPoint
                  to:(CGPoint)endPoint
       controlPoint1:(CGPoint)controlPoint1
       controlPoint2:(CGPoint)controlPoint2
     WithStrokeColor:(UIColor *)strokeColor
       WithLineWidth:(CGFloat)width;

/**弧线*/
-(void)drawArcFromCenter:(CGPoint)center
                  radius:(float)radius
              startAngle:(float)startAngle
                endAngle:(float)endAngle
               clockwise:(BOOL)clockwise
         WithStrokeColor:(UIColor *)strokeColor
           WithLineWidth:(CGFloat)width;

/**扇形*/
-(void)drawSectorFromCenter:(CGPoint)center
                     radius:(float)radius
                 startAngle:(float)startAngle
                   endAngle:(float)endAngle
                  clockwise:(BOOL)clockwise
            WithStrokeColor:(UIColor *)strokeColor
              WithFillColor:(UIColor *)fillColor
              WithLineWidth:(CGFloat)width;


/**直线*/
-(void)drawLineFrom:(CGPoint)startPoint
                 to:(CGPoint)endPoint
    WithStrokeColor:(UIColor *)strokeColor
      WithLineWidth:(CGFloat)width;

/**
 折线，连续直线
 pointArray = @[[NSValue valueWithCGPoint:CGPointMake(200, 400)]];
 */
-(void)drawLines:(NSArray *)pointArray WithStrokeColor:(UIColor *)strokeColor WithLineWidth:(CGFloat)width;
-(CGMutablePathRef _Nonnull)pathwithFrame:(CGRect)frame withRadius:(float)radius;
/**
 *  @brief  找到指定类名的SubVie对象
 *
 *  @param clazz SubVie类名
 *
 *  @return view对象
 */
- (id)findSubViewWithSubViewClass:(Class)clazz;
/**
 *  @brief  找到指定类名的SuperView对象
 *
 *  @param clazz SuperView类名
 *
 *  @return view对象
 */
- (id)findSuperViewWithSuperViewClass:(Class)clazz;

/**
 *  @brief  找到并且resign第一响应者
 *
 *  @return 结果
 */
- (BOOL)findAndResignFirstResponder;
/**
 *  @brief  找到第一响应者
 *
 *  @return 第一响应者
 */
- (UIView *)findFirstResponder;

/**-----------------------------------------------------------------------------
 * @name UIView+Shake
 * -----------------------------------------------------------------------------
 */

/** Shake the UIView
 *
 * Shake the view a default number of times
 */
- (void)shake;

/** Shake the UIView
 *
 * Shake the view a given number of times
 *
 * @param times The number of shakes
 * @param delta The width of the shake
 */
- (void)shake:(int)times withDelta:(CGFloat)delta;

/** Shake the UIView
 *
 * Shake the view a given number of times
 *
 * @param times The number of shakes
 * @param delta The width of the shake
 * @param handler A block object to be executed when the shake sequence ends
 */
- (void)shake:(int)times withDelta:(CGFloat)delta completion:(void((^)()))handler;

/** Shake the UIView at a custom speed
 *
 * Shake the view a given number of times with a given speed
 *
 * @param times The number of shakes
 * @param delta The width of the shake
 * @param interval The duration of one shake
 */
- (void)shake:(int)times withDelta:(CGFloat)delta speed:(NSTimeInterval)interval;

/** Shake the UIView at a custom speed
 *
 * Shake the view a given number of times with a given speed
 *
 * @param times The number of shakes
 * @param delta The width of the shake
 * @param interval The duration of one shake
 * @param handler A block object to be executed when the shake sequence ends
 */
- (void)shake:(int)times withDelta:(CGFloat)delta speed:(NSTimeInterval)interval completion:(void((^)()))handler;

/** Shake the UIView at a custom speed
 *
 * Shake the view a given number of times with a given speed
 *
 * @param times The number of shakes
 * @param delta The width of the shake
 * @param interval The duration of one shake
 * @param direction of the shake
 */
- (void)shake:(int)times withDelta:(CGFloat)delta speed:(NSTimeInterval)interval shakeDirection:(ShakeDirection)shakeDirection;

/** Shake the UIView at a custom speed
 *
 * Shake the view a given number of times with a given speed, with a completion handler
 *
 * @param times The number of shakes
 * @param delta The width of the shake
 * @param interval The duration of one shake
 * @param direction of the shake
 * @param completion to be called when the view is done shaking
 */
- (void)shake:(int)times withDelta:(CGFloat)delta speed:(NSTimeInterval)interval shakeDirection:(ShakeDirection)shakeDirection completion:(void(^)(void))completion;




- (void)addTopBorderWithColor:(UIColor *)color width:(CGFloat) borderWidth;
- (void)addLeftBorderWithColor: (UIColor *) color width:(CGFloat) borderWidth;
- (void)addBottomBorderWithColor:(UIColor *)color width:(CGFloat) borderWidth;
- (void)addRightBorderWithColor:(UIColor *)color width:(CGFloat) borderWidth;

- (void)removeTopBorder;
- (void)removeLeftBorder;
- (void)removeBottomBorder;
- (void)removeRightBorder;


- (void)addTopBorderWithColor:(UIColor *)color width:(CGFloat) borderWidth excludePoint:(CGFloat)point edgeType:(ExcludePoint)edge;
- (void)addLeftBorderWithColor: (UIColor *) color width:(CGFloat) borderWidth excludePoint:(CGFloat)point edgeType:(ExcludePoint)edge;
- (void)addBottomBorderWithColor:(UIColor *)color width:(CGFloat) borderWidth excludePoint:(CGFloat)point edgeType:(ExcludePoint)edge;
- (void)addRightBorderWithColor:(UIColor *)color width:(CGFloat) borderWidth excludePoint:(CGFloat)point edgeType:(ExcludePoint)edge;


+ (UINib *)loadNib;
+ (UINib *)loadNibNamed:(NSString*)nibName;
+ (UINib *)loadNibNamed:(NSString*)nibName bundle:(NSBundle *)bundle;
+ (instancetype)loadInstanceFromNib;
+ (instancetype)loadInstanceFromNibWithName:(NSString *)nibName;
+ (instancetype)loadInstanceFromNibWithName:(NSString *)nibName owner:(id)owner;
+ (instancetype)loadInstanceFromNibWithName:(NSString *)nibName owner:(id)owner bundle:(NSBundle *)bundle;

@end
