// import { getAllCompanyService } from "@/utils/get-contentful-data";
import Image from "next/image";
import Link from "next/link";

export default async function CompanyServicesSection() {
  // const services = await getAllCompanyService();

  return (
    <section className="px-4 md:px-24 mt-24">
      <div className="flex flex-col md:flex-row gap-10">
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl md:text-4xl font-semibold">What We Do?</h1>
          <ul className="pt-5 space-y-4 text-gray-800">
            <li className="flex items-center">
              <span className="text-blue-500 mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 10h16M4 14h16M4 18h16"
                  />
                </svg>
              </span>
              <span className="text-lg font-medium">Web Development</span>
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8c-1.657 0-3 1.343-3 3v4c0 1.657 1.343 3 3 3s3-1.343 3-3v-4c0-1.657-1.343-3-3-3z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M20 12h-1a4 4 0 01-8 0H4"
                  />
                </svg>
              </span>
              <span className="text-lg font-medium">
                Mobile App Development
              </span>
            </li>
            <li className="flex items-center">
              <span className="text-purple-500 mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 16l-4-4m0 0l4-4m-4 4h16"
                  />
                </svg>
              </span>
              <span className="text-lg font-medium">UI/UX Design</span>
            </li>
            <li className="flex items-center">
              <span className="text-yellow-500 mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 16h-1v-4h-3m4 4V5a2 2 0 00-2-2 2 2 0 00-2 2v11h2m4 0h2a2 2 0 002-2 2 2 0 00-2-2h-2a2 2 0 00-2 2v1"
                  />
                </svg>
              </span>
              <span className="text-lg font-medium">IT Consulting</span>
            </li>
            <li className="flex items-center">
              <span className="text-red-500 mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 20l2-8m0 0l-2-8m2 8h6M6 20l2-8m0 0l-2-8m2 8H2"
                  />
                </svg>
              </span>
              <span className="text-lg font-medium">Managed IT Services</span>
            </li>
          </ul>

          <Link href="/service" className="pt-10">
            <button className="bg-[#414141] text-white mt-4 px-4 py-2 rounded-md font-semibold transition-transform transform hover:scale-110">
              View Detail
            </button>
          </Link>
        </div>
        <div className="relative w-full md:w-1/2 h-[300px] md:h-[400px]">
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
