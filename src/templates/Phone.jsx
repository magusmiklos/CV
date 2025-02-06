import HomeScreen from "./HomeScreen";
import ContactScreen from "./ContactScreen";
import { useState } from "react";
import ProjectScreen from "./ProjectsScreen";
import AboutMeScreen from "./AboutMeScreen";
import ResumeScreen from "./ResumeScreen";

function Phone() {
  const [currentApp, setCurrentApp] = useState(0);

  return (
    <>
      <div className="flex items-center justify-center lg:mt-0 mt-12 lg:mb-0 mb-6">
        {currentApp == 0 && <HomeScreen setCurrentApp={setCurrentApp} />}
        {currentApp == 2 && <ContactScreen setCurrentApp={setCurrentApp} />}
        {currentApp == 1 && <ProjectScreen setCurrentApp={setCurrentApp} />}
        {currentApp == 3 && <AboutMeScreen setCurrentApp={setCurrentApp} />}
        {currentApp == 4 && <ResumeScreen setCurrentApp={setCurrentApp} />}
      </div>
    </>
  );
}

export default Phone;
