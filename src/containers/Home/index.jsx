import React from "react";
import AudioPlayer from "./AudioPlayer";
import Pomodoro from "./Pomodoro";

const Home = () => {
  return (
    <main className="relative w-full min-h-screen bg-center bg-no-repeat bg-cover bg-ils">
      <Pomodoro />
      <AudioPlayer />
    </main>
  );
};

export default Home;
