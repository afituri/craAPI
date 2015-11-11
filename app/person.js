
var mysqlMgr = require('./mysql').mysqlMgr,
    util=require('util');

exports.personMgr = {

  getInfo : function(nid,cb){
    mysqlMgr.connect(function (conn) {
      conn.query('SELECT `name`,`nid` from person where nid = ?',[nid], function(err, result) {
        conn.release();
        if(err) {
          util.log(err);
        } else {
          cb(result[0]);
        }
      });
    });
  }

}