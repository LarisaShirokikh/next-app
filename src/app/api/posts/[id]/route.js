import Post from "@/models/post";
import connect from "@/components/utils/db";
import { NextResponse } from "next/server";


export const GET = async (request, { params }) => {
    const { id } = request.params
    try {
        await connect()
        const posts = await Post.findById(id)
        return new NextResponse(JSON.stringify(posts), { status: 200 })
    } catch (error) {
        return new NextResponse('error in db', { status: 500 })
    }
}