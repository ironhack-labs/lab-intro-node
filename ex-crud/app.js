const express = require('express')
const hbs = require('hbs')

const app = express()


/** Configure view engine */

app.set("view engine", "hbs")
app.set("views", `${__dirname}/views`)

/** Configure static files */

// TODO

/** Routes */

app.get ('/', (req, res) => {
res.render('home');
})


app.listen(3000, () => {
    console.log('Ready')
})