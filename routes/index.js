var express = require('express');
var router = express.Router();
var personMgr = require('../app/person').personMgr;

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});


/* GET name by NID page. */
router.get('/getInfo/:nid', function(req, res) { 
  var nid = req.params.nid;
  if(nid.length == 12 && /^\d+$/.test(nid)) {
    personMgr.getInfo(nid,function(result){
      if(result != undefined) {
        res.send({nid : result.nid,name : result.name});
      } else {
        res.send({err:2, msg: "NID not found"});
      }
    })
  } else {
    res.send({err:3, msg: "NID is not valid"});
  }
});

module.exports = router;
