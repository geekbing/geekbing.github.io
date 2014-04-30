---
layout: post
title:  "Use Github Pages to build your own blog ?"
date:   2014-05-03
---

1. [了解Github Pages](#learnGithubPages)
2. [创建Github账户](#createGithubAccount)
3. [安装Github客户端](#installGithub)
4. [安装Jekyll](#installJekyll)
5. [熟悉Markdown语法](#learnMarkdown)
6. [编写页面模版](#template)
7. [写第一篇博客](#firstPost)
8. [本地测试](#localTest)
9. [同步和发布](#commitAndSync)
10. [其他方面](#others)

-----
写这篇文章的目的是为了帮助没有用过Github和Jekyll的童鞋们尽快的掌握使用的方法和搭建个人博客的主要流程（Geeks请默默的无视）。文章提到的安装程序都有windows和Linux平台上的版本，具体做法可能不太相同，关于其他平台的具体操作流程，请大家自己上网Google吧。

###<a id="learnGithubPages"></a>了解Github Pages
Git是一个开源的分布式版本控制系统，用以有效、高速的处理从很小到非常大的项目版本管理。   
GitHub是可以托管各种git库的站点。
Jekyll是一个静态网页生成器。   
[Github Pages](https://pages.github.com/)是免费的静态站点，三个特点：免费托管、自带主题、支
持自制页面和Jekyll。   

####Github pages的优点：

* 搭建简单而且免费；
* 支持静态脚本；
* 支持绑定你的域名；
* DIY自由发挥，动手实践一些有意思的东西git,markdown,bootstrap,Jekyll
* 理想写作和写博客的环境，git+Github+markdown+Jekyll

###<a id="createGithubAccount"></a>创建Github账户
创建Github账户很容易，直接到[官方网站](https://github.com/)注册即可，几乎没有难度。
![Github官网](http://geekbing.com/img/github.png)

###<a id="installGithub"></a>安装Github客户端
在官网下载Github安装程序，推荐新手安装Github的图形用户界面，这样使用起来很容易上手，不至于在一开始就被命令行影响愉快的心情。安装Github也是不用花费脑筋的事（PS:什么？不会安装程序？？？那还是默默的关闭浏览器吧)。

###<a id="installJekyll"></a>安装Jekyll
虽然Jekyll官方网站上介绍在Mac下安装Jekyll只需要简单的一条gem jekyll命令,但是实际操作起来简直是坑。安装Jekyll的时候，遇到了各种意想不到的问题。参考了各种解决方法，折腾了两天最后才搞定了。安装过程中可能会遇到不同的问题，请大家根据自己的具体情况对照最全的[解决方法]()。
不过，对于我个人的情况，上面的解决方法没有起到作用，直到千辛万苦查找到，
原来升级最新的OS X 10.9.2造成的安装Jekyll Bug,参考页面[],在终端中输入如下命令即可安装成功。

###<a id="learnMarkdown"></a>熟悉Markdown语法
个人认为Markdown语法对于博客内容发布或者写作者来说，都是非常值得学习的。因为其学习成本非常之低，作用却很大。基本上在10分钟内掌握语法不成问题。大家可以参考之前我写的一篇博文［[Markdown简明语法学习](http://geekbing.com/2014/04/30/markdown-study.html)］

###<a id="template"></a>编写页面模版
之前的任务都很轻松，接下来才是重头戏了。对于新手
就是编写页面模版的阶段了，虽然官方也提供了


###<a id="firstPost"></a>写第一篇博客
怀着激动的心情编写你的第一篇博客吧。（第一篇博客怎么能够少了神圣的Hello world呢）。虽然这只是一小步，确实迈向.com浪潮的一大步。

###<a id="localTest"></a>本地测试
在终端简单的输入如下两条命令之后，就可以在浏览器中查看博客的具体显示效果了。如果对于字体大小，颜色不太满意，可以修改具体的css样式表。

###<a id="commitAndSync"></a>同步和发布
同步和发布没有太多要讲的内容。你在离线到本地的Repositories文件夹中所做的所有修改都会显示在Github中，只需要简简单单的点击Commit & Sync按钮即可同步到Github的服务器上。接下来就是通过浏览器在线访问你的博客了。还等什么，快开啤酒庆祝吧。

###<a id="others"></a>其他方面

1. 绑定域名
如果需要通过你自己的独立域名访问到博客网站（前提是你需要先有一个域名，如果没有的话，可以在[万网]()购买），可以在项目下面新建一个CNAME文件，然后在其中写上你的域名，例如geekbing.com。之后在你购买域名的服务商修改DNS解析记录，等待一段时间后就可以访问了通过域名在线访问你的博客了。具体细节请看[Github官方说明]()

2. 域名解析
国内专门做域名解析做得比较好的有[DNSPod](https://www.dnspod.cn/),对于一般的个人用户是免费的。虽然万网近期也依靠阿里云解析提供域名解析。但是貌似DNSPod做得更好一些，使用的人数也更多一些。修改域名不是很困难，网上也有很多的教程,请大家自行Google吧。

3. 使用模版
对于新手来说，Jekyll默认提供了非常简单的模版。官方网站也提供了漂亮的模版可以使用，不需要自己动手去修改，就可以直接使用。不过这样也失去了一些DIY的乐趣。对于有一定网页编写经验的人，完全可以自己动手编写模版。毕竟，有自己特色的博客让人感觉很酷。

4. 404错误页面 
Github Pages支持用户自定义404错误页面，并且方法也及其的简单。只需要编写404.html文件，并放在你的网站根目录下就可以了。具体参考可见[官方说明]()

####最后，由于篇幅有限，有些问题可能没有讲得太详细，还请谅解。不过在另一方面这也可以锻炼一下大家上网查找资料解决问题以及实际动手实践的能力。最后，有任何问题都可以发邮件给我（点击<a href="mailto:dhuzbb@gmail.com">Contact</a>），非常乐意为您解答。
