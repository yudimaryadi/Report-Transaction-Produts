const express = require('express')
const app = express()
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const productsRoutes = require('./routes/productsRoutes');
const port = 3000;

app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())

// app.use('/', (req, res) => {
//   res.send('masuk')
// })

app.use(userRoutes)
app.use(productsRoutes)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})