import { getServerSession } from "next-auth";
import { authOptions } from "./lib/nextAuth";

const page = () => {
  const session = getServerSession(authOptions);
  return <div>page</div>;
};

export default page;
