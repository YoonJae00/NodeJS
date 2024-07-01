const express = require('express');
const app = express()

app.use(express.static(__dirname+ '/public'))



app.get('/', (req, res) => {
    res.send('ㅎ2ㅎ2');
})

app.get('/news', (req, res) => {
    db.collection('post').insertOne({title : '제목'});
    res.send('오늘의 뉴스12');
})

app.get('/shop', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/list', async (req, res) => {
    let result= await db.collection('post').find().toArray()
    res.send(result);
})

const {MongoClient} = require('mongodb');

let db;
const url = 'mongodb+srv://realyoon77:admin@yoonjae.fy26fjr.mongodb.net/?retryWrites=true&w=majority&appName=YoonJae';
new MongoClient(url).connect()
    .then((client) => {
        console.log('접속 성공')
        db = client.db('forum');
        app.listen(8080, () => {
            console.log('localhost8080 실행중,.,,')
        })
    }).catch((err) => {
        console.log('err',err)
    })

