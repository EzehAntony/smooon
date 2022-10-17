import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import dbConnect from "../../../util/mongodb";
import user from "../../../models/user";
import bcryptjs from "bcryptjs";

export default NextAuth({
    session: {
        strategy: "jwt",
    },

    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {},
            async authorize(credentials, req) {
                await dbConnect();

                const { username, password } = credentials;
                const users = await user.findOne({ username: username });

                const decodedPassword = await bcryptjs.compare(password, users.password);

                if (!users) {
                    throw new Error("No such user in the database");
                }

                if (users.username === username && !decodedPassword) {
                    throw new Error("Password does not match");
                }

                if (users.username === username && decodedPassword) {
                    console.log(users);
                    return { id: users._id, username: users.username, firstname: users.firstname };
                }
            },
        }),
    ],
    pages: {
        signIn: "/auth/Signin",
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
