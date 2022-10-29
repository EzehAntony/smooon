import { jwtVerify } from "jose";
import { NextRequest, NextResponse } from "next/server";
import userStore from "./userStore";


const middleware = async (req, res) => {
    if (req.nextUrl.pathname.includes("/oneuser")) {
        const secret = new TextEncoder().encode(process.env.jwt);
        const req_id = req.nextUrl.pathname.split("/").pop();
        const token = req.cookies.get("token");

        if (!token) {
            return NextResponse.error();
        } else {
            const decoded = await jwtVerify(token, secret);
            if (decoded) {
                //decoded.payload.id
                if (decoded.payload.id === req_id) {
                    return NextResponse.next();
                } else {
                    return NextResponse.error();
                }
            } else {
                return NextResponse.redirect("http://localhost:3000/unauthenticated");
            }
        }
    } else {
        NextResponse.next();
    }
};

export default middleware;
