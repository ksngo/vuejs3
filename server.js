const express = require('express');
const app = express();
const port = 3000;
const path = require('path')

// var allowCrossDomain = function(req, res, next) {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
//     res.header('Access-Control-Allow-Headers', 'Content-Type');

//     next();
// }
// app.use(allowCrossDomain);


app.use('/static', express.static(path.join(__dirname, 'public')))

app.listen(port, () => {
    console.log("App listening at port 3000")
})