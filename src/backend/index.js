const express = require('express')

const PORT = process.env.PORT || 3001

const app = express()

app.listen(PORT, () => {
    console.log(`Serever has been started at ${PORT}`);
})

app.get('/api', (req, res) => {
    res.json({messege: '+7 995 199-38-92'})
})