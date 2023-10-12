"use client";

import { FormRadio } from "@/components/form-radio";
import { Navbar } from "@/components/navbar";
import ProjectCard from "@/components/project-card";
import { SkillCard } from "@/components/skill-card";
import { useIsInViewport } from "@/hooks/useIsInViewport";
import {
  Card,
  Button,
  Link,
  Input,
  RadioGroup,
  Radio,
  CheckboxGroup,
  Checkbox,
  Textarea,
  CircularProgress,
  Spinner,
  Tabs,
  Tab,
} from "@nextui-org/react";
import {
  ChatBubbleIcon,
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  HomeIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import { atom, useAtom } from "jotai";
import {
  FormEvent,
  MutableRefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import { motion, useAnimate, useAnimation } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useToast } from "@/components/ui/use-toast";
import {
  aboutAtom,
  contactAtom,
  projectsAtom,
  servicesAtom,
  skillsAtom,
} from "@/components/providers";
import { ServiceCardStatic } from "@/components/service-card-static";
import { ServiceCardFullstack } from "@/components/service-card-fullstack";
import { ServiceCardDesign } from "@/components/service-card-design";
import { ServiceCardOther } from "@/components/service-card-other";

export default function Home() {
  const [skill, setSkill] = useAtom(skillsAtom);
  const skillsRef = useRef<HTMLDivElement | null>(null);

  const [about, setAbout] = useAtom(aboutAtom);
  const aboutRef = useRef<HTMLDivElement | null>(null);

  const [projects, setProjects] = useAtom(projectsAtom);
  const projectsRef = useRef<HTMLDivElement | null>(null);

  const [contact, setContact] = useAtom(contactAtom);
  const contactRef = useRef<HTMLDivElement | null>(null);

  const [services, setServices] = useAtom(servicesAtom);
  const servicesRef = useRef<HTMLDivElement | null>(null);

  setSkill(skillsRef);
  setAbout(aboutRef);
  setProjects(projectsRef);
  setContact(contactRef);
  setServices(servicesRef);

  const form = useRef<HTMLFormElement | null>(null);

  const [loading, setLoading] = useState(false);

  const [selected, setSelected] = useState("all");

  const { toast } = useToast();

  function sendEmail(e: FormEvent<HTMLFormElement>) {
    e.preventDefault(); // prevents the page from reloading when you hit “Send”
    setLoading(true);

    emailjs
      .sendForm(
        "service_7pgjtgq",
        "template_yp74mi2",
        form.current as HTMLFormElement,
        "ihnLL1YkO9_wINkPq"
      )
      .then((result) => {
        console.log(result);
        toast({
          title: "Form sent",
          description: "Form succesfully sent.",
        });
        form.current?.reset();
      })
      .catch((error) => {
        console.log(error);
        toast({
          description: "Form didn&apos;t sent",
          title:
            "There was an error sending form, please contact me via email.",
        });
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <main className="flex flex-col container xl:px-10 lg:px-10 px-4 gap-10">
      <div
        className="w-full flex items-start flex-col lg:flex-row"
        ref={aboutRef}
      >
        <div className="w-full flex-col justify-between gap-5 flex  py-28">
          <div className="flex flex-col gap-3 sm:text-5xl text-4xl  text-[2rem] font-extrabold">
            <span>Hello. </span>
            <div className="flex flex-row">
              <span>I&apos;m</span>
              <motion.div
                animate={{
                  x: 0,
                  opacity: 1,
                }}
                initial={{
                  x: 100,
                  opacity: 0,
                }}
                transition={{ type: "spring", duration: 0.8, bounce: 0.3 }}
                className="bg-gradient-to-r from-primary to-accent bg-clip-text ml-2 inline-flex whitespace-nowrap"
                style={{ WebkitTextFillColor: "transparent" }}
              >
                Václav Piroutek.
              </motion.div>
            </div>
            <span className="">A Fullstack Developer,</span>
          </div>

          <div className="flex flex-col">
            <h2 className="text-xl sm:text-2xl">
              passionate about bringing ideas <br /> to life in the{" "}
              <span className="text-blue-100">Digital Realm.</span>
            </h2>
          </div>
          <div className="flex gap-5">
            <Button
              color="primary"
              size="lg"
              className="rounded-lg"
              onClick={() => {
                contact?.current?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              Contact me
            </Button>
            {/* <Button
              as={Link}
              color="secondary"
              href="/VaclavPiroutekCV.pdf"
              variant="solid"
              size="lg"
              className="rounded-md border-1 border-purple-400"
              target="_blank"
            >
              Download CV
            </Button> */}
            <Button
              color="secondary"
              variant="solid"
              size="lg"
              className="rounded-md border-1 border-purple-400"
              onClick={() => {
                services?.current?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              Services
            </Button>
          </div>
        </div>
        <div className="w-full flex flex-col gap-5 h-full justify-center lg:py-28  pb-24 lg:pl-10 pl-0">
          <span className="text-4xl text-[2rem] lg:text-5xl font-extrabold">
            About
          </span>
          <p className="text-sm md:text-base text-justify">
            I&apos;ve been a self-taught web developer for 3 years and I&apos;m
            currently studying at Panská Film School in Prague. I&apos;m
            passionate about crafting web experiences and turning ideas into
            interactive websites.
          </p>
          <p className="text-sm md:text-base text-justify">
            My expertise extends from building small single-page applications to
            developing full-stack web applications with backend functionalities.
            I thrive on tackling challenging problems and continuously expanding
            my skills in the ever-evolving world of web development.
          </p>
        </div>
      </div>
      <div className="w-full flex flex-col gap-5 pb-24" ref={projectsRef}>
        <div className="flex sm:hidden w-full justify-between">
          <span className="text-4xl text-[2rem] font-extrabold">Projects</span>
          <Tabs
            variant="underlined"
            aria-label="Website type"
            selectedKey={selected}
            //@ts-ignore
            onSelectionChange={setSelected}
            size="sm"
          >
            <Tab key="all" title="All" />
            <Tab key="static" title="Static" />
            <Tab key="fullstack" title="Fullstack" />
          </Tabs>
        </div>
        <div className="sm:flex hidden w-full justify-between">
          <span className="text-4xl text-[2rem] font-extrabold">Projects</span>
          <Tabs
            variant="underlined"
            aria-label="Website type"
            selectedKey={selected}
            //@ts-ignore
            onSelectionChange={setSelected}
          >
            <Tab key="all" title="All" />
            <Tab key="static" title="Static" />
            <Tab key="fullstack" title="Fullstack" />
          </Tabs>
        </div>

        <motion.div className="w-full flex flex-wrap flex-row justify-center gap-4">
          {selected !== "fullstack" && (
            <ProjectCard
              tools={[
                "Astro",
                "React",
                "Contentful CMS",
                "Tailwind",
                "Node.js",
              ]}
              content="Simple website made with Astro and Contentful CMS for endowment fund of Slavia football team."
              heading="nfslavie.cz"
              image="/images/nfslavie.webp"
              link="https://nfslavie.cz"
            />
          )}
          {selected !== "static" && (
            <ProjectCard
              tools={[
                "Vue",
                "Nuxt",
                "Tailwind",
                "Google Cloud",
                "Supabase",
                "Stripe",
              ]}
              content="Fullstack E-commerce website for my friend built with Nuxt and Vue for the frontend and Supabase used for backend."
              heading="bludshirts.com"
              image="/images/bludshirts.webp"
              link="https://bludshirts.com"
            />
          )}
          {selected !== "fullstack" && (
            <ProjectCard
              tools={["React", "Next.js", "Chakra-ui", "Tailwind"]}
              content="Next.js website for video production company from Czech built with Chakra-ui component library."
              heading="nyla.cz"
              image="/images/nyla.webp"
              link="https://nyla.cz"
            />
          )}
        </motion.div>
      </div>
      <div className="w-full flex flex-col gap-5 pb-24" ref={skillsRef}>
        <span className="text-4xl text-[2rem] font-extrabold">Skills</span>
        <div className="w-full flex flex-wrap gap-4 justify-center">
          <SkillCard image="/react.svg" link="https://react.dev" name="React" />
          <SkillCard
            image="/next.svg"
            link="https://nextjs.org/"
            name="Next.js"
          />
          <SkillCard
            image="/vercel.svg"
            link="https://vercel.com/"
            name="Vercel"
          />
          <SkillCard
            image="/typescript.svg"
            link="https://www.typescriptlang.org/"
            name="Typescript"
          />
          <SkillCard
            image="/javascript.svg"
            link="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            name="Javascript"
          />
          <SkillCard
            image="/github.svg"
            link="https://github.com/"
            name="Github"
          />
          <SkillCard
            image="/tailwind.svg"
            link="https://tailwindcss.com/"
            name="Tailwind"
          />
          <SkillCard image="/nuxt.svg" link="https://nuxt.com/" name="Nuxt" />
        </div>
      </div>
      <div className="w-full flex flex-col pb-24" ref={servicesRef}>
        <span className="text-4xl text-[2rem] font-extrabold">Services</span>
        <div className="flex w-full flex-wrap transition-all pt-6 gap-5">
          <ServiceCardStatic />
          <ServiceCardFullstack />
          <ServiceCardDesign />
          <ServiceCardOther />
        </div>
      </div>

      <div className="w-full flex flex-col gap-5" ref={contactRef}>
        <span className="text-4xl text-[2rem] font-extrabold">Contact</span>
        <div className="w-full flex flex-col md:flex-row justify-between gap-3">
          <Card className="h-full flex flex-col p-5 md:max-w-[352.8px] max-w-none w-full">
            <span className="text-lg">Contact information</span>
            <p className="text-sm text-white/70 sm:whitespace-nowrap whitespace-normal w-full">
              Fill up the form and I&apos;ll respond within 24 hours.
            </p>
            <div className="flex flex-col gap-4 pt-10">
              <span className="flex gap-2 text-sm items-center">
                <ChatBubbleIcon />
                +420 775 117 161
              </span>
              <span className="flex gap-2 text-sm items-center">
                <EnvelopeClosedIcon />
                vasek.pirou@gmail.com
              </span>
              <span className="flex gap-2 text-sm items-center">
                <HomeIcon />
                Czech, Prague
              </span>
            </div>
            <div className="w-full flex gap-3 pt-10">
              <Button
                isIconOnly
                as={Link}
                href="https://github.com/vasek-code"
                target="_blank"
              >
                <GitHubLogoIcon />
              </Button>
              <Button
                isIconOnly
                as={Link}
                href="https://www.linkedin.com/in/v%C3%A1clav-piroutek-67426b230/"
                target="_blank"
              >
                <LinkedInLogoIcon />
              </Button>
            </div>
          </Card>
          <form ref={form} className="h-full w-full" onSubmit={sendEmail}>
            <Card className="h-full flex flex-col w-full p-5 gap-3">
              <span className="text-lg">Contact form</span>
              <div className="flex justify-between gap-3 flex-col md:flex-row">
                <Input
                  size="sm"
                  className="w-full"
                  type="text"
                  label="First Name"
                  name="first_name"
                  isClearable
                />
                <Input
                  size="sm"
                  className="w-full"
                  type="text"
                  label="Last Name"
                  name="last_name"
                  isClearable
                />
              </div>
              <div className="flex justify-between gap-3 flex-col md:flex-row">
                <Input
                  size="sm"
                  className="w-full"
                  type="email"
                  label="Email"
                  name="email"
                  isClearable
                />
                <Input
                  size="sm"
                  className="w-full"
                  type="tel"
                  label="Phone"
                  name="phone"
                  isClearable
                />
              </div>
              <div className="flex flex-col w-full">
                <RadioGroup
                  label="What kind of service you need?"
                  orientation="horizontal"
                  className="radio-group text-sm"
                  name="service"
                >
                  <FormRadio value="static">
                    <div className="w-full h-full flex flex-col">
                      <span>Static App</span>
                      <p className="text-sm text-white/70 mt-2">
                        Only static html website with no backend
                        functionalities. <br />
                        Example: Portfolio
                      </p>
                    </div>
                  </FormRadio>
                  <FormRadio value="fullstack">
                    <div className="w-full h-full flex flex-col">
                      <span>Fullstack App</span>
                      <p className="text-sm text-white/70 mt-2">
                        Fullstack webapp with all functionalities you&apos;ll
                        want.
                        <br />
                        Example: E-commerce
                      </p>
                    </div>
                  </FormRadio>

                  <FormRadio value="other">
                    <div className="w-full h-full flex flex-col">
                      <span>Other services</span>
                      <p className="text-sm text-white/70 mt-2">
                        Any other web service you may need.
                        <br />
                        Example: Fixing part of website
                      </p>
                    </div>
                  </FormRadio>
                </RadioGroup>
              </div>
              <Textarea
                label="Message"
                labelPlacement="inside"
                placeholder="Write your message"
                className="w-full"
                name="message"
              />
              <div className="w-full flex justify-end">
                <Button
                  color="secondary"
                  href="#"
                  variant="solid"
                  className="rounded-md border-1 border-purple-400 disabled:text-white/70 disabled:opacity-80"
                  type="submit"
                  disabled={loading}
                  endContent={
                    loading ? <Spinner color="default" size="sm" /> : false
                  }
                >
                  Send message
                </Button>
              </div>
            </Card>
          </form>
        </div>
      </div>
      <footer className="w-full pb-10 flex justify-center items-center text-sm text-white/90">
        Copyright &copy; {new Date().getFullYear()} Václav Piroutek
      </footer>
    </main>
  );
}
