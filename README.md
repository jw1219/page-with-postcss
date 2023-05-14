# Page Built With PostCSS

[PostCSS](https://postcss.org/) is a CSS transpiler that converts modern or experimental CSS to something stable across most browsers.  
In essence, it's like babel transforming modern Javascript to older versions for most browsers to understand.

## PostCSS Preset Env

PostCSS is highly configurable. We can install and set various plugins to make it more powerful, of which an important one is the [PostCSS Preset Env](https://preset-env.cssdb.org/) plugin.  

This plugin allows us to use new CSS features listed [here](https://preset-env.cssdb.org/features/) by transforming them to something stable enough that most browsers support. Many of these features are still in the experimental stage (see [stage]() for more information), but they make our life a lot easier as developers so we'd like to use them sooner rather than later. PostCSS makes it possible for us to do so.


## Setup

Starting a PostCSS project can be tricky as there's a lot of stuff to install and set up, so I recommend using a build tool like [vite](https://vitejs.dev/) which supports PostCSS out of the box, has the assets pipeline wired up, minifies our production code by default and does other heavy-lifting for us. We only need to worry about _how_ we want to use it.

## How to Use This Repo

Clone it and run:

```bash
npm i
```

Once it's done, run:

```bash
npm run dev
```

And open the page in your browser and you should see the page.  

In this specific example, I used the following new CSS features,

- Nested rules
- Custom media queries
- Media query ranges

Please note that you may need to configure your PostCSS to enable these features.  
For more information, check out its [docs](https://github.com/csstools/postcss-preset-env#features).
