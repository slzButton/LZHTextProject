//
//  LZHCacheManager.h
//  MyText
//
//  Created by key:isoftstone on 15/11/20.
//  Copyright © 2015年 key:isoftstone. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "LZHContext.h"

@interface LZHCacheManager : NSObject

/**存放缓存的文件夹路径必须是文件夹完整路径*/
@property(nonatomic,strong)NSString *filePath;
/**缓存文件夹的名字(记得在名字前面加"/")*/
@property(nonatomic,strong)NSString *filePathName;
/**以B为单位的缓存文件大小*/
@property(nonatomic,readonly)NSInteger fileSize;



/*!
 @method init
 
 @abstract Should create only one instance of class. Should not call init.
 */
- (id)init __attribute__((unavailable("init is not available in LZHCacheManager, Use shareCacheManager")));

/*!
 @method new
 
 @abstract Should create only one instance of class. Should not call new.
 */
+ (id)new __attribute__((unavailable("new is not available in LZHCacheManager, Use shareCacheManager")));


/**创建缓存管理者*/
+(instancetype)shareCacheManager;
/**根据请求数据的url和参数拿到文件路径*/
-(NSString *)filePathWithUrlString:(NSString *)urlString AndDictionary:(NSDictionary *)dictionary;
-(NSString *)filePathWithUrlString:(NSString *)urlString;
/**根据请求数据的url和参数拿到数据*/
-(NSData *)dataWithUrlString:(NSString *)urlString AndDictionary:(NSDictionary *)dictionary;
-(NSData *)dataWithUrlString:(NSString *)urlString;
/**根据请求数据的url和参数存储数据*/
-(void)saveData:(NSData *)data WitUrlString:(NSString *)urlString AndDictionary:(NSDictionary *)dictionary;
-(void)saveData:(NSData *)data WitUrlString:(NSString *)urlString;
/**清除缓存文件*/
-(void)removeMyCustomCache;







@end
