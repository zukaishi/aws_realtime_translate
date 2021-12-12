const express = require('express')
const fs = require("fs")
const app = express()
const port = 3000

app.get("/", (req, res, next) => {
    var obj = JSON.parse(fs.readFileSync('./output.json', 'utf8'));
    var sTranslated = obj.TranslatedText
    sTranslated = sTranslated.replace("。", "。 ¥r¥n")
    res.json(sTranslated)
}); 

app.get("/input", (req, res, next) => {
    fs.writeFileSync( "input.txt" , "ccccc" )
    res.writeHead(200, {'Content-Type' : 'text/plain'});
    res.write('OK');
    res.end();
}); 

// ポート3000でサーバ起動
app.listen(port, () => console.log(`click http://localhost:${port}/ !`))