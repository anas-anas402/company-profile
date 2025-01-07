// import TestimonialSection from "@/components/testimonial";

export default function ServicePage() {
  return (
    <section className="pt-16 min-h-screen">
      <div className="bg-[#F8F8F8] h-full w-full flex justify-center items-center">
        <h1 className="px-6 md:px-24 py-12 text-4xl font-medium text-gray-800">
          Our Services
        </h1>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-2">UI/UX Design</h3>

            <h4 className="font-semibold mt-4">Pricing: From $1000</h4>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-2">
              Back End Website Development
            </h3>

            <h4 className="font-semibold mt-4">Pricing: From $1500</h4>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-2">
              Front End Website Development
            </h3>

            <h4 className="font-semibold mt-4">Pricing: From $1200</h4>
          </div>
        </div>
      </div>
    </section>
  );
}
