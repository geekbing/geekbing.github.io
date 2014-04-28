---
layout: post
title:  "Markdown简明语法学习"
date:   2014-04-30
---
Markdown 是一种轻量级的「标记语言」，它的优点很多，目前也被越来越多的写作爱好者，撰稿者广泛使用。

* 专注你的文字内容而不是排版样式。
* 轻松的导出HTML、PDF和本身的.md文件。
* 纯文本内容，兼容所有的文本编辑器与字处理软件。
* 可读，直观。适合所有人的写作语言。

###合适工具
----
![Mou.png](www.geekbing.com/img/Mou_128.png)
在Mac OS X上，我强烈建议你用[Mou](http://mouapp.com/)这款免费且十分好用的Markdown编辑器，它支持实时预览，既左边是你编辑Markdown语言，右边会实时的生成预览效果，本文就是Mou这款软件写出来的。
![markdown.png](wwww.geekbing.com/img/markdown.png)


###基本符号
----
* *,-,+ 3个符号效果都一样，这3个符号被称为 Markdown符号
* 空白行表示另起一个段落
* `是表示inline代码，tab是用来标记代码段，分别对应html的code，pre标签

###换行
----
* 单一段落(\<p>)用一个空白行
* 连续两个空格 会变成一个 \<br>
* 连续3个符号，然后是空行，表示 hr横线

###标题
----
* 生成h1--h6,在文字前面加上 1--6个# s来实现

###引用
----
* 在第一行加上 > 和一个空格，表示代码引用，还可以嵌套

###列表
----
* 使用*,+,-加上一个空格来表示
* 可以支持嵌套
* 有序列表用数字+英文点+空格来表示
* 列表内容很长，不需要手工输入换行符，css控制段落的宽度，会自动的缩放的 

###链接
----
* 直接写 \[锚文本](url "可选的title")
* 预先定义 [ref_name]:url,然后在需要写入url的地方， 这样使用[锚文本][ref_name]，通常的ref_name一般用数字表示，这样显得专业
* 简写url：用尖括号包裹url，例如<url>，这样生成的url锚文本就是url本身

###图片
----
* 一行表示: \!\[alt_text](url "可选的title")
* 引用表示法: ![alt_text][id],预先定义 [id]:url "可选title"
* 直接使用<img>标签，这样可以指定图片的大小尺寸

###特殊符号
----
* 用\来转义，表示文本中的markdown符号
* 可以在文本种直接使用html标签，但是要注意在使用的时候，前后加上空行
* 文本前后各加一个符号，表示斜体





