# React Airbnb Boilerplate

React Boilerplate following [Airbnb's JavaScript (ES6) Style Guide](https://github.com/airbnb/javascript).

<a href="https://facebook.github.io/react/" target="_blank"> <img src="https://cdn.worldvectorlogo.com/logos/react.svg" height="50" />
</a> <a href="https://webpack.github.io" target="_blank"> <img src="https://cdn.worldvectorlogo.com/logos/webpack.svg" height="50" />
</a> <a href="http://eslint.org" target="_blank"> <img src="https://cdn.worldvectorlogo.com/logos/eslint.svg" height="50" /> </a> <a href="https://mochajs.org/" target="_blank"> <img src="https://avatars0.githubusercontent.com/u/8770005?v=3&s=400" height="50" /> </a> <a href="http://chaijs.com/" target="_blank"> <img src="https://camo.githubusercontent.com/431283cc1643d02167aac31067137897507c60fc/687474703a2f2f636861696a732e636f6d2f696d672f636861692d6c6f676f2e706e67" height="50" /> </a> <a href="https://github.com/airbnb/javascript" target="_blank"> <img src="https://cdn.worldvectorlogo.com/logos/airbnb-2.svg" height="50" /> </a> <a href="https://babeljs.io" target="_blank">
  <img src="https://raw.githubusercontent.com/babel/logo/master/babel.png" height="50" />
</a>


## Features

- Simple `index.html` loading `bundle.js`.
- Starter `index.jsx` for React.
- All code following Airbnb's JavaScript (ES6) style guide with ESlint.
- Webpack dev server with automatic reloading. Start with: `npm start`.
- Deployment build with `npm run build`.

## Components

- [Babel](https://babeljs.io) for ES6 support.
- [Chai](http://chaijs.com/) as BDD / TDD assertion library.
- [ESlint](http://eslint.org) for ES6 linting using Airbnb's JS style guide.
- [Mocha](https://mochajs.org/) as test framework.
- [Nyc](https://github.com/istanbuljs/nyc) for test coverage
- [React](https://facebook.github.io/react/) as front-end view library.
- [Webpack](https://webpack.github.io) for bundling of JavaScript modules.

## Getting Start

Run the following commands in your terminal

```bash
git clone https://github.com/LucasBassetti/react-airbnb-boilerplate.git
cd react-airbnb-boilerplate
npm install
npm start
```

Then open [http://localhost:8080/](http://localhost:8080/) on your web browser.

### Testing

1. Run `npm test` for simple test.
2. Run `npm run test:watch` for watch tests.
3. Run `npm run test:coverage` for test coverage. This will generate a `coverage` folder. Open the `index.html` file in this folder to check the results.

## Deploying

For deployment, run `npm build` and upload `build/` to your server.

## License

MIT · [Lucas Bassetti](http://lucasbassetti.com.br)
