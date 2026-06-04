import { CloseSquare } from "@solar-icons/react/ssr";
import { Dialog } from "radix-ui";

type Props = {
  children: React.ReactNode;
};

export default function ContactForm({ children }: Props) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/10 dark:bg-black/20 data-[state=open]:animate-overlayShow" />
        <Dialog.Content className="fixed left-1/2 top-1/2 max-h-[85vh] w-[90vw] max-w-125 -translate-x-1/2 -translate-y-1/2 rounded-sm bg-white dark:bg-background-950 border border-solid border-background-200 dark:border-background-900 text-foreground-950 dark:text-foreground-50 shadow-(--shadow-6) focus:outline-none data-[state=open]:animate-contentShow">
          <div className="flex flex-col gap-3 relative items-start justif-start p-5">
            <div className="flex flex-col items-start gap-1">
              <Dialog.Title className="text-2xl text-foreground-950 dark:text-foreground-50 font-bold tracking-tight">
                Get In Touch
              </Dialog.Title>
              <Dialog.Description className="text-sm text-foreground-300">
                We'd love to hear from you
              </Dialog.Description>
            </div>
            <Dialog.Close className="absolute z-1 text-red-800 dark:text-red-500 right-3 top-3">
              <CloseSquare size={20} weight="Bold" />
            </Dialog.Close>
            <div className="flex items-center justify-between gap-3 w-full">
              <input placeholder="First Name" />
              <input placeholder="Last Name" />
            </div>
            <input type="email" placeholder="Email" />
            <textarea placeholder="Preamble" />
            <button className="flex items-center justify-center gap-2 text-sm p-2 w-full bg-background-950 text-foreground-100 dark:bg-background-50 dark:text-foreground-950 rounded-sm">
              <span>Send</span>
            </button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
