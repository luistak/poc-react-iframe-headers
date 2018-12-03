var express = require('express');
var cors = require('cors')
var app = express();

app.use(cors());
app.get('/', function (req, res) {
  let html = '';
  const heads = JSON.parse(JSON.stringify(req.headers));
  html += '<h1> Headers </h1>';
  html += '<div>';
    html += '<ul>';
    for (let key in heads) {
      html += `<li> ${key}: ${heads[key]} </li>`;
    }
    html += '</ul>';
  html += '</div>';
  
  res.send(html);
  console.log(req.headers);
});

app.listen(8080, function () {
  console.log('Example app listening on port 3000!');
});
