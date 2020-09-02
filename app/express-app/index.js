var express = require('express');
var ejs = require('ejs');

var app = express();
app.engine('ejs', ejs.renderFile);
app.use(express.static('public'));

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

var data = {
  'Taro': 'taro@yamada',
  'Hanako': 'hanako@flower',
};

// トップページ
app.get('/', (req, res) => {
  var msg = 'This is Express-app Top Page!<br>'
            + 'これはトップページです';
  res.render('index.ejs',
    {
      title: "Index",
      content: msg,
      data: data,
      link:
      {
        herf: '/other',
        text: '※別のページに移動',
      }
    }
  );
});

// POST処理
app.post('/',(req, res) => {
  console.log(req);
  var msg = 'This is Posted Page!<br>' +
            'あなたは'+req.body.message+'と送信しました'
  res.render('index.ejs',
  {
    title: 'Posted',
    content: msg,
    link:
    {
      herf: '/',
      text: '※Topに戻る' 
    }
  }
  )
});

// otherページ
app.get('/other', (req, res) => {
  var msg = 'This is Other Page!<br>'
            + 'これは、用意された別のページです';
  res.render('index.ejs', {
    title: 'Other',
    content: msg,
    link:
    {
      herf: '/',
      text: '※Topに戻る' 
    }
  })
});

app.listen(3000, () => {
  console.log('Start server port:3000');
});