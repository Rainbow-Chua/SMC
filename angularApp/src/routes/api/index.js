const bodyParser = require('body-parser');
const router = require('express').Router();
const { randomQuote } = require('../../controllers/quote');
const { errorHandler, pageNotFound, reply } = require('../../services/middlewares');

const MODULE = 'routes/api/index';

/**
 * Define the middlewares
 */

// Parse incoming JSON request bodies under the `req.body` property.
// Documentation: https://github.com/expressjs/body-parser
router.use(bodyParser.json({ type: [ 'application/json', 'application/*+json' ] }));

// Trace the request inputs
router.use((req, res, next) => {
  req.log.trace(
    { module: '_inbound' },
    'received request (params: %j / query: %j / body: %j)',
    req.params, req.query, req.body);
  next();
});

/**
 * Define the endpoints
 */

// NOTE: The middlewares are wrapped by `reply` to standardize the response
// handling. The wrapper also enables the use of async/await with Express.

/**
 * @swagger
 * /api/1.0:
 *   get:
 *     description: Get the API description.
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: API description
 */
router.get('/', reply((req) => ({ version: '1.0' })));

/**
 * @swagger
 * /api/1.0/demo/_error:
 *   get:
 *     description: |
 *       Demonstrates how to return a HTTP error.
 *       TODO: DELETE ME
 *     produces:
 *       - application/json
 *     responses:
 *       400:
 *         description: Demo bad request error.
 */
router.get('/demo/_error', (req) => {
  req.log.warn({ module: MODULE }, 'Demo bad request error');
  throw new errors.BadRequestError('Demo bad request error.');
});

/**
 * @swagger
 * tags:
 *  - name: Quote
 *    description: Design quotes from https://quotesondesign.com/.
 * definitions:
 *   Quote:
 *     type: object
 *     properties:
 *       ID:
 *         type: integer
 *       title:
 *         type: string
 *       content:
 *         type: string
 *       link:
 *         type: string
 *         format: uri
 *       custom_meta:
 *         type: object
 *         properties:
 *           Source:
 *             type: string
 */

/**
 * @swagger
 * /api/1.0/demo/quotes:
 *   get:
 *     tags: ["Quote"]
 *     description: |
 *       Demonstrates how to use async function with Express.
 *       TODO: DELETE ME
 *     produces:
 *      - application/json
 *     parameters:
 *       - name: limit
 *         in: query
 *         description: The number of returned quotes.
 *         type: integer
 *         minimum: 1
 *         maximum: 3
 *         default: 1
 *     responses:
 *       200:
 *         description: quotes
 *         schema:
 *           type: object
 *           properties:
 *             data:
 *               type: array
 *               items:
 *                 $ref: '#/definitions/Quote'
 */
router.get('/demo/quotes', reply(async (req) => await randomQuote(req)));
// or, even shorter:
// router.get('/quotes', reply(randomQuote));

router.use(pageNotFound());
router.use(errorHandler());

module.exports = router;
