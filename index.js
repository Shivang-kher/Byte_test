const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/bfhl', function (req, res) {
    res.status(200).send({
        'operation_code': 1
    })
});

app.post('/bfhl', (req, res) => {
    let success = req.body.is_success
    let data = req.body;
    res.send('Data Received: ' + JSON.stringify(data));
    if(data == null){
        req.body.is_success = false
        
    }
    else{
        req.body.is_success = true
        
    }
})

app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});






