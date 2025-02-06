import { useState, useEffect } from "react";

function HomeScreen({ setCurrentApp }) {
  const [currentTime, setCurrentTime] = useState("11:11");

  const apps = {
    Projects: "assets/git.svg",
    Contact: "assets/contact.svg",
    AboutMe: "assets/insta.svg",
    Resume: "assets/linkedin.svg",
  };

  const handleClick = (id) => {
    setCurrentApp(id);
  };
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, "0");
      const minutes = now.getMinutes().toString().padStart(2, "0");
      setCurrentTime(`${hours}:${minutes}`);
    };

    // Set the initial time immediately on page load
    updateTime();

    // Update time every second
    const interval = setInterval(updateTime, 1000);

    // Cleanup the interval when the component is unmounted
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-600 w-[300px] h-[600px] lg:w-[400px] lg:h-[800px] rounded-xl">
      <div className="flex flex-row justify-between align-middle mt-1">
        <div className="ml-1 font-bold">{currentTime}</div>
        <div className="flex flex-row">
          <img
            src={import.meta.env.BASE_URL + "assets/signal.svg"}
            className="w-5 h-5 mr-1"
          />
          <img
            src={import.meta.env.BASE_URL + "assets/wifi.svg"}
            className="w-5 h-5 mr-2"
          />
          <img
            src={import.meta.env.BASE_URL + "assets/battery.svg"}
            className="w-5 h-5 mr-2"
          />
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4 mt-5">
        {Object.entries(apps).map(([name, src], index) => (
          <div
            key={name}
            id={index + 1}
            className="flex flex-col items-center text-white cursor-pointer"
            onClick={() => handleClick(index + 1)}
          >
            <img
              src={import.meta.env.BASE_URL + src}
              alt={name}
              className="w-16 h-16 mb-2 rounded-xl"
            />
            <span>{name}</span>
          </div>
        ))}{" "}
      </div>
    </div>
  );
}

export default HomeScreen;
