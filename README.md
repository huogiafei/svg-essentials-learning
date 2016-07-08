SVG Essentials learning
============================

####　　本来还想说一鼓作气先看完这本书再开始写这篇markdown的，没想到看到svg滤镜这一章，我整个人都方了，莫慌，先给自己回回血。

---------------------------------------------

**long long ago(此处可略过)**

　　其实最早知道svg这回事是在icomoon.io上面，才发现矢量图标的强大，到后来在codrops接触到狂拽炫酷diao炸天的svg animation，
还有D3.js，那时候只想说一句：“教练，我要学svg”。那都已经是1年前的事情，而且发现国内的资料太少了，所以就有了这本书的读后感，还有
分享一些个人觉得不错的svg学习资料。

- [oxxo studio](http://www.oxxostudio.tw/articles/201410/svg-tutorial.html)
- [张鑫旭](http://www.zhangxinxu.com/)
- [W3cplus](http://www.w3cplus.com/blog/tags/411.html)
- [MDN SVG](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Tutorial)
- [jenkov SVG Tutorial](http://tutorials.jenkov.com/svg/index.html)
- [W3C SVG](https://www.w3.org/TR/SVG/Overview.html)


　　虽然这本SVG Essential比起CSS Secrets是差了那么一点（最想吐槽就是书上的demo），但是内容方面还是挺全面的，svg入门看还是非常合适的，
咬咬牙，为了snap和D3,豁出去了。

**SVG书籍**

- [SVG Text Layout](http://shop.oreilly.com/product/0636920043072.do) 
- [SVG Colors, Patterns & Gradients](http://shop.oreilly.com/product/0636920043065.do) （正在翻译）
- [数据可视化实战：使用D3设计交互式图表](http://www.ituring.com.cn/book/1126)

**SVG工具**

- [vector paint](http://vectorpaint.yaks.co.nz/)
- [http://editor.method.ac/](http://editor.method.ac/) 强大在线svg Editor
- [svg path](http://jxnblk.com/paths/) 学习path的时候用得上
- [svgomg](https://jakearchibald.github.io/svgomg/) SVGO的在线编辑
- AI,Inkscape 

**SVG框架**

- [snap.svg](http://snapsvg.io/) SVG动画框架，也是我最想学的
- [D3.js](https://d3js.org/) SVG视觉图表框架，给我感觉就是高大上

-------------------------------------------------------------



**CH01 入门指南**

　　这章主要介绍了svg的背景和用途，把基本的形状和元素都介绍了一遍，可能刚刚看完css secrets，给我感觉就是积木（bg-image）和一盘围棋的感觉（路径）

**CH02 使用SVG**

　　介绍了使用svg的四种方法:

- img
- css(background,list-image,border-image)
- object
- inline svg(个人推荐)

**CH03 坐标系统**

　　svg相当于画布，下面是一些基本属性

- width/height 画布的大小
- viewBox
- preserveAspectRatio,当w/h 和 viewBox 宽高比不一样，需要指定对齐方式
- meet/slice 同上，需要指定适配边缘还是裁剪

**CH04 基本形状**

- line线段，需要起点和终点（x1,y1,x2,y2）
- fill 填充颜色
- fill-opacity 填充透明度
- stroke-width 笔尖粗细，原谅我写的接地气一点
- stroke 笔画颜色，注意不是stroke-color，支持rgba,rgb,hsl,hsla颜色格式，默认是none
- stroke-opacity 笔画透明度
- stroke-dasharray，实现点线、虚线（线长度，空隙长），css secrets里面还利用这个属性实现饼图
- rect（x,y,width,height,rx,ry）,除了必须参数起点坐标和宽高外，还可以设置rx/ry得到圆角矩形
- circle (cx,cy,r)，需要圆心坐标和半径
- ellipse (cx,cy,rx,ry) 跟circle基本一样，除了r分成了rx和ry
- polygon (xi,yi) 一系列的x/y坐标，最后会自动回到起始坐标
- fill-rule填充规则，nonzero(default)/evenodd
- polyline 折线 ，和polygon的区别在于不闭合为形状
- stroke-linecap线的端点，三个值分别为square,round,butt,前两者在端点位置增加一个形状
- stroke-linejoin 折线位置的形状，有三个值为miter(尖)，round(圆),bevel(平)
- stroke-miterlimit 斜切长度除以线段宽度

**CH05 文档解构**

- svg中使用样式：
 - inline
 - internal stylesheets
 - external stylesheets
 - Presentation Attributes，我的理解是直接去掉style的内联写法，不过因为优先级是最低。
- g 把子元素作为一个组合
- defs 定义一个组合，只定义不显示(gradient,path,clipPath,mask,filter,marker等等)
- symbol 加强版defs，指定viewBox和preserveAspectRatio属性
- use 重用上面三个定义的图形 (xlink:href)，可以指定图形位置
- image 支持jpg和png

**CH06 坐标系统变换**

- translate 移动整个坐标系统，和x='10',y='10'单独移动元素不一样
- scale 坐标系统缩放，所以会影响元素的坐标和stroke-width
- transform order 这点和css一样，变换的顺序会影响变换效果
- 笛卡尔坐标变换 水平翻转和垂直翻转，同样适用css transform
- rotate 默认旋转中心为0,0,rotate(deg,50,50)可以围绕中心点旋转
- 围绕中心点缩放 ,translate(-centerX*(n-1), -centerY*(n-1)) scale(n)
- skewX/skewY
- Transform Matrix

**CH07 路径**

 　　**所有基本形状都是path元素的简写形式**
 
- M(moveto) 起始位置 
- L(lineto) 连线到
- Z(closepath) 关闭路径
- m/l/z(相对位置) 其实只有l是相对于上一个坐标定位,m和z都是和大写字母的效果一样
- H/V(h/v) 绘制水平/垂直线，小写是相对坐标，这两个字母属于lineto的快捷方式
- A(a) 弧线(rx,ry,x-axis-rotation,large-arc-flag,sweep-flag,endX,endY)，解释一下7个参数：
 - 椭圆的x轴半径和y轴半径
 - x轴旋转角度
 - 圆弧角度大于180度，为0,小于180度，为1
 - 负角度绘制为0 ，正角度为1，我的理解是顺/逆时针
 - 终点x,y
- Q(q) 二次贝塞尔曲线,(Q hx hy,ex,ey),Q后面跟着一个控制点和下一个点
- T(t) 多边二次贝塞尔，自动计算控制点，只需要后面跟着下一个点,我的理解是和上一个曲线的斜率一样
- C(c) 三次贝塞尔曲线，和二次贝塞尔曲线比较，每个端点对于于一个控制点，就是一条线段有两个控制点
- S(s) 和T作用类似，自动算出平滑曲线 
- marker
 - markerWidth/markerHeight 
 - marker-start/marker-mid/marker-end marker放置位置
 - orient marker跟随路径方向
 
**CH08 图案和渐变**

pattern:

- patternUnits 分别有objectBoundingBox(object),userSpaceOnUse(user)两个值，默认值为object
 - object: 按百分比填充对象  例如width="20%" height="20%"，就是每个tile占画布的20%
 - user: 以相同大小平铺
- patternContentUnits 也是和patternUnits值一样有两个，不过默认值是userSpaceOnUse
 

gradient

- linearGradient
 - (x1,y1) (x2,y2)决定渐变方向，默认发现是左到右
 - stop offset 渐变位置
 - stop color 渐变颜色
- radialGradient 除了没有方向，其他参数和linearGradient一样，还多了个投射点(fx,fy)
- spreadMethod 
 - pad 起始和结束渐变点会扩展到对象的边缘
 - repeat 渐变会重复起点到终点的过程
 - reflect 渐变会按终点到起点、起点到终点的排列重复
 
**CH09 文本**
 
- 基本属性（和css相对应）：font-family,font-size,font-weight,font-style,text-decoration
    word-spacing,letter-spacing
- text-anchor(文本对齐) start/middle/end
- tspan类似于p里面的span标签，有偏移量（dx,dy）和baseline-shift（sub,super）两个属性
- textLength 设置文本长度 ，lengthAdjust可以调整字符间距
 - spacing 只调整字符间距
 - spacingAndGlyphs 调整字符长度和字符间距
- textPath 文本路径 ，startOffset可以调整开始位置

**CH10 裁剪和蒙版**

- 裁剪：clipPath ,clip-path ,clipPathUnits
- 蒙版：mask 

**CH11 滤镜**

容我说两句：滤镜虽然学起来挺费劲，但是效果和css的完全filter不是一个概念。

- feGaussianBlur高斯模糊，stdDeviation参数和模糊程度成正比，结合feOffset偏移和feMerge合并制造阴影效果
- feColorMatrix 改变颜色
- feImage 图片作为滤镜输入源
- feComponentTransfer 调色
- feComposite 两个输入源层叠效果
- feBlend 
- feFlood 纯色填充
- feTile 背景填充
- feDiffuseLighting/feSpecularLighting 漫反射/镜面反射
- feMorphology 加粗减细
- feConvolveMatrix  模糊、锐化、浮雕和斜切效果
- feDisplacementMap
- feTurbulence纹理效果

**CH12 SVG动画**

- animate,attributeName,attributeType,from,to,begin,dur
- repeatCount 重复次数（indefinite为无限循环），repeatDur 持续时间， 二选一
- calcMode 动画多个值时，持续时间比例， paced,linear,discrete,spline
- set 简化版animate,只需要to和时间属性
- animateTransform 适用于transform的动画
- animateMotion 路径运动，AE即视感有木有
- keyTimes 动画时间，
 - 若干个0~1的浮点数
 - 后面的值一定大于前面
 - 和values的值数量一样
 - 使用了linear 和 discrete,keyTimes第一个值为0
 - 使用了from和to,indefinite被忽略

**CH13 添加交互**
 
- 和html使用a标签有点不一样,格式:\<a xlink:href=""\> 
- elementID.eventName使用交互动画

**CH14 使用svg dom**

- snap.svg 更容易操作svg
- window.requestAnimationFrame


---------------------------------

**一点感想**

　　最初接触svg的时候，天真的以为设计师用ai做好svg给你就可以用，甚至可以做出一些炫酷的动画，工作一段时间之后才发现，这些svg什么的还是我们前端自己搞掂吧，至少在中国
是非常缺乏的，还记得那时候我叫“美工”发我一个矢量图，打开之后还居然是糊的，我真的是身体被掏空一样。
　　svg除了滤镜和动画那一块需要花多点功夫之外，其余的都算是比较好理解，整本书看下来再加上oxxo studio svg的教程，打个比喻就是数学老师和美术老师教你画画的感觉。虽然说
svg是前端的一个小分支，但是未来很有前途，设计师不学，就让我们这些苦逼的FE来吧。
　　走过这座山之后（填完这个坑），还有snap.svg 和D3.js ，想想都有点小激动(简直涕泗横流)。
