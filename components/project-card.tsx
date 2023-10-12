import { Button, Card, Chip, Divider, Image, Link } from "@nextui-org/react";
import { Link1Icon } from "@radix-ui/react-icons";
import React from "react";

export default function ProjectCard({
  link,
  image,
  content,
  heading,
  tools,
}: {
  link: string;
  image: string;
  content: string;
  heading: string;
  tools: string[];
}) {
  return (
    <Card className="max-w-[652px] w-full min-h-[500px]">
      <div className="w-full h-full rounded-lg p-5 shadow-lg flex-col gap-2 flex justify-between">
        <Link
          href={link}
          target="_blank"
          className="text-2xl text-white font-semibold"
        >
          {heading}
        </Link>
        <Divider className="bg-stone-600 mb-2" />
        <Image
          alt="project photo"
          src={image}
          className="w-full h-auto aspect-video rounded-md"
        />
        <div className="flex flex-wrap gap-2 pt-2">
          {tools?.map((tool) => {
            return (
              <>
                <Chip
                  size="sm"
                  key={tool}
                  color="primary"
                  variant="faded"
                  className="flex sm:hidden"
                >
                  {tool}
                </Chip>
                <Chip
                  key={tool}
                  color="primary"
                  variant="faded"
                  className="sm:flex hidden"
                >
                  {tool}
                </Chip>
              </>
            );
          })}
        </div>

        <p className="my-2 text-sm pl-1">{content}</p>
        <Button
          className="w-min rounded-md px-5"
          color="default"
          as={Link}
          endContent={<Link1Icon />}
          href={link}
          target="_blank"
        >
          Visit
        </Button>
      </div>
    </Card>
  );
}
