<template><div><h1 id="deploy" tabindex="-1"><a class="header-anchor" href="#deploy"><span>Deploy</span></a></h1>
<h2 id="api-deployment" tabindex="-1"><a class="header-anchor" href="#api-deployment"><span>API deployment</span></a></h2>
<ol>
<li>Package and upload the API project to the server</li>
<li>After the decompression, modify the <code v-pre>.env</code>information</li>
</ol>
<h2 id="background-deployment" tabindex="-1"><a class="header-anchor" href="#background-deployment"><span>Background deployment</span></a></h2>
<ol>
<li>Go to the background directory and modify the configuration information <code v-pre>prod.env.js</code></li>
<li>Execute the package <code v-pre>npm run build:prod</code></li>
<li>Then upload the generated file to the server, or send it to others for direct access (requires the other party to have a local environment, double-click to access index.html is invalid)</li>
</ol>
<h2 id="uniapp-deployment" tabindex="-1"><a class="header-anchor" href="#uniapp-deployment"><span>uniapp deployment</span></a></h2>
<ol>
<li>Open Huilder X, select release, release to the desired terminal can be, please modify the configuration information <code v-pre>config.js</code> before release</li>
</ol>
</div></template>


