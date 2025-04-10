"use client";

import { signIn } from "next-auth/react";

const SignIn = () => {
  return (
    <div>
      <button
        type="button"
        onClick={() => signIn("google", { redirect: true, callbackUrl: "/" })}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
      >
        Sign in with Google
      </button>
    </div>
  );
};

export default SignIn;
