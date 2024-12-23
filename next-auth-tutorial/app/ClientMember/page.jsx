"use client";

import { useSession, signIn } from "next-auth/react";

const Member = () => {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      signIn(null, { callbackUrl: "/ClientMember" });
    },
  });

  return (
    <div>
      <h1>Member Client Session</h1>
      <p>{session?.user?.email}</p>
      <p>{session?.user?.role}</p>
    </div>
  );
};

export default Member;
