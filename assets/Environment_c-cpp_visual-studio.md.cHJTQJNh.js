import{_ as o,c as t,am as i,G as n,o as e,B as l}from"./chunks/framework.GyrKTBAB.js";const r="/images/Environment/visual-studio/vs-1.png",p="/images/Environment/visual-studio/vs-i-1.png",d="/images/Environment/visual-studio/vs-i-2.png",u="/images/Environment/visual-studio/vs-i-3.png",c="/images/Environment/visual-studio/vs-i-4.png",m="/images/Environment/visual-studio/vs-i-5.png",g="/images/Environment/visual-studio/vs-i-6.png",v="/images/Environment/visual-studio/vs-i-7.png",f="/images/Environment/visual-studio/vs-i-8.png",h="/images/Environment/visual-studio/vs-i-9.png",S="/images/Environment/visual-studio/vs-i-10.png",_="/images/Environment/visual-studio/vs-i-15.png",V="/images/Environment/visual-studio/vs-i-16.png",E="/images/Environment/visual-studio/vs-i-17.png",b="/images/Environment/visual-studio/vs-i-18.png",y="/images/Environment/visual-studio/vs-i-11.png",z="/images/Environment/visual-studio/vs-i-12.png",C="/images/Environment/visual-studio/vs-i-13.png",I="/images/Environment/visual-studio/vs-i-14.png",k="/images/Environment/visual-studio/vs-u-1.png",q="/images/Environment/visual-studio/vs-u-2.png",x="/images/Environment/visual-studio/vs-u-3.png",P="/images/Environment/visual-studio/vs-u-4.png",w="/images/Environment/visual-studio/vs-u-5.png",D="/images/Environment/visual-studio/vs-u-6.png",U="/images/Environment/visual-studio/vs-u-7.png",T=JSON.parse('{"title":"Visual Studio","description":"","frontmatter":{},"headers":[],"relativePath":"Environment/c-cpp/visual-studio.md","filePath":"Environment/c-cpp/visual-studio.md","lastUpdated":1723619016000}'),W={name:"Environment/c-cpp/visual-studio.md"};function N(M,a,B,G,$,K){const s=l("NolebaseGitChangelog");return e(),t("div",null,[a[0]||(a[0]=i('<h1 id="visual-studio" tabindex="-1">Visual Studio <a class="header-anchor" href="#visual-studio" aria-label="Permalink to &quot;Visual Studio&quot;">​</a></h1><p><img src="'+r+'" alt="Visual Studio" loading="lazy"></p><h2 id="简介" tabindex="-1">简介 <a class="header-anchor" href="#简介" aria-label="Permalink to &quot;简介&quot;">​</a></h2><p>Visual Studio 是微软开发的一款专用于在Windows平台下开发C/C++或.NET现代应用程序的IDE。与普通代码编辑器的区别在于，Visual Studio 集成了代码编辑器、MSVC编译器<sup class="footnote-ref"><a href="#fn1" id="fnref1">[1]</a></sup>、MSVC运行库<sup class="footnote-ref"><a href="#fn2" id="fnref2">[2]</a></sup>、Windows SDK<sup class="footnote-ref"><a href="#fn3" id="fnref3">[3]</a></sup>、代码调试器以及许多丰富的功能和拓展插件，不需要像 Visual Studio Code 那样单独为C/C++配置编译器。</p><h2 id="下载" tabindex="-1">下载 <a class="header-anchor" href="#下载" aria-label="Permalink to &quot;下载&quot;">​</a></h2><p>Visual Studio 分为<strong>社区版</strong>、<strong>专业版</strong>、<strong>企业版</strong>。作为初学者或者普通用户，使用免费的社区版就可以满足我们大部分的开发需求了。<strong>目前官方的最新版本为 2022</strong></p><h3 id="官网下载" tabindex="-1">官网下载 <a class="header-anchor" href="#官网下载" aria-label="Permalink to &quot;官网下载&quot;">​</a></h3><p>本站提供官方2022社区版的下载链接：<a href="https://visualstudio.microsoft.com/zh-hans/thank-you-downloading-visual-studio/?sku=Community&amp;channel=Release&amp;version=VS2022&amp;source=VSLandingPage&amp;cid=2030&amp;passive=false" target="_blank" rel="noreferrer">点击此处直接下载</a></p><h3 id="本站下载" tabindex="-1">本站下载 <a class="header-anchor" href="#本站下载" aria-label="Permalink to &quot;本站下载&quot;">​</a></h3><p><a href="https://frexcheat.lanzoul.com/iAA0H27evdcf" target="_blank" rel="noreferrer">点击此处下载 || 密码：b5e0</a></p><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><p>Visual Studio 是一款集成了许多开发工具的IDE，所以也就注定了它安装后的大小会很大，而且安装过程会比较慢（主要取决于你的网速和电脑硬盘性能）。它的安装方式比较特殊：即官方提供下载的并不是最后要安装的全部东西，而是一个小型安装器，名为 <code>Visual Studio Installer</code> ；在这个安装器里，你可以配置 Visual Studio 的安装路径，选择你要安装的组件等。选择完毕后它会自动下载你所选择的组件到你的电脑上，并自动安装 Visual Studio 。</p><p>为什么还要选择要安装的组件呢？因为 Visual Studio 不仅可以单纯地开发C/C++应用，同时也支持开发.NET应用、安卓应用以及Web应用等，所以需要你选择你要用到的开发组件，而不是全部安装（除非你觉得这些东西你都能学会并且你的电脑硬盘空间很大）。即使在后期你需要用到 Visual Studio 的其他组件，你也可以继续打开 <code>Visual Studio Installer</code> 来为你的 Visual Studio 添加组件。</p><hr><p>打开下载好的 Visual Studio 安装程序，如果出现以下弹窗，请点击 <code>是</code></p><p><img src="'+p+'" alt="VS-Installer-1" loading="lazy"></p><p>出现以下内容时点击 <code>继续</code></p><p><img src="'+d+'" alt="VS-Installer-2" loading="lazy"></p><p>随后等待安装程序走完进度条</p><p><img src="'+u+'" alt="VS-Installer-3" loading="lazy"></p><p>进入以下界面后，下拉找到 <code>使用C++的桌面开发</code> 选项并勾选</p><p><img src="'+c+'" alt="VS-Installer-4" loading="lazy"></p><p>接下来按照以下步骤更改安装路径，推荐不要安装在C盘（如果你的C盘剩余大小小于60GB）</p><p><img src="'+m+'" alt="VS-Installer-5" loading="lazy"></p><p><img src="'+g+'" alt="VS-Installer-6" loading="lazy"></p><p><img src="'+v+'" alt="VS-Installer-7" loading="lazy"></p><p>随后就进入了漫长的下载安装过程，这个过程持续的时间取决于你的网速和电脑的硬盘读写性能，或许水一会儿群就好了呢？</p><p><img src="'+f+'" alt="VS-Installer-8" loading="lazy"></p><p>安装好后如果提示你需要重启，请及时重启一次</p><p><img src="'+h+'" alt="VS-Installer-9" loading="lazy"></p><p>如果没有提示，关闭安装程序</p><p><img src="'+S+'" alt="VS-Installer-10" loading="lazy"></p><p>这时你会发现，Visual Studio 并没有给你在桌面上创建快捷方式，那我们该如何启动呢？下面我们来看看如何给 Visual Studio 创建桌面快捷方式。</p><p>首先在键盘上按一下开始键或者直接在任务栏中点击开始按钮，唤出开始菜单，并在上方搜索栏搜索 <code>Visual Studio 2022</code>，找到之后对它点击鼠标右键，并选择 <code>打开文件位置</code></p><p><img src="'+_+'" alt="VS-Installer-15" loading="lazy"></p><p>打开之后，对其点击鼠标右键，将其复制到桌面上即可</p><p><img src="'+V+'" alt="VS-Installer-16" loading="lazy"></p><p><img src="'+E+'" alt="VS-Installer-17" loading="lazy"></p><p>最后，我们就得到了 Visual Studio 的桌面快捷方式</p><p><img src="'+b+'" alt="VS-Installer-18" loading="lazy"></p><p>双击打开，即可看到期待已久的 Visual Studio 启动界面</p><p><img src="'+y+'" alt="VS-Installer-11" loading="lazy"></p><p>初次打开，要求我们登录微软账号，我们首次先不登录，点击 <code>暂时跳过此项</code></p><p><img src="'+z+'" alt="VS-Installer-12" loading="lazy"></p><p>选择你喜欢的主题颜色，然后点击 <code>启动 Visual Studio</code></p><p><img src="'+C+'" alt="VS-Installer-13" loading="lazy"></p><p>至此，Visual Studio 就安装完成了</p><p><img src="'+I+'" alt="VS-Installer-14" loading="lazy"></p><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2><p>不推荐刚入门的小白使用 Visual Studio 这种项目格式规范的IDE<sup class="footnote-ref"><a href="#fn4" id="fnref4">[4]</a></sup>。</p><h3 id="创建项目" tabindex="-1">创建项目 <a class="header-anchor" href="#创建项目" aria-label="Permalink to &quot;创建项目&quot;">​</a></h3><p>打开 Visual Studio 后点击 <code>创建新项目</code>，随后点击 <code>控制台应用程序</code> （这里以与前面几个IDE相似的方式来演示，所以才使用 “控制台应用程序”）</p><p><img src="'+k+'" alt="VS-Usage-1" loading="lazy"></p><p><img src="'+q+'" alt="VS-Usage-2" loading="lazy"></p><p>配置项目名称、保存路径，创建项目</p><p><img src="'+x+'" alt="VS-Usage-3" loading="lazy"></p><h3 id="运行项目" tabindex="-1">运行项目 <a class="header-anchor" href="#运行项目" aria-label="Permalink to &quot;运行项目&quot;">​</a></h3><p>进入项目工作界面</p><p><img src="'+P+'" alt="VS-Usage-4" loading="lazy"></p><p><img src="'+w+'" alt="VS-Usage-5" loading="lazy"></p><p><img src="'+D+'" alt="VS-Usage-6" loading="lazy"></p><p>下次如何打开项目？找到上次创建项目时保存的路径，打开其中的 <code>.sln</code> 文件即可</p><p><img src="'+U+'" alt="VS-Usage-7" loading="lazy"></p>',63)),n(s),a[1]||(a[1]=i('<hr class="footnotes-sep"><section class="footnotes"><ol class="footnotes-list"><li id="fn1" class="footnote-item"><p>MSVC全称为 Microsoft Visual C++ ，是微软专门为 Windows 平台设计的一款 C++ 开发工具集合，其中包含了代码调试器、代码编译器、以及微软 C++ 运行库。 <a href="#fnref1" class="footnote-backref">↩︎</a></p></li><li id="fn2" class="footnote-item"><p>运行库，顾名思义是指程序在运行时所需要用到的各种依赖文件；那么MSVC运行库自然就是指 Windows 平台软件在运行时所需要的依赖文件咯。其中包含了lib静态库文件以及各种dll动态链接库文件。这里不多赘述，感兴趣的可以自己在后期了解一下什么是lib和dll。 <a href="#fnref2" class="footnote-backref">↩︎</a></p></li><li id="fn3" class="footnote-item"><p>SDK 全称为 Software development kit，即软件开发工具。那么 Windows SDK 自然就是指 Windows 软件开发工具咯，其中包含了在开发 Windows 平台软件时所需要的头文件、说明文档以及库文件。 <a href="#fnref3" class="footnote-backref">↩︎</a></p></li><li id="fn4" class="footnote-item"><p>原因为 Visual Studio 的默认标准语法是C++11 ~ C++20，对于刚入门学习C语言的同学，其中某些语法与C语言不同，会引起某些同学的困惑。其次，Visual Studio 是以项目为单位区分代码的，一个项目里的所有代码都有所关联，并不是相互独立的；另外，一个项目里不能出现多个 <code>main</code> 函数，这对于刚入学打算法的同学并不友好。 <a href="#fnref4" class="footnote-backref">↩︎</a></p></li></ol></section>',2))])}const H=o(W,[["render",N]]);export{T as __pageData,H as default};
