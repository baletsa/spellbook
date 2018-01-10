# 5e Spellbook 

Simple application for referencing spells for tabletop gamging using ReactJS and Webpack.

## Dependencies
* [NodeJS v.8+](http://nodejs.org/)
* [ReactJS](https://reactjs.org/)

It is recommended that you use a package manager like _Homebrew_ or _Chocolatey_ to install Node on your machine.

## Installation
Once you have installed the above dependencies:

1. Clone this repository into your development folder
2. Navigate to the root of the project folder and run `npm install` from the command line to begin installing dependencies.

## Running the Project
Once the project is installed, several commands can be issued from the root of the project folder:

`npm run start`: Runs the default task. This builds the project with source maps from the _app_ folder into the _build_ folder, spawns a local Webpack development server, opens a new browser with the website at http://localhost:8080, and listens for subsequent changes. When you edit and save a new file, Node will recompile accordingly and refresh your browser window with the latest changes automatically.

## Project Architecture
#### Folder Structure

* __app/__ : _ALL_ work should be done in the _app_ folder. This is where your website's source code lives.
* __build/__ : When running the node scripts, files from _app_ are compiled into _build_. If you work out of the _build_ folder, your work will be overwritten and you will be sad. Don't work in the _build_ folder.
* __node_modules/__ : The folder where node modules are installed when you run `npm install`.
* __.babelrc__: The configuration file for ES6 presets.
* __.csscomb.json__: The configuration file that can be used with [CSSComb](https://github.com/csscomb/csscomb.js) or similar, editor specific plugins to automatically sort and format CSS declarations.
* __.eslintrc__ : The configuration file to enforce syntactical rules for JS linting.
* __.jsbeautifyrc__ : The configuration file that can be used with Sublime Text's [HTML-CSS-JS Prettify](https://packagecontrol.io/packages/HTML-CSS-JS%20Prettify) and Atom's [atom-beautify](https://atom.io/packages/atom-beautify) plugins.  Allows you to format your HTML, CSS, JavaScript, and JSON code.
* __.scss-lint.yml__: The configuration file for "linting" Sass/SCSS files.
* __package.json__ : Contains the project's dependencies. Modules specified in this files are installed into _node\_modules_ when you run `npm install`.
* __README.md__ : You're reading it!

## Common issues

#### When I run `npm run start`, the command line errors out. WTF?
Make sure you've installed _ALL_ dependencies specified above. Also, make sure you have the most up up-to-date version of Node. 

If you continue to have issues, especially after updating to a newer version of Node, delete the _node\_modules_ directory and _package-lock.json_ file and re-run `npm install`.

#### Webpack is not picking up on changes that I made to a file? WTF?
The `watch` task only picks up on changes made to files that existed when the task was started. When you add any new file to the _app_ folder, you must stop and restart Webpack.