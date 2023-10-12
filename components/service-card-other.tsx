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

export function ServiceCardOther() {
  const [contact, setContact] = useAtom(contactAtom);

  return (
    <div className="md:max-w-[calc(50%-1rem)] max-w-none w-full">
      <Card className="w-full p-3">
        <CardHeader className="flex gap-3">
          <p className="text-2xl font-semibold">Other</p>
        </CardHeader>
        <Divider />
        <CardBody className="p-3 flex flex-col gap-5">
          <p>
            I offer a comprehensive range of services that go beyond developing
            full-stack websites. Whether you need assistance fixing a bug on
            your website, adding new features or content, deploying your website
            to the internet, managing domain acquisitions, or creating custom
            plugins, I have you covered. With a keen focus on providing
            long-term stability and minimal ongoing maintenance, you can trust
            in dependable solutions for your online needs. While these services
            may not involve complex user management or extensive database
            interactions, they are ideal for enhancing and optimizing your
            digital presence with efficiency and precision.
          </p>
          <ul className="list-disc ml-5 flex flex-col gap-3 pb-3 pt-2">
            <li>
              <b>Website Bug Fixing</b>: Expert solutions for identifying and
              resolving website issues.
            </li>
            <li>
              <b>Website Updates</b>: Seamlessly add new features or content to
              your website.
            </li>
            <li>
              <b>Website Deployment</b>: Get your website online and accessible
              to a global audience.
            </li>
            <li>
              <b>Domain Management</b>: Assistance with acquiring and managing
              domain names.
            </li>
            <li>
              <b>Plugin Development</b>: Create custom plugins to enhance your
              website&apos;s functionality.
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
