import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

//registration api
export async function POST(req, res) {
  try {
    let reqBody = await req.json();
    reqBody.otp = "0";
    const prisma = new PrismaClient();
    const result = await prisma.users.create({
      data: reqBody,
    });
    return NextResponse.json({ status: "succesa", data: result });
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e });
  }
}

//json boby
//"firstName": "Foyzun",
//"lastName": "Foyzun",
//"email": "supu345@gmail.com",
//"mobile": "123456",
//"password":"123"
//postman url- http://localhost:3000/api/user/registration
