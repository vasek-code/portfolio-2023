import { Card, CardFooter, Image, Link } from "@nextui-org/react";

export function SkillCard({
  image,
  name,
  link,
}: {
  image: string;
  name: string;
  link: string;
}) {
  return (
    <div
      onClick={() => {
        window.open(link);
      }}
      className="max-w-[318px] max-h-[200px] w-full h-full hover:scale-105 transition-all"
    >
      <Card
        isFooterBlurred
        radius="lg"
        className="border-none w-full h-full py-10 cursor-pointer flex justify-center items-center pb-20"
      >
        <Image src={image} className="w-20 h-20 text-white rounded-none" />
        <CardFooter className="justify-center before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
          <Link className="text-base text-white">{name}</Link>
        </CardFooter>
      </Card>
    </div>
  );
}
