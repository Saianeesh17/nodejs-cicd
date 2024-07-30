const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('<h1>Express demo app</h1> <h4> status: success </h4> <p> ver: 1.0 </p>');
})

app.get('/products', (req, res) => {
    res.send([
        {
            prodId: '100',
            price: 100
        },
        {
            prodId: '101',
            price: 150
        }
    ])
})

app.listen(port, () => {
    console.log(`App live on port ${port}`);
});