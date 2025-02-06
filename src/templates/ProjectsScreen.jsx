function ProjectScreen({ setCurrentApp }) {
  const handleBack = () => {
    setCurrentApp(0);
  };

  const projects = [
    {
      title: "Django Social Network",
      description:
        "I developed a Twitter-like application using Django, featuring user registration and login functionality. After signing in, users can create posts visible to everyone, expand their network by adding friends, and enjoy various additional features. To ensure a responsive and dynamic user experience, I integrated Django Unicorn.",
      image: "assets/socialapp.png",
      link: "https://github.com/magusmiklos/socialApp",
    },
    {
      title: "AI Story Generator",
      description:
        "I created an AI-powered story generator with a Flask backend and a React frontend. After authentication, users can generate stories, which are saved for future viewing. Each story is accompanied by generated illustrative artwork. Additionally, I fine-tuned the text generation model myself to enhance story creation.",
      image: "assets/ai_app.png",
    },
    {
      title: "Godot Puzzle Game",
      description:
        "I developed a finite state automata-inspired game in Godot using GDScript. It's a platformer where players face limited movement and must navigate the environment by setting rules to control how their surroundings behave.",
      image: "assets/game.png",
      link: "https://magus1.itch.io/out-of-the-box",
    },
  ];

  return (
    <div className="bg-[#0d1117] lg:w-[800px] lg:h-[800px] w-[300px] h-[600px] rounded-xl flex flex-col relative p-6 border border-gray-700">
      {/* Header */}
      <div className="flex justify-start items-center mb-6">
        <button
          onClick={handleBack}
          className="flex items-center gap-2 bg-[#21262d] text-gray-300 px-4 py-2 rounded-md hover:bg-[#30363d] hover:text-white transition-all shadow-sm"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
            />
          </svg>
          <span className="font-mono text-sm">Back</span>
        </button>
      </div>

      {/* Project List */}
      <div className="flex flex-col gap-6 overflow-y-auto scrollbar-hide">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#161b22] hover:bg-[#21262d] text-left rounded-xl p-4 shadow-lg flex flex-col items-start space-y-3 border border-gray-700 transition-all"
          >
            {project.image && (
              <img
                src={import.meta.env.BASE_URL + project.image}
                alt={project.title}
                className="w-full object-cover rounded-lg border border-gray-600"
              />
            )}
            <h3 className="text-2xl font-mono text-white">{project.title}</h3>
            <p className="text-gray-400">{project.description}</p>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#58a6ff] hover:underline font-mono"
              >
                Visit Project
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectScreen;
