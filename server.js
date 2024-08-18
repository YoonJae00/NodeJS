const express = require('express');
const app = express()

app.use(express.static(__dirname+ '/public'))
app.set('view engine', 'ejs')



app.get('/', (req, res) => {
    res.send('ㅎ2ㅎ2');
})

app.get('/news', (req, res) => {
    db.collection('post').insertOne({title : '제목'});
    res.send('오늘의 뉴스12');
})

app.get('/index', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/list', async (req, res) => {
    let result= await db.collection('post').find().toArray()
    console.log(result)
    res.render('list.ejs', { posts : result });
})

app.get('/time', (req,res) => {
    res.render('time.ejs', { time : new Date()})
})

app.get('/airport', async (req,res) => {
    let result= await db.collection('post').find().toArray()
    console.log(result)
    res.render('airport.ejs', { posts : result });
})

app.get('/blog', (req, res) => {
    res.render('myblog.ejs')
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

