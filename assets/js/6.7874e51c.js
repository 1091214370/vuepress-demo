(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{153:function(t,e,s){"use strict";s.r(e);var r=s(0),i=Object(r.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[s("p",[t._v("首先纠正自己一个错误，之前说部署到github，其实全面的说法应该是部署到git服务器---包括github和自己搭建的git服务器。我们可以在服务器上面搭建一个自己的git服务，设置hook，当我们在本地完成push后，服务端自动将push的内容复制到网站服务器的预留的目录下，完成网站服务器的部署。")]),t._m(0),t._m(1),t._m(2),s("p",[t._v("修改配置：")]),t._m(3),t._m(4),t._m(5),t._m(6),s("p",[t._v("以我个人配置为例：")]),t._m(7),t._m(8),s("p",[t._v("在github里面打开github page，即可访问。")]),s("p",[t._v("github page打开方法，在项目的setting里。向下翻，找到github page一栏，Source选项下的按钮save一下，就会在上方多一个链接，点击链接即可查看。")]),t._m(9),s("p",[t._v("具体详细的步骤可以参考"),s("a",{attrs:{href:"https://segmentfault.com/a/1190000009363890",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),s("OutboundLink")],1),t._v("。文章介绍的很详细，里面有个坑，注意看评论哦。")]),s("p",[t._v("end")])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"主角登场"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#主角登场","aria-hidden":"true"}},[this._v("#")]),this._v(" 主角登场")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("安装 "),e("code",[this._v("hexo-deployer-git")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("npm install hexo-deployer-git --save")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("deploy:\n  type: git\n  repo: <repository url>\n  branch: [branch]\n  message: [message]\n  \n")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("thead",[s("tr",[s("th",[t._v("参数")]),s("th",[t._v("描述")])])]),s("tbody",[s("tr",[s("td",[t._v("repo")]),s("td",[t._v("库（Repository）地址")])]),s("tr",[s("td",[t._v("branch")]),s("td",[t._v("分支名称。如果您使用的是 GitHub 或 GitCafe 的话，程序会尝试自动检测。")])]),s("tr",[s("td",[t._v("message")]),s("td",[t._v("自定义提交信息 (默认为 Site updated: now('YYYY-MM-DD HH:mm:ss') )")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("在_config.yml里面添加配置，然后执行"),e("code",[this._v("hexo clear && hexo g -d")]),this._v(" 便可以将编译后的静态文件提交到git服务器。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"部署到github"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#部署到github","aria-hidden":"true"}},[this._v("#")]),this._v(" 部署到github")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v(" type: git\n  repo: git@github.com:1091214370/doc.git\n  branch: master\n\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("执行"),e("code",[this._v("hexo clean && hexo g -d")]),this._v("，系统会自动的将public文件夹里的内容提交到配置好的git仓库。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"部署服务器上面自己搭建的git"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#部署服务器上面自己搭建的git","aria-hidden":"true"}},[this._v("#")]),this._v(" 部署服务器上面自己搭建的git")])}],!1,null,null,null);e.default=i.exports}}]);