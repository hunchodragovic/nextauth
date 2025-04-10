"use client";

import { signOut } from "next-auth/react";
import { useState } from "react";

interface SignOutProps {
  className?: string;
  redirectUrl?: string;
}

const SignOut: React.FC<SignOutProps> = ({
  className = "",
  redirectUrl = "/",
}) => {
  const [isSigningOut, setIsSigningOut] = useState(false);

  const handleSignOut = async () => {
    setIsSigningOut(true);
    await signOut({
      redirect: true,
      callbackUrl: redirectUrl,
    });
  };

  return (
    <button
      onClick={handleSignOut}
      disabled={isSigningOut}
      className={`w-full mt-3 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 py-2 px-4 rounded-lg cursor-pointer transition-colors duration-200 font-medium ${
        isSigningOut ? "opacity-70 cursor-not-allowed" : ""
      } ${className}`}
    >
      {isSigningOut ? "Signing out..." : "Sign Out"}
    </button>
  );
};

export default SignOut;
