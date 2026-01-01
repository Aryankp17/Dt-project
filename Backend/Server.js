import express from 'express'
import fetch from 'node-fetch'
import cors from 'cors'
import https from 'https'
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const app = express()
app.use(cors())
app.use(express.json())
const agent = new https.Agent({
  rejectUnauthorized: false
});

const port = 3200

app.get('/api/dpthought', async (req, res) => {
   try {
        const response = await fetch("https://dev.deepthought.education/assets/uploads/files/files/others/ddugky_project.json",{ agent });
        const data = await  response.json()
        res.json(data)
      res.send(data)
   } catch (error) {
    res.status(403).send(error.message)
   }

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
