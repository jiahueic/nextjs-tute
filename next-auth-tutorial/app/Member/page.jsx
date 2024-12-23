import { getServerSession } from "next-auth";
import React from "react";
import { options } from "../api/auth/[...nextauth]/options";
const Member = async () => {
  const session = await getServerSession(options);
  if (!session) {
    // Redirect to the sign-in page if not authenticated
    return (
      <meta
        httpEquiv="refresh"
        content="0; url=/api/auth/signin?callbackUrl=/Member"
      />
    );
  }
  console.log(session.user);
  return (
    <div>
      <h1>Member Server Session</h1>
      <p>{session?.user?.email}</p>
      <p>{session?.user?.role}</p>
    </div>
  );
};

export default Member;
