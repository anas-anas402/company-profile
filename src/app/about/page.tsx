import {
  getTeamBackEnd,
  getTeamFrontEnd,
  getTeamUiUx,
} from "@/utils/get-contentful-data";
import Image from "next/image";

// Definisikan tipe untuk item dalam tim
interface TeamMember {
  slug: string;
  teamPhoto: string;
  name: string;
  title: string;
  description: string;
}

// Definisikan properti untuk komponen TeamSection
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
          About Faith Company
        </h1>
      </div>

      <div className="px-6 md:px-24 flex flex-col justify-center items-center mt-12">
        <div className="flex flex-col gap-5 w-full max-w-3xl text-center">
          <p className="text-lg text-gray-700">
            For over 3 years, Faith Company has been at the forefront of the web
            development industry, dedicated to building innovative solutions in
            front-end, back-end, and UI/UX design. We are committed to
            responding to the digital needs of our clients and helping them
            transform their visions into impactful online experiences.
          </p>
          <p className="text-lg text-gray-700">
            With a passionate team of skilled developers and designers, we
            deliver high-quality, user-focused applications that drive results.
            Our diverse expertise allows us to tackle complex challenges and
            create tailored strategies that enhance user engagement and
            satisfaction.
          </p>
          <span className="text-red-500 font-semibold">
            &quot;Since 2020, Faith Company has successfully completed over 100
            projects for clients of all sizes!&quot;
          </span>
          <p className="text-lg text-gray-700">
            Today, we continue to focus on harnessing the latest technologies
            and best practices to empower businesses. Our mission is to lead the
            charge in creating seamless digital experiences that bridge the gap
            between brands and their audiences. Faith Company is proud to be a
            partner in your success. We invite you to join us in shaping the
            future of web development together!
          </p>
        </div>

        <TeamSection title="Front-End Development Team" team={teamFe} />

        <TeamSection title="Back-End Development Team" team={teamBe} />

        <TeamSection title="UI/UX Development Team" team={teamUiUx} />

        <div className="flex flex-col mt-12 justify-center items-center w-full max-w-3xl text-center">
          <h1 className="px-6 py-12 text-4xl font-medium text-gray-800">
            The Heart of Faith Company
          </h1>
          <p className="text-lg text-gray-700">
            At Faith Company, we foster a culture rooted in innovation,
            inclusivity, and collaboration. Our team embodies a shared passion
            for technology and design, which drives our mission to create
            user-friendly and impactful digital experiences.
            <br />
            <br />
            We believe in empowering our employees through continuous learning
            and professional growth opportunities. Our open and supportive
            atmosphere encourages creativity and the free exchange of ideas,
            making every voice heard.
            <br />
            <br />
            Work-life balance is important to us; we strive to create an
            environment where our team can thrive both personally and
            professionally. At Faith Company, we don’t just build websites; we
            build a community dedicated to excellence, mutual respect, and a
            shared vision for the future.
          </p>
        </div>
      </div>
    </section>
  );
}

// Menggunakan tipe untuk mendefinisikan properti yang diterima
function TeamSection({ title, team }: TeamSectionProps) {
  return (
    <div className="flex flex-col justify-center items-center mt-12 w-full">
      <h2 className="mt-12 text-2xl font-semibold">{title}</h2>
      <div className="flex flex-wrap justify-center gap-10 mt-5">
        {team?.map((item) => (
          <div
            key={item.slug}
            className="flex flex-col justify-center items-center bg-white p-6 rounded-lg shadow-lg w-[300px]"
          >
            <div className="relative w-[100px] h-[100px] mb-4">
              <Image
                src={item.teamPhoto}
                alt="Team Photo"
                fill
                className="object-cover rounded-full"
              />
            </div>
            <span className="text-xl font-semibold">{item.name}</span>
            <span className="text-sm text-gray-600">{item.title}</span>
            <p className="text-base text-gray-700">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
