## Useful libraries (in no particular order)

<!--
Tags for self-documentation:
js, html, css, data, express-server, js-versions, general-dev, db,
auth, security, debug, react, vue, static-site
 -->

* `lodash` - A library for streamlining data manipulation ([docs](https://lodash.com/docs) -- Also compare to it's parent project [Underscore.js](https://underscorejs.org/) <!-- js, data -->
* `express` libraries
    * `morgan` - An express middleware for logging requests ([npm](https://www.npmjs.com/package/morgan)) <!-- js, express-server, debug -->
    * `helmet` - Middleware that automatically sets up some response headers for security ([list of those headers](https://www.npmjs.com/package/helmet#how-it-works)) <!-- js, express-server, security -->
    * `compression` - As the name implies, it automatically compresses requests ([npm](https://www.npmjs.com/package/compression)) <!-- js, express-server, data -->
    * `cors` - Allows cross-origin requests ([npm](https://www.npmjs.com/package/cors)) <!-- js, express-server, security -->
* `node-cron` - A package to run cron jobs ([npm](https://www.npmjs.com/package/node-cron)). Also see [`cron`](https://www.npmjs.com/package/cron) <!-- js, general-dev -->
* `esm` - Allows ES6 style imports and exports without `babel` ([npm](https://www.npmjs.com/package/esm)) <!-- js, js-versions -->
* `socket.io` - An engine for realtime bidirectional communication, aka chatting software and more ([npm](https://www.npmjs.com/package/socket.io)) <!-- js, general-dev -->
* `knex` - A Query Builder for some common DBs ([website](http://knexjs.org/)) <!-- js, data, db -->
* `mailgun` - An email sending API (free up to a point. [website](https://www.mailgun.com/)) <!-- js, general-dev -->
* Static-site generators
    * `Gatsby` - A paid server-side renderer for more than just React ([website](https://www.gatsbyjs.org/)) <!-- js, static-site, react, vue -->
    * JAM-Stack renderers (JAM = Javascript, APIs, Markup. )
        * `Next.js` - Works with React [website](https://nextjs.org/) <!-- js, static-site, react -->
        * `Nuxt.js` - Works with Vue [website](https://nuxtjs.org/) <!-- js, static-site, vue -->
        * `https://jekyllrb.com/` - Plain JS [website](https://jekyllrb.com/) <!-- js, static-site, html -->
* `Prettier` - A code formatter for web dev [website](https://prettier.io/) <!-- general-dev -->
* `GraphQL` - I just have to look at it to understand it more clearly [website](https://graphql.org/) <!-- data, db -->
* `React` tools
    * `react-calendar` - Adds a nice Calendar Component <!-- js, react -->
* `Axios` - A library for making client- and server-side HTTP requests <!-- js -->
* `Moment.js` - An alternative to the native `Date` for manipulating datetimes [Moment.js](https://momentjs.com/)
* `Revery` - A tool to compile an Electron/React app into system-native code. Currently a work-in-progress. [git-repo](https://github.com/revery-ui/revery/blob/master/README.md)