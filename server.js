const express = require('express');
const router = require('./router/routes');
const app = express();

app.use(router);

app.listen(8000, () => {
  console.log('server listen to port 8000');
});