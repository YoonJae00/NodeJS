const express = require('express');
const app = express()

app.use(express.static(__dirname+ '/public'))

app.listen(8080, () => {
    console.log('localhost8080 실행중,.,,')
})

app.get('/', (req, res) => {
    res.send('ㅎ2ㅎ2');
})

app.get('/news', (req, res) => {
    res.send('오늘의 뉴스12');
})

app.get('/shop', (req, res) => {
    res.sendFile(__dirname + '/index.html')

})
