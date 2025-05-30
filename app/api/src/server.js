import app from'./app'
import cors from'cors'

const port = 4000; 

app.use(cors('http://localhost:4000'))

app.listen(port, () => {
    console.log(`Server rodando em http://localhost:${port}`)
})