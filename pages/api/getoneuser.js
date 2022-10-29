import dbConnect from "../../util/mongodb";
import user from "../../models/user";

const handler = async (req, res) => {
    await dbConnect();
    const id = req.cookies["id"];
    try {
        const return_user = await user.findById(id);
        const { password, ...others } = return_user._doc;
        res.status(200).json(others);
    } catch (error) {
        res.status(500).json(error);
    }
};

export default handler;
