import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#F8F8F8] px-6 md:px-24 py-12 mt-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center">
            <h3 className="text-[#414141] font-semibold text-2xl mb-4">
              Location
            </h3>
            <a
              href="https://maps.app.goo.gl/MoxmSJzE8TCe5d2s7"
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-[100%] md:w-[280px] h-[150px] cursor-pointer"
            >
              <Image
                src="/map-picture.png"
                alt="Map Image"
                fill
                className="object-cover rounded-lg shadow-md"
              />
            </a>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-[#414141] font-semibold text-2xl mb-4">
              Company
            </h3>
            <ul className="mt-4 list-disc text-sm font-medium text-[#414141]">
              <li>
                <Link href="/about" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/service" className="hover:underline">
                  Service
                </Link>
              </li>
              <li>
                <Link href="/teams" className="hover:underline">
                  Teams
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-[#414141] font-semibold text-2xl mb-4">
              Contact Us
            </h3>
            <div className="flex flex-col items-center">
              <div className="flex flex-row gap-2 items-center mt-3">
                <div className="relative w-[20px] h-[20px]">
                  <Image
                    src="/facebook-logo.svg"
                    alt="Facebook Logo"
                    fill
                    className="object-cover"
                  />
                </div>
                <Link
                  href="https://facebook.com/faithco"
                  className="text-sm font-medium"
                >
                  ABC Company
                </Link>
              </div>
              <div className="flex flex-row gap-2 items-center mt-3">
                <div className="relative w-[20px] h-[20px]">
                  <Image
                    src="/instagram-logo.svg"
                    alt="Instagram Logo"
                    fill
                    className="object-cover"
                  />
                </div>
                <Link
                  href="https://instagram.com/faithco"
                  className="text-sm font-medium"
                >
                  ABC Company
                </Link>
              </div>
              <div className="flex flex-row gap-2 items-center mt-3">
                <div className="relative w-[20px] h-[20px]">
                  <Image
                    src="/mail-logo.svg"
                    alt="Email Logo"
                    fill
                    className="object-cover"
                  />
                </div>
                <a
                  href="mailto:faithco@mail.com"
                  className="text-sm font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  mail@abc.inc.com
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-[#414141]">
          <p>&copy; 2024 ABC Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
