var express = require('express');
var router = express.Router();
var log4js = require('log4js');
log4js.configure({
  appenders: { http: { type: 'file', filename: 'http.log' } },
  categories: { default: { appenders: ['http'], level: 'info' } }
});
var logger = log4js.getLogger('http');



/* サンプルAPI① 
 * http://localhost:3000/samples にGETメソッドのリクエストを投げると、
 * JSON形式で文字列を返す。
 */
router.get('/:message', function(req, res, next) {
  var param = req.params.message;
  // res.header('Content-Type', 'application/text; charset=utf-8')
  res.send(param);
  logger.info('ログ出すよ！');
});

/* サンプルAPI② 
 * http://localhost:3000/samples/hello にGETメソッドのリクエストを投げると、
 * JSON形式で文字列を返す。
 */
router.get('/hello', function(req, res, next) {
  var param = {"result":"Hello World !"};
  res.header('Content-Type', 'application/json; charset=utf-8')
  res.send(param);
});

module.exports = router;
