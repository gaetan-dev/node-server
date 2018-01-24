# Node Starter
___

It's a simple starter to begin a nodejs server. 

Provide :
* development server (auto reload, auto lint)
* linter
* doc generation
* tests (todo)
* packager for prod

## Folder and file structure

To begin with, the important parts of the structure for now are:

```
├──  build/
│
├──  doc/
│
├──  node_modules/
│
├──  src/
│   ├──  app.js
│   ├──  boot.js
│   └──  server.js
│
├──  test/
│    
├──  .gitignore
├──  jsdoc.conf
├──  nodemon.json
├──  package.json
├──  README.md
└──  webpack.config.js

```

* **build/**: Our output folder.
* **node_modules/**: All modules described in `package.json` will be automatically placed here using `npm` commands.
* **doc/**: All documentation generate by JsDoc
* **src/**: Our source code base folder.
* **src/app.js**: Our App entry.
* **src/boot.js**: boot.js is used to transcompile ES6 code. Like this we don't need a task runner to transcompile our javascript. The configuration of babel-core is done in package.json.
* **src/server.js**: Create and launch our server.
* **jsdoc.conf**: Default JsDoc configuration file.
* **nodemon.json**: Default Nodemon configuration file.
* **package.json**: Holds project configuration.
* **webpack.config.json**: Default Webpack configuration file.

## Todo
* Add test

## Nodemon
Auto reload and auto lint

## Webpack
Package for prod
Launch Lint, Test (not yet) and Doc