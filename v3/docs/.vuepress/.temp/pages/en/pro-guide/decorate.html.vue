<template><div><h1 id="fitment" tabindex="-1"><a class="header-anchor" href="#fitment"><span>Fitment</span></a></h1>
<h2 id="board" tabindex="-1"><a class="header-anchor" href="#board"><span>Board</span></a></h2>
<blockquote>
<p>Decoration is divided into two sections, a mall section, a page section</p>
</blockquote>
<h3 id="mall" tabindex="-1"><a class="header-anchor" href="#mall"><span>Mall</span></a></h3>
<blockquote>
<p>Used to set the bottom navigation, you can configure 1-4 navigation (excluding the home page), links only support micro pages and custom pages</p>
<p>Icon support custom, through <code v-pre>tfshop-pro\client\uni-app\mall-cook\mall-cook-platform\public\index.html</code> to introduce the icon file, <code v-pre>tfshop-pro\client\uni-app\mall-cook\mall-cook-platform\src\components\IconSelect\index.vue</code> file to add a new icon, Refer to &lt; https://www.uviewui.com/guide/customIcon.html &gt;</p>
</blockquote>
<h3 id="page" tabindex="-1"><a class="header-anchor" href="#page"><span>page</span></a></h3>
<blockquote>
<p>Can decorate the home page and customize new pages</p>
<p>Drag and drop layout, not too much here</p>
</blockquote>
<h2 id="convenient-method" tabindex="-1"><a class="header-anchor" href="#convenient-method"><span>Convenient method</span></a></h2>
<h4 id="isiframe" tabindex="-1"><a class="header-anchor" href="#isiframe"><span>isIframe</span></a></h4>
<blockquote>
<p>It is used to distinguish between layout mode and operation mode, and is generally used for the default data of materials in layout mode</p>
<p>Usage: In the material page to introduce <code v-pre>isIframe</code>, when the need to determine whether <code v-pre>isIframe</code> is <code v-pre>true</code>, is <code v-pre>true</code> is the current layout mode</p>
</blockquote>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>script<span class="token operator">></span>
    <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">inject</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"isIframe"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token operator">...</span>
    <span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="unit" tabindex="-1"><a class="header-anchor" href="#unit"><span>$unit</span></a></h4>
<blockquote>
<p>Used to convert numbers to style units rpx</p>
</blockquote>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$unit</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 10rpx</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="configuration-description" tabindex="-1"><a class="header-anchor" href="#configuration-description"><span>Configuration description</span></a></h2>
<blockquote>
<p>Other properties can be customized by <code v-pre>tfshop-pro\client\uni-app\mall-cook\mall-cook-platform\src\custom-schema-template\components</code>. For use in <code v-pre>component.json</code></p>
<p>The icon can be obtained from the icon in the mall navigation</p>
<p>The following are the system attributes</p>
</blockquote>
<table>
<thead>
<tr>
<th>property</th>
<th>Type</th>
<th>description</th>
</tr>
</thead>
<tbody>
<tr>
<td>number</td>
<td>number</td>
<td>slider</td>
</tr>
<tr>
<td>string</td>
<td>string</td>
<td>Enter</td>
</tr>
<tr>
<td>time</td>
<td>string</td>
<td>datetime</td>
</tr>
<tr>
<td>select</td>
<td>string</td>
<td>The option box</td>
</tr>
<tr>
<td>color</td>
<td>string</td>
<td>The color selector</td>
</tr>
<tr>
<td>goods</td>
<td>Array</td>
<td>The item selector</td>
</tr>
<tr>
<td>upload</td>
<td>string</td>
<td>Image uploaded at</td>
</tr>
<tr>
<td>switch</td>
<td>boolean</td>
<td>switch selector</td>
</tr>
<tr>
<td>jump</td>
<td>Object</td>
<td>The route selector</td>
</tr>
</tbody>
</table>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
    <span class="token string-property property">"session"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">"label"</span><span class="token operator">:</span> <span class="token string">"Whether to display the session"</span><span class="token punctuation">,</span>
        <span class="token string-property property">"type"</span><span class="token operator">:</span> <span class="token string">"switch"</span><span class="token punctuation">,</span>
        <span class="token string-property property">"value"</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="develop-material" tabindex="-1"><a class="header-anchor" href="#develop-material"><span>Develop material</span></a></h2>
<blockquote>
<p>Material location <code v-pre>tfshop-pro\client\uni-app\mall-cook\mall-cook-template\src\widgets</code> directory, each directory is one material</p>
</blockquote>
<h2 id="create-a-material" tabindex="-1"><a class="header-anchor" href="#create-a-material"><span>Create a material</span></a></h2>
<blockquote>
<p>The following takes the production of a second kill material as an example</p>
</blockquote>
<ul>
<li>Make a copy of the material and name it TfSeckill and rename the vue file TfSeckill, and change the name of TfSeckill to TfSeckill</li>
</ul>
<p><img src="/image/20240704153153.png" alt="图片"></p>
<ul>
<li>Modified mane in <code v-pre>\component.json</code> to kill seconds to distinguish other components</li>
</ul>
<p><img src="/image/20240704153556.png" alt="图片"></p>
<ul>
<li>Modify <code v-pre>tfshop-pro\client\uni-app\mall-cook\mall-cook-template\src\components\render-widget.vue</code>, add the TfSeckill component, the following is the reference code, The actual component code for you to copy, what parameters can not be changed, the later will be modified step by step</li>
</ul>
<p><img src="/image/20240704154045.png" alt="图片"></p>
<ul>
<li>Then go to the decoration page, you can see the newly added components kill seconds</li>
</ul>
<p><img src="/image/20240704154334.png" alt="图片"></p>
<h2 id="preparation-material" tabindex="-1"><a class="header-anchor" href="#preparation-material"><span>Preparation material</span></a></h2>
<ul>
<li>Write the interface for TfSeckill (generate the required interface through vue+css), do not need to consider the interaction code for the time being, as follows
<img src="/image/20240705134843.png" alt="图片"></li>
<li>Modify the <code v-pre>component.json</code> code, here refer to the previous &quot;configuration instructions&quot;, mainly to achieve dynamic modifications to the style and layout of the material.</li>
<li>Parameters defined by <code v-pre>fields</code> of <code v-pre>component.json</code> need to be imported in the <code v-pre>render-widget.vue</code> and material pages (since uni-app does not support v-bind, it needs to be imported manually)</li>
</ul>
</div></template>


