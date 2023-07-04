import User from "@/models/user"
import connect from "@/components/utils/db"
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export const POST = async (request) => {
    const { name, email, password } = request.json()

    await connect()

    const hashPassword = await bcrypt.hash(password, 10)
    const newUser = new User({
        name,
        email,
        password: hashPassword,
    })

    try {
        await newUser.save()
        return new NextResponse("User saved successfully", {
            status: 201
        })
    } catch (error) {
        return new NextResponse(error.message, {
            status: 500
        })
    }
}