import { getAllCompanyOverview } from "@/utils/get-contentful-data";
import Image from "next/image";
import Link from "next/link";

export default async function CompanyOverviewSection() {
  const overview = await getAllCompanyOverview();
  return (
    <section className="px-24 mt-24">
      <div className="flex flex-row gap-20">
        <div className="relative w-1/2 h-[400px]">
          <Image
            src="/faithco-building.webp"
            alt="Faith Company Building"
            fill
            className="object-cover rounded-xl"
          />
        </div>
        <div className="w-1/2">
          <h1 className="text-4xl font-semibold">Faith Company Overview</h1>
          {overview?.map((item) => {
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
          <div className="mt-2">
            <span className="text-sm">
              Faith Company is dedicated to excellence and positively impacting
              our clients through every project.
            </span>
            <Link href="/about">
              <span className="mt-4 text-sm pl-1 font-semibold">
                See more...
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
