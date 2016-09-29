//
//  UITableView+Catrgory.h
//  MyText
//
//  Created by issuser on 16/2/17.
//  Copyright © 2016年 刘志豪. All rights reserved.
//

#import <UIKit/UIKit.h>

@interface UITableView (Catrgory)

///----------------
/// @name Shortcuts
///----------------

/**
 Perform a block of updates between calls to `beginUpdates` and `endUpdates`.
 
 @param block Block of code that should contain the updates to perform on the `UITableView`
 */
- (void)updateWithBlock:(void (^)(UITableView* tableView))block;

/**
 Shortcut to insert a single row at a given index path.
 
 @param indexPath `NSIndexPath` where the row should be inserted.
 @param animation Animation to use when inserting the row.
 */
- (void)insertRowAtIndexPath:(NSIndexPath*)indexPath withRowAnimation:(UITableViewRowAnimation)animation;

- (void)insertRow:(NSUInteger)row inSection:(NSUInteger)section withRowAnimation:(UITableViewRowAnimation)animation;

- (void)reloadRowAtIndexPath:(NSIndexPath*)indexPath withRowAnimation:(UITableViewRowAnimation)animation;

- (void)reloadRow:(NSUInteger)row inSection:(NSUInteger)section withRowAnimation:(UITableViewRowAnimation)animation;

/**
 Shortcut to remove a single row from a given index path.
 
 @param indexPath `NSIndexPath` for the row to be removed.
 @param animation Animation to use when removing the row.
 */
- (void)deleteRowAtIndexPath:(NSIndexPath*)indexPath withRowAnimation:(UITableViewRowAnimation)animation;

- (void)deleteRow:(NSUInteger)row inSection:(NSUInteger)section withRowAnimation:(UITableViewRowAnimation)animation;

- (void)deleteSection:(NSUInteger)section withRowAnimation:(UITableViewRowAnimation)animation;

- (void)reloadSection:(NSUInteger)section withRowAnimation:(UITableViewRowAnimation)animation;

@end
