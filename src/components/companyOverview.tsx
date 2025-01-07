// import { getAllCompanyOverview } from "@/utils/get-contentful-data";
import Image from "next/image";
import Link from "next/link";

export default async function CompanyOverviewSection() {
  // const overview = await getAllCompanyOverview();

  return (
    <section className="px-4 md:px-24 mt-24">
      <div className="flex flex-col md:flex-row gap-10">
        <div className="relative w-full md:w-1/2 h-[300px] md:h-[400px]">
          <Image
            src="/office-picture.jpg"
            alt="Company Building"
            fill
            className="object-cover rounded-xl"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl md:text-4xl font-semibold">
            ABC Company Overview
          </h1>

          <div className="mt-2">
            <p>
              <i>
                Committed to Excellence, Transforming Client Success One Project
                at a Time.
              </i>
              <br />
              <br />
              At ABC Company, we are a forward-thinking IT solutions provider
              dedicated to delivering innovative and impactful technology
              services. Founded on the principles of excellence, integrity, and
              collaboration, our mission is to empower businesses by
              transforming challenges into opportunities through cutting-edge
              solutions.
            </p>
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
