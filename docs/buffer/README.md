# Buffer
::: tip
本文基本上是[参考1]((https://medium.freecodecamp.org/do-you-want-a-better-understanding-of-buffer-in-node-js-check-this-out-2e29de2968e8))的翻译
:::

## Buffer是个啥？
> … mechanism for reading or manipulating streams of binary data. The Buffer class was introduced as part of the Node.js API to make it possible to interact with octet streams in the context of things like TCP streams and file system operations.

对应中文：
> 是一种读取或者操作二进制数据流的机制。Buffer类作为nodejs api的一部分被引入到nodejs中，以便在nodejs处理类似TCP流和文件系统操作等二进制流。

为了解释Buffer，我们又引入了一大推的名词: `binary data`二进制数据，`stream`流等
我们先一一解释下。
####  `binary data`二进制数据
1.二进制数据 
计算机用二级制存储和表示数据。 二进制数据就是0和1 的集合。因为计算机的实现原理，导致对01处理方便容易，但是对人来说很难理解。人们熟悉的是10进制的数字和具体含义的字母、汉字。
这样就出现一个问题： 怎么将人们录入的数字、字母、汉字转换成01序列让计算机处理和存储，或者如何将计算机中01存储的数据转换成人们易于理解的信息形式。答案是【字符集】。

2. 字符集是啥呢？
字符集就是人类语言字符对应计算机存储的字典表。即一套编码解码规范。
常见的字符集如ASCII和Unicode（utf-8是Unicode字符集的具体一种实现）

#### `stream` 流
1. 啥是流呢？ 
举个栗子：我们要读取磁盘中的一个文件内容，处理一下，然后写入到另外一个文件中。
  简化整个过程是这样的：
    1. 读取文件内容到内存中
    2. 处理
    3. 写入到目标文件
  这里会有两个问题：
    1. 计算机内存大小有限，如果文件过大，就会出现内存溢出，导致程序挂掉。
    2. 读取大文件的过程中，我们很多时候不需要所有的内容一起处理，可以分批处理：比如视频播放等。
这个时候就是`stream`的用武之地。
我们将要读取的文件分块读取到内存中（使用上面说到的字符集编解码），然后处理，写入到目标文件，再去源文件读取重复上面的步骤，就像从一个水池中向另一个水池中注水一样。这样就能解决我们上面的两个问题了。

## 为啥需要Buffer
到目前为止，貌似和我们要学习的`Buffer`没有半毛钱关系，对吧。
其实上面的读写文件的例子中有个潜在的问题，就是文件读取的速度和文件处理的速度并不是一致的。
假如读取的速度快，写入的速度慢，会导致多读取的那部分没有地方存储。而`Buffer`就是存储这些多出来的临时数据。就像先将水抽取到一个临时容器中，再想另外一个水池注水。这样我们甚至可以通过看临时水池的水位来决定是否注水，注水多少~

嗯， `Buffer`被翻译成了缓存区。
## 使用场景
其实很多的场景都有应用到buffer（通常也伴随着流的使用）。
比如：网络编程、数据库操作、图片视频处理等。



参考：
1. [Do you want a better understanding of Buffer in Node.js? ](https://medium.freecodecamp.org/do-you-want-a-better-understanding-of-buffer-in-node-js-check-this-out-2e29de2968e8)
2. [Node.js Streams: Everything you need to know](https://medium.freecodecamp.org/node-js-streams-everything-you-need-to-know-c9141306be93)
3. [阮一峰](http://www.ruanyifeng.com/blog/2007/10/ascii_unicode_and_utf-8.html)