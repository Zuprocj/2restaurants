var express = require('express');
var path = require('path');

var app = express();
var PORT = 3000;

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
    var newReservation = req.body;
    newReservation.routeName = newReservation.name.replace(/\s+/g, '').toLowerCase();
    console.log(newReservation);
    table.push(newReservation);
    res.json(newReservation);
});

app.listen(PORT, function () {
    console.log("app listening on PORT "+ PORT);
});