import { getAllCompanyCustomer } from "@/utils/get-contentful-data";
import Image from "next/image";

export default async function OurCustomerSection() {
  const brand = await getAllCompanyCustomer();
  return (
    <section className="px-24 mt-24">
      <div className="flex flex-col items-center justify-center">
        <h1 className=" flex text-4xl font-semibold">
          Our Customers are our biggest fans
        </h1>
        <div className="grid grid-cols-6 mt-12 gap-9">
          {brand?.map((item) => {
            return (
              <div key={item.slug} className="relative w-[160px] h-[80px]">
                <Image
                  src={item?.brandLogo as string}
                  alt="Brand Logo"
                  fill
                  className="object-cover"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
