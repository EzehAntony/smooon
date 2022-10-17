import user from "../../models/user";
import axios from "axios";
import dbConnect from "../../util/mongodb";
import { verifyUser } from "../../util/jwt";

const handler = async (req, res) => {
    const { method } = req;
    await dbConnect();

    switch (method) {
        case "GET":
            try {
                const all_users = await user.find();
                res.status(200).json(all_users);
            } catch (error) {
                res.status(500).json(error);
            }

            break;
        case "POST":
            try {
                const create_user = await user.create(req.body);
                res.status(200).json(create_user);
            } catch (error) {
                res.status(500).json(error);
            }
            break;
        case "PUT":
            break;
        case "DELETE":
            res.status(200).json("DELETE");
            break;
    }
};

export default handler;
