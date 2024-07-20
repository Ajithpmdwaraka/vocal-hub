import { Router, Request, Response } from "express";
import { client } from "../stream-client";
import { UserRequest } from "@stream-io/node-sdk"


 const router = Router();

router.post("/createUser", async (req: Request, res: Response) => {
    const {username, name, image} = req.body;

    if(!username || !name || !image) {
        return res.status(400).json({ message: "Required field is emply"})
    }

    const newUser: UserRequest = {
        id: username,
        role: "user",
        name,
        image,
    };

    const user = await client.upsertUsers({
        users: {
            [newUser.id] : newUser,

        }
    })
})


export default router;