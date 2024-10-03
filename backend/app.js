const express = require('express')
const app = express()

const PORT = 3000




app.get('/test', (req, res) => {
    res.send('Hello World!')
})

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})
