(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{432:function(s,t,a){"use strict";a.r(t);var n=a(58),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"模板开发"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模板开发"}},[s._v("#")]),s._v(" 模板开发")]),s._v(" "),a("blockquote",[a("p",[s._v("dsshop支持多客户端多模板开发，以下将介绍如何快速开发个性化的客户端模板")]),s._v(" "),a("p",[s._v("模板开发暂时仅支持手动添加和手动切换，现阶段只作插件开发区分所用")])]),s._v(" "),a("h2",{attrs:{id:"目录结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#目录结构"}},[s._v("#")]),s._v(" 目录结构")]),s._v(" "),a("blockquote",[a("p",[a("code",[s._v("client")]),s._v("目录下存放网站和app模板，一般根据目录命名区分是网站还是app，以"),a("code",[s._v("*-web")]),s._v("命名的为网站模板，以"),a("code",[s._v("*-app")]),s._v("命名的为app，然后在对应的目录下再创建自定义命名的目录来保存对应的模板\n现项目支持"),a("code",[s._v("uni-app")]),s._v("和"),a("code",[s._v("nuxt")]),s._v("，如果需要使用其它框架，可自定模板")])]),s._v(" "),a("div",{staticClass:"language-markdown line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-markdown"}},[a("code",[s._v(".\n├── dsshop.config.json\n└── 客户端其它文件\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h3",{attrs:{id:"dsshop-config-json"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dsshop-config-json"}},[s._v("#")]),s._v(" dsshop.config.json")]),s._v(" "),a("blockquote",[a("p",[s._v("模板的一些配置项，用于模板对外展示")])]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"模板名称"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//模板展示名称")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"en"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"英文名称"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//模板英文名称，需和模板目录名保持一致")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"version"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0.0.1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\t "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//模板版本，用于升级")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"describe"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"模板描述"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\t "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//模板模板描述")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"imgList"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\t "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//模板效果图，支持多张")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h3",{attrs:{id:"自定义前端模板ds文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义前端模板ds文件"}},[s._v("#")]),s._v(" 自定义前端模板ds文件")]),s._v(" "),a("blockquote",[a("p",[s._v("如我想写个"),a("code",[s._v("flutter")]),s._v("项目并能使用插件添加生成基于"),a("code",[s._v("flutter")]),s._v("的模板，只需要在"),a("code",[s._v("plugin\\template")]),s._v("目录下，新建模板即可，命名格式带上"),a("code",[s._v("flutter")]),s._v("，")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("list.client.flutter-app.ds\nlist.client.flutter-app.js.ds\ndetail.client.flutter-app.ds\ndetail.client.flutter-app.js.ds\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);