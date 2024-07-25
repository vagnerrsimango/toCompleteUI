import Link from "next/link";
import Image from "next/image";
import NotificationTrigger from "./NotificationTrigger";
import ProfileTrigger from "./ProfileTrigger";
import Logo from "@/lib/media/logo.svg";
import { getServerSession } from "next-auth";

export default async function NavBar() {
  const session = await getServerSession();
  return (
    <nav className="flex items-center justify-between w-full bg-white-300 shadow-md py-2 px-4">
      <div className="flex items-center space-x-2">
        <Link href={"/"} className="uppercase font-semibold text-pretty text-lg flex items-center">
          <Image src={Logo} alt="Logo" width={30} height={30} className="mr-2" />
          To Complete
        </Link>
      </div>
      {session ? (
        <div className="grid grid-cols-2 items-center">
          <NotificationTrigger />
          <ProfileTrigger />
        </div>
      ) : null}
    </nav>
  );
}
