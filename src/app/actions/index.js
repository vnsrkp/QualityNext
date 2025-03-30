"use server"

import { getServerSession } from "next-auth"
import prisma from "../../../lib/prisma"
import { authOptions } from "../api/auth/[...nextauth]/route"

export async function addUser(payload){
    try {
        const session = await getServerSession(authOptions)
        if(!session){
            throw new Error("Unauthorized")
        }

        if (payload.role !== "STUDENT"){
            throw new Error("Unauthorized")
        }

        const response = await prisma.user.create({
            data: payload
        })
        return response
    } catch (error) {
        console.log(error)
        throw new Error(error)
    }
}