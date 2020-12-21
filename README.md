### run 

set in `vue.config.js`
```
target: 'https://some-domain-here',
```
your dev server url

```
npm i
npm run serve
```

open on http://localhost:8081
set in JS console:
```
localStorage.jwtToken='your-jwt-token-here';
```
reload page


### run on prod
```
npm i
npm run build
```
pack `dist` folder to zip file adn upload in SaaS settings
