import Link from "next/link";

import NotificationTrigger from "./NotificationTrigger";
import ProfileTrigger from "./ProfileTrigger";
import { auth } from "@/utils/auth";
import { getServerSession } from "next-auth";
export default async function NavBar() {
  const session = await getServerSession();
  return (
    <nav className="flex items-center justify-between w-full bg-white-300 shadow-md py-2 px-4">
      <Link href={"/"} className=" uppercase font-semibold text-pretty text-lg">
        To Complete
      </Link>

      {session ? (
        <div className="grid grid-cols-2 items-center">
          <NotificationTrigger />
          <ProfileTrigger />
        </div>
      ) : null}
    </nav>
  );
}
