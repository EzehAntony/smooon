import user from "../../../models/user";
import dbConnect from "../../../util/mongodb";
import bcryptjs from "bcryptjs";

const handler = async (req, res) => {
    await dbConnect();
    const { method } = req;
    switch (method) {
        case "POST":
            try {
                const dbUser = await user.findOne({ username: req.body.username });
                if (!dbUser) {
                    const username = req.body.username;
                    const salt = await bcryptjs.genSalt(10);
                    const hash = await bcryptjs.hash(req.body.password, salt);

                    const newUser = await user.create({
                        username: req.body.username,
                        firstname: req.body.firstname,
                        lastname: req.body.lastname,
                        password: hash,
                        state: req.body.state,
                        dob: req.body.dob,
                        gender: req.body.gender,
                        picture: req.body.picture,
                    });

                    const { password, ...others } = await newUser._doc;
                    return res.status(200).json(others);
                }

                res.status(401).json("This user already exits");
            } catch (err) {
                res.status(500).json(err);
            }
            break;
    }
};

export default handler;
