# Fitment

## Board
> Decoration is divided into two sections, a mall section, a page section
>
### Mall
> Used to set the bottom navigation, you can configure 1-4 navigation (excluding the home page), links only support micro pages and custom pages
>
> Icon support custom, through `tfshop-pro\client\uni-app\mall-cook\mall-cook-platform\public\index.html` to introduce the icon file, `tfshop-pro\client\uni-app\mall-cook\mall-cook-platform\src\components\IconSelect\index.vue` file to add a new icon, Refer to < https://www.uviewui.com/guide/customIcon.html >
>
### page
> Can decorate the home page and customize new pages
>
> Drag and drop layout, not too much here
>
## Convenient method
#### isIframe
> It is used to distinguish between layout mode and operation mode, and is generally used for the default data of materials in layout mode
>
> Usage: In the material page to introduce `isIframe`, when the need to determine whether `isIframe` is `true`, is `true` is the current layout mode
```js
<script>
    export default {
        inject: ["isIframe"],
        ...
    }
</script>
```
#### $unit
> Used to convert numbers to style units rpx
```js
this.$unit(10); // 10rpx
```
## Configuration description
> Other properties can be customized by `tfshop-pro\client\uni-app\mall-cook\mall-cook-platform\src\custom-schema-template\components`. For use in `component.json`
>
> The icon can be obtained from the icon in the mall navigation
>
> The following are the system attributes
>

| property | Type | description |
| ------------ | ------------ | ------------ |
|number|number| slider |
|string|string| Enter | for the form
|time|string| datetime |
|select|string| The option box |
|color|string| The color selector |
|goods|Array| The item selector |
|upload|string| Image uploaded at |
|switch|boolean| switch selector |
|jump|Object| The route selector |

```js
{
    "session": {
        "label": "Whether to display the session",
        "type": "switch",
        "value": true
    },
}
```
## Develop material
> Material location `tfshop-pro\client\uni-app\mall-cook\mall-cook-template\src\widgets` directory, each directory is one material
>
## Create a material
> The following takes the production of a second kill material as an example
- Make a copy of the material and name it TfSeckill and rename the vue file TfSeckill, and change the name of TfSeckill to TfSeckill

![图片](/image/20240704153153.png)
- Modified mane in `\component.json` to kill seconds to distinguish other components

![图片](/image/20240704153556.png)
- Modify `tfshop-pro\client\uni-app\mall-cook\mall-cook-template\src\components\render-widget.vue`, add the TfSeckill component, the following is the reference code, The actual component code for you to copy, what parameters can not be changed, the later will be modified step by step
  
![图片](/image/20240704154045.png)
-  Then go to the decoration page, you can see the newly added components kill seconds

![图片](/image/20240704154334.png)
## Preparation material
- Write the interface for TfSeckill (generate the required interface through vue+css), do not need to consider the interaction code for the time being, as follows
![图片](/image/20240705134843.png)
- Modify the `component.json` code, here refer to the previous "configuration instructions", mainly to achieve dynamic modifications to the style and layout of the material.
- Parameters defined by `fields` of `component.json` need to be imported in the `render-widget.vue` and material pages (since uni-app does not support v-bind, it needs to be imported manually)

