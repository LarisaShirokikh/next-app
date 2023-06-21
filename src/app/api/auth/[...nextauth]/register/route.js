import User from "@/models/user"
import connect from "@/components/utils/db"

export const POST = async (request) => {
    const { name, email, password } = request.json()

    await connect()
    const newUser = new User({
        name,
        email,
        password: hashPassword,
    })
}