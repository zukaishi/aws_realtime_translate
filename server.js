const express = require('express')
const fs = require("fs")
const url = require("url")
const app = express()
const port = 3000

app.get("/", (req, res) =>{
    res.sendFile(`${__dirname}/index.html`);
});

app.get("/output", (req, res, next) => {
    var obj = JSON.parse(fs.readFileSync('./output.json', 'utf8'));
    var sTranslated = obj.TranslatedText
    sTranslated = sTranslated.replace("。", "。\n")
    sTranslated = sTranslated.replace("、", "、\n")
    // res.json(sTranslated)
    res.writeHead(200, { 'Content-Type': 'text/plain;charset=UTF-8'});
    res.write(sTranslated)
    res.end();
});

app.get("/input", (req, res, next) => {
    var url_parse = url.parse(req.url, true);
    var query = url_parse.query
    var inputText = query.text
    console.log(query.text)
    fs.writeFileSync( "input.txt" , inputText )
    
    var loadText = fs.readFileSync('./input.txt', 'utf8');
    res.writeHead(200, {'Content-Type' : 'text/plain;charset=UTF-8'});
    res.write(loadText);
    res.end();
});

app.listen(port, () => console.log(`click http://localhost:${port}/ !`))