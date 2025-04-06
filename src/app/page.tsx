"use client";
import { signIn } from "next-auth/react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="p-8 rounded-2xl shadow-xl bg-gray-950/60 backdrop-blur-md border border-gray-700">
        <p className="text-xl mb-5 text-center">You are not logged in.</p>
        <button
          onClick={() => signIn("github", { callbackUrl: "/" })}
          className="px-6 py-3 rounded-full bg-gray-800 hover:bg-gray-700 text-white font-semibold text-sm transition-all duration-200 shadow-md hover:shadow-lg active:scale-95 border border-gray-600 cursor-pointer"
        >
          🔐 Sign in with GitHub
        </button>
      </div>
    </div>
  );
}
