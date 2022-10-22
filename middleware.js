import { NextRequest, NextResponse } from "next/server";

import jwt from "next-auth/jwt";
const secret = process.env.jwt;

const handler = async (req, res) => {
        const token = await jwt.getToken({ req, secret, raw: true }).catch((e) => console.error(e));
    res.send(JSON.stringify(token, null, 2));
};

export default handler;
