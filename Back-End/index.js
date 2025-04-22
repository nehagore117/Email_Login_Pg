
const express = require('express')
const PORT = 3000
const app = express()
require('./Models/db')
const bodyParser = require('body-parser');
const cors = require('cors');
const AuthRouter = require('./Routes/AuthRouter');



app.get('/ping', (req, res) => {
    res.send("hiii");
});

app.use(bodyParser.json());
app.use(cors());

app.use('./auth', AuthRouter);


app.listen(PORT, () => {
    console.log(`server is running on http://localhost: ${PORT}`)
})
