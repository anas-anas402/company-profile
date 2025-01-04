export default function HeroSection() {
  return (
    <section className="flex bg-[url('/bg.svg')] bg-cover bg-center py-40">
      <div className="px-6 md:px-24 w-full md:w-1/2 flex justify-center">
        <div className="flex flex-col bg-[#F8F8F8] p-6 rounded-lg text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-semibold">We Code</h1>
          <h1 className="text-4xl md:text-6xl font-semibold ">We Deliver</h1>
          <span className="mt-3 text-lg md:text-xl ">
            Web Solutions Crafted with Faith and Expertise.
          </span>
          <p className="mt-4 text-sm md:text-base font-light ">
            Lorem ipsum dolor sit amet consectetur. Diam volutpat morbi
            elementum vel euismod aliquam. Amet ultrices neque augue consectetur
            purus phasellus. Ullamcorper lorem montes varius amet vestibulum
            tellus facilisis consequat pretium. Et faucibus laoreet molestie
            diam semper fames diam eget.
          </p>
        </div>
      </div>
    </section>
  );
}
