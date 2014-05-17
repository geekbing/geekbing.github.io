---
layout: post
title:  "有趣的AppleScript"
date:   2014-05-18
categories: jekyll update
---
无意中接触到AppleScript，并小小的研究了一下。发现它太伟大了,作为脚本语言它已经超出了本身的瓶颈,奔向几乎万能的方向了。AppleScript类似于Linux的shell脚本，但是比shell脚本简单易学，个人感觉在某些方面也更加的强大和人性化（吹捧AppleScript的客套话^_^）。    
>文中内容主要来源于《AppleScript权威指南 第二版》以及其他一些资料（全部学习资料已上传到个人Github，单击链接可进入[下载页面](https://github.com/geekbing/geekbing.github.io/blob/master/Resources)，PS：仅用于个人学习）。

----
####What is AppleScript ?
* 一种脚本语言       
是苹果公司开发的一种脚本语言，类似于众所周知的JavaScript以及Linux的shell脚本。
* 用来控制现有应用程序    
可以用来控制运行于Mac OS上的程序，也可以写成独立运行的Applet。
* 实现自动化操作    
使繁琐重复的机械操作自动化，这也是AppleScript最初设计的目的，也是它比较实用的地方。

####AppleScript的用途举例
* 批量图片处理
* 网站日常维护
* 文件和文件夹维护
* 程序控制，包括Adobe系列，Microsoft Office以及很多其他软件
* 自己DIY一些有趣的小程序
* More......    

####总结AppleScript主要特点

#####NO1. 好玩，有趣
最简单的，让系统嗡鸣一下。在系统自带的AppleScript编辑器中敲完之后点一下运行就会执行了。
{% highlight applescript %}
beep
{% endhighlight %}
你还可以让系统朗读，使用say命令
{% highlight applescript %}
say "You are my world."
{% endhighlight %}
再复杂一点，清空废纸篓，这个时候你就需要调用Finder了
{% highlight applescript %}
tell application "Finder"	empty the trashend tell
{% endhighlight %}
这里tell application相当于呼唤程序，中间包夹的自然是要这个程序做什么，最后end tell表示对这个程序调用结束。      
接下来，来点恶作剧怎么样？想象一下你好朋友的iPhone一直响个不停，接受的iMessage消息不断刷屏的场景。

#####NO2. 易懂，轻松     
。。。

#####NO3. 强大，实用     
。。。

####未完待续。。。