import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";
import { db } from "@/database";
import { users } from "@/schema/auth";

// @ts-ignore
export default async function listMovies(req, res) {
  const session = await getServerSession(req, res, authOptions)

  if (session) {
    const user = await db.select().from(users).all();
    res.send({
      user
    })
  } else {
    res.send({
      error: "You must sign in to view users.",
    })
  }
}