import { getAllCompanyCustomer } from "@/utils/get-contentful-data";
import Image from "next/image";

export default async function OurCustomerSection() {
  const brand = await getAllCompanyCustomer();

  return (
    <section className="px-4 md:px-24 mt-24">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl md:text-4xl font-semibold text-center">
          Our Customers are our biggest fans
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 mt-12 gap-6">
          {brand?.map((item) => (
            <div
              key={item.slug as string}
              className="relative w-[160px] h-[80px] flex items-center justify-center"
            >
              <Image
                src={item?.customerLogo as string}
                alt="Brand Logo"
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
