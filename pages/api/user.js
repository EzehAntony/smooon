// import Users from "../../../api/models/Users";
import user from "../../models/user";
import axios from "axios";
import dbConnect from "../../util/mongodb";

const handler = async (req, res) => {
    const { method } = req;
    await dbConnect();

    switch (method) {
        case "GET":
            try {
                const res = await user.find();
                res.status(200).json(res);
            } catch (error) {
                res.status(500).json(error);
            }

            break;
        case "POST":
            console.log("POST");
            break;
        case "PUT":
            console.log("PUT");
            break;
        case "Delete":
            console.log("Delete");
            break;
    }
};

export default handler;
