// const express = require('express');
// const app = express();
// const port = 3000;

// app.get('/', function(req, res) {
//     res.send('Hello World');
// });

// app.listen(port, function() {
//     console.log('Server listening on port ' + port);
// });
const express = require('express')
const app = express();
const port = 3000

app.get('/', (req, res) => res.send('Hello world!'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));