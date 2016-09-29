//
//  LZHCacheManager.m
//  MyText
//
//  Created by key:isoftstone on 15/11/20.
//  Copyright © 2015年 key:isoftstone. All rights reserved.
//

#import "LZHCacheManager.h"
#import <objc/runtime.h>

static LZHCacheManager *cacheManager = nil;
@implementation LZHCacheManager
+(instancetype)shareCacheManager{
    static dispatch_once_t onceToken;
    dispatch_once(&onceToken, ^{
        if (cacheManager == nil) {
            cacheManager = [[self alloc]init];
            [cacheManager create];
        }
    });
    return cacheManager;
}
-(void)create{
    cacheManager.filePath = DEFAULTFILE;
    cacheManager.filePathName = LZHFILEPATH;
}
-(NSInteger)fileSize{
    
    
    NSFileManager* manager = [NSFileManager defaultManager];
    
    if (![manager fileExistsAtPath:cacheManager.filePath]) return 0;
    
    NSEnumerator *childFilesEnumerator = [[manager subpathsAtPath:cacheManager.filePath] objectEnumerator];
    
    NSString* fileName;
    
    long long folderSize = 0;
    
    while ((fileName = [childFilesEnumerator nextObject]) != nil){
        NSString* fileAbsolutePath = [cacheManager.filePath stringByAppendingPathComponent:fileName];
        folderSize += [self fileSizeAtPath:fileAbsolutePath];
    }
    
    return folderSize;
}
- (long long) fileSizeAtPath:(NSString*) filePath{
    
    NSFileManager* manager = [NSFileManager defaultManager];
    
    if ([manager fileExistsAtPath:filePath]){
        
        return [[manager attributesOfItemAtPath:filePath error:nil] fileSize];
    }
    return 0;
}

-(void)removeMyCustomCache{
    [[NSFileManager defaultManager] removeItemAtPath:cacheManager.filePath error:nil];
}
-(void)setFilePath:(NSString *)filePath{
    if (![_filePath isEqualToString: filePath]) {
        [cacheManager creatFileWithFilePath:filePath];
        NSArray *contentOfFolder = [[NSFileManager defaultManager] contentsOfDirectoryAtPath:_filePath  error:NULL];
        for (NSString *aPath in contentOfFolder) {
            NSString * fullPath = [_filePath stringByAppendingPathComponent:aPath];
            BOOL isDir;
            if ([[NSFileManager defaultManager] fileExistsAtPath:fullPath isDirectory:&isDir] && !isDir)
            {
                NSString *fromPath = [NSString stringWithFormat:@"%@/%@",_filePath,aPath];
                NSString *toPath = [NSString stringWithFormat:@"%@/%@",filePath,aPath];
                [[NSFileManager defaultManager] moveItemAtPath:fromPath toPath:toPath error:nil];
            }
        }
        [[NSFileManager defaultManager] removeItemAtPath:_filePath error:nil];
        _filePath = filePath;
    }
}
-(void)setFilePathName:(NSString *)filePathName{
    _filePathName = filePathName;
    filePathName = [NSString stringWithFormat:@"%@%@",NSSearchPathForDirectoriesInDomains(NSCachesDirectory, NSUserDomainMask, YES)[0],filePathName];
    cacheManager.filePath = filePathName;
}
-(void)saveData:(NSData *)data WitUrlString:(NSString *)urlString{
    [self saveData:data WitUrlString:urlString AndDictionary:nil];
}
-(void)saveData:(NSData *)data WitUrlString:(NSString *)urlString AndDictionary:(NSDictionary *)dictionary{
    [data writeToFile:[self filePathWithUrlString:urlString AndDictionary:dictionary] atomically:YES];
}
-(NSString *)filePathWithUrlString:(NSString *)urlString{
    return [self filePathWithUrlString:urlString AndDictionary:nil];
}
-(NSString *)filePathWithUrlString:(NSString *)urlString AndDictionary:(NSDictionary *)dictionary{
    if (dictionary) {
        for (NSString *key in dictionary) {
            urlString = [urlString stringByAppendingString:key];
            urlString = [urlString stringByAppendingString:dictionary[key]];
        }
    }
    urlString = [urlString stringByReplacingOccurrencesOfString:@"/" withString:@""];
    NSString *path = [cacheManager.filePath stringByAppendingString:[NSString stringWithFormat:@"/%@",urlString]];
    return path;
}
-(NSData *)dataWithUrlString:(NSString *)urlString{
    return [self dataWithUrlString:urlString AndDictionary:nil];
}
-(NSData *)dataWithUrlString:(NSString *)urlString AndDictionary:(NSDictionary *)dictionary{
    return [NSData dataWithContentsOfFile:[self filePathWithUrlString:urlString AndDictionary:dictionary]];
}
-(void)creatFileWithFilePath:(NSString *)filePath{
    if ([[NSFileManager defaultManager]attributesOfFileSystemForPath:filePath error:nil] == nil) {
        [[NSFileManager defaultManager] createDirectoryAtPath:filePath withIntermediateDirectories:YES attributes:nil error:nil];
    }
}

@end
