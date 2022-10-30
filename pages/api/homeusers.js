import dbConnect from "../../util/mongodb";
import user from "../../models/user";

const handler = async (req, res) => {
    await dbConnect();
    const id = req.cookies["id"];
    try {
        const main = await user.findById(id);
        const users = await user.find({
            _id: { $ne: `${id}` },
        });

        res.status(200).json({
            users: users,
            main: main,
        });
    } catch (error) {
        res.status(500).json(error);
    }
};

export default handler;
