var express = require('express');
var path = require('path');

var app = express();
var port = 3306;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get('/view', function(req, res) {
    res.sendFile(path.join(__dirname, "view.html"));
});

app.get('/make', function(req, res) {
    res.sendFile(path.join(__dirname, 'make.html'));
});

app.get('/api/tables', function (req, res) {
    return res.json(tables);
});

app.get('/api/waitlist', function (req, res) {
    return res.json(waitlist);
});

app.post('/api/waitlist', function (req, res) {
    var newTable = req.body;
    newTable.routeName = newTable.name.replace(?|s+/g, '').toLowerCase();
    console.log(newTable);
    table.push(newTable);
    res.json(newTable);
});

app.listen(PORT, function () {
    console.log("app listening on PORT "+ PORT);
});