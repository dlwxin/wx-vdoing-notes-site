(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{490:function(_,v,t){_.exports=t.p+"assets/img/tcp_segment.eef38164.png"},491:function(_,v,t){_.exports=t.p+"assets/img/tcp_flow_control_example.8eab6a12.png"},492:function(_,v,t){_.exports=t.p+"assets/img/udp_datagram_pseudo_header.8de43294.png"},597:function(_,v,t){"use strict";t.r(v);var P=t(26),e=Object(P.a)({},(function(){var _=this,v=_.$createElement,P=_._self._c||v;return P("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[P("ul",[P("li",[P("a",{attrs:{href:"https://blog.csdn.net/jiyiqinlovexx/article/details/50959351",target:"_blank",rel:"noopener noreferrer"}},[_._v("多个进程能否监听同一个端口号？"),P("OutboundLink")],1)])]),_._v(" "),P("h2",{attrs:{id:"传输层提供的服务"}},[P("a",{staticClass:"header-anchor",attrs:{href:"#传输层提供的服务"}},[_._v("#")]),_._v(" 传输层提供的服务")]),_._v(" "),P("h3",{attrs:{id:"传输层的功能"}},[P("a",{staticClass:"header-anchor",attrs:{href:"#传输层的功能"}},[_._v("#")]),_._v(" 传输层的功能")]),_._v(" "),P("p",[_._v("从通信和信息处理的角度看，传输层向它上面的应用层提供通信服务，它属于面向通信部分的最高层，同时也是用户功能中的最低层。")]),_._v(" "),P("p",[_._v("传输层位于网络层之上，它为运行在不同主机上的进程之间提供了逻辑通信，而网络层提供主机之间的逻辑通信。显然，即使网络层协议不可靠（网络层协议使分组丢失、混乱或重复），传输层同样能为应用程序提供可靠的服务。")]),_._v(" "),P("p",[_._v("网络的边缘部分的两台主机使用网络核心部分的功能进行端到端的通信时，只有主机的协议栈才有传输层和应用层，而路由器在转发分组时都只用到下三层的功能（即在通信子网中没有传输层，传输层只存在于通信子网以外的主机中）。")]),_._v(" "),P("p",[_._v("传输层的功能如下")]),_._v(" "),P("ol",[P("li",[P("p",[_._v("传输层提供应用进程之间的逻辑通信（即端到端的通信）。与网络层的区别是，网络层提供的是主机之间的逻辑通信。从网络层来说，通信的双方是两台主机，IP 数据报的首部给出了这两台主机的 IP 地址。但“两台主机之间的通信”实际上是两台主机中的应用进程之间的通信，应用进程之间的通信又称端到端的逻辑通信。这里“逻辑通信”的意思是：传输层之间的通信好像是沿水平方向传送数据，但事实上这两个传输层之间并没有一条水平方向的物理连接。")])]),_._v(" "),P("li",[P("p",[_._v("复用和分用。复用是指发送方不同的应用进程都可使用同一个传输层协议（实体）传送数据；分用是指接收方的传输层在剥去报文的首部后能够把这些数据正确交付到目的应用进程。\n在发送方主机多路复用：从多个套接字接收来自多个进程的报文，根据套接字对应的 IP 地址和端口号等信息对报文段用头部加以封装 (该头部信息用于以后的解复用)")]),_._v(" "),P("p",[_._v("在接收方主机多路解复用：根据报文段的头部信息中的 IP 地址和端口号将接收到的报文段发给正确的套接字(和对应的应用进程)")]),_._v(" "),P("p",[_._v("UDP 多路复用：在接收端，UDP 套接字用二元组标识 (目标 IP 地址、目标端口号) ，当主机收到 UDP 报文段：如果两个不同源 IP 地址/源端口号的数据报，但是有相同的目标 IP 地址和端口号，则被定位到相同的套接字")]),_._v(" "),P("p",[_._v("TCP 多路复用：TCP 套接字四元组本地标识：源 IP 地址、源端口号、目的 IP 地址、目的端口号；解复用：接收主机用这四个值来将数据报定位到合适的套接字")]),_._v(" "),P("p",[_._v("注意：传输层的复用分用功能与网络层的复用分用功能不同。网络层的复用是指发送方不同协议的数据都可以封装成 IP 数据报发送出去，分用是指接收方的网络层在剥去首部后把数据交付给相应的协议。")])]),_._v(" "),P("li",[P("p",[_._v("传输层还要对收到的报文进行差错检测（首部和数据部分）。而网络层只检查 IP 数据报的首部，不检验数据部分是否出错。")])]),_._v(" "),P("li",[P("p",[_._v("提供两种不同的传输协议，即面向连接的 TCP 和无连接的 UDP。而网络层无法同时实现两种协议（即在网络层要么只提供面向连接的服务，如虚电路；要么只提供无连接服务，如数据报，而不可能在网络层同时存在这两种方式）。")])])]),_._v(" "),P("p",[_._v("传输层向高层用户屏蔽了低层网络核心的细节（如网络拓扑、路由协议等），它使应用进程看见的是好像在两个传输层实体之间有一条端到端的逻辑通信信道，这条逻辑通信信道对上层的表现却因传输层协议不同而有很大的差别。当传输层采用面向连接的 TCP 时，尽管下面的网络是不可靠的，但这种逻辑通信信道就相当于一条全双工的可靠信道。但当传输层采用无连接的 UDP 时，这种逻辑通信信道仍然是一条不可靠信道。")]),_._v(" "),P("h3",{attrs:{id:"传输层的寻址与端口"}},[P("a",{staticClass:"header-anchor",attrs:{href:"#传输层的寻址与端口"}},[_._v("#")]),_._v(" 传输层的寻址与端口")]),_._v(" "),P("p",[P("strong",[_._v("1. 端口的作用")])]),_._v(" "),P("p",[_._v("端口能够让应用层的各种应用进程将其数据通过端口向下交付给传输层，以及让传输层知道应当将其报文段中的数据向上通过端口交付给应用层相应的进程。端口是传输层服务访问点（TSAP），它在传输层的作用类似于 IP 地址在网络层的作用或 MAC 地址在数据链路层的作用，只不过 IP 地址和 MAC 地址标识的是主机，而端口标识的是主机中的应用进程。")]),_._v(" "),P("p",[_._v("数据链路层的 SAP 是 MAC 地址，网络层的 SAP 是 IP 地址，传输层的 SAP 是端口。")]),_._v(" "),P("p",[_._v("在协议栈层间的抽象的协议端口是软件端口，它与路由器或交换机上的硬件端口是完全不同的概念。硬件端口是不同硬件设备进行交互的接口，而软件端口是应用层的各种协议进程与传输实体进行层间交互的一种地址。传输层使用的是软件端口。")]),_._v(" "),P("p",[P("strong",[_._v("2. 端口号")])]),_._v(" "),P("p",[_._v("应用进程通过端口号进行标识，端口号长度为 16bit，能够表示 65536（2"),P("sup",[_._v("16")]),_._v("）个不同的端口号。")]),_._v(" "),P("p",[_._v("端口号只具有本地意义，即端口号只标识本计算机应用层中的各进程，在因特网中不同计算机的相同端口号是没有联系的。根据端口号范围可将端口分为两类")]),_._v(" "),P("ul",[P("li",[_._v("服务端使用的端口号。这里又分为两类，最重要的一类是熟知端口号，数值为 0 ～ 1023， IANA（互联网地址指派机构）把这些端口号指派给了 TCP/IP 最重要的一些应用程序，让所有的用户都知道。另一类称为登记端口号，数值为 1024 ～ 49151。它是供没有熟知端口号的应用程序使用的，使用这类端口号必须在 IANA 登记，以防止重复。一些常用的熟知端口号如下")])]),_._v(" "),P("table",[P("thead",[P("tr",[P("th",{staticStyle:{"text-align":"center"}},[_._v("Application")]),_._v(" "),P("th",{staticStyle:{"text-align":"center"}},[_._v("Well-Known Port Numbers")])])]),_._v(" "),P("tbody",[P("tr",[P("td",{staticStyle:{"text-align":"center"}},[_._v("FTP")]),_._v(" "),P("td",{staticStyle:{"text-align":"center"}},[_._v("21")])]),_._v(" "),P("tr",[P("td",{staticStyle:{"text-align":"center"}},[_._v("TELNET")]),_._v(" "),P("td",{staticStyle:{"text-align":"center"}},[_._v("23")])]),_._v(" "),P("tr",[P("td",{staticStyle:{"text-align":"center"}},[_._v("SMTP")]),_._v(" "),P("td",{staticStyle:{"text-align":"center"}},[_._v("25")])]),_._v(" "),P("tr",[P("td",{staticStyle:{"text-align":"center"}},[_._v("DNS")]),_._v(" "),P("td",{staticStyle:{"text-align":"center"}},[_._v("53")])]),_._v(" "),P("tr",[P("td",{staticStyle:{"text-align":"center"}},[_._v("TFTP")]),_._v(" "),P("td",{staticStyle:{"text-align":"center"}},[_._v("69")])]),_._v(" "),P("tr",[P("td",{staticStyle:{"text-align":"center"}},[_._v("HTTP")]),_._v(" "),P("td",{staticStyle:{"text-align":"center"}},[_._v("80")])]),_._v(" "),P("tr",[P("td",{staticStyle:{"text-align":"center"}},[_._v("SNMP")]),_._v(" "),P("td",{staticStyle:{"text-align":"center"}},[_._v("161")])])])]),_._v(" "),P("ul",[P("li",[_._v("客户端使用的端口号，数值为 49152 ～ 65535。由于这类端口号仅在客户进程运行时才动态地选择，因此又称短暂端口号（也称临时端口）。通信结束后，刚用过的客户端口号就不复存在，从而这个端口号就可供其他客户进程使用。")])]),_._v(" "),P("p",[P("strong",[_._v("3. 套接字")])]),_._v(" "),P("p",[_._v("在网络中通过 IP 地址来标识和区别不同的主机，通过端口号来标识和区分一台主机中的不同应用进程。在网络中采用发送方和接收方的套接字（Socket）组合来识别端点。所谓套接字，实际上是一个通信端点，即")]),_._v(" "),P("p",[_._v("套接字 =（主机 IP 地址，端口号）")]),_._v(" "),P("p",[_._v("它唯一地标识网络中的一台主机和其上的一个应用（进程）。")]),_._v(" "),P("p",[_._v('在网络通信中，主机 A 发给主机 B 的报文段包含目的端口号和源端口号，源端口号是"返回地址"的一部分，即当 B 需要发回一个报文段给 A 时，B 到 A 的报文段中的目的端口号便是 A 到 B 的报文段中的源端口号（完全的返回地址是 A 的 IP 地址和源端口号）。')]),_._v(" "),P("h3",{attrs:{id:"无连接服务与面向连接服务"}},[P("a",{staticClass:"header-anchor",attrs:{href:"#无连接服务与面向连接服务"}},[_._v("#")]),_._v(" 无连接服务与面向连接服务")]),_._v(" "),P("p",[_._v("面向连接服务就是在通信双方进行通信之前，必须先建立连接，在通信过程中，整个连接的情况一直被实时地监控和管理。通信结束后，应该释放这个连接。")]),_._v(" "),P("p",[_._v("无连接服务是指两个实体之间的通信不需要先建立好连接，需要通信时，直接将信息发送到“网络”中，让该信息的传递在网上尽力而为地往目的地传送。")]),_._v(" "),P("p",[_._v("TCP/IP 协议族在 IP 层之上使用了两个传输协议：一个是面向连接的传输控制协议（TCP），采用 TCP 时，传输层向上提供的是一条全双工的可靠逻辑信道；另一个是无连接的用户数据报协议（UDP），采用 UDP 时，传输层向上提供的是一条不可靠的逻辑信道。")]),_._v(" "),P("p",[_._v("TCP 提供面向连接的服务，在传送数据之前必须先建立连接，数据传送结束后要释放连接。 TCP 不提供广播或组播服务。由于 TCP 提供面向连接的可靠传输服务，因此不可避免地增加了许多开销，如确认、流量控制、计时器及连接管理等。这不仅使协议数据单元的头部增大很多，还要占用许多的处理机资源。因此 TCP 主要适用于可靠性更重要的场合，如文件传输协议（FTP）、超文本传输协议（HTTP）、远程登录（TELNET）等。")]),_._v(" "),P("p",[_._v("UDP 是一个无连接的非可靠传输层协议。它在 IP 之上仅提供两个附加服务：多路复用和对数据的错误检查。IP 知道怎样把分组投递给一台主机，但不知道怎样把它们投递给主机上的具体应用。UDP 在传送数据之前不需要先建立连接，远程主机的传输层收到 UDP 报文后，不需要给出任何确认。由于 UDP 比较简单，因此执行速度比较快、实时性好。使用 UDP 的应用主要包括小文件传送协议（TFTP）、DNS、SNMP 和实时传输协议（RTP）。")]),_._v(" "),P("p",[_._v("注意 ∶")]),_._v(" "),P("ol",[P("li",[P("p",[_._v("IP 数据报和 UDP 数据报的区别：IP 数据报在网络层要经过路由的存储转发；而 UDP 数据报在传输层的端到端的逻辑信道中传输，封装成 IP 数据报在网络层传输时，UDP 数据报的信息对路由是不可见的。")])]),_._v(" "),P("li",[P("p",[_._v("TCP 和网络层虚电路的区别：TCP 报文段在传输层抽象的逻辑信道中传输，对路由器不可见；虚电路所经过的交换结点都必须保存虚电路状态信息。在网络层若采用虚电路方式，则无法提供无连接服务； 而传输层采用 TCP 不影响网络层提供无连接服务")])])]),_._v(" "),P("h2",{attrs:{id:"tcp-协议"}},[P("a",{staticClass:"header-anchor",attrs:{href:"#tcp-协议"}},[_._v("#")]),_._v(" TCP 协议")]),_._v(" "),P("h3",{attrs:{id:"tcp-协议的特点"}},[P("a",{staticClass:"header-anchor",attrs:{href:"#tcp-协议的特点"}},[_._v("#")]),_._v(" TCP 协议的特点")]),_._v(" "),P("p",[_._v("TCP 是在不可靠的 IP 层之上实现的可靠的数据传输协议，它主要解决传输的可靠、有序、无丢失和不重复问题。TCP 是 TCPIP 体系中非常复杂的一个协议，主要特点如下")]),_._v(" "),P("ol",[P("li",[_._v("TCP 是面向连接的传输层协议。")]),_._v(" "),P("li",[_._v("每条 TCP 连接只能有两个端点，每条 TCP 连接只能是点对点的（一对一）。")]),_._v(" "),P("li",[_._v("TCP 提供可靠的交付服务，保证传送的数据无差错、不丢失、不重复且有序。")]),_._v(" "),P("li",[_._v("TCP 提供全双工通信，允许通信双方的应用进程在任何时候都能发送数据，为此 TCP 连接的两端都设有发送缓存和接收缓存，用来临时存放双向通信的数据。发送缓存用来暂时存放以下数据：1）发送应用程序传送给发送方 TCP 准备发送的数据；2）TCP 已发送但尚未收到确认的数据。接收缓存用来暂时存放以下数据：1）按序到达但尚未被接收应用程序读取的数据；2）不按序到达的数据。")]),_._v(" "),P("li",[_._v("TCP 是面向字节流的，虽然应用程序和 TCP 的交互是一次一个数据块（大小不等），但 TCP 把应用程序交下来的数据仅视为一连串的无结构的字节流。")])]),_._v(" "),P("h3",{attrs:{id:"tcp-报文段"}},[P("a",{staticClass:"header-anchor",attrs:{href:"#tcp-报文段"}},[_._v("#")]),_._v(" TCP 报文段")]),_._v(" "),P("p",[_._v("TCP 传送的数据单元称为报文段。TCP 报文段既可以用来运载数据，又可以用来建立连接、释放连接和应答。一个 TCP 报文段分为首部和数据两部分，整个 TCP 报文段作为 IP 数据报的数据部分封装在 IP 数据报中，其首部的前 20B 是固定的。TCP 报文段的首部最短为 20B，后面有 4N 字节是根据需要而增加的选项，通常长度为 4B 的整数倍。")]),_._v(" "),P("p",[_._v("TCP 的全部功能体现在其首部的各个字段中，各字段意义如下：")]),_._v(" "),P("ol",[P("li",[P("p",[P("code",[_._v("源端口和目的端口字段")]),_._v("。各占 2B。端口是运输层与应用层的服务接口，运输层的复用和分用功能都要通过端口实现。")])]),_._v(" "),P("li",[P("p",[P("code",[_._v("序号")]),_._v("。占 4B。TCP 是面向字节流的（即 TCP 传送时是逐个字节传送的），所以 TCP 连接传送的数据流中的每个字节都编上一个序号。序号字段的值指的是本报文段所发送的数据的第一个字节的序号。\n例如，一报文段的序号字段值是 301，而携带的数据共有 100B，表明本报文段的数据的最后一个字节的序号是 400，因此下一个报文段的数据序号应从 401 开始。")])]),_._v(" "),P("li",[P("p",[P("code",[_._v("确认号")]),_._v("。占 4B，是期望收到对方的下一个报文段的数据的第一个字节的序号。若确认号为 N，则表明到序号 N-1 为止的所有数据都已正确收到。例如，B 正确收到了 A 发送过来的一个报文段，其序号字段是 501，而数据长度是 200B（序号 501 ～ 700），这表明 B 正确收到了 A 发送的到序号 700 为止的数据。因此 B 期望收到 A 的下一个数据序号是 701，于是 B 在发送给 A 的确认报文段中把确认号置为 701。")])]),_._v(" "),P("li",[P("p",[P("code",[_._v("数据偏移")]),_._v("（即首部长度）。占 4 位，这里不是 IP 数据报分片的那个数据偏移，而是表示首部长度（首部中还有长度不确定的选项字段），它指出 TCP 报文段的数据起始处距离 TCP 报文段的起始处有多远。“数据偏移”的单位是 32 位（以 4B 为计算单位）。因此当此字段的值为 15 时，达到 TCP 首部的最大长度 60B。")])]),_._v(" "),P("li",[P("p",[P("code",[_._v("保留")]),_._v("。占 6 位，保留为今后使用，但目前应置为 0，该字段可以忽略不计。")])]),_._v(" "),P("li",[P("p",[P("code",[_._v("紧急位 URG")]),_._v("。URG = 1 时，表明紧急指针字段有效。它告诉系统报文段中有紧急数据，应尽快传送（相当于高优先级的数据）。但 URG 需要和紧急指针配套使用，即数据从第一个字节到紧急指针所指字节就是紧急数据。")])]),_._v(" "),P("li",[P("p",[P("code",[_._v("确认位 ACK")]),_._v("。只有当 ACK=1 时确认号字段才有效。当 ACK=0 时，确认号无效。TCP 规定，在连接建立后所有传送的报文段都必须把 ACK 置 1。")])]),_._v(" "),P("li",[P("p",[P("code",[_._v("推送位 PSH")]),_._v("（Push）。接收 TCP 收到 PSH=1 的报文段，就尽快地交付给接收应用进程，而不再等到整个缓存都填满后再向上交付。")])]),_._v(" "),P("li",[P("p",[P("code",[_._v("复位位 RST")]),_._v("（Reset）。RST=1 时，表明 TCP 连接中出现严重差错（如主机崩渍或其他原因），必须释放连接，然后再重新建立运输连接。")])]),_._v(" "),P("li",[P("p",[P("code",[_._v("同步位 SYN")]),_._v("。同步 SYN=1 表示这是一个连接请求或连接接收报文。当 SYN=1，ACK=0 时，表明这是一个连接请求报文，对方若同意建立连接，则在响应报文中使用 SYN=1，ACK=1。")])]),_._v(" "),P("li",[P("p",[P("code",[_._v("终止位 FIN")]),_._v("（Finish）。用来释放一个连接。FIN=1 表明此报文段的发送方的数据已发送完毕，并要求释放传输连接。")])]),_._v(" "),P("li",[P("p",[P("code",[_._v("窗口")]),_._v("。占 2B。它指出现在允许对方发送的数据量，接收方的数据缓存空间是有限的，因此用窗口值作为接收方让发送方设置其发送窗口的依据，单位为字节。例如，假设确认号是 701，窗口字段是 1000。这表明，从 701 号算起，发送此报文段的一方还有接收 1000B 数据（字节序号为 701 ～ 1700）的接收缓存空间。")])]),_._v(" "),P("li",[P("p",[P("code",[_._v("校验和")]),_._v("。占 2B。校验和字段检验的范围包括首部和数据两部分。在计算校验和时，和 UDP 一样，要在 TCP 报文段的前面加上 12B 的伪首部（只需将 UDP 伪首部的第 4 个字段，即协议字段的 17 改成 6，其他的和 UDP 一样）。")])]),_._v(" "),P("li",[P("p",[P("code",[_._v("紧急指针")]),_._v("。占 16 位，指出在本报文段中紧急数据共有多少字节（紧急数据放在本报文段数据的最前面）。")])]),_._v(" "),P("li",[P("p",[P("code",[_._v("选项")]),_._v("。长度可变。TCP 最初只规定了一种选项，即最大报文段长度（Maximum SegmentSize，MSS）。MSS 是 TCP 报文段中的数据字段的最大长度。")])]),_._v(" "),P("li",[P("p",[P("code",[_._v("填充")]),_._v("。这是为了使整个首部长度是 4B 的整数倍。")])])]),_._v(" "),P("details",{staticClass:"custom-block details"},[P("summary",[_._v("Click me to view the TCP segment")]),_._v(" "),P("p",[P("img",{attrs:{src:t(490),alt:"tcp segment"}})])]),_._v(" "),P("h3",{attrs:{id:"tcp-连接管理"}},[P("a",{staticClass:"header-anchor",attrs:{href:"#tcp-连接管理"}},[_._v("#")]),_._v(" TCP 连接管理")]),_._v(" "),P("p",[_._v("TCP 是面向连接的协议，因此每个 TCP 连接都有三个阶段：连接建立、数据传送和连接释放。TCP 连接的管理就是使运输连接的建立和释放都能正常进行。")]),_._v(" "),P("p",[_._v("在 TCP 连接建立的过程中，要解决以下三个问题")]),_._v(" "),P("ul",[P("li",[_._v("要使每一方都能够确知对方的存在。")]),_._v(" "),P("li",[_._v("要允许双方协商一些参数（如最大窗口值、是否使用窗口扩大选项、时间戳选项及服务质量等）。")]),_._v(" "),P("li",[_._v("能够对运输实体资源（如缓存大小、连接表中的项目等）进行分配。")])]),_._v(" "),P("p",[_._v("TCP 把连接作为最基本的抽象，每条 TCP 连接有两个端点，TCP 连接的端点不是主机，不是主机的 IP 地址，不是应用进程，也不是传输层的协议端口。TCP 连接的端口称为套接字（socket）或插口。端口拼接到 IP 地址即构成套接字。")]),_._v(" "),P("p",[_._v("每条 TCP 连接唯一地被通信两端的两个端点（即两个套接字）确定。")]),_._v(" "),P("p",[_._v("TCP 连接的建立采用客户机服务器方式。主动发起连接建立的应用进程称为客户机（Client），而被动等待连接建立的应用进程称为服务器（Server）。")]),_._v(" "),P("p",[P("strong",[_._v("1. TCP 连接的建立")])]),_._v(" "),P("p",[_._v("连接的建立经历以下 3 个步骤，通常称为三次握手。")]),_._v(" "),P("p",[_._v("连接建立前，服务器进程处于 LISTEN 状态，等待客户的连接请求。")]),_._v(" "),P("p",[P("strong",[_._v("第一步：")]),_._v(" 客户机的 TCP 首先向服务器的 TCP 发送一个连接请求报文段。这个特殊的报文段的首部中的同部位 SYN 置为 1。同时选择一个初始序号 seq = x。TCP 规定，SYN 报文段不能携带数据，但要消耗掉一个序号。这时 TCP 客户进程进入 SYN-SENT（同步已发送）状态。")]),_._v(" "),P("p",[P("strong",[_._v("第二步：")]),_._v(" 服务器的 TCP 收到连接请求报文段后，如同意建立连接，就向客户机发回确认，并为该 TCP 连接分配 TCP 缓存和变量。在确认报文段中，SYN 和 ACK 位都被置为 1，确认号是 ack = x + 1，同时为自己选择一个初始序号 seq = y（确认报文不携带数据，但也要消耗一个序号）。确认报文段同样不包含应用层数据。这时 TCP 服务器进程进入 SYN-RCVD （同步收到状态）")]),_._v(" "),P("p",[P("strong",[_._v("第三步：")]),_._v(" 当客户机收到确认报文段后，还要向服务器给出确认，并且也要给该连接分配缓存和变量。这个报文段的 ACK 标志位被置 1，序号 seq = x + 1，确认号 ack = y + 1。该报文段可以携带数据，若不携带数据则不消耗序号。这时客户机进程进入 ESTABLISHED（已经建连接状态）。")]),_._v(" "),P("p",[_._v("成功进行以上三步后，就建立了 TCP 连接，接下来就可以传送应用层数据。TCP 提供的是全双工通信，因此通信双方的应用进程在任何时候都能发送数据。")]),_._v(" "),P("p",[_._v("另外，值得注意的是，服务器端的资源是在完成第二次握手时分配的，而客户端的资源是在完成第三次握手时分配的，这就使得服务器易于受到 SYN 洪泛攻击。")]),_._v(" "),P("p",[P("strong",[_._v("2. TCP 连接的释放")])]),_._v(" "),P("p",[_._v("天下没有不散的筵席，TCP 同样如此。参与 TCP 连接的两个进程中的任何一个都能终止该连接。TCP 连接释放的过程通常称为四次挥手。")]),_._v(" "),P("p",[P("strong",[_._v("第一步：")]),_._v(" 客户机打算关闭连接时，向其 TCP 发送一个连接释放报文段，并停止发送数据，主动关闭 TCP 连接，该报文段的 FIN 标志位被置 1，seq = u，它等于前面已传送过的数据的最后一个字节的序号加 1（FIN 报文段即使不携带数据，也要消耗一个序号）。这时 TCP 客户进程进入 FIN-WAIT-1（终止等待 1）状态。TCP 是全双工的，即可以想象为一条 TCP 连接上有两条数据通路。发送 FIN 报文时，发送 FIN 的一端不能再发送数据，即关闭了其中一条数据通路，但对方还可以发送数据。")]),_._v(" "),P("p",[P("strong",[_._v("第二步：")]),_._v(" 服务器收到连接释放报文段后即发出确认，确认号是 ack = u + 1，而这个报文段自己的序号是 seq = v，等于它前面已传送过的数据的最后一个字节的序号加 1。然后服务器进入 CLOSE-WAIT（关闭等待）状态。此时，从客户机到服务器这个方向的连接就释放了，TCP 连接处于半关闭状态。但服务器若发送数据，客户机仍要接收，即从服务器到客户机这个方向的连接并未关闭。")]),_._v(" "),P("p",[P("strong",[_._v("第三步：")]),_._v(" 若服务器已经没有要向客户机发送的数据，就通知 TCP 释放连接，此时其发出 FIN = 1 的连接释放报文段。该报文段的序号为 W（在半关闭状态服务器可能又发送了一些数据），还需重复上次已发送的确认号 ack = u + 1。这时服务器进入 LAST-ACK（最后确认）状态。")]),_._v(" "),P("p",[P("strong",[_._v("第四步：")]),_._v(" 客户机收到连接释放报文段后，必须发出确认。在确认报文段中，ACK 字段被置为 1，确认号 ack = w + 1，序号 seq =u + 1。此时 TCP 连接还未释放，必须经过时间等待计时器设置的时间 2MSL（最长报文段寿命） 后，客户机才进入 CLOSED（连接关闭）状态。")]),_._v(" "),P("p",[_._v("对上述 TCP 连接建立和释放的总结如下")]),_._v(" "),P("ul",[P("li",[P("p",[_._v("连接建立。分为 3 步")]),_._v(" "),P("ul",[P("li",[_._v("SYN = 1, seq = x")]),_._v(" "),P("li",[_._v("SYN = 1, ACK =1, seq = y, ack = x + 1")]),_._v(" "),P("li",[_._v("ACK = 1, seq = x + 1, ack = y + 1")])])]),_._v(" "),P("li",[P("p",[_._v("释放连接。分为 4 步")]),_._v(" "),P("ul",[P("li",[_._v("FIN = 1, seq = u")]),_._v(" "),P("li",[_._v("ACK = 1, seq = v, ack = u + 1")]),_._v(" "),P("li",[_._v("FIN = 1, ACK = 1, seq = w, ack = u + 1")]),_._v(" "),P("li",[_._v("ACK = 1, seq = u + 1, ack = w + 1")])])])]),_._v(" "),P("h3",{attrs:{id:"tcp-可靠传输"}},[P("a",{staticClass:"header-anchor",attrs:{href:"#tcp-可靠传输"}},[_._v("#")]),_._v(" TCP 可靠传输")]),_._v(" "),P("p",[_._v("TCP 的任务是在 IP 层不可靠的、尽力而为服务的基础上建立一种可靠数据传输服务。TCP 提供的可靠数据传输服务保证接收方进程从缓存区读出的字节流与发送方发出的字节流完全一样。TCP 使用了校验、序号、确认和重传等机制来达到这一目的。其中，TCP 的校验机制与"),P("a",{attrs:{href:"#udp_validation"}},[_._v("UDP 校验")]),_._v("一样。")]),_._v(" "),P("p",[P("strong",[_._v("1. 序号")])]),_._v(" "),P("p",[_._v("TCP 首部的序号字段用来保证数据能有序提交给应用层，TCP 把数据视为一个无结构但有序的字节流，序号建立在传送的字节流之上，而不建立在报文段之上。")]),_._v(" "),P("p",[_._v("TCP 连接传送的数据流中的每个字节都编上一个序号。序号字段的值是指本报文段所发送的数据的第一个字节的序号。假设 A 和 B 之间建立了一条 TCP 连接，A 的发送缓存区中共有 10B，序号从 0 开始标号，第一个报文包含第 0 ～ 2 个字节，则该 TCP 报文段的序号是 0，第二个报文段的序号是 3。")]),_._v(" "),P("p",[P("strong",[_._v("2. 确认")])]),_._v(" "),P("p",[_._v("TCP 首部的确认号是期望收到对方的下一个报文段的数据的第一个字节的序号。如果接收方 B 已收到第一个报文段，此时 B 希望收到的下一个报文段的数据是从第 3 个字节开始的，那么 B 发送给 A 的报文中的确认号字段应为 3。发送方缓存区会继续存储那些已发送但未收到确认的报文段，以便在需要时重传。")]),_._v(" "),P("p",[_._v("TCP 默认使用累计确认，即 TCP 只确认数据流中至第一个丢失字节为止的字节。例如，在上边的例子中，接收方 B 收到了 A 发送的包含字节 0 ～ 2 及字节 6 ～ 7 的报文段。由于某种原因，B 还未收到字节 3 ～ 5 的报文段，此时 B 仍在等待字节 3（和其后面的字节），因此 B 到 A 的下一个报文段将确认号字段置为 3。")]),_._v(" "),P("p",[P("strong",[_._v("3. 重传")])]),_._v(" "),P("p",[_._v("有两种事件会导致 TCP 对报文段进行重传：超时和冗余 ACK。")]),_._v(" "),P("ul",[P("li",[P("p",[_._v("超时"),P("br"),_._v("\nTCP 每发送一个报文段，就对这个报文段设置一次计时器。计时器设置的重传时间到期但还未收到确认时，就要重传这一报文段。"),P("br"),_._v("\n由于 TCP 的下层是一个互联网环境，IP 数据报所选择的路由变化很大，因而传输层的往返时延的方差也很大。为了计算超时计时器的重传时间，TCP 采用一种自适应算法，它记录一个报文段发出的时间，以及收到相应确认的时间，这两个时间之差称为报文段的往返时间（Round-Trip Time，RTT）。TCP 保留了 RTT 的一个加权平均往返时间 RTTs，它会随新测量 RTT 样本值的变化而变化。显然，超时计时器设置的超时重传时间（Retransmission Time-Out，RTO）应略大于 RTTs，但也不能大太多，否则当报文段丢失时，TCP 不能很快重传，导致数据传输时延大。")])]),_._v(" "),P("li",[P("p",[_._v("冗余 ACK（冗余确认）"),P("br"),_._v("\n超时触发重传存在的一个问题是超时周期往往太长。所幸的是，发送方通常可在超时事件发生之前通过注意所谓的冗余 ACK 来较好地检测丢包情况。冗余 ACK 就是再次确认某个报文段的 ACK，而发送方先前已经收到过该报文段的确认。例如，发送方 A 发送了序号为 1、2、3、4、5 的 TCP 报文段，其中 2 号报文段在链路中丢失，它无法到达接收方 B。因此 3、4、5 号报文段对于 B 来说就成了失序报文段。TCP 规定每当比期望序号大的失序报文段到达时，就发送一个冗余 ACK，指明下一个期待字节的序号"),P("code",[_._v("RFC 1122, RFC 2581")]),_._v("。在本例中，3、4、5 号报文到达 B，但它们不是 B 所期望收到的下一个报文，于是 B 就发送 3 个对 1 号报文段的冗余 ACK，表示自己期望接收 2 号报文段。TCP 规定当发送方收到对同一个报文段的 3 个冗余 ACK 时，就可以认为跟在这个被确认报文段之后的报文段已经丢失。就前面的例子而言，当 A 收到对于 1 号报文段的 3 个冗余 ACK 时，它可以认为 2 号报文段已经丢失。这时发送方 A 可以立即对 2 号报文执行重传，这种技术通常称为快速重传。当然，冗余 ACK 还被用在"),P("a",{attrs:{href:"#tcp_congestion_control"}},[_._v("拥塞控制")]),_._v("中。")])])]),_._v(" "),P("h3",{attrs:{id:"tcp-流量控制"}},[P("a",{staticClass:"header-anchor",attrs:{href:"#tcp-流量控制"}},[_._v("#")]),_._v(" TCP 流量控制")]),_._v(" "),P("p",[_._v("TCP 提供流量控制服务来消除发送方使接收方缓存区溢出的可能性，因此可以说流量控制是一个速度匹配服务（匹配发送方的发送速率与接收方的读取速率）。")]),_._v(" "),P("p",[_._v("TCP 提供一种基于滑动窗口协议的流量控制机制，这里要介绍的是 TCP 如何使用窗口机制来实现流量控制。")]),_._v(" "),P("p",[_._v("在通信过程中，接收方根据自己接收缓存的大小，动态地调整发送方的发送窗口大小，这称为"),P("code",[_._v("接收窗口 rwnd")]),_._v("，即调整 TCP 报文段首部中的“窗口”字段值，来限制发送方向网络注入报文的速率。同时，发送方根据其对当前网络拥塞程序的估计而确定的窗口值，这称为"),P("code",[_._v("拥塞窗口 cwnd")]),_._v("，其大小与网络的带宽和时延密切相关。")]),_._v(" "),P("p",[_._v("例如，在通信中，有效数据只从 A 发往 B，而 B 仅向 A 发送确认报文，这时 B 可以通过设置确认报文段首部的窗口字段来将 rwnd 通知给 A。rwnd 即接收方允许连续接收的最大能力，单位是字节。发送方 A 总是根据最新收到的 rwnd 值来限制自己发送窗口的大小，从而将未确认的数据量控制在 rwnd 大小之内，保证 A 不会使 B 的接收缓存溢出。当然，A 的发送窗口的实际大小取 rwnd 和 cwnd 中的最小值。")]),_._v(" "),P("p",[_._v("下图中的例子说明了如何利用滑动窗口机制进行流量控制。设主机 A 向主机 B 发送数据，在连接建立时，B 告诉 A：“我的接收窗口 rwnd=400（字节）”。传输层和数据链路层的流量控制的区别是：传输层定义端到端用户之间的流量控制，数据链路层定义两个中间的相邻结点的流量控制。另外，数据链路层的滑动窗口协议的窗口大小不能动态变化，传输层的则可以动态变化。")]),_._v(" "),P("details",{staticClass:"custom-block details"},[P("summary",[_._v("Click me to view the TCP flow control example")]),_._v(" "),P("p",[P("img",{attrs:{src:t(491),alt:"tcp flow control example"}})])]),_._v(" "),P("div",{attrs:{id:"tcp_congestion_control"}}),_._v(" "),P("h3",{attrs:{id:"tcp-拥塞控制"}},[P("a",{staticClass:"header-anchor",attrs:{href:"#tcp-拥塞控制"}},[_._v("#")]),_._v(" TCP 拥塞控制")]),_._v(" "),P("p",[_._v("所谓拥塞控制，是指防止过多的数据注入网络，保证网络中的路由器或链路不致过载。出现拥塞时，端点并不了解到拥塞发生的细节，对通信连接的端点来说，拥塞往往表现为通信时延的增加。当然，拥塞控制和流量控制也有相似的地方，即它们都通过控制发送方发送数据的速率来达到控制效果。")]),_._v(" "),P("p",[_._v("拥塞控制与流量控制的区别：拥塞控制是让网络能够承受现有的网络负荷，是一个全局性的过程，涉及所有的主机、所有的路由器，以及与降低网络传输性能有关的所有因素。相反，流量控制往往是指点对点的通信量的控制，即接收端控制发送端，它所要做的是抑制发送端发送数据的速率，以便使接收端来得及接收。")]),_._v(" "),P("p",[_._v("例如，某个链路的传输速率为 10Gb/s，某巨型机向一台 PC 以 1Gb/s 的速率传送文件，显然网络的带宽是足够大的，不存在拥塞问题，但如此高的发送速率将导致 PC 可能来不及接收，因此必须进行流量控制。但若有 100 万台 PC 在此链路上以 1Mb/s 的速率传送文件，则现在的问题就变为网络的负载是否超过了现有网络所能承受的范围。")]),_._v(" "),P("p",[_._v("为了更好地对传输层进行拥塞控制，因特网建议标准定义了以下 4 种算法 ∶ 慢开始、拥塞避兔、快重传、快恢复。")]),_._v(" "),P("p",[_._v("发送方在确定发送报文段的速率时，既要根据接收方的接收能力，又要从全局考虑不要使网络发生拥塞。因此，TCP 协议要求发送方维护以下两个窗口")]),_._v(" "),P("ol",[P("li",[P("p",[P("strong",[_._v("接收窗口 rwnd")]),_._v(" ，接收方根据目前接收缓存大小所许诺的最新窗口值，反映接收方的容量。由接收方根据其放在 TCP 报文的首部的窗口字段通知发送方。")])]),_._v(" "),P("li",[P("p",[P("strong",[_._v("拥塞窗口 cwnd")]),_._v(" ，发送方根据自己估算的网络拥塞程度而设置的窗口值，反映网络的当前容量。只要网络未出现拥塞，拥塞窗口就再增大一些，以便把更多的分组发送出去。但只要网络出现拥塞，拥塞窗口就减小一些，以减少注入网络的分组数。")])])]),_._v(" "),P("p",[_._v("发送窗口的上限值应取接收窗口 rwnd 和拥塞窗口 cwnd 中较小的一个，即")]),_._v(" "),P("p",[_._v("发送窗口的上限值 = min[rwnd, cwnd]")]),_._v(" "),P("p",[_._v("注意：接收方总有足够大的缓存空间，因而发送窗口大小由网络的拥塞程度决定，也就是说，可以将发送窗口等同为拥塞窗口。")]),_._v(" "),P("h2",{attrs:{id:"udp-协议"}},[P("a",{staticClass:"header-anchor",attrs:{href:"#udp-协议"}},[_._v("#")]),_._v(" UDP 协议")]),_._v(" "),P("h3",{attrs:{id:"udp-数据报"}},[P("a",{staticClass:"header-anchor",attrs:{href:"#udp-数据报"}},[_._v("#")]),_._v(" UDP 数据报")]),_._v(" "),P("p",[P("strong",[_._v("1. UDP 概述")])]),_._v(" "),P("p",[_._v("RFC 768 定义的 UDP 只是做了传输协议能够做的最少工作，它仅在 IP 的数据报服务之上增加了两个最基本的服务；复用和分用以及差错检测。如果应用程序开发者选择 UDP 而非 TCP，那么应用程序几乎直接与 IP 打交道。")]),_._v(" "),P("p",[_._v("为什么应用开发人员宁愿在 UDP 之上构建应用，也不选择 TCP? 既然 TCP 提供可靠的服务，而 UDP 不提供，那么 TCP 总是首选吗?答案是否定的，因为有很多应用更适合用 UDP，主要是因为 UDP 具有如下优点")]),_._v(" "),P("ul",[P("li",[_._v("UDP 无须建立连接。因此 UDP 不会引入建立连接的时延。试想如果 DNS 运行在 TCP 而非 UDP 上，那么 DNS 的速度会慢很多。HTTP 使用 TCP 而非 UDP，是因为对于基于文本数据的 Web 网页来说，可靠性是至关重要的。")]),_._v(" "),P("li",[_._v("无连接状态。TCP 需要在端系统中维护连接状态。此连接状态包括接收和发送缓存、拥塞控制参数和序号与确认号的参数。而 UDP 不维护连接状态，也不跟踪这些参数。因此，某些专用应用服务器使用 UDP 时，一般都能支持更多的活动客户机。")]),_._v(" "),P("li",[_._v("分组首部开销小。TCP 有 20B 的首部开销，而 UDP 仅有 8B 的开销。")]),_._v(" "),P("li",[_._v("应用层能更好地控制要发送的数据和发送时间。UDP 没有拥塞控制，因此网络中的拥塞不会影响主机的发送效率。某些实时应用要求以稳定的速度发送，能容忍一些数据的丢失，但不允许有较大的时延，而 UDP 正好满足这些应用的需求。")])]),_._v(" "),P("p",[_._v("UDP 常用于一次性传输较少数据的网络应用。如 DNS、SNMP 等，因为对于这些应用，若采用 TCP，则将为连接创建、维护和拆除带来不小的开销。UDP 也常用于多媒体应用（如 IP 电话、实时视频会议、流媒体等），显然，可靠数据传输对这些应用来说并不是最重要的，但 TCP 的拥塞控制会导致数据出现较大的延迟，这是它们不可容忍的。")]),_._v(" "),P("p",[_._v("UDP 提供尽最大努力的交付，即不保证可靠交付，但这并不意味着应用对数据的要求是不可靠的，因此所有维护传输可靠性的工作需要用户在应用层来完成。应用实体可以根据应用的需求来灵活设计自己的可靠性机制。")]),_._v(" "),P("p",[_._v("UDP 是面向报文的。发送方 UDP 对应用层交下来的报文，在添加首部后就向下交付给 IP 层，既不合并，也不拆分，而是保留这些报文的边界;接收方 UDP 对 IP 层交上来 UDP 用户数据报，在去除首部后就原封不动地交付给上层应用进程，一次交付一个完整的报文。因此报文不可分割，是 UDP 数据报处理的最小单位。")]),_._v(" "),P("p",[P("strong",[_._v("2. UDP 的首部格式")])]),_._v(" "),P("p",[_._v("UDP 数据报包含两部分：UDP 首部和用户数据，整个 UDP 数据报作为 IP 数据报的数据部分封装在 IP 数据报中。UDP 首部有 8B，由 4 个字段组成，每个字段的长度都是 2B。各字段意义如下")]),_._v(" "),P("ul",[P("li",[_._v("源端口。源端口号。在需要对方回信时选用，不需要时可用全 0。")]),_._v(" "),P("li",[_._v("目的端口。目的端口号。这在终点交付报文时必须使用到。")]),_._v(" "),P("li",[_._v("长度。UDP 数据报的长度（包括首部和数据），其最小值是 8（仅有首部）。")]),_._v(" "),P("li",[_._v("校验和。检测 UDP 数据报在传输中是否有错。有错就丢弃。该字段是可选的，当源主机不想计算校验和时，则直接令该字段为全 0。")])]),_._v(" "),P("p",[_._v("当传输层从 IP 层收到 UDP 数据报时，就根据首部中的目的端口，把 UDP 数据报通过相应的端口上交给应用进程。")]),_._v(" "),P("p",[_._v("如果接收方 UDP 发现收到的报文中的目的端口号不正确（即不存在对应于端口号的应用进程），那么就丢弃该报文，并由 ICMP 发 UDP 数据报到达送“端口不可达”差错报文给发送方。")]),_._v(" "),P("div",{attrs:{id:"udp_validation"}}),_._v(" "),P("h3",{attrs:{id:"udp-校验"}},[P("a",{staticClass:"header-anchor",attrs:{href:"#udp-校验"}},[_._v("#")]),_._v(" UDP 校验")]),_._v(" "),P("p",[_._v("在计算校验和时，要在 UDP 数据报之前增加 12B 的伪首部，伪首部并不是 UDP 的真正首部。只是在计算校验和时，临时添加在 UDP 数据报的前面，得到一个临时的 UDP 数据报。校验和就是按照这个临时的 UDP 数据报计算的。伪首部既不向下传送也不向上递交，而仅为了计算校验和。这样的校验和，既检查了 UDP 数据报，又对 IP 数据报的源 IP 地址和目的 IP 地址进行了检验。下图给出了 UDP 数据报的伪首部各字段的内容。")]),_._v(" "),P("details",{staticClass:"custom-block details"},[P("summary",[_._v("Click me to view the UDP datagram pseudo header")]),_._v(" "),P("p",[P("img",{attrs:{src:t(492),alt:"udp datagram pseudo header"}})])]),_._v(" "),P("p",[_._v("UDP 校验和的计算方法和 IP 数据报首部校验和的计算方法相似，都使用二进制反码运算求和再取反。但不同的是，IP 数据报的校验和只检验 IP 数据报的首部，但 UDP 的校验和则检查首部和数据部分。")]),_._v(" "),P("p",[_._v("发送方首先把全零放入校验和字段并添加伪首部，然后把 UDP 数据报视为许多 16 位的字连接起来。若 UDP 数据报的数据部分不是偶数个字节，则要在数据部分末尾增加一个全零字节（但此字节不发送）。接下来按二进制反码计算出这些 16 位字的和，并将此和的二进制反码写入校验和字段。接收方把收到的 UDP 数据报加上伪首部（如果不为偶数个字节，那么还需要补上全零字节）后，按二进制反码计算出这些 16 位字的和。当无差错时其结果应全为 1，否则表明有差错出现，接收方就应该丢弃这个 UDP 数据报。")]),_._v(" "),P("p",[_._v("注意 ∶")]),_._v(" "),P("ul",[P("li",[_._v("校验时，若 UDP 数据报部分的长度不是偶数个字节，则需填入一个全 0 字节，但是此字节和伪首部一样，是不发送的。")]),_._v(" "),P("li",[_._v("如果 UDP 校验和校验出 UDP 数据报是错误的，那么可以丢弃，也可以交付给上层，但是需要附上错误报告，即告诉上层这是错误的数据报。")]),_._v(" "),P("li",[_._v("通过伪首部，不仅可以检查源端口号、目的端口号和 UDP 用户数据报的数据部分，还可以检查 IP 数据报的源 IP 地址和目的地址。")])]),_._v(" "),P("p",[_._v("这种简单的差错检验方法的检错能力并不强，但它的好处是简单、处理速度快。")])])}),[],!1,null,null,null);v.default=e.exports}}]);