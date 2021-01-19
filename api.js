const express = require('express');
const fs = require('fs').promises;
const app = express();
app.use(express.json());
app.get('/', async(req, res)=>
{
    let data = await fs.readFile('ht.html', 'utf-8')
    res.send(data);

});
app.get('/hello.json', async(req, res) =>
{
    res.send(await fs.readFile('hello.json', 'utf-8'))
})
app.post('/hello.json', async (req, res) =>
{
    await fs.writeFile('hello.json', JSON.stringify(req.body), (err)=>
    {
        if (err)
        {
            console.log(err)
        }
        console.log("Written");
        console.log(req.body)
    })
    res.send("Ola como estas")

})

app.listen(3000); 