import { ContactForm } from "@/components";
import { ArrowRight, CloseCircle } from "@solar-icons/react/ssr";
import { allStudies } from "contentlayer/generated";
import Link from "next/link";
import { Dialog } from "radix-ui";

export default function Page() {
  return (
    <div className="flex flex-col items-center gap-2 overflow-hidden justify-center w-full h-full">
      {/* large screen view */}
      <div className="hidden md:lg:xl:flex md:lg:xl:flex-col md:lg:xl:items-center">
        <h1 className="text-foreground-950 dark:text-foreground-100 text-3xl md:lg:xl:text-5xl font-alternate font-medium">
          Axis Studiis{" "}
          <span className="text-xs italic text-foreground-600">
            (Axis Studies)
          </span>
        </h1>
        <span className="text-center w-3/6 py-3 md:lg:xl:py-0 text-xs md:lg:xl:text-sm text-foreground-500">
          At{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-accent-600 to-accent-500 dark:to-white">
            Axis
          </span>
          , we are committed to providing data-backed insights into the global
          business world in the fields of Agriculture & Agri-food processing,
          Advanced Manufacturing, Information technology and Clean Energy &
          Energy transitions
        </span>
        <div className="w-4/6 hidden md:lg:xl:flex my-5 py-5 mx-auto border-t border-t-solid border-t-foreground-500/30">
          <div className="w-2/6 p-3 gap-1 flex text-xs flex-col items-start justify-center h-full border-r border-r-solid border-r-foreground-500/30">
            <h1>Human Written</h1>
            <span className="text-foreground-500">
              Our studies are researched and written by humans focused on
              providing clear and readable insights that are both concise and
              informative
            </span>
          </div>
          <div className="w-2/6 p-3 gap-1 flex text-xs flex-col items-center justify-center h-full border-r border-r-solid border-r-foreground-500/30">
            <h1>Technology Driven</h1>
            <span className="text-foreground-500 text-center">
              Insights are collated and interpreted with technology from a
              variety of sources so you can be sure your information is
              up-to-date and traceable
            </span>
          </div>
          <div className="w-2/6 p-3 flex text-xs flex-col items-end justify-center h-full border-l border-l-solid border-l-foreground-500/30">
            <h1>Collaboratively Built</h1>
            <span className="text-foreground-500 text-end">
              Our team of researchers and writers work hand-in-hand to put
              together useful insights that ensure that confirmation bias is
              eliminated
            </span>
          </div>
        </div>
        <div className="flex items-center justify-center gap-2">
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <button className="bg-white px-4 py-1 rounded-full text-center text-xs text-foreground-950">
                Send Feedback
              </button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 bg-black/20 data-[state=open]:animate-overlayShow" />
              <Dialog.Content className="fixed left-1/2 top-1/2 max-h-[85vh] w-[90vw] max-w-125 -translate-x-1/2 -translate-y-1/2 rounded-sm bg-white dark:bg-background-950 border border-solid border-background-200 dark:border-background-900 text-foreground-950 dark:text-foreground-50 shadow-(--shadow-6) focus:outline-none data-[state=open]:animate-contentShow">
                <div className="w-full h-full p-3 flex relative flex-col items-start justify-start gap-2">
                  <Dialog.Close className="absolute top-3 right-3 text-red-500">
                    <CloseCircle size={16} weight="Bold" />
                  </Dialog.Close>
                  <div className="flex flex-col items-start justify-start">
                    <Dialog.Title className="text-foreground-100 font-medium -gap-1 text-md">
                      Feedback
                    </Dialog.Title>
                    <span className="text-sm text-foreground-500">
                      give us feedback, we're always try to build better
                    </span>
                  </div>
                  <input placeholder="Title" />
                  <textarea placeholder="Suggestion/Feedback" />
                  <button className="flex items-center justify-center gap-2 text-sm p-2 w-full bg-background-950 text-foreground-100 dark:bg-background-50 dark:text-foreground-950 rounded-sm">
                    <span>Send</span>
                  </button>
                </div>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
          <ContactForm>
            <button className="bg-accent-100 text-accent-600 dark:bg-accent-300 px-4 py-1 rounded-full text-center text-xs dark:text-accent-950">
              Get In Touch
            </button>
          </ContactForm>
        </div>
      </div>
      {/* small screen view */}
      <div className="flex w-full h-full flex-col md:lg:xl:hidden p-5 items-start justify-center">
        <div className="flex flex-col items-start gap-2 py-4">
          <h1 className="text-3xl font-bold font-title">Axis Studies</h1>
          <span className="text-start text-sm text-foreground-500">
            At{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-accent-600 to-white">
              Axis
            </span>
            , we are committed to providing data-backed insights into the global
            business world in the fields of Agriculture & Agri-food processing,
            Advanced Manufacturing, Information technology and Clean Energy &
            Energy transitions
          </span>
        </div>
        <div className="flex flex-col overflow-y-scroll w-full h-full items-start">
          {allStudies.map((study) => (
            <Link
              className="flex items-center justify-between w-full py-3 border-b gap-1 border-b-solid border-b-background-200 dark:border-b-background-900"
              href={study.url}
              key={study._id}
            >
              <div className="flex flex-col items-start">
                <h1 className="text-md">{study.title}</h1>
                <span className="text-xs text-foreground-700">
                  {study.subtitle}
                </span>
              </div>
              <ArrowRight
                className="text-accent-800"
                size={16}
                weight="Linear"
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
