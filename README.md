<a href="http://www.bornfight.com">
<img width="84px" src="https://www.bornfight.com/wp-content/themes/bf/static/ui/BF-sign-dark.svg?" title="Bornfight" alt="Bornfight">
</a>

# b-scroll-to [[all b- libs](https://github.com/bornfight/b-lib-archive/)]
> Bornfight frontend micro lib for smooth scrolling

![GitHub package.json version](https://img.shields.io/github/package-json/v/bornfight/b-scroll-to?style=flat-square)
![GitHub package.json dynamic](https://img.shields.io/github/package-json/keywords/bornfight/b-scroll-to?style=flat-square)
![GitHub issues](https://img.shields.io/github/issues/bornfight/b-scroll-to?style=flat-square)
![GitHub](https://img.shields.io/github/license/bornfight/b-scroll-to?style=flat-square)


## 📦 Getting Started

Dependency: `gsap`

- install `b-scroll-to` trough __npm__ or pull ti from git

```
npm i @bornfight/b-scroll-to
```

- include b-scroll-to to your __JS__ after running __npm install__

## 🔨️ Usage 
###### JS
``` JS
import ScrollTo from "@bornfight/b-scroll-to";

new ScrollTo();
```

##### HTML markup

```HTML
<a href="" data-scroll-to="#target" data-offset="100">
    Scroll to target
</a>
```

##### Basic usage tips
- `data-scroll-to` can be id or class of target element
- `data-offset` is type number with value in pixels
     
## 💎 Customization

```JS
new ScrollTo({
    ease: 'expo.ease-out'
    duration: 5
});
```

## ✅ Properties

Option | Type | Default | Example | Description
------ | ---- | ------- | ------- | -----------
ease | string | "power3.ease-in-out" | "expo.ease-out" | Scroll ease can be modified (gsap eases) 
duration | number | 1 | 10 | Duration of the scroll in seconds 
   
### 📦 Contribute

#### Gulp based system 
 - [Gulp](https://gulpjs.com/) 4 used
 - [browsersync](https://browsersync.io/) for live reload
 
```bash
npm run dev - dev environent with browsersync
```

## License

MIT © [Bornfight](https://www.bornfight.com)
