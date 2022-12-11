# editor-template-vite-typescript

Template for building editors for Standard Notes using Vite and TypeScript

## Development

**Prerequisites:** Install [Node.js](https://nodejs.org/en/), [Yarn](https://classic.yarnpkg.com/en/docs/install/), and [Git](https://github.com/git-guides/install-git) on your computer.

The general instructions setting up an environment to develop Standard Notes extensions can be found [here](https://docs.standardnotes.org/extensions/local-setup). You can also follow these instructions:

1. Fork the [repository](https://github.com/tkilian/editor-template-vite-typescript) on GitHub.
1. [Clone](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository) your fork of the repository.
1. Run `cd editor-template-vite-typescript` to enter the `editor-template-vite-typescript` directory.
1. Run `yarn install` to install the dependencies on your machine as they are described in `yarn.lock`.

### Testing in the browser

#### Local

1. To run the app in development mode, run `yarn start` and visit http://localhost:8001. Press `ctrl/cmd + C` to exit development mode.

#### Docker

1. To run the app in a docker container simply run `docker compose up`.

To build the app run `docker compose exec editor yarn run build`.

### Testing in the Standard Notes app

1.  Create an `ext.json` in the `public` directory. You have three options:
    1.  Use `sample.ext.json`.
    1.  Create `ext.json` as a copy of `sample.ext.json`.
    1.  Follow the instructions [here](https://docs.standardnotes.org/extensions/local-setup) with `url: "http://localhost:3000/index.html"`.
1.  Install http-server using `sudo npm install -g http-server` then run `yarn server` to serve the `./build` directory at http://localhost:3000.
1.  To build the app, run `yarn build`.
1.  Install the editor into the [web](https://app.standardnotes.org) or [desktop](https://standardnotes.org/download) app with `http://localhost:3000/sample.ext.json` or with your custom `ext.json`. Press `ctrl/cmd + C` to shut down the server.

### Deployment

1. To make the source code prettier, run `yarn pretty`.
1. To the deploy the build into the `gh-pages` branch of your repository on GitHub, run `yarn deploy-stable`.
1. To deploy the build into to the `dev` branch for testing, run `yarn deploy-dev`.
1. To deploy the built into the `build` branch for distributing, run `yarn deploy-build` for distributing builds.

### Available Scripts

In the project directory, you can run:

#### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:8001](http://localhost:8001) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `yarn build`

Builds the app for production to the `dist` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
