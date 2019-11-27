# restart

React start demo.

## 命令

```sh
npm init -y

npm i -D webpack webpack-dev-server webpack-cli webpack-merge html-webpack-plugin

npm i -D @babel/core babel-loader babel-eslint @babel/preset-env @babel/preset-react @babel/plugin-proposal-class-properties @babel/plugin-syntax-dynamic-import

npm i -D eslint-plugin-prettier eslint-config-prettier prettier eslint-plugin-react eslint

npm i -D less less-loader style-loader css-loader babel-plugin-import cross-env

# 可能有几个错了，可以在dev中
npm i react react-dom prop-types redux react-redux antd axios lodash classnames react-hot-loader react-router-dom

# 添加 文件
touch .gitignore webpack.config.js

mkdir src && touch src/index.html src/index.js

touch .eslintignore .eslintrc.js .prettierignore .prettierrc.js .babelrc
```

## 写代码

将添加的文件的代码，复制到文件中

## Todo

1. 优化 Input vendor 的名称
2. 实现热更新
