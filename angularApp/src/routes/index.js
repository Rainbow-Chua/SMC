const helmet = require('helmet');
const router = require('express').Router();
const apiRouter = require('./api');
const healthRouter = require('./health');
const { setReqLogger } = require('../services/middlewares');

/**
 * Define the middlewares
 */

// Setup the logger under the `req.log` property. The logger will include an
// unique `requestId` for every log. It should be passed to all functions that
// will write logs.
// Refer to README.md for more detail about the logging practice.
router.use(setReqLogger());

// Secure the application by setting some default HTTP headers.
// If you want to customize helmet for specific endpoints, please refer to
// https://cathaypacific-prod.atlassian.net/wiki/spaces/PUBC/pages/358941547#no-cache-Node.js
// Documentation: https://github.com/helmetjs/helmet
router.use(helmet({
  noCache: true,    // Disabled by default, but we expect it to be enabled for most RESTful APIs.
}));

/**
 * Define the endpoints
 */

router.get('/', (req, res) => res.send('Welcome!'));
router.get('/_health', healthRouter);
router.use('/api/1.0', apiRouter);

module.exports = router;
