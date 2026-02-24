import * as Yup from 'yup'
import User from '../models/User'

class SessionController {
    async store(req, res) {
        try {
            const {
                email,
                password
            } = req.body

            const schema = Yup.object().shape({
                email: Yup.
                string("O campo 'email' não aceita somente números!").
                email("Email incorreto!").
                required("O campo 'email' é obrigatório!"),
                password: Yup.
                string("O campo 'senha' não aceita somente números!").
                required("O campo 'senha' é obrigatório!")
            })

            const errorEmailPassword = () => {
                return res.status(401).send({
                    error: "Email/senha incorretos!"
                })
            }

            if (!(await schema.isValid(req.body))) errorEmailPassword()

            const user = await User.findOne({
                where: {
                    email
                }
            })

            if(!user) errorEmailPassword()

            if(!(await user.checkPassword(password))) errorEmailPassword()

            return res.json({message: "Sucesso ao realizar o login!"})
        } catch (e) {
            console.log(res)
            return res.send({error: e.errors})
        }
    }
}

export default new SessionController()