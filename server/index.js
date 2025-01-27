const express = require('express');
const app = express();

app.use(express.json());

const db = require('./models');

// Routers
const postRouter = require('./routes/Posts');
app.use("/posts", postRouter);

db.sequelize.sync().then(()=>{
    app.get('/', (req, res) => {
        res.send('Hello World!');
    });
    
    app.listen(3000, () => {
        console.log("Server running on port 3000");
    });
});



