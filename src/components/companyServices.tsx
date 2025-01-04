import { getAllCompanyService } from "@/utils/get-contentful-data";
import Image from "next/image";
import Link from "next/link";

export default async function CompanyServicesSection() {
  const services = await getAllCompanyService();
  return (
    <section className="px-24 mt-24">
      <div className="flex flex-row gap-20">
        <div className="w-1/2">
          <h1 className="text-4xl font-semibold">What We Do?</h1>
          {services?.map((item) => {
            return (
              <ul key={item.slug} className="list-disc pl-5 mt-2">
                <li className="mt-2">
                  <h4 className="text-sm font-semibold">
                    {item.title as string}
                  </h4>
                  <p className="text-xs font-normal mt-1">
                    {item.description as string}
                  </p>
                </li>
              </ul>
            );
          })}
          <Link href="/service">
            <button className="bg-[#414141] text-white mt-4 px-4 py-2 rounded-md font-semibold transition-transform transform hover:scale-110">
              View Detail
            </button>
          </Link>
        </div>
        <div className="relative w-1/2 h-[400px]">
          <Image
            src="/services.webp"
            alt="Service Image"
            fill
            className="object-cover rounded-xl"
          />
        </div>
      </div>
    </section>
  );
}
