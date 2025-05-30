import { Router } from "express";
import { v4 } from "uuid";

import User from "../models/User";

const routes = new Router()

routes.get('/', async (req, res) => {
    try {
        const user = await User.create({
            id: v4(),
            name: "João",
            email: "jcarlosguimaraes13@gmail.com",
            password_hash: "12n941wofn",
            admin: false,
            doctor: false,
            attendant: false,
            nurse: false
        })

        //console.log(user)

        return res.json(user)

    } catch (e) {
        return res.send({error: e.message})
    }
})

export default routes