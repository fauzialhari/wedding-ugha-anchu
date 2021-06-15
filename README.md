# PROJECT BOILERPLATE

Webpack setup for PROJECT BOILERPLATE

### Objective

Provide a complete setup for project. Features :

- JavaScript and CSS bundling
- Pug template compiling to HTML
- Batch image optimization
- Hot Module Replacement (pug template, scss and js) when development
- Production build configuration with optimization and versioning

Adds on:

- eslint
- stylelint
- prettier
- git pre-commit hooks
- javascript testing with jest
- javascript static type checking with flow
- lazy loading images
- work offline using workbox (https://developers.google.com/web/tools/workbox/guides/codelabs/webpack)
- husky & lint-staged

**Project Structure**
| **Folder** | **Contents** | **Notes** |
| :---------------------- | :---------------------------------------------------------------------------------------------------------------------------- | :-------------------------------- |
| **`src/`** | Project source code | |
| **`├──img/`** | image source files | _→_ `dist/img` |
| **`├──script/`** | **`.js`** source files | _→_ `dist/js/` |
| **`├────__tests__/`** | script test source | |
| **`├──style/`** | **`.scss`** source files | _→_ `dist/css/` |
| **`dist/`** | Distributable bundles | |
| **`├──fonts/`** | compiled fonts files | |
| **`├──img/`** | compressed images files | |
| **`├──js/`** | bundled js files | |
| **`├──css/`** | bundled css files | |
| **`tools/`** | tools related script | |
| **`├──git-hooks/`** | git hooks bash script | |

### Usage

**Clone this repository**

> make sure your git version >= 2.9 to enable git config

```
git clone <repository>
git config core.hooksPath ./tools/git-hooks
```

**Install**

```
npm install
```

> _Note on installing new package or modules to project_
> Use `npm install <package> --save --save-exact` to avoid risk of drifting the package or modules to different versions.

**Start the application in development mode**

```
npm start
```

This will automatically open chrome browser. If not please open http://localhost:3000 in your browser.


**(HMR UPDATE) Start the application in development mode (Hot Module Replacement)**

```
npm run open:dev:hmr
```

This behavior is similar to **npm start**, but especially for SCSS file when updated, it will be hot reloading your styling by injecting hot bundle js automatically on head tag without hard reload.

This mean, we don't use BrowserSync again , and we use webpack-dev-server instead.


**Build for production**

```
npm run build
```

This will automatically open chrome browser. If not please open http://localhost:8000 in your browser.

This will generate a javascript bundle and css files on the `dist` folder. Please follow semantic versioning for number versioning of your production assets (https://semver.org/).

**Run test suites**

```
npm run test
```

It is a good practice to test all your script before push your code changes by running test script.

**Run flow type checker**

```
npm run flow
```

> The first time this is run, the Flow background process (https://flow.org/en/docs/usage/#toc-run-flow-background-process) will be spawned and all of your Flow files will be checked. Then, as you continue to iterate on your project, the background process will continuously monitor your code such that when you run flow again, the updated result will be near instantaneous.

It is also a good practice to run flow type checker on all your script before push your code changes by running test script.

**Formatting all supported files**

```
npm run format
```

> Run prettier to formal all the supported files to match prettier configuration.

**Other command**

You can always look at package.json for list of scripts that you can run other than start and build. You can even add your scripts if you want! Please refer to https://docs.npmjs.com/misc/scripts for further information on "How npm handles the 'scripts' field". You may also want to dig more on webpack cli here https://webpack.js.org/api/cli/.
