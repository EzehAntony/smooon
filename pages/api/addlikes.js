import dbConnect from "../../util/mongodb";
import user from "../../models/user";

const handler = async (req, res) => {
    await dbConnect();
    const id = req.cookies["id"];
    try {
        const return_user = await user.findById(id);
        if (!return_user) {
            res.status(500).json("User not found");
        } else {
            if (return_user.liked.includes(req.body.id)) {
                await return_user.updateOne({ $pull: { liked: req.body.id } });
                res.status(200).json("Removed");
            } else {
                await return_user.updateOne({ $push: { liked: req.body.id } });
                res.status(200).json("Added");
            }
        }
    } catch (error) {
        res.status(500).json(error);
    }
};

export default handler;
