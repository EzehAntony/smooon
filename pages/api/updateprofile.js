import user from "../../models/user";

export default async function handler(req, res) {
    const { method } = req;
    const id = req.cookies["id"];
    const { firstname, lastname, username, dob, password, picture, bio, interest, state, gender } = req.body;

    switch (method) {
        case "POST":
            const loggedUser = await user.findById(id);
            if (loggedUser) {
                const newUser = await user.findOne({ username: username });
                if (newUser) {
                    if (newUser.username === loggedUser.username) {
                        await user.updateOne(
                            { _id: id },
                            {
                                $set: {
                                    firstname: firstname,
                                    lastname: lastname,
                                    bio: bio,
                                    gender: gender,
                                    state: state,
                                    picture: picture,
                                    interest: interest,
                                },
                            }
                        );
                        res.status(200).json("Updated!!");
                    } else {
                        res.status(403).json("There is a user with this username");
                    }
                } else {
                    await user.updateOne(
                        { _id: id },
                        {
                            $set: {
                                firstname: firstname,
                                lastname: lastname,
                                bio: bio,
                                username: username,
                                gender: gender,
                                state: state,
                            },
                        }
                    );
                    res.status(200).json("Updated!!");
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
