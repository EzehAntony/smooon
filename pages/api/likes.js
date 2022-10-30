import dbConnect from "../../util/mongodb";
import user from "../../models/user";

const handler = async (req, res) => {
    await dbConnect();
    const id = req.cookies["id"];
    try {
        const return_user = await user.findById(id, { liked: 1 });

        const data = await Promise.all(
            return_user.liked.map((user_id) => {
                const us = user.find({ _id: user_id });
                return us;
            })
        );
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json(error);
    }
};

export default handler;
