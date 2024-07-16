const express = require("express")

const app = express()

app.get("/", (req, res) => {
    res.status(200).send("hello world")
})

app.listen(3000, () =>  console.groupCollapsed("listening at port 3000\nlocalhost:3000"))