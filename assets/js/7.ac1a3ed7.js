(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{364:function(t,s,a){"use strict";a.r(s);var n=a(42),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"开发文档"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开发文档"}},[t._v("#")]),t._v(" 开发文档")]),t._v(" "),a("p",[t._v("以下只根据本项目与其它第三方文档有所出入的内容进行讲解，如开发过程中碰到问题，请进群咨询。")]),t._v(" "),a("h2",{attrs:{id:"后台"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#后台"}},[t._v("#")]),t._v(" 后台")]),t._v(" "),a("h3",{attrs:{id:"新功能开发"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#新功能开发"}},[t._v("#")]),t._v(" 新功能开发")]),t._v(" "),a("h4",{attrs:{id:"添加权限"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#添加权限"}},[t._v("#")]),t._v(" 添加权限")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("首先登录后台，选择"),a("code",[t._v("用户管理->权限管理")])])]),t._v(" "),a("li",[a("p",[t._v("我们将在工具栏目下添加了个轮播功能，所以权限管理->搜索工具，然后选择任一同级类目，点“复制”（也可直接点“添加”）\n"),a("img",{attrs:{src:"/01.png",alt:""}})])]),t._v(" "),a("li",[a("p",[t._v("填写权限名称、API、选择分组，点击确定(这里需要注意的是，当子类有存在“显示”的权限时，父类权限将不会显示，如下面的轮播列表会覆盖这里的“轮播管理”权限)\n"),a("img",{attrs:{src:"/02.png",alt:""}})])]),t._v(" "),a("li",[a("p",[t._v("按2、3步骤，创建“轮播列表”、“添加轮播”、“编辑轮播”、“轮播删除”\n"),a("img",{attrs:{src:"/03.png",alt:""}})])]),t._v(" "),a("li",[a("p",[t._v("选择"),a("code",[t._v("用户管理->管理组管理")]),t._v("，选择一个角色，点击“编辑”，刚添加的权限就会出现在“权限”的未分配中，将未分配的权限移到已分配就可以完成权限分配（有时候添加的权限，并不会在未分配中显示，如上面我们再添加“轮播详情”的权限，然后会发现未分配的权限并没有出现这个权限，那么我们需要在已分配的权限中，将“轮播管理”整个大类移到未分配中，点保存后，再次打开，就会出现刚才添加的“轮播详情”了，然后再将它移动到已分配列表中即可完成权限分配）\n"),a("img",{attrs:{src:"/04.png",alt:""}})])]),t._v(" "),a("li",[a("p",[t._v("F5刷新下页面，左侧菜单栏就会出现刚才添加的“轮播列表”了")])]),t._v(" "),a("li",[a("p",[t._v("添加路由，打开"),a("code",[t._v("api->routes->api.php")]),t._v("，在"),a("code",[t._v("Route::prefix('admin')->namespace('Admin')->middleware(['auth:api'])->group(function () {")]),t._v("最后添加以下代码(格式"),a("code",[t._v("Route::get('访问的路由名称', '对应的控制器对应的方法')->middleware(['后台验证中间件']);")]),t._v(")")])])]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//轮播")]),t._v("\nRoute"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'banner'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'BannerController@index'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("middleware")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'permissions:BannerList'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//轮播列表")]),t._v("\nRoute"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("post")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'banner'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'BannerController@store'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("middleware")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'permissions:CreateBanner'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//轮播添加保存")]),t._v("\nRoute"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("put")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'banner/{photo}'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'BannerController@update'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("middleware")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'permissions:EditBanner'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//轮播编辑保存")]),t._v("\nRoute"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("delete")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'banner/{photo}'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'BannerController@destroy'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("middleware")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'permissions:DeleteBanner'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//轮播删除")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("p",[a("img",{attrs:{src:"/08.png",alt:""}})]),t._v(" "),a("h4",{attrs:{id:"添加模板权限"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#添加模板权限"}},[t._v("#")]),t._v(" 添加模板权限")]),t._v(" "),a("p",[t._v("根据上一步操作后，你会发现，虽然栏目已经创建，但点击后显示的是空白页面，那是因为我们还没有创建模板权限和创建模板")]),t._v(" "),a("ol",[a("li",[t._v("打开项目"),a("code",[t._v("根目录->admin->src->store->modules->permission.js")]),t._v("找到"),a("code",[t._v("componentsMap")]),t._v("，在最后一行添加如下代码")])]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 轮播")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("Banner")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@/views/tool/Banner/index'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("BannerList")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@/views/tool/Banner/list'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[a("img",{attrs:{src:"/05.png",alt:""}})]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[a("p",[t._v("进入"),a("code",[t._v("根目录->admin->src->views->tool")]),t._v("目录，在下面添加以"),a("code",[t._v("Banner")]),t._v("命名的目录，并添加对应的模板，模板可以参考同级模板，如这里可以参考"),a("code",[t._v("redisService")]),t._v("也可以直接复制"),a("code",[t._v("根目录->template->vue")]),t._v("中以后缀为vue的文件，然后进行修改，模板用到的都是VUE语法，这里如果还没有学会VUE的话，请先学习VUE后再进行修改\n"),a("img",{attrs:{src:"/06.png",alt:""}})])]),t._v(" "),a("li",[a("p",[t._v("添加api文件，"),a("code",[t._v("根目录->admin->src->api")]),t._v("，复制一份api的js，也可以直接复制"),a("code",[t._v("根目录->template->vue")]),t._v("中以后缀为 js的文件，将里面的url改成"),a("code",[t._v("banner")]),t._v("（这里的url可自己命名，但需要和上面配置的路径一样）\n"),a("img",{attrs:{src:"/07.png",alt:""}})])]),t._v(" "),a("li",[a("p",[t._v("现在就可以正常访问“轮播管理”了")])])]),t._v(" "),a("h3",{attrs:{id:"基于原有功能扩展"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基于原有功能扩展"}},[t._v("#")]),t._v(" 基于原有功能扩展")]),t._v(" "),a("p",[t._v("根据上面的步骤，你应该已经会添加功能模块了，现在你想对已有的功能模板进行二次开发，就变的更容易了，下面简单的介绍下步骤")]),t._v(" "),a("ol",[a("li",[t._v("通过地址栏,如下图（这里命名首字母都是小写），我们就可以在"),a("code",[t._v("admin->src->store->modules->permission.js")]),t._v("中找到对应的文件所在位置了\n"),a("img",{attrs:{src:"/09.png",alt:""}})]),t._v(" "),a("li",[t._v("修改功能后，切记为添加的权限添加"),a("code",[t._v('v-permission="$store.jurisdiction.[权限]"')]),t._v("，不然你所创建的功能中的权限将失效，如添加、编辑、删除将不受权限分配限制")])]),t._v(" "),a("h2",{attrs:{id:"前台"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前台"}},[t._v("#")]),t._v(" 前台")]),t._v(" "),a("ol",[a("li",[t._v("前台采用uni-app开发，会uni-app即可，这里就不进行说明了")])])])}),[],!1,null,null,null);s.default=r.exports}}]);