const express = require('express')
const app = express()
app.set('views', __dirname + '/');
app.use(express.static('public'))
app.engine('html', require('ejs').renderFile);

app.get('/', (req, res) => {
  res.render('index.html')
})

const port = 3000
const host = 'localhost'
app.listen(port, host,  () => {
  console.log(`Example app listening at http://${host}:${port}`)
})