//
//  ViewController.m
//  MyText
//
//  Created by issuser on 16/2/22.
//  Copyright © 2016年 刘志豪. All rights reserved.
//

#import "ViewController.h"
#import <GPUImage.h>
#import <ReactiveCocoa.h>
#import <UIView+SDAutoLayout.h>
#import <WebKit/WebKit.h>
#import <objc/message.h>
#import <objc/runtime.h>
#import <AFNetworking.h>
@interface ViewController ()<WKUIDelegate,WKScriptMessageHandler,UIWebViewDelegate>

@property(nonatomic,strong)NSMutableArray *textArray;

@property(nonatomic,strong)WKWebView *webview;
@end
static NSString *const UITableViewCellId = @"UITableViewCell";
@implementation ViewController


- (void)viewDidLoad {
    [super viewDidLoad];
//    /**
//     *  6.1RACSiganl:信号类,一般表示将来有数据传递，只要有数据改变，信号内部接收到数据，就会马上发出数据。
//     
//     注意：
//     
//     信号类(RACSiganl)，只是表示当数据改变时，信号内部会发出数据，它本身不具备发送信号的能力，而是交给内部一个订阅者去发出。
//     
//     默认一个信号都是冷信号，也就是值改变了，也不会触发，只有订阅了这个信号，这个信号才会变为热信号，值改变了才会触发。
//     
//     如何订阅信号：调用信号RACSignal的subscribeNext就能订阅。
//     
//     RACSiganl简单使用:
//     
//     文／峥吖（简书作者）
//     原文链接：http://www.jianshu.com/p/87ef6720a096
//     著作权归作者所有，转载请联系作者获得授权，并标注“简书作者”。
//     */
//    // RACSignal使用步骤：
//    // 1.创建信号 + (RACSignal *)createSignal:(RACDisposable * (^)(id<RACSubscriber> subscriber))didSubscribe
//    // 2.订阅信号,才会激活信号. - (RACDisposable *)subscribeNext:(void (^)(id x))nextBlock
//    // 3.发送信号 - (void)sendNext:(id)value
//    
//    // RACSignal底层实现：
//    // 1.创建信号，首先把didSubscribe保存到信号中，还不会触发。
//    // 2.当信号被订阅，也就是调用signal的subscribeNext:nextBlock
//    // 2.2 subscribeNext内部会创建订阅者subscriber，并且把nextBlock保存到subscriber中。
//    // 2.1 subscribeNext内部会调用siganl的didSubscribe
//    // 3.siganl的didSubscribe中调用[subscriber sendNext:@1];
//    // 3.1 sendNext底层其实就是执行subscriber的nextBlock
//    
//    // 1.创建信号
//    RACSignal *siganl = [RACSignal createSignal:^RACDisposable *(id<RACSubscriber> subscriber) {
//        
//        // block调用时刻：每当有订阅者订阅信号，就会调用block。
//        
//        // 2.发送信号
//        [subscriber sendNext:@1];
//        [subscriber sendNext:@2];
//        [subscriber sendNext:@3];
//        // 如果不在发送数据，最好发送信号完成，内部会自动调用[RACDisposable disposable]取消订阅信号。
//        [subscriber sendCompleted];
//        
//        return [RACDisposable disposableWithBlock:^{
//            
//            // block调用时刻：当信号发送完成或者发送错误，就会自动执行这个block,取消订阅信号。
//            
//            // 执行完Block后，当前信号就不在被订阅了。
//            
//            NSLog(@"信号被销毁");
//            
//        }];
//    }];
//    // 3.订阅信号,才会激活信号.
//    [siganl subscribeNext:^(id x) {
//        // block调用时刻：每当有信号发出数据，就会调用block.
//        NSLog(@"接收到数据:%@",x);
//    }];
    
    
//    /**
//     typedef NS_ENUM(NSUInteger, AFSSLPinningMode) {
//     AFSSLPinningModeNone, // 这个模式表示不做SSL pinning，只跟浏览器一样在系统的信任机构列表里验证服务端返回的证书。若证书是信任机构签发的就会通过，若是自己服务器生成的证书，这里是不会通过的
//     AFSSLPinningModePublicKey, // 这个模式同样是用证书绑定方式验证，客户端要有服务端的证书拷贝，只是验证时只验证证书里的公钥，不验证证书的有效期等信息
//     AFSSLPinningModeCertificate, // 这个模式表示用证书绑定方式验证证书，需要客户端保存有服务端的证书拷贝，这里验证分两步，第一步验证证书的域名/有效期等信息，第二步是对比服务端返回的证书跟客户端返回的是否一致
//     };
//     */
//    // AFNetwork中的AFSecurityPolicy模块主要是用来验证HTTPS请求时证书是否正确
//    // 验证证书的模式
//    AFSecurityPolicy *securityPolicy = [AFSecurityPolicy policyWithPinningMode:AFSSLPinningModeCertificate];
//    
//    /**
//     Whether or not to trust servers with an invalid or expired SSL certificates. Defaults to `NO`.
//     */
//    // 设置允许不受信任的证书
//    securityPolicy.allowInvalidCertificates = YES;
//    
//    /**
//     Whether or not to validate the domain name in the certificate's CN field. Defaults to `YES` for `AFSSLPinningModePublicKey` or `AFSSLPinningModeCertificate`, otherwise `NO`.
//     */
//    // 设置不验证域名
//    securityPolicy.validatesDomainName = NO;
//    
//    
//    AFHTTPSessionManager *manager = [AFHTTPSessionManager manager];
//    manager.responseSerializer = [AFHTTPResponseSerializer serializer];
//    manager.requestSerializer.timeoutInterval = 10.0;
//    //HTTPS SSL的验证，在此处调用上面的代码，给这个证书验证；
//    manager.securityPolicy = securityPolicy;
//    [manager GET:@"https://192.168.16.230:8443/operate-system-web/app_register_cust.html" parameters:nil progress:^(NSProgress * _Nonnull downloadProgress) {
//        
//    } success:^(NSURLSessionDataTask * _Nonnull task, id  _Nullable responseObject) {
//        NSLog(@"success");
//        UIWebView *webView = [[UIWebView alloc]init];
//        webView.delegate = self;
//        [webView loadData:responseObject MIMEType:@"text/html" textEncodingName:@"UTF-8" baseURL:nil];
//        [self.view addSubview:webView];
//        webView.sd_layout.spaceToSuperView(UIEdgeInsetsMake(0, 0, 0, 0));
//    } failure:^(NSURLSessionDataTask * _Nullable task, NSError * _Nonnull error) {
//        NSLog(@"failure");
//    }];
    
    
    
    UIWebView *webView = [[UIWebView alloc]init];
    webView.delegate = self;
    [webView loadRequest:[NSURLRequest requestWithURL:[NSURL URLWithString:@"https://www.google.co.jp/search?q=iOS+webviewhttps&rlz=1C5CHFA_enUS708US708&oq=iOS+webviewhttps&aqs=chrome..69i57.310j0j8&sourceid=chrome&ie=UTF-8"]]];
    [self.view addSubview:webView];
    webView.sd_layout.spaceToSuperView(UIEdgeInsetsMake(0, 0, 0, 0));
    
    
//    NSURL *baseURL = [NSURL fileURLWithPath:[[NSBundle mainBundle]pathForResource:@"DFhomePage" ofType:@"html"]];
//    NSURLRequest *request = [NSURLRequest requestWithURL:baseURL];
//    WKWebViewConfiguration *config = [[WKWebViewConfiguration alloc] init];
//    config.userContentController = [[WKUserContentController alloc] init];
//    self.webview = [[WKWebView alloc]initWithFrame:CGRectMake(0, 0, 0, 0) configuration:config];
//    self.webview.UIDelegate = self;
//    self.webview.backgroundColor = [UIColor redColor];
//    self.webview.scrollView.bounces = NO;
//    [self.webview loadRequest:request];
//    [self.view addSubview:self.webview];
//    self.webview.sd_layout.spaceToSuperView(UIEdgeInsetsMake(0, 0, 0, 0));
    
    
    
    
//    /**
//     @brief  获取手机上安装的app列表
//     */
//    Class LSApplicationWorkspace_class = objc_getClass("LSApplicationWorkspace");
//    NSObject* workspace = [LSApplicationWorkspace_class performSelector:@selector(defaultWorkspace)];
//    NSLog(@"apps: %@", [workspace performSelector:@selector(allApplications)]);
//    //设备安装的app列表
//    NSArray *appList = [workspace performSelector:@selector(allApplications)];
//    Class LSApplicationProxy_class = object_getClass(@"LSApplicationProxy");
//    for (LSApplicationProxy_class in appList)
//    {
//        //设备安装的app的名字
//        id itemName =  [LSApplicationProxy_class performSelector:@selector(itemName)];
//        if (itemName) {
//            NSLog(@"itemName:%@",itemName);
//        }
//    }
    
}

#pragma mark - WKWebview 的 delegate
- (void)userContentController:(WKUserContentController *)userContentController
      didReceiveScriptMessage:(WKScriptMessage *)message {
    
}
- (void)webViewDidClose:(WKWebView *)webView {
    NSLog(@"WebView关闭");
}
- (void)webView:(WKWebView *)webView runJavaScriptAlertPanelWithMessage:(NSString *)message initiatedByFrame:(WKFrameInfo *)frame completionHandler:(void (^)(void))completionHandler {
    UIAlertController *alert = [UIAlertController alertControllerWithTitle:@"提示" message:message preferredStyle:UIAlertControllerStyleAlert];
    [alert addAction:[UIAlertAction actionWithTitle:@"确定" style:UIAlertActionStyleDefault handler:^(UIAlertAction * _Nonnull action) {
        completionHandler();
    }]];
    [self presentViewController:alert animated:YES completion:NULL];
    //    showTAlertWithMessage(message);
    //    completionHandler();
}
#pragma mark - UIWebView
- (BOOL)webView:(UIWebView *)webView shouldStartLoadWithRequest:(NSURLRequest *)request navigationType:(UIWebViewNavigationType)navigationType{
    return YES;
}
- (void)webViewDidStartLoad:(UIWebView *)webView{
    
}
- (void)webViewDidFinishLoad:(UIWebView *)webView{
    
}
- (void)webView:(UIWebView *)webView didFailLoadWithError:(NSError *)error{
    
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
