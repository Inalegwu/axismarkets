import bg from "@/assets/images/bg.jpg";
import { Header } from "@/components";
import { IMPACT, WHAT_WE_DO } from "@/lib/constants";
import {
  Earth,
  Library,
  LinkRound,
  LinkSquare,
  Routing2,
} from "@solar-icons/react/ssr";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full relative">
      <Header />
      <section className="w-full h-screen relative">
        <Image
          src={bg}
          priority
          alt="background"
          className="absolute z-0 w-full h-full object-cover"
        />
        <div className="w-full h-full gap-5 absolute z-1 bg-black/30 flex flex-col items-start justify-end p-10">
          <div className="hidden md:lg:xl:flex w-[13%] gap-4 text-foreground-200 flex-col items-start text-start">
            <Earth size={30} weight="Bold" />
            <span className="text-sm">
              MODERN BUSINESSES NEED AN AGILE AGENCY PARTNER TO DRIVE CLARITY,
              GROWTH AND IMPACT
            </span>
          </div>
          <div className="w-full gap-4 hidden md:lg:xl:flex items-center justify-between">
            <div className="w-50 h-50 rounded-sm text-foreground-950 p-2 bg-background-50" />
            <h1 className="text-7xl font-bold w-1/6 font-alternate">
              PLAN BUILD REFORM.
            </h1>
            <div className="w-full h-full gap-4 flex flex-col items-end justify-center">
              <span className="text-4xl font-light w-3/6 text-end">
                THINK STRATEGICALLY AND DELIVER MEASURABLE BUSINESS RESULTS
              </span>
              <button className="px-4 text-sm py-1.5 rounded-full bg-background-950 text-foreground-50">
                Start Project
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full flex flex-col md:lg:xl:flex-row items-center px-10 py-20 md:lg:xl:h-[90vh] bg-background-100 text-foreground-950">
        <div className="w-full h-full text-center md:lg:xl:text-start md:lg:xl:h-full md:lg:xl:w-2/6 flex flex-col md:lg:xl:items-start md:lg:xl:justify-start gap-1">
          <span className="text-xs text-center md:lg:xl:text-start font-alternate text-foreground-300">
            SERVICES
          </span>
          <h1 className="font-bold text-5xl font-alternate">What We Do</h1>
          <span className="text-sm md:lg:xl:text-base md:lg:xl:w-5/6 text-foreground-400">
            We connect international investors with prime opportunities in
            Canada, and empower businesses to thrive in the global arena. We are
            an execution-driven advisory firm focused on real transactions,
            partnerships, and capital deployment.
          </span>{" "}
          <button className="px-4 my-4 text-sm py-1.5 rounded-full bg-background-950 text-foreground-50">
            Get In Touch
          </button>
        </div>
        <div className="h-4/6 md:lg:xl:h-full w-full md:lg:xl:w-4/6 hidden md:lg:xl:flex flex-wrap items-start justify-end">
          {WHAT_WE_DO.map((item, idx) => (
            <div
              className={`md:lg:xl:w-3/6 md:lg:xl:h-3/6 flex flex-col p-5 items-start justify-start gap-3 hover:bg-background-950 hover:text-foreground-50 transition border border-solid border-background-300 ${idx === 0 ? "border-t-transparent border-l-transparent" : idx === 3 ? "border-r-transparent border-b-transparent" : "border-transparent"}`}
              key={idx}
            >
              <span className="md:lg:xl:size-100">
                {item.slug === "readiness" ? (
                  <LinkRound weight="Bold" />
                ) : item.slug === "research" ? (
                  <Library weight="Bold" />
                ) : item.slug === "connect" ? (
                  <LinkSquare weight="Bold" />
                ) : item.slug === "strategy" ? (
                  <Routing2 weight="Bold" />
                ) : null}
              </span>
              <h1 className="font-alternate font-medium text-lg">
                {item.title}
              </h1>
              <span className="text-foreground-400 text-sm w-4/6">
                {item.description}
              </span>
            </div>
          ))}
        </div>
      </section>
      <section className="flex w-full md:lg:xl:h-[90vh] overflow-hidden flex-col items-center justify-start py-20 px-10">
        <div className="flex flex-col items-center justify-center text-center gap-2">
          <span className="text-xs text-foreground-500 font-alternate">
            IMPACT
          </span>
          <h1 className="text-2xl md:lg:xl:text-5xl font-alternate font-medium">
            How We Create Impact
          </h1>
          <p className="text-sm w-full md:lg:xl:w-3/6 text-foreground-300">
            Unlike traditional consulting firms, Axis Market Entry Advisory goes
            beyond strategy. We convert global investor interest into
            structured, bankable opportunities within Ontario’s priority sectors
            and guide local businesses through successful international
            expansion.
          </p>
        </div>
        <div className="hidden md:lg:xl:flex items-center my-4 w-full">
          <div className="w-1/2 h-full overflow-hidden overflow-y-scroll">
            {IMPACT.slice(0, 2).map((item, idx) => (
              <div
                key={idx}
                className="flex py-5 my-2 flex-col items-start border-b border-b-solid border-b-foreground-900 justify-center"
              >
                <h1 className="font-alternate font-medium">{item.title}</h1>
                <span className="text-foreground-400 text-sm w-4/6">
                  {item.description}
                </span>
              </div>
            ))}
          </div>
          <div className="w-1/2 h-full flex items-center justify-center">
            images
          </div>
        </div>
      </section>
      <section className="w-full h-[90vh] bg-background-50 text-background-950" />
      <footer className="w-full h-[90vh] relative flex flex-col items-center justify-center">
        <div className="w-full h-full flex items-center justify-between">
          <div className="flex flex-col h-full w-3/6 text-sm md:lg:xl:text-base items-start p-10 text-foreground-500 justify-start gap-1">
            <span className="text-sm font-medium">Office Hours</span>
            <span className="text-foreground-200 font-medium">
              Monday - Friday: 9am - 5pm
            </span>
            <span className="text-foreground-200 font-medium">
              Saturday - Sunday: Closed
            </span>
          </div>
          <div className="flex flex-col h-full w-3/6 items-end p-10 text-foreground-500 justify-start gap-1">
            <h1 className="text-sm text-end font-medium">Connect with us</h1>
            <span className="text-end text-foreground-200 text-sm md:lg:xl:text-lg">
              Axis Market Entry Advisory South Western Ontario Ontario, Canada
            </span>
            <div className="flex items-end justify-end text-end gap-2">
              <span className="text-accent-400 font-medium">
                +1 (226) 456-7457
              </span>
            </div>
          </div>
        </div>
        <h1 className="text-lg md:lg:xl:text-8xl text-center font-bold absolute bottom-10 font-title text-foreground-900">
          Axis Market Partners
        </h1>
      </footer>
    </div>
  );
}
