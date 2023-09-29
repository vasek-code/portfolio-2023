"use client";

import { aboutAtom, contactAtom, projectsAtom, skillsAtom } from "@/app/page";
import { useIsInViewport } from "@/hooks/useIsInViewport";
import {
  Button,
  Link,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Navbar as NextNavbar,
} from "@nextui-org/react";
import { DownloadIcon, EnvelopeClosedIcon } from "@radix-ui/react-icons";
import { useAtom } from "jotai";
import { usePathname } from "next/navigation";
import React from "react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [skill, setSkill] = useAtom(skillsAtom);
  const [about, setAbout] = useAtom(aboutAtom);
  const [project, setProject] = useAtom(projectsAtom);
  const [contact, setContact] = useAtom(contactAtom);

  return (
    <NextNavbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      shouldHideOnScroll={!isMenuOpen}
    >
      <NavbarContent className="lg:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="text-blue-50 relative z-50"
        />
      </NavbarContent>
      <NavbarContent className="lg:hidden" justify="center">
        <NavbarBrand>
          <i
            className="text-2xl font-black cursor-pointer"
            onClick={() => {
              about?.current?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            Václav Piroutek._
          </i>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden lg:flex gap-4" justify="center">
        <NavbarBrand className="pr-5">
          <i
            className="text-2xl font-black cursor-pointer"
            onClick={() => {
              about?.current?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            Václav Piroutek._
          </i>
        </NavbarBrand>
        <NavbarItem>
          <Link
            color={"foreground"}
            className="cursor-pointer"
            onClick={() => {
              about?.current?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className="cursor-pointer"
            color={"foreground"}
            onClick={() => {
              skill?.current?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            Skills
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className="cursor-pointer"
            aria-current="page"
            color={"foreground"}
            onClick={() => {
              project?.current?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            Projects
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className="cursor-pointer"
            color={"foreground"}
            onClick={() => {
              contact?.current?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end" className="hidden sm:flex">
        <NavbarItem className="flex">
          <Button
            as={Link}
            color="secondary"
            variant="solid"
            endContent={<DownloadIcon />}
            className="rounded-md border-1 border-purple-400 lg:px-[16px] min-w-0 w-10 lg:w-auto h-10 px-0"
            href="/VaclavPiroutekCV.pdf"
            target="_blank"
          >
            <span className="hidden lg:flex">Download CV</span>
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button
            as={Link}
            color="primary"
            variant="solid"
            endContent={<EnvelopeClosedIcon />}
            className="rounded-md px-0 lg:px-[16px] min-w-0 w-10 lg:w-auto h-10"
            onClick={() => {
              contact?.current?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            <span className="hidden lg:flex">Contact me</span>
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        <NavbarMenuItem>
          <Link
            className="w-full"
            color="foreground"
            size="lg"
            onClick={() => {
              about?.current?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            About
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            className="w-full"
            color="foreground"
            size="lg"
            onClick={() => {
              skill?.current?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            Skills
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            className="w-full"
            color="foreground"
            size="lg"
            onClick={() => {
              project?.current?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            Projects
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            className="w-full"
            color="foreground"
            size="lg"
            onClick={() => {
              contact?.current?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            Contact
          </Link>
        </NavbarMenuItem>
        <div className="w-full flex justify-start gap-2 flex-col md:flex-row">
          <NavbarMenuItem className="w-full">
            <Button
              as={Link}
              color="secondary"
              variant="solid"
              endContent={<DownloadIcon />}
              className="rounded-md border-1 border-purple-400 w-full"
              href="/VaclavPiroutekCV.pdf"
              target="_blank"
            >
              <span className="">Download CV</span>
            </Button>
          </NavbarMenuItem>
          <NavbarMenuItem className="w-full">
            <Button
              as={Link}
              color="primary"
              variant="solid"
              endContent={<EnvelopeClosedIcon />}
              className="rounded-md w-full"
              onClick={() => {
                contact?.current?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              <span className="">Contact me</span>
            </Button>
          </NavbarMenuItem>
        </div>
      </NavbarMenu>
    </NextNavbar>
  );
}
