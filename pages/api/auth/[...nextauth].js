import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import dbConnect from "../../../util/mongodb";
import user from "../../../models/user";
import bcryptjs from "bcryptjs";

export default NextAuth({
    session: {
        strategy: "jwt",
    },
    secret: process.env.jwt,
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {},
            async authorize(credentials, req) {
                await dbConnect();

                const { username, password } = credentials;
                const users = await user.findOne({ username: username });

                const decodedPassword = await bcryptjs.compare(password, users.password);

                //Error Becaue no password 'cause no user

                if (!users) {
                    throw new Error("No such user in the database");
                } else {
                    if (users.username === username && decodedPassword)
                        return {
                            id: users.id,
                            username: users.username,
                        };
                    else if (users.username === username && !decodedPassword) {
                        throw new Error(`Incorrect password, ${users.firstname}!`);
                    }
                }
            },
        }),
    ],
    pages: {
        signIn: "/auth/signin",
    },
    callbacks: {
        async session({ token, session }) {
            session.user = token.user;
            return session;
        },

        async jwt({ token, user }) {
            if (user) {
                token.user = user;
            }
            return token;
        },
    },
});
