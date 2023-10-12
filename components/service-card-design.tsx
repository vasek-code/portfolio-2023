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

export function ServiceCardDesign() {
  const [contact, setContact] = useAtom(contactAtom);

  return (
    <div className="md:max-w-[calc(50%-1rem)] max-w-none w-full">
      <Card className="w-full p-3 h-full">
        <CardHeader className="flex gap-3">
          <p className="text-2xl font-semibold">Design work</p>
        </CardHeader>
        <Divider />
        <CardBody className="p-3 flex flex-col gap-5">
          <p>
            I will craft professional design solutions that guarantee lasting
            quality and demand minimal upkeep. These services are best suited
            for individuals or businesses looking to establish a striking online
            presence through captivating website design and distinctive logo
            creation. By harnessing the power of cutting-edge design
            technologies, I can deliver both visually appealing website layouts
            and unique logos that ensure a memorable and enduring online
            identity.
          </p>
          <ul className="list-disc ml-5 flex flex-col gap-3 pb-3 pt-2">
            <li>
              <b>Design Services</b>: Crafting visually appealing websites and
              distinctive logos.
            </li>
            <li>
              <b>Quality Assurance</b>: Ensuring long-term stability and minimal
              maintenance needs.
            </li>
            <li>
              <b>User-Friendly Design</b>: Focused on creating an elegant and
              user-friendly online presence.
            </li>
            <li>
              <b>Custom Logo</b>: Unique logo design for a memorable brand
              identity.
            </li>
            <li>
              <b>Cutting-Edge Technologies</b>: Utilizing modern design tools
              and techniques.
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
