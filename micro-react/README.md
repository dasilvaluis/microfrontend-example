# Frontend Seed

An un-bloated, more-or-less-opionated, readied starting point for frontend Javascript applications.

## Commands

```
yarn run start      # Start development mode
         build      # Create production build
         lint       # Lint Javascript
````
### Options

**Development server port** \
Create a `.env` under the root folder file with the variable `PORT` set to which ever port.

## Tools

### Dev
- Write modern JS with [babel/core](https://www.npmjs.com/package/@babel/core) and [babel/preset-env](https://www.npmjs.com/package/@babel/preset-env)
- Write styles with [sass](https://sass-lang.com/)

### Build
- Bundle everything with [webpack](https://www.npmjs.com/package/webpack)
- Set environment specific variables with [dotenv](https://www.npmjs.com/package/dotenv)
- Let the browser reload with [webpack-dev-server](https://www.npmjs.com/package/webpack-dev-server)

### Linting
- Lint you JS code with [eslint](https://www.npmjs.com/package/eslint) with standards from [eslint-config-airbnb-base](https://www.npmjs.com/package/eslint-config-airbnb-base)