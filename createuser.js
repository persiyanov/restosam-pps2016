var http = require('http');
var querystring = require('querystring');

var name = process.argv[2];
var phone = process.argv[3];
var pass = process.argv[4];

var user_data = querystring.stringify({'phoneno':phone, 'name':name,'password':pass});
var post_options = {
    host: 'localhost',
    port: 80,
    path: '/api/customer/accounts/signup',
    method: 'POST',
    headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Content-Length': Buffer.byteLength(user_data)
   }
};

var post_req = http.request(post_options, function(res) {
      res.setEncoding('utf8');
      res.on('data', function (chunk) {
          console.log('Response: ' + chunk);
      });
});

post_req.write(user_data);
post_req.end();
