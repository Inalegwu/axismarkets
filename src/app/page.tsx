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
          className="absolute z-0 w-full h-full"
        />
        <div className="w-full h-full gap-5 absolute z-1 bg-black/30 flex flex-col items-start justify-end p-10">
          <div className="flex w-[13%] gap-4 text-foreground-200 flex-col items-start text-start">
            <Earth size={30} weight="Bold" />
            <span className="text-sm">
              MODERN BUSINESSES NEED AN AGILE AGENCY PARTNER TO DRIVE CLARITY,
              GROWTH AND IMPACT
            </span>
          </div>
          <div className="w-full gap-4 flex items-center justify-between">
            <div className="w-50 h-50 rounded-sm text-foreground-950 p-2 bg-background-50">
              content
            </div>
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
      <section className="w-full flex items-center px-10 py-20 h-[90vh] bg-background-100 text-foreground-950">
        <div className="h-full w-2/6 flex flex-col items-start justify-start gap-1">
          <span className="text-xs font-alternate text-foreground-300">
            SERVICES
          </span>
          <h1 className="font-bold text-5xl font-alternate">What We Do</h1>
          <span className="text-lg w-5/6 text-foreground-400">
            We connect international investors with prime opportunities in
            Canada, and empower businesses to thrive in the global arena. We are
            an execution-driven advisory firm focused on real transactions,
            partnerships, and capital deployment.
          </span>{" "}
          <button className="px-4 my-4 text-sm py-1.5 rounded-full bg-background-950 text-foreground-50">
            Get In Touch
          </button>
        </div>
        <div className="h-full w-4/6 flex flex-wrap items-start justify-end">
          {WHAT_WE_DO.map((item, idx) => (
            <div
              className={`w-3/6 h-3/6 flex flex-col p-5 items-start justify-start gap-3 hover:bg-background-950 hover:text-foreground-50 transition border border-solid border-background-300 ${idx === 0 ? "border-t-transparent border-l-transparent" : idx === 3 ? "border-r-transparent border-b-transparent" : "border-transparent"}`}
              key={idx}
            >
              {item.slug === "readiness" ? (
                <LinkRound weight="Bold" size={40} />
              ) : item.slug === "research" ? (
                <Library weight="Bold" size={40} />
              ) : item.slug === "connect" ? (
                <LinkSquare weight="Bold" size={40} />
              ) : item.slug === "strategy" ? (
                <Routing2 weight="Bold" size={40} />
              ) : null}
              <h1 className="font-alternate font-medium text-lg">
                {item.title}
              </h1>
              <span className="text-foreground-400 text-base w-4/6">
                {item.description}
              </span>
            </div>
          ))}
        </div>
      </section>
      <section className="flex w-full h-[90vh] flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center text-center gap-2">
          <span className="text-xs text-foreground-500 font-alternate">
            IMPACT
          </span>
          <h1 className="text-5xl font-alternate font-medium">
            How We Create Impact
          </h1>
          <p className="text-sm w-3/6 text-foreground-300">
            Unlike traditional consulting firms, Axis Market Entry Advisory goes
            beyond strategy. We convert global investor interest into
            structured, bankable opportunities within Ontario’s priority sectors
            and guide local businesses through successful international
            expansion.
          </p>
        </div>
        <div className="flex items-center">
          {IMPACT.map((item, idx) => (
            <div key={idx}>{item.title}</div>
          ))}
        </div>
      </section>
    </div>
  );
}
