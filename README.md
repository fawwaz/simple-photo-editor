# Album Editor

## Demo

Insert Gif recording here

For demo, please visit [fawwaz.github.io/simple-photo-editor](https://fawwaz.github.io/simple-photo-editor)

## Requirements

1. Able to load image to canvas
2. Able to modify, resize image, move the image around canvas
3. Store the snapshot of the canvas (in json format)
4. Restore the canvas by loading stored snapshot json data

## Run The App

To start the app

```
git clone
yarn
yarn dev
```

Then open `localhost:3000` on your browser

For production build, simply run

```
yarn build
```

Note: You need Node 16 to run the app

## Project Structure

I like to organize my app based on domain, then by functions. I found this folder structure is very convenient for future usecase.

Here is my folder overall structure

```
# src
## editor
### components
### contexts
## shared (shared stuff, across domains)
### contexts
### hooks
```

Since currently we only have 1 domain (editor), there is only 1 folder inside `src`.

## Tech Stack

1. Next.js (React)
   Best Developer Experience, easy to setup.
2. FabricJS  
   Provide a good abstraction over canvas API.
3. clsx  
   A smaller alternative to `clasnames` package.
4. tailwind
   css framework with built-in optimization
