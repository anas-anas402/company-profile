import {
  getTeamBackEnd,
  getTeamFrontEnd,
  getTeamUiUx,
} from "@/utils/get-contentful-data";
import Image from "next/image";

interface TeamMember {
  name: string;
  slug: string;
  title: string;
  expertise: string;
  contact: string;
  description: string;
  teamPhoto: string;
}

interface TeamSectionProps {
  title: string;
  team?: TeamMember[];
}

export default async function AboutPage() {
  const teamFe = await getTeamFrontEnd();
  const teamBe = await getTeamBackEnd();
  const teamUiUx = await getTeamUiUx();

  return (
    <section className="pt-16 min-h-screen">
      <div className="bg-[#F8F8F8] h-full flex justify-center items-center">
        <h1 className="px-6 py-12 text-4xl font-semibold text-center text-gray-800">
          About ABC Company
        </h1>
      </div>

      <div className="px-6 md:px-24 flex flex-col justify-center items-center mt-12">
        <div className="flex flex-col gap-5 w-full max-w-3xl text-center">
          <p className="text-lg text-gray-700">
            ABC Company has been a leader in the web development industry,
            committed to creating innovative solutions in front-end and back-end
            development, as well as UI/UX design. We strive to meet the digital
            needs of our clients, helping them turn their ideas into powerful
            online experiences.
          </p>

          <p className="text-lg text-gray-700">
            We continue to focus on utilizing the latest technologies and
            industry-leading practices to empower businesses. Our aim is to lead
            the way in crafting seamless digital experiences that bridge the gap
            between brands and their audiences. ABC Company is honored to be
            part of your success and invites you to join us in shaping the
            future of web development together!
          </p>
        </div>
      </div>
    </section>
  );
}
