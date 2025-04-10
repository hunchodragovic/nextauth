import { getServerSession } from "next-auth";
import { authOptions } from "./lib/nextAuth";
import SignIn from "./_components/SignIn";
import Image from "next/image";

const Page = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-lg max-w-md w-full p-6 md:p-8">
        {session?.user ? (
          <div className="flex flex-col items-center text-center">
            <div className="mb-6 relative">
              {session.user.image && (
                <div className="rounded-full overflow-hidden border-4 border-indigo-500 shadow-md">
                  <Image
                    src={session.user.image as string}
                    width={120}
                    height={120}
                    alt={session.user.name || "User profile"}
                    className="rounded-full"
                  />
                </div>
              )}
            </div>

            <h1 className="text-2xl font-bold text-gray-800 mb-2">
              Welcome,{" "}
              <span className="text-indigo-600">{session.user.name}</span>
            </h1>

            <p className="text-gray-600 mb-6">{session.user.email}</p>

            <div className="mt-4 w-full">
              <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg transition-colors duration-200 font-medium">
                Go to Dashboard
              </button>

              <button className="w-full mt-3 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 py-2 px-4 rounded-lg transition-colors duration-200 font-medium">
                Sign Out
              </button>
            </div>
          </div>
        ) : (
          <div className="py-6">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
              Welcome Back
            </h2>
            <p className="text-gray-600 text-center mb-8">
              Please sign in to access your account
            </p>
            <SignIn />
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
