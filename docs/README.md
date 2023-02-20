📢 Use this project, [contribute](https://github.com/{OrganizationName}/{AppName}) to it or open issues to help evolve it using [Store Discussion](https://github.com/vtex-apps/store-discussion).

# Bullet Diagramation

<!-- DOCS-IGNORE:start -->
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-0-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->
<!-- DOCS-IGNORE:end -->

Context of elements that will render the lower levels of navigation within a list of bullets with images.

<img width="1863" alt="image" src="https://user-images.githubusercontent.com/66226368/219800766-f68cf685-7cec-40e3-9efb-bc46d391a222.png">

## Configuration 

1. Import the Bullet Diagramation's app to your theme's dependencies in the manifest.json, for example:
```json
  dependencies: {
    "{vendor}.bullets-diagramation": "0.x"
  }
 ```
 
 2. Add the list-context block to the store-theme. For example:
```json
 {
  "flex-layout.row#bullet-group":{
    "props": {
      "blockClass": "container-section-3"
    },
    "children": [
      "list-context.bullet-group"
    ]
  },
  "list-context.bullet-group": {
    "title": "Bullet Group Component",
    "children": ["slider-layout#bullet-group"],
    "props": {
      "bullets": [
        {
          "image":"assets/img/tv.png",
          "titleBullet":"Televisores",
          "link":{
            "url": "/electrodomesticos"
          }
        },
        {
          "image":"assets/img/phone.png",
          "titleBullet":"Celulares",
          "link":{
            "url": "/celulares"
          }
        }
      ]
    }
  }
 }
   ```

 Block name     | Description                                      |
| -------------- | ----------------------------------------------- |
| `product-list.bullet-group` | ![https://img.shields.io/badge/-Mandatory-red](https://img.shields.io/badge/-Mandatory-red)  Top level block that must be declared in the store-theme block to render a default detailed list with all bullets   |

### list-context.bullet-group props

| Prop name    | Type            | Description    | Default Value                                                     |
| ------------ | --------------- | --------------------------------------------------------------------- | ---------- | 
| `bullet`        | `Array`       | Define the bullet array to render in the list-context       | `undefined`              |


### bullets props

| Prop name    | Type            | Description    | Default value                                                                                                                               |
| ------------ | --------------- | --------------------------------------------------------------------- | ---------- | 
| `img`        | `String`       | Define the image to render in the list-context       | `undefined`              |
| `titleBullet`        | `String`       | Define the title to render in the list-context       | `undefined`              |
| `Link`        | `LinkProps`       |  Define the url to render in the list-context       | `undefined`              |


## Customization

In order to apply CSS customizations in this and other blocks, follow the instructions given in the recipe on [Using CSS Handles for store customization](https://vtex.io/docs/recipes/style/using-css-handles-for-store-customization).

| CSS Handles |
| ----------- | 
| `bullet__item` | 
| `bullet__item--title` | 
| `bullet__item--image` | 
| `bullet__item--link` | 

<!-- DOCS-IGNORE:start -->

## Contributors ✨

Thanks goes to these wonderful people:

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind are welcome!

<!-- DOCS-IGNORE:end -->

---- 

Check out some documentation models that are already live: 
- [Breadcrumb](https://github.com/vtex-apps/breadcrumb)
- [Image](https://vtex.io/docs/components/general/vtex.store-components/image)
- [Condition Layout](https://vtex.io/docs/components/all/vtex.condition-layout@1.1.6/)
- [Add To Cart Button](https://vtex.io/docs/components/content-blocks/vtex.add-to-cart-button@0.9.0/)
- [Store Form](https://vtex.io/docs/components/all/vtex.store-form@0.3.4/)
