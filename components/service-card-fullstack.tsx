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

export function ServiceCardFullstack() {
  const [contact, setContact] = useAtom(contactAtom);

  return (
    <div className="md:max-w-[calc(50%-1rem)] max-w-none w-full">
      <Card className="w-full p-3">
        <CardHeader className="flex gap-3">
          <p className="text-2xl font-semibold">Fullstack App</p>
        </CardHeader>
        <Divider />
        <CardBody className="p-3 flex flex-col gap-5">
          <p>
            I will develop a robust full-stack website that offers long-term
            stability and requires minimal ongoing maintenance. This solution is
            not designed for complex user management or database interactions,
            making it ideal for those seeking a dependable online portfolio for
            their photography or an elegant website for their restaurant. With
            full-stack technologies, we can ensure both the frontend and backend
            of your website are well-crafted, ensuring a seamless and reliable
            online presence.
          </p>
          <ul className="list-disc ml-5 flex flex-col gap-3 pb-3 pt-2">
            <li>
              <b>Content</b>: Dynamic content generated based on user requests.
            </li>
            <li>
              <b>Interactivity</b>: High interactivity, user input, and
              real-time updates.
            </li>
            <li>
              <b>Data</b>: Content is retrieved from and stored in databases.
            </li>
            <li>
              <b>Technologies</b>: Utilizes a full tech stack, including
              front-end and back-end technologies.
            </li>
            <li>
              <b>Backend</b>: Requires a back-end server for processing requests
              and managing databases.
            </li>
            <li>
              <b>Hosting</b>: Typically hosted on cloud servers or dedicated web
              hosts.
            </li>
            <li>
              <b>Page Load</b>: Page load times may be longer due to server-side
              processing.
            </li>
            <li>
              <b>Scalability</b>: May require complex scaling strategies to
              handle traffic and data growth.
            </li>
            <li>
              <b>Complexity</b>: More complex development, involving both
              front-end and back-end components.
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
