# sketch-es-module

[![Build Status](https://travis-ci.org/south-farm/sketch-es-module.svg?branch=master)](https://travis-ci.org/south-farm/sketch-es-module)

A simple boilerplate for es6/es7 project, you can start your npm module from this.

Only with neccessary key features:

* babel
* commitlint
* eslint
* flow
* husky
* jest
* prettier
* standard-version

## How to use this template

first generate the project

```sh
# prepare [sao](https://sao.js.org)
npm install -g sao

# start from latest
sao south-farm/sketch-es-module my-module -u

# or start from sepecific version
sao south-farm/sketch-es-module#v0.1.0 my-module

# after project is created
cd my-module

rm -rf package-lock.json CHANGELOG.md

# remove license if you don't like MIT
rm LICENSE
```

### Homework

* Update your readme and package.json.
* Update .travis.yml if you also use travis-ci, otherwise just delete it.
* Update Dockerfile later.

#### Travis-CI

There are two environments should be ecrypted by youself.
The `SLACK_URL` used for notifing your team members when a new version is published.
The `deploy.api_key` is used for npm repo.

```sh
travis encrypt xxxx-xxx-xxx-xx-x-x-x-xx --add deploy.api_key
travis encrypt SLACK_URL=https://hooks.slack.com/services/xxxx/xxxx/xxxxxxx --add env.global
```

## Usage

A simple way to get start.

```sh
npm i

# start development, keep testing while developing
npm start
```

After it is started, test will be triggered every time you save a file.

## Scripts

* build: 用 Babel 把 code 编译到标准 es5
* flow: Facebook 出品的类型校验器，类似 Typescript，但是不强奸
* commitmsg: 规范 Commit message 的工具
* lint: 代码格式检查
* prepare: 发布前需要跑
* release: 发布，已经 push 到远端，剩下需要自己执行 npm publish, check [standard-version](https://github.com/conventional-changelog/standard-version).
* start: 写代码前跑起来
* test: 测试

## Folder Layout

Before you start, take a moment to see how the project structure looks like:

```sh
├── README.md                   # Quick start document
├── dist/                       # The folder for compiled output
├── package.json                # package definition
├── src                         # all source code written for this app
└── .travis.yml                 # travis-ci
```
