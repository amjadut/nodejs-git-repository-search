const express = require('express');
const app = express();
const port = 3000;
const baseUrl = `http://localhost:${port}`;
const bodyParser = require('body-parser');

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
app.set('views', 'views');
var gitsearchFn = require('./gitsearchModule');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.get('/', (req, res) => {
	res.render('gitsearch',{totalCount: 0, totalPages: 0, takeCount: 0, currentPage: 1, searchValue: '', data: []});
});

app.get('/gitsearch', urlencodedParser, function (req, res) {
	gitsearchFn.performGitSearch(req,res);
});

module.exports = app;