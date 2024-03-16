import { useSession, signIn, signOut } from "next-auth/react"

export default function CamperVanPage() {
  const { data: session, status } = useSession()
  const userEmail = session?.user?.email

  if (status === "loading") {
    return <p>Hang on there...</p>
  }

  if (status === "authenticated") {
    return (
      <>
        <p>Signed in as {userEmail}</p>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500 transition-colors cursor-pointer" onClick={() => signOut()}>Sign out</button>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="https://cdn.pixabay.com/photo/2017/08/11/19/36/vw-2632486_1280.png" alt="test only" />
      </>
    )
  }

  return (
    <>
      <p>Not signed in.</p>
      <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500 transition-colors cursor-pointer" onClick={() => signIn("github")}>Sign in with Github</button>
      <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500 transition-colors cursor-pointer" onClick={() => signIn("google")}>Sign in with Google</button>
    </>
  )
}