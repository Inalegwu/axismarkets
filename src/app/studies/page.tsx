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
        <span className="text-transparent bg-clip-text bg-linear-to-r from-accent-600 to-accent-900">
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
            of sources so you can be sure your information is both up-to-date
            and traceable
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
      <button className="bg-white px-4 py-1 rounded-full text-center text-xs text-foreground-950">
        Send Feedback
      </button>
    </div>
  );
}
