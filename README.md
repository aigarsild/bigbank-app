# bigbank-app

## About this project
This application is built on Vue it uses [API from here](https://dragonsofmugloar.com/doc/)
[See the demo here](https://bigbank.netlify.app/)

### Specification
For this project I used [VueBootstrap](https://bootstrap-vue.org/) for the UI components, [Colorscale](https://hihayk.github.io/scale/) for the color scheme and [Axios](https://vuejs.org/v2/cookbook/using-axios-to-consume-apis.html) for API calls.

### State management
I used [Simple State Management from Scratch](https://vuejs.org/v2/guide/state-management.html#Simple-State-Management-from-Scratch) from Vue documentation, because using vuex would have been too much for this small application.

### API calls
For API calls I used the methods of the components this way I just use what I need and have no overload but the calls are all scattered and there is lot of code repeating. In future with lot more components I would create a seperate JS file with an object literal or a static class that make the API calls.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
