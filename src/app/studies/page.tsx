import { CloseCircle } from "@solar-icons/react/ssr";
import { Dialog } from "radix-ui";

export default function Page() {
  return (
    <div className="flex flex-col items-center gap-2 justify-center w-full h-full">
      <h1 className="text-foreground-100 text-5xl font-alternate font-medium">
        Axis Studiis{" "}
        <span className="text-xs italic text-foreground-600">
          (Axis Studies)
        </span>
      </h1>
      <span className="text-center w-3/6 text-sm text-foreground-500">
        At{" "}
        <span className="text-transparent bg-clip-text bg-linear-to-r from-accent-600 to-white">
          Axis
        </span>
        , we are committed to providing data-backed insights into the global
        business world in the fields of Agriculture & Agri-food processing,
        Advanced Manufacturing, Information technology and Clean Energy & Energy
        transitions
      </span>
      <div className="w-4/6 flex my-5 py-5 mx-auto border-t border-t-solid border-t-foreground-500/30">
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
            Insights are collated and interpreted with technology from a variety
            of sources so you can be sure your information is up-to-date and
            traceable
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
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <button className="bg-white px-4 py-1 rounded-full text-center text-xs text-foreground-950">
            Send Feedback
          </button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/20 data-[state=open]:animate-overlayShow" />
          <Dialog.Content className="fixed left-1/2 bg-background-950 border border-solid border-background-900/20 rounded-sm top-1/2 max-h-[85vh] w-[90vw] max-w-125 -translate-x-1/2 -translate-y-1/2 shadow-(--shadow-6) focus:outline-none data-[state=open]:animate-contentShow">
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
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}
