(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{429:function(t,s,n){"use strict";n.r(s);var a=n(58),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"命名规范"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#命名规范"}},[t._v("#")]),t._v(" 命名规范")]),t._v(" "),n("blockquote",[n("p",[t._v("项目采用驼峰命名法规范命名\n以英文主谓宾方式命名")])]),t._v(" "),n("h3",{attrs:{id:"后台模板命名规范"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#后台模板命名规范"}},[t._v("#")]),t._v(" 后台模板命名规范")]),t._v(" "),n("ul",[n("li",[t._v("权限以首字母大写命名，如"),n("code",[t._v("AdminList")])]),t._v(" "),n("li",[t._v("目录以首字母大写命名，如"),n("code",[t._v("Admin")])]),t._v(" "),n("li",[t._v("文件以首字母小写命名，如"),n("code",[t._v("list")])]),t._v(" "),n("li",[t._v("通过路由可以很方便查找到对应的文件，以提高开发效率")])]),t._v(" "),n("h3",{attrs:{id:"uni-app模板命名规范"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#uni-app模板命名规范"}},[t._v("#")]),t._v(" uni-app模板命名规范")]),t._v(" "),n("h3",{attrs:{id:"后端命名规范"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#后端命名规范"}},[t._v("#")]),t._v(" 后端命名规范")]),t._v(" "),n("blockquote",[n("p",[t._v("以下列路由结构来讲")])]),t._v(" "),n("div",{staticClass:"language-php line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 资源路由")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("Route")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'brand'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'BrandController@list'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("middleware")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'permissions:BrandList'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//品牌列表")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("Route")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'brand/{id}'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'BrandController@detail'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("middleware")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'permissions:BrandEdit'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//品牌详情")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("Route")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("post")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'brand'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'BrandController@create'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("middleware")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'permissions:BrandCreate'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//品牌添加保存")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("Route")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("post")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'brand/{id}'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'BrandController@edit'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("middleware")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'permissions:BrandEdit'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//品牌编辑保存")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("Route")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("post")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'brand/destroy/{id}'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'BrandController@destroy'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("middleware")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'permissions:BrandDestroy'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//品牌删除")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 当资源路由中有其它路由，采用以下命名方式（因为存在详情路由，单一路由将失效，故采用以下方法命名）")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("Route")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'goodCategory'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'GoodController@category'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//商品分类展示")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 详情也可以按以下命名")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("Route")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'brand/detail/{id}'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'BrandController@detail'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("middleware")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'permissions:BrandEdit'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//品牌详情")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("Route")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'brand/outh'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'BrandController@detail'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("middleware")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'permissions:BrandEdit'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//这样其它的动作就可以直接添加，而不需要采用驼峰命名法了")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 单一路由")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("Route")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("post")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'user/notification'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'UserController@notification'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//更新通知状态")]),t._v("\n\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br")])]),n("ul",[n("li",[t._v("通过以上路由，应该可以看出一定规律了，一般访问路由和控制器名称一样，权限的动作对应控制器的方法名")]),t._v(" "),n("li",[t._v("资源路由")])]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("动作")]),t._v(" "),n("th",[t._v("URI")]),t._v(" "),n("th",[t._v("行为")]),t._v(" "),n("th",[t._v("路由名称")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("GET")]),t._v(" "),n("td",[t._v("/photos")]),t._v(" "),n("td",[t._v("列表(list)")]),t._v(" "),n("td",[t._v("photos.list")])]),t._v(" "),n("tr",[n("td",[t._v("GET")]),t._v(" "),n("td",[t._v("/photos/{photo}")]),t._v(" "),n("td",[t._v("详情(details)")]),t._v(" "),n("td",[t._v("photos.details")])]),t._v(" "),n("tr",[n("td",[t._v("POST")]),t._v(" "),n("td",[t._v("/photos")]),t._v(" "),n("td",[t._v("添加保存（create）")]),t._v(" "),n("td",[t._v("photos.create")])]),t._v(" "),n("tr",[n("td",[t._v("POST")]),t._v(" "),n("td",[t._v("/photos/{photo}")]),t._v(" "),n("td",[t._v("编辑保存（edit）")]),t._v(" "),n("td",[t._v("photos.edit")])]),t._v(" "),n("tr",[n("td",[t._v("POST")]),t._v(" "),n("td",[t._v("/photos/destroy/{photo}")]),t._v(" "),n("td",[t._v("删除(destroy)")]),t._v(" "),n("td",[t._v("photos.destroy")])])])]),t._v(" "),n("ul",[n("li",[t._v("单一路由")]),t._v(" "),n("li",[t._v("路由以控制器名+方法名命名")])])])}),[],!1,null,null,null);s.default=e.exports}}]);