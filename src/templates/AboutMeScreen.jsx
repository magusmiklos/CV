function AboutMeScreen({ setCurrentApp }) {
  const handleBack = () => {
    setCurrentApp(0);
  };

  const posts = [
    {
      title: "Hiking",
      description:
        "In my free time, I enjoy hiking because being in nature brings me a sense of peace and calm. I often spend my weekends exploring different trails.",
      image: "src/assets/hiking.jpeg",
    },
    {
      title: "GYM",
      description:
        "I go to the gym five times a week to maintain both my physical and mental fitness. After each workout, I feel a sense of clarity, and it helps me relieve stress.",
      image: "src/assets/gym.jpeg",
    },
  ];

  return (
    <div className="bg-[#fafafa] w-[300px] h-[600px] lg:w-[400px] lg:h-[800px] flex flex-col p-6 rounded-lg">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div
          onClick={handleBack}
          className="flex items-center gap-2 bg-white text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-200 hover:text-[#3e8cfc] transition-all shadow-lg transform hover:scale-105 cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
            />
          </svg>
          <span className="font-semibold text-lg">Back</span>
        </div>
        <p className="text-2xl font-bold text-[#333333]">About Me</p>{" "}
        {/* Changed text-xl to text-lg */}
      </div>

      {/* Post List */}
      <div className="flex flex-col gap-6 overflow-y-auto scrollbar-hide">
        {posts.map((post, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-4 flex flex-col space-y-4"
          >
            {/* Profile Image */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden">
                <img
                  src="src/assets/prof.jpg" // Use a profile picture
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-sm font-semibold text-[#333333]">
                Mihályi Miklós
              </div>
            </div>

            {/* Post Image */}
            <img
              src={post.image}
              alt={post.title}
              className="w-full object-cover rounded-lg"
            />

            {/* Post Title & Description */}
            <div className="flex flex-col space-y-2">
              <h3 className="text-lg font-semibold text-[#333333]">
                {post.title}
              </h3>
              <p className="text-sm text-gray-600">{post.description}</p>
            </div>

            {/* Like Icon */}
            <div className="flex gap-6 items-center">
              {/* Like SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-[#e0245e] hover:text-[#9b0d36] transform hover:scale-110 transition-all duration-300 cursor-pointer"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
              <span className="ml-2 text-sm text-[#e0245e]">Like</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutMeScreen;
