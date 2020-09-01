// expressの読み込み
var express = require('express');
var app = express();
app.set("view engine", "ejs");
app.use(express.static('public'));
app.use(express.urlencoded({extended: false}));

// mysqlの読み込み
var mysql = require('mysql');
const connection = mysql.createConnection({
  host      : 'mysql',
  port      : 3306,
  user      : 'root',
  password  : 'example',
  database  : 'node'
})

// ルートindex
app.get('/', function(req, res) {
  connection.query('SELECT * FROM items',
    (error, results) => {
      res.render('top.ejs', {items: results});
    }
  )
});

// new
app.get('/new', (req, res) => {
  res.render('new.ejs');
});

// create
app.post('/create', (req, res) => {
  console.log('itemName'+req.body.itemName);
  connection.query(
    'INSERT INTO items (name) VALUES (?)',
    [ req.body.itemName ],

    (error, results) => {
      res.redirect('/');
    }
  )
  connection.query(
    'SELECT * FROM items',
    (error, results) => {
      res.render('top.ejs', {items: results});
    }
    )
});

// edit
app.get('/edit/:id', (req, res) => {
  connection.query(
    'SELECT * FROM items WHERE id = ?',
    [req.params.id],
    (error, results) => {
      console.log(results);
      res.render('edit.ejs', {item: results[0]});
    }
  )
});

// update
app.post('/update/:id', (req, res) => {
  console.log(res)
  connection.query(
    'UPDATE items SET name = ? WHERE id = ?',
    [req.body.itemName, req.params.id],
    (error, results) => {
      res.redirect('/')
    }
  )
});

// delete
app.post('/delete/:id', (req, res) => {
  connection.query(
    'DELETE FROM items WHERE id = ?',
    [ req.params.id ],
    (error, results) => {
      res.redirect('/');
    }
  )
});

// localhost:3000でアクセス可能なサーバーを起動する
app.listen(3000);
console.log("server starting...");
