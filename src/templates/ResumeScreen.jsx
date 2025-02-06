function ResumeScreen({ setCurrentApp }) {
  const handleBack = () => {
    setCurrentApp(0);
  };

  return (
    <>
      <div className="bg-gray-900 w-[300px] h-[600px] lg:w-[400px] lg:h-[800px] rounded-xl p-6 flex flex-col relative scrollbar-hide overflow-y-auto">
        {/* Back Button */}
        <button
          onClick={handleBack}
          className="absolute top-6 left-6 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 focus:outline-none transition duration-200 ease-in-out"
        >
          Back
        </button>

        {/* Header */}
        <div className="mb-8 mt-12 text-center">
          {" "}
          {/* Adjusted the top margin */}
          <h1 className="text-4xl font-semibold text-white">Miklós Mihályi</h1>
          <p className="text-lg text-gray-400">Computer Scientist</p>
        </div>

        {/* Contact Info */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-white border-b-2 border-gray-700 pb-2">
            Contact
          </h2>
          <div className="mt-4 space-y-2 text-sm text-gray-300">
            <p>
              Email:{" "}
              <a
                href="mailto:mrmiklosmihalyi@gmail.com"
                className="text-blue-400"
              >
                mrmiklosmihalyi@gmail.com
              </a>
            </p>
            <p>
              Phone: <span className="text-blue-400">+36307195382</span>
            </p>
          </div>
        </div>

        {/* Experience */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-white border-b-2 border-gray-700 pb-2">
            Experience
          </h2>
          <div className="bg-gray-800 p-4 rounded-lg mt-4">
            <p className="text-sm text-gray-300">
              Software Tester (Summer 2024) - Contrall Kft.
            </p>
            <p className="text-sm text-gray-300 mt-2">
              I was a software tester last summer at a local company where I
              used JavaScript and Cypress to write end-to-end tests. I really
              liked the working environment and the team that I was a part of,
              and I learned a lot about software testing.
            </p>
          </div>
        </div>

        {/* Hard Skills */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-white border-b-2 border-gray-700 pb-2">
            Hard Skills
          </h2>
          <div className="grid grid-cols-2 gap-4 text-sm text-gray-300 mt-4">
            <div>
              Languages: Java, PHP, JavaScript, Python, HTML, CSS, SQL, C++
            </div>
            <div>Backend frameworks: Spring Boot, Django, Flask</div>
            <div>Web frameworks: React, Next.js</div>
            <div>CSS frameworks: Tailwind, Bootstrap</div>
          </div>
        </div>

        {/* Education */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-white border-b-2 border-gray-700 pb-2">
            Education
          </h2>
          <div className="bg-gray-800 p-4 rounded-lg mt-4">
            <p className="text-sm text-gray-300">
              PTE Természettudományi Kar (University of Pécs Faculty of
              Sciences), Pécs, Hungary
            </p>
            <p className="text-sm text-gray-300">
              Bachelor of Science in Computer Science (Expected Graduation: June
              2025)
            </p>
            <p className="text-sm text-gray-300">
              Nagykanizsai SZC Cserháti Sándor Technikum és Kollégium,
              Nagykanizsa, Hungary
            </p>
            <p className="text-sm text-gray-300">High School Diploma (2021)</p>
            <p className="text-sm text-gray-300">
              PLC Programmer Certificate (2021)
            </p>
            <p className="text-sm text-gray-300">
              Electrical Technician Certificate (2022)
            </p>
          </div>
        </div>

        {/* Why I'm the Perfect Candidate */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-white border-b-2 border-gray-700 pb-2">
            Why I Would Be the Perfect Candidate
          </h2>
          <p className="text-sm text-gray-300 mt-4">
            I’m really passionate about technology. I spend most of my free time
            either programming or learning about programming and different kinds
            of tech. I don’t just do it out of necessity; I truly love the art
            of technology and the art of creating something out of a mere idea
            that popped up in my head.
          </p>
        </div>

        {/* My Recent Interests */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-white border-b-2 border-gray-700 pb-2">
            My Recent Interests
          </h2>
          <p className="text-sm text-gray-300 mt-4">
            As of late, I’ve become interested in AI and its possible
            applications. In the last semester, I picked a deep learning course
            at the university and also started studying it in my free time. I’m
            currently working on a website where users can generate bedtime
            stories for kids with illustrative art generated as well. I’m having
            great success with the project; it has come together really nicely.
            The only problem is that fine-tuning a model uses a lot of GPU
            resources.
          </p>
        </div>

        {/* Languages */}
        <div>
          <h2 className="text-xl font-semibold text-white border-b-2 border-gray-700 pb-2">
            Languages
          </h2>
          <p className="text-sm text-gray-300 mt-4">
            Hungarian (Native), English (B2)
          </p>
        </div>
      </div>
    </>
  );
}

export default ResumeScreen;
