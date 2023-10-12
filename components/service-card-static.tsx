import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Image,
  Link,
} from "@nextui-org/react";
import { EnvelopeClosedIcon } from "@radix-ui/react-icons";
import { useAtom } from "jotai";
import React from "react";
import { contactAtom } from "./providers";

export function ServiceCardStatic() {
  const [contact, setContact] = useAtom(contactAtom);

  return (
    <div className="md:max-w-[calc(50%-1rem)] max-w-none w-full">
      <Card className="w-full p-3 h-full">
        <CardHeader className="flex gap-3">
          <p className="text-2xl font-semibold">Static App</p>
        </CardHeader>
        <Divider />
        <CardBody className="p-3 flex flex-col gap-5">
          <p>
            I will create beautiful static website that will run forever and
            won&apos;t need much maintaining but can&apos;t do stuff like
            creating users or send some data to database. This option is
            suitable for someone who wants a portfolio of his photography or
            website for your restaurant.
          </p>
          <ul className="list-disc ml-5 flex flex-col gap-3 pb-3 pt-2">
            <li>
              <b>Content</b>: Predefined and static content.
            </li>
            <li>
              <b>Interactivity</b>: Limited or no user interaction.
            </li>
            <li>
              <b>Data</b>: Content is hard-coded into HTML/CSS files.
            </li>
            <li>
              <b>Technologies</b>: Typically built with HTML, CSS, and possibly
              minimal JavaScript.
            </li>
            <li>
              <b>No Backend</b>: No server-side processing or databases
              involved.
            </li>
            <li>
              <b>Hosting</b>: Hosted on a simple web server or content delivery
              network (CDN).
            </li>
            <li>
              <b>Page Load</b>: Generally faster page loading due to static
              content.
            </li>
            <li>
              <b>Scalability</b>: Easier to scale because of minimal server-side
              processing.
            </li>
            <li>
              <b>Complexity</b>: Simple and straightforward in terms of
              development.
            </li>
          </ul>
        </CardBody>
        <Divider />
        <CardFooter>
          <Button
            color="primary"
            className="rounded-md"
            endContent={<EnvelopeClosedIcon />}
            onClick={() => {
              contact?.current?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            Tell me your idea
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
