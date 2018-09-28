# Skeleton Project to develop TFS / AzureDevops Extension

This project aims to quickly getting started developping TFS extension with live debugging environment set up. 

## Installation

### Required Tools

- VS Code from [https://code.visualstudio.com/](here)
- VS Code extension: Debugger for Chrome extension from [https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome](here) 
- NodeJS from [https://nodejs.org](here)

### Setting up the project

1. Clone the repository
2. Run `npm install` to install all the dependencies
3. Modify the vss-extension.json with your publisher ID
4. Publish the extension

## Publishing

To publish you can run `npm run publish:prod` ou `npm run publish:dev`

You can modify the publish scripts in package.json adding `--share-with your-organisation` to automatically share with your organisation if your extension is private


## Live debugging

First you have to publish your extension (dev) to the marketplace and share + add it to your organisation. Then add the widget to a dashboard (an error will be displayed, because the baseUri is set to your localhost)

To enable live debuging with vscode:

1. Run the typescript compiler in watch mode (ctrl-shift-B on VSC): 
   ```
   tsc -w
   ```
2. Run webpack in hot mode for dev environnement: 
   ```
   npm run start:dev
   ```
3. Launch chrome debugger with vscode (F5)
4. Accept the certificate (the local server has to be set in https)
5. Go to your tfs page containing your extension, the widget will be loaded with your local files
6. Develop the ts files, at each save it auto compiles and refresh the browser


## Dependencies

See package.json

 - TFX Cli: Needed to authenticate and publish right to marketplace
 - Typescript: v3
 - Webpack & webpack-cli & webpack-server: Used to bundle, package and run debug hot mode
    - ts-loader: Needed by Webpack to load typescript
 
 - vss-web-extension-sdk: VSTS SDK to interact with TFS Services 