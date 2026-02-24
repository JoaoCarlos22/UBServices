import app from'./app'
import cors from'cors'

const port = 4000; // porta que irá rodar a API

//app.use(cors('http://localhost:4000')) // autoriza a comunicação com o front end 

// inicia o servidor
app.listen(port, () => {
    console.log(`Server rodando em http://localhost:${port}`)
})