import user from "../../models/user";
import bcryptjs from "bcryptjs";

export default async function handler(req, res) {
    const { method } = req;
    const id = req.cookies["id"];
    const { firstname, lastname, username, dob, password, picture, bio, interest, state, gender } = req.body;

    switch (method) {
        case "PUT":
            const loggedUser = await user.findById(id);
            if (loggedUser) {
                // users current password
                const currentPassword = loggedUser.password;
                //users inputed current password
                const newPassword = req.body.newPassword;
                const enteredPassword = req.body.enteredPassword;

                //check if match
                const verifyPassword = await bcryptjs.compare(enteredPassword, currentPassword);

                if (verifyPassword) {
                    try {
                        const salt = await bcryptjs.genSalt(10);
                        const hash = await bcryptjs.hash(newPassword, salt);
                        const updated = await user.findByIdAndUpdate(id, {
                            $set: {
                                password: hash,
                            },
                        });
                        res.status(200).json("Password changed!");
                    } catch (err) {
                        res.status(500).json(err);
                    }
                } else {
                    res.status(401).json("That is not your password!");
                }
            } else {
                res.status(401).json("You are not authorized!");
            }
            break;

        default:
            res.status(405).json("Only post request to update a user profile should be sent to this route!");

            break;
    }
}
