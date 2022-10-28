import dbConnect from "../../../util/mongodb";
import bcryptjs from "bcryptjs";
import user from "../../../models/user";
import { setCookie } from "cookies-next";
import { SignJWT } from "jose";
import { NextResponse } from "next/server";

const handler = async (req, res) => {
    await dbConnect();
    const { method } = req;
    switch (method) {
        case "POST":
            try {
                const dbUser = await user.findOne({ username: req.body.username });
                if (dbUser) {
                    const response = await bcryptjs.compare(req.body.password, dbUser.password);
                    if (response) {
                        const secret = new TextEncoder().encode(process.env.jwt);

                        const token = await new SignJWT({ id: dbUser._id })
                            .setProtectedHeader({ alg: "HS256" })
                            .setIssuedAt()
                            .sign(secret);

                        setCookie("token", token, {
                            req,
                            res,
                            httpOnly: true,
                            sameSite: "lax",
                        });

                        const { password, ...others } = dbUser._doc;

                        res.status(200).json(others);
                    } else {
                        res.status(500).json("incorrect password");
                    }
                } else {
                    res.status(500).json("User not found");
                }
            } catch (err) {
                res.status(500).json(err);
            }
            break;
    }
};

export default handler;
