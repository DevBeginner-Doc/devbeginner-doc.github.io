import{_ as e,c as r,am as d,G as i,o as l,B as o}from"./chunks/framework.GyrKTBAB.js";const n="/images/Grammer-DataStructure/java/jdk1.png",p=JSON.parse('{"title":"概述","description":"","frontmatter":{},"headers":[],"relativePath":"Grammar-DataStructure/java/overview.md","filePath":"Grammar-DataStructure/java/overview.md","lastUpdated":1717956138000}'),v={name:"Grammar-DataStructure/java/overview.md"};function h(s,a,c,J,u,j){const t=o("NolebaseGitChangelog");return l(),r("div",null,[a[0]||(a[0]=d('<div class="warning custom-block"><p class="custom-block-title">🚧WARNING</p><p>jdk的下载和安装部分代完善</p></div><h1 id="概述" tabindex="-1">概述 <a class="header-anchor" href="#概述" aria-label="Permalink to &quot;概述&quot;">​</a></h1><h2 id="java是什么" tabindex="-1">java是什么 <a class="header-anchor" href="#java是什么" aria-label="Permalink to &quot;java是什么&quot;">​</a></h2><ul><li>是 SUN(Stanford University Network，斯坦福大学网络公司 ) 1995 年推出的一门高级编程语言。</li><li>是一种面向 Internet 的编程语言。Java 一开始富有吸引力是因为 Java 程序可以在 Web浏览器中运行。这些 Java 程序被称为 Java 小程序（applet），内嵌在 HTML 代码中。</li><li>伴随着互联网的迅猛发展，以及 Java 技术在 web 方面的不断成熟，已经成为 Web 应 用程序的首选开发语言。</li></ul><h2 id="java发展史" tabindex="-1">java发展史 <a class="header-anchor" href="#java发展史" aria-label="Permalink to &quot;java发展史&quot;">​</a></h2><h3 id="起步阶段" tabindex="-1">起步阶段<br> <a class="header-anchor" href="#起步阶段" aria-label="Permalink to &quot;起步阶段&lt;br&gt;&quot;">​</a></h3><p>1991 年，Sun 公司的工程师小组想要设计一种语言，应用在电视机、电话、闹钟、烤面包机等家用电器的控制和通信。由于这些设备的处理能力和内存都很有限，并且不同的厂商会选择不同的中央处理器(CPU)，因此这种语言的关键是代码短小、紧凑且与平台无关（即不能与任何特定的体系结构捆绑在一起）。 Gosling 团队率先创造了这个语言，并命名为“Oak&quot;(起名的原因是因为他非常喜欢自己办公室外的橡树)。后因智能化家电的市场需求没有预期的高，Sun 公司放弃了该项计划。 随着 20 世纪 90 年代互联网的发展，Sun 公司发现该语言在互联网上应用的前景，于是改造了 Oak，于 1995 年 5 月以 Java的名称正式发布。（Java 是印度尼西亚爪哇岛的英文名称，因盛产咖啡而闻名。）</p><h3 id="迭代发展" tabindex="-1">迭代发展 <a class="header-anchor" href="#迭代发展" aria-label="Permalink to &quot;迭代发展&quot;">​</a></h3><br><table><tr><th>发行版本</th><th>发行时间</th><th>备注</th></tr><tr><td>Java 1.0</td><td>1996.01.23</td><td>Sun公司发布了Java的第一个开发工具包</td></tr><tr><td>Java 1.1</td><td>1997.02.19</td><td>JavaOne会议召开，创当时全球同类会议规模之最。</td></tr><tr><td>Java 1.2</td><td>1998.12.08</td><td>Java拆分成：J2SE（标准版）、J2EE（企业版）、J2ME（小型版）</td></tr><tr><td>Java 1.3</td><td>2000.05.08</td><td></td></tr><tr><td>Java 1.4</td><td>2004.02.06</td><td></td></tr><tr><td>Java 5.0</td><td>2004.09.30</td><td>①版本号从1.4直接更新至5.0；②平台更名为JavaSE、JavaEE、JavaME</td></tr><tr><td>Java 6.0</td><td>2006.12.11</td><td></td></tr><tr class="acquisition-row"><td> </td><td>2009.04.20</td><td>Oracle公司收购SUN，交易价格74亿美元。</td></tr><tr><td>Java 7.0</td><td>2011.07.02</td><td></td></tr><tr><td>Java 8.0</td><td>2014.03.18</td><td>此版本是继Java 5.0以来变化最大的版本。是长期支持版本（LTS）</td></tr><tr><td colspan="3" style="text-align:center;">……</td></tr><tr><td>Java 17.0</td><td>2021.09</td><td>发布Java 17.0，版本号也称为21.9，是长期支持版本。</td></tr><tr><td colspan="3" style="text-align:center;">……</td></tr><tr><td>Java 19.0</td><td>2022.09</td><td>发布Java 19.0，版本号也称为22.9。</td></tr></table><h2 id="java技术体系" tabindex="-1">java技术体系 <a class="header-anchor" href="#java技术体系" aria-label="Permalink to &quot;java技术体系&quot;">​</a></h2><h3 id="java-se-java-standard-edition-标准版" tabindex="-1">Java SE(Java Standard Edition)标准版 <a class="header-anchor" href="#java-se-java-standard-edition-标准版" aria-label="Permalink to &quot;Java SE(Java Standard Edition)标准版&quot;">​</a></h3><ul><li>支持面向桌面级应用（如 Windows 下的应用程序）的 Java 平台，即定位 个人计算机的应用开发。</li><li>包括用户界面接口 AWT 及 Swing，网络功能与国际化、图像处理能力以及 输入输出支持等。</li><li>此版本以前称为 J2SE</li></ul><h3 id="java-ee-java-enterprise-edition-企业版" tabindex="-1">Java EE(Java Enterprise Edition)企业版 <a class="header-anchor" href="#java-ee-java-enterprise-edition-企业版" aria-label="Permalink to &quot;Java EE(Java Enterprise Edition)企业版&quot;">​</a></h3><ul><li>为开发企业环境下的应用程序提供的一套解决方案，即定位在服务器端的 Web 应用开发。</li><li>JavaEE 是 JavaSE 的扩展，增加了用于服务器开发的类库。如：Servlet 能够 延伸服务器的功能，通过请求-响应的模式来处理客户端的请求；JSP 是一 种可以将 Java 程序代码内嵌在网页内的技术。</li><li>版本以前称为 J2EE</li></ul><h3 id="java-me-java-micro-edition-小型版" tabindex="-1">Java ME(Java Micro Edition)小型版 <a class="header-anchor" href="#java-me-java-micro-edition-小型版" aria-label="Permalink to &quot;Java ME(Java Micro Edition)小型版&quot;">​</a></h3><ul><li>支持 Java 程序运行在移动终端（手机、机顶盒）上的平台，即定位在消 费性电子产品的应用开发</li><li>JavaME 是 JavaSE 的内伸，精简了 JavaSE 的核心类库，同时也提供自己的 扩展类。增加了适合微小装置的类库：javax.microedition.io.*等。</li><li>此版本以前称为 J2ME</li></ul><h2 id="java-开发环境搭建" tabindex="-1">Java 开发环境搭建 <a class="header-anchor" href="#java-开发环境搭建" aria-label="Permalink to &quot;Java 开发环境搭建&quot;">​</a></h2><h3 id="什么是jdk、jre、jvm" tabindex="-1">什么是jdk、jre、jvm <a class="header-anchor" href="#什么是jdk、jre、jvm" aria-label="Permalink to &quot;什么是jdk、jre、jvm&quot;">​</a></h3><ul><li>JDK (Java Development Kit)：是 Java 程序开发工具包，包含 JRE 和开发人员使用的工具。</li><li>JRE (Java Runtime Environment) ：是 Java 程序的运行时环境，包含 JVM 和运行时所需要的核心类库。</li><li>JVM（Java Virtual Machine ，Java 虚拟机）：是一个虚拟的计算机，是 Java 程序的运行环境。JVM 具有指令集并使用不同的存储区域，负责执行指令，管理数据、内存、寄存器。</li></ul><p style="color:yellow;">三者的关系大致如下所示：</p><img src="'+n+'" style="width:50%;height:auto;"> 简单的说：<br>  JDK = JRE + 开发工具集（例如 Javac 编译工具等） <br>   JRE = JVM + Java SE 标准类库 <h3 id="jdk下载" tabindex="-1">jdk下载 <a class="header-anchor" href="#jdk下载" aria-label="Permalink to &quot;jdk下载&quot;">​</a></h3><h3 id="jdk安装" tabindex="-1">jdk安装 <a class="header-anchor" href="#jdk安装" aria-label="Permalink to &quot;jdk安装&quot;">​</a></h3><h2 id="javaapi文档" tabindex="-1">javaAPI文档 <a class="header-anchor" href="#javaapi文档" aria-label="Permalink to &quot;javaAPI文档&quot;">​</a></h2><ul><li>API （Application Programming Interface，应用程序编程接口）是 Java 提供的基本编程接口。</li><li>Java 语言提供了大量的基础类，因此 Oracle 也为这些基础类提供了相应的说明文档，用于告诉开发者如何使用这些类，以及这些类里包含的方法。大多数 Java 书籍中的类的介绍都要参照它来完成，它是编程者经常查阅的资料。</li><li>Java API 文档，即为 JDK 使用说明书、帮助文档。类似于新华词典</li></ul><h3 id="链接" tabindex="-1">链接 <a class="header-anchor" href="#链接" aria-label="Permalink to &quot;链接&quot;">​</a></h3><ul><li>jdk17中文版：<a href="https://doc.qzxdp.cn/jdk/17/zh/api/index.html" target="_blank" rel="noreferrer">https://doc.qzxdp.cn/jdk/17/zh/api/index.html</a></li><li>jdk21官方版：<a href="https://docs.oracle.com/en/java/javase/21/docs/api/help-doc.html" target="_blank" rel="noreferrer">https://docs.oracle.com/en/java/javase/21/docs/api/help-doc.html</a></li></ul>',33)),i(t)])}const b=e(v,[["render",h]]);export{p as __pageData,b as default};
