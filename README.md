<h1 align="center">Welcome to @joellesenne/express-validation-error 👋</h1>
<p>

  <img src="https://img.shields.io/badge/node-%3E%3D16.0.0-blue.svg" />
  <img src="https://img.shields.io/badge/npm-%3E%3D7.13.0-blue.svg" />
  <a href="https://github.com/joellesenne/express-validation-error#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/joellesenne/express-validation-error/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/joellesenne/express-validation-error/blob/main/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/github/license/joellesenne/@joellesenne/express-validation-error" />
  </a>
  <a href="https://twitter.com/joellesenne" target="_blank">
    <img alt="Twitter: joellesenne" src="https://img.shields.io/twitter/follow/joellesenne.svg?style=social" />
  </a>
</p>

> Simple Middleware to manage exceptions within express error in asynchronous

### 🏠 [Homepage](https://github.com/joellesenne/express-validation-error#readme)

**Table of Contents**

- [Prerequisites](#prerequisites)
- [Install](#install)
- [Usage](#usage)
- [Run tests](#run-tests)
- [Author](#author)
- [🤝 Contributing](#-contributing)
- [Show your support](#show-your-support)
- [📝 License](#-license)

## Prerequisites

- node >=16.0.0
- npm >=7.13.0

## Install

Use simple Middleware to manage exceptions for Express [@joellesenne/express-async-handler](https://github.com/joellesenne/express-async-handler)
```sh
npm install --save-dev @joellesenne/express-async-handler @joellesenne/express-validation-error

# OR
yarn add -D @joellesenne/express-async-handler @joellesenne/express-validation-error
```

## Usage

```sh
const asyncHandler = require('@joellesenne/express-async-handler')
const ValidationError = require('@joellesenne/express-validation-error')

express.get('/', asyncHandler(async (req, res, next) => {
  const bar = await foo.findAll();
  res.send(bar)
  // Create errorHandler
  if (!bar) {
    return next(new ValidationError("No bar valid", 404));
  }
}))
```

## Run tests

```sh
mocha test/index.test.js
```

## Author

👤 **Joël Lesenne**

* Website: https://joellesenne.dev
* Twitter: [@joellesenne](https://twitter.com/joellesenne)
* Github: [@joellesenne](https://github.com/joellesenne)
* LinkedIn: [@joellesenne](https://linkedin.com/in/joellesenne)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/joellesenne/express-validation-error/issues). You can also take a look at the [contributing guide](https://github.com/joellesenne/express-validation-error/blob/master/CONTRIBUTING.md).

## Show your support

Give a ⭐️ if this project helped you!

<a href="https://www.patreon.com/joellesenne">
  <img  alt="Become a patron" src="https://c5.patreon.com/external/logo/become_a_patron_button@2x.png" width="160">
</a>

## 📝 License

Copyright © 2021 [Joël Lesenne](https://github.com/joellesenne). <br />
This project is [MIT](https://github.com/joellesenne/express-validation-error/blob/master/LICENSE) licensed.
