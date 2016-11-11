var express = require('express');
var app = express();
app.use(express.status('public'));
app.listen(9000);
console.log('启动')；