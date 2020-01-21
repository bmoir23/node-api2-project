const express = require("express")
const app= express()

app.use(express.json())

const postRoutes = require('./data/routes/postRoutes')
const commentRoutes = require('./data/routes/commentRoute')

app.use('/api/posts', postRoutes)
app.use('/api/posts', commentRoutes)

app.get('/', (req,res) => {
    res.send("Server Running")
})

const port = 3001


app.listen(port, () => {
    console.log(`******* Server Running On Port 3001 ******` )
})