function ContactScreen({ setCurrentApp }) {
  const inbox = {
    Phone: "+36307195382",
    Email: "mrmiklosmihalyi@gmail.com",
    LinkedIn: "linkedin.com/in/mihályi-miklós-123a9b276",
  };

  const handleBack = () => {
    setCurrentApp(0);
  };

  const handleComposeClick = () => {
    window.location.href = `mailto:mrmiklosmihalyi@gmail.com`;
  };

  const placeHolder = Array(7).fill(null);

  return (
    <div className="bg-white lg:w-[400px] lg:h-[800px] w-[300px] h-[600px] rounded-xl flex flex-col relative">
      {/* Header */}
      <div className="bg-slate-100 flex flex-row justify-between items-center rounded-full m-3 p-1">
        <div className="flex flex-row justify-center items-center">
          <img
            src={"src/assets/back_black.svg"}
            className="ml-1 w-7 h-7 cursor-pointer"
            onClick={handleBack}
          />
          <div className="text-black text-sm lg:text-lg ml-2">
            mrmiklosmihalyi@gmail.com
          </div>
        </div>
        <div className="w-12 h-12 overflow-hidden rounded-full">
          <img
            src={"src/assets/prof.jpg"}
            className="h-full w-fill object-cover"
          />
        </div>
      </div>

      {/* Scrollable Inbox */}
      <div className="text-black flex-1 overflow-y-auto scrollbar-hide">
        {Object.entries(inbox).map(([name, info], index) => (
          <div
            className="flex flex-row ml-2 mr-2 bg-slate-100 rounded-xl mb-2"
            key={name}
          >
            <div className="w-14 h-14 rounded-full m-2 bg-slate-300 aspect-[1/1]"></div>
            <div className="flex flex-col justify-center items-start w-full">
              <div className="flex flex-row items-center justify-between w-full mb-1">
                <div className="font-bold">{name}</div>
                <img src={"src/assets/star.svg"} className="w-5 h-5 mr-2" />
              </div>
              <div className="text-wrap text-left">
                {index === 2 ? (
                  <a
                    href={`https://${info}`}
                    className="text-blue-500"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    My Profile
                  </a>
                ) : (
                  <div>{info}</div>
                )}
              </div>
            </div>
          </div>
        ))}
        {placeHolder.map((_, index) => (
          <div
            className="flex flex-row ml-2 mr-2 bg-slate-100 rounded-xl mb-2"
            key={index}
          >
            <div className="w-14 h-14 rounded-full m-2 bg-slate-300 aspect-[1/1]"></div>
            <div className="flex flex-col justify-center items-start w-full">
              <div className="flex flex-row items-center justify-between w-full mb-1">
                <div className="bg-slate-200 w-20 h-5" />
                <img src={"src/assets/star.svg"} className="w-5 h-5 mr-2" />
              </div>
              <div className="bg-slate-200 w-52 h-5" />
            </div>
          </div>
        ))}
      </div>

      {/* Compose Button */}
      <div className="absolute bottom-20 right-4">
        <div
          onClick={handleComposeClick}
          className="text-black bg-blue-200 rounded-xl p-4 cursor-pointer flex flex-row justify-center items-center"
        >
          <img src={"src/assets/pen_black.svg"} className="w-5 h-5 mr-2" />
          <p>Compose</p>
        </div>
      </div>

      {/* Mail Icon */}
      <div className="flex bg-slate-100 rounded-b-xl h-16 items-center justify-between text-black w-full">
        <div className="bg-blue-200 w-16 h-11 rounded-xl flex items-center justify-center ml-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
            />
          </svg>
        </div>

        <div className="w-16 h-11 rounded-xl flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
            />
          </svg>
        </div>

        <div className="w-16 h-11 rounded-xl flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
            />
          </svg>
        </div>

        <div className="w-16 h-11 rounded-xl flex items-center justify-center mr-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default ContactScreen;
