import Post from "@/models/post";
import connect from "@/components/utils/db";
import { NextResponse } from "next/server";


export const GET = async (request) => {
    try {
        await connect()
        const posts = await Post.find()
        return new NextResponse(JSON.stringify(posts), { status: 200 })
    } catch (error) {
        return new NextResponse('error in db', { status: 500 })
    }
}