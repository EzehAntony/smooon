import dbConnect from "../../util/mongodb";
import user from "../../models/user";

const handler = async (req, res) => {
    await dbConnect();
    const id = req.cookies["id"];
    try {
        const users = await user.find({
            _id: { $ne: `${id}` },
        });

        res.status(200).json(users);
    } catch (error) {
        res.status(500).json(error);
    }
};

export default handler;
