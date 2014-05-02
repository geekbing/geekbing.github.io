---
layout: post
title:  "Use Disqus to manage comments"
date:   2014-05-04
categories: jekyll update
---
####What is Disqus?
[Disqus](http://disqus.com/)是一家第三方社会化评论系统，主要为网站主提供评论托管服务。Disqus的主要目标是通过提供功能强大的第三评论系统，将当前不同网站的相对孤立、隔绝的评论系统，连接成具有社会化特性的大网。通过Disqus评论系统所具备的评论回复通知、评论分享和热文分享等社会化功能。       
Disqus的官方网站做得还比较有特色。        
![disqus](http://geekbing.com/img/disqus.png)     
####为个人博客添加Disqus评论系统    
其实Disqus的官方文档讲得也比较详细了，步骤和新手引导也做的比较好，这篇文档主要是为看官方文档头疼的新手做适当的讲解。       
首先要使用Disqus的服务，必须在官网注册一个账号。你不但可以使用这个账号来为你的网站添加评论系统，托管你的评论服务，还可以使用这个账号在任何使用Disqus评论系统的网站进行留言，回复等功能，而不需重复的注册账号。    
![signUp](http://geekbing.com/img/disqussignup.png)         
然后按照要求填写下列信息,其中的site name按照自己的网站域名填写。Category根据自己实际情况选择。 最后点击Finish registration按钮。       
![addDisqus](http://geekbing.com/img/addDisqus.png)         
接下来就到了添加disqus到网站的时候。Disqus支持绝大多数主流的博客平台。并为其他没有使用博客产品的网站提供通用的代码，做到了全方位覆盖。由于个人博客是纯手工搭建，没有使用下面的任何一种博客产品，故选择第一种通用代码。    
![addDisqus](http://geekbing.com/img/platform.png)    

1. 接下来，就是按照提示将下面的代码复制到你的模版文件中，放在你需要显示评论的地方，一般在文章的结尾处.![installDisqus1](http://geekbing.com/img/install1.png)    
2. Disqus官方还提供了javascript脚本的配置变量的[详细说明](http://help.disqus.com/customer/portal/articles/472098-javascript-configuration-variables)，若新手对这方面不太了解，也不需要去修改，直接使用就行。    
3. 接下来根据提示还需要复制一段脚本添加在你自己网站的模版文件中，添加的位置是\</body>闭标签的前面（什么？？不知道body标签在哪？那还是默默的关闭浏览器吧）。![installDisqus2](http://geekbing.com/img/install2.png)    
4. 你可以通过一个链接来刷新评论，增加#disqus_thread到你的链接后面。点击这个链接将会刷新并返回评论数。例如：\<a href="http://foo.com/bar.html#disqus_thread">Link\</a>     
5. 最后，官方提供了详细的[个人定制说明](http://help.disqus.com/customer/portal/articles/565624-tightening-your-disqus-integration)。新手其实可以直接使用官方通用的设置，等以后逐渐了解熟悉之后再去定制。      

之后就是验证你的网站的评论系统是否安装成功。



