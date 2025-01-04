import { getAllTestimonial } from "@/utils/get-contentful-data";
import Image from "next/image";

export default async function TestimonialSection() {
  const testimonial = await getAllTestimonial();
  return (
    <section id="testimonial" className="px-24 my-24">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-semibold">Testimonial</h1>
        <span className="mt-4 text-lg">
          Nice things customer have said about our company:
        </span>
        <div className="flex flex-row gap-10">
          {testimonial?.map((item) => {
            return (
              <div
                key={item.slug}
                className="flex flex-col justify-center items-center bg-[#F8F8F8] p-8 rounded-lg shadow-lg mt-12"
              >
                <div className="relative w-[100px] h-[100px]">
                  <Image
                    src={item.clientPhoto}
                    alt="Client Photo"
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <span className="text-xl font-semibold mt-4">
                  {item.name as string}
                </span>
                <span className="text-sm mt-2">{item.job as string}</span>
                <p className="text-base mt-4">
                  &quot;{item.feedback as string}&quot;
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
