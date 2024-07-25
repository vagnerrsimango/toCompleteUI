import paths from "@/utils/paths";
import Link from "next/link";
import { Card, CardContent, CardFooter } from "../ui/card";
import { Button } from "../ui/button";
import { TrashIcon } from "../common/icons";
import { Input } from "../ui/input";
import PersonalIcon from "@/lib/media/developmenti.svg";
import { removeCategory } from "@/actions/category.action";
import Image from "next/image";

interface CategoryProps {
  id: string;
  name: string;
}
export default function CategoryItem({ id, name }: CategoryProps) {
  return (
    <Card className="relative flex items-center justify-center bg-white text-gray-900 flex-col transform hover:scale-105 transition-transform duration-300 p-6 shadow-lg rounded-lg overflow-hidden w-48 h-56">
      <Link
        href={paths.showCategory(id)}
        className="flex justify-center items-center"
      >
        <CardContent className="relative z-10 p-4">
          <p className="text-2xl font-bold">{name}</p>
        </CardContent>
        
      </Link>
      {/* <CardFooter className="relative z-10 w-full flex justify-end items-center p-4">
        <form action={removeCategory}>
          <Input name="id" value={id} className="hidden" />
          <Button
            type="submit"
            variant={"ghost"}
            className="text-gray-900 hover:text-red-500 transition duration-300"
          >
  <TrashIcon/>
            
          </Button>
        </form>
      </CardFooter> */}
      <div className="absolute inset-0 flex justify-center items-center opacity-10">
        <Image
          src={PersonalIcon}
          alt="Personal Stuff"
          width={100}
          height={100}
          className="transform rotate-0"
        />
      </div>
    </Card>
  );
}
