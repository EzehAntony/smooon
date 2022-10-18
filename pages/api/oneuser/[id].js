import user from "../../../models/user";
import axios from "axios";
import dbConnect from "../../../util/mongodb";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

const handler = async (req, res) => {
    const id = req.query.id;
    const { method } = req;

    await dbConnect();

    switch (method) {
        case "GET":
            try {
                const singleUser = await user.findOne({ _id: id });
                res.status(200).json(singleUser);
            } catch (error) {
                res.status(500).json(error);
            }

            break;
    }
};

export default handler;
