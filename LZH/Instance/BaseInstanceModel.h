//
//  BaseInstanceModel.h
//  VehicleWorld
//
//  Created by cltx on 16/9/2.
//  Copyright © 2016年 cltx. All rights reserved.
//

#import <Foundation/Foundation.h>

@interface BaseInstanceModel : NSObject
/*!
 @method init
 
 @abstract Should create only one instance of class. Should not call init.
 */
- (id)init __attribute__((unavailable("init is not available in Instance, Use share---")));

/*!
 @method new
 
 @abstract Should create only one instance of class. Should not call new.
 */
+ (id)new __attribute__((unavailable("new is not available in Instance, Use share---")));
@end
