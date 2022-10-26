import { jwtVerify } from "jose";
import { NextRequest, NextResponse } from "next/server";
import userStore from "./userStore";

const middleware = async (req, res) => {
    if (req.url.includes("/api/oneuser")) {
        const secret = new TextEncoder().encode(process.env.jwt);
        const req_id = req.url.split("/").pop();
        const token = req.cookies.get("token");

        if (token) {
            const decToken = await jwtVerify(token, secret);
            if (decToken) {
                const serverId = decToken.payload.id;
                console.log(serverId, req_id);
                if (req_id !== serverId) {
                    console.log("not the same");
                    return NextResponse.error();
                }
            } else {
                console.log("the same");
                return NextResponse.next();
            }
        } else {
            return NextResponse.redirect("http://localhost:3000/login");
        }
    } else {
    }
};

export default middleware;
