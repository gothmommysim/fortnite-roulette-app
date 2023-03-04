const PORT = process.env.PORT || 3001;
const mysql = require('mysql');
const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host: "us-east.connect.psdb.cloud",
    user: "g4pdjimrf0a4plp7f16m",
    password: "pscale_pw_7dn4CpQPvss6ZGD9d5R06j6QYdDsNKsZkrTLSUXBQjX",
    database: "fortnite-roulette-app-db",
    ssl: {}
});

module.exports = db;

app.post('/create-theme', (req, res) => {
    db.query("insert into themes (theme, nsfw)",
        (err, result) => {
            if (err) throw err;
            res.send(result);
        });
});

app.get('/themes', (req,res) =>{
    const isNSFW = req.query.isNSFW;
    let sqlSelectAll = "select * from themes"
    let sqlHasNSFW = "";

    console.log('running');
    if(isNSFW == "false"){ //Set if no nsfw
        sqlHasNSFW = " where nsfw = 0";
    }
    db.query(sqlSelectAll + sqlHasNSFW,
        (err, result) => {
            if (err) throw err;
            console.log(sqlSelectAll + sqlHasNSFW);
            console.log(isNSFW+'\n');
            res.send(result);
        });
});

app.listen(PORT, '0.0.0.0', () => {
    console.log("db access");
});