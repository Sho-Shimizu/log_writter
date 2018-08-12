var express = require('express');
var router = express.Router();
var log4js = require('log4js');
log4js.configure({
  appenders: { 
  	Maxy: { 
  		type: 'file',
  		filename: 'Maxy.log',
  		layout: {
            "type": "pattern",
            "pattern": "[%d{yyyy-MM-dd hh:mm:ss}] Maxy:%m"
        }
  	} 
  },
  categories: { 
  	default: { 
  		appenders: ['Maxy'], 
  		level: 'info' 
  	} 
  }
});
var logger = log4js.getLogger('Maxy');


/* サンプルAPI① 
 * http://localhost:3000/samples にGETメソッドのリクエストを投げると、
 * JSON形式で文字列を返す。
 */
router.post('/', function(req, res, next) {
  var param = req.body.message;
  // res.header('Content-Type', 'application/text; charset=utf-8')
  res.send(param);
  logger.info(param);
});

/* サンプルAPI① 
 * http://localhost:3000/samples にGETメソッドのリクエストを投げると、
 * JSON形式で文字列を返す。
 */
router.post('/says', function(req, res, next) {
  var message = req.body.message;
  // res.header('Content-Type', 'application/text; charset=utf-8')
  res.send(message);
  logger.info(message);
});

/* サンプルAPI① 
 * http://localhost:3000/samples にGETメソッドのリクエストを投げると、
 * JSON形式で文字列を返す。
 */
router.post('/notification', function(req, res, next) {
  var message = req.body.message;
  // res.header('Content-Type', 'application/text; charset=utf-8')
  res.send(message);
  logger.info(message);
});


module.exports = router;
