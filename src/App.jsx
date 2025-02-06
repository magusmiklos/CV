import "./App.css";
import Phone from "./templates/Phone";
function App() {
  return (
    <>
      <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row justify-around w-full items-center">
        {/* Left Side - Profile */}
        <div className="flex flex-col items-center bg-gradient-to-bl from-zinc-800 to-gray-800 text-white rounded-4xl p-10 h-fit md:mb-5 lg:m-0 m-3">
          {/* Profile Picture */}
          <div className="relative w-64 h-64 rounded-full overflow-hidden mb-6 fancyborder shadow-lg">
            <img
              src="/assets/prof.jpg"
              alt="Pfp"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Name and Introduction */}
          <div className="text-center mb-4">
            <h1 className="text-4xl font-semibold mb-6">
              Hi, I'm Miklós Mihályi
            </h1>
            <p className="text-xl">A FullStack Developer 😎!</p>
          </div>

          {/* Description */}
          <div className="text-lg text-center max-w-md mx-auto">
            <p>
              I specialize in crafting dynamic, full-stack web applications,
              seamlessly integrating backend and frontend technologies. My
              expertise lies in backend frameworks like Django and Flask, while
              I create responsive and engaging user interfaces using React and
              Next.js. Beyond these, I have hands-on experience with a wide
              range of other technologies. Feel free to use my 📱 and get to
              know me better.
            </p>
          </div>
        </div>

        {/* Right Side - Phone Section */}
        <Phone />
      </div>
    </>
  );
}

export default App;
