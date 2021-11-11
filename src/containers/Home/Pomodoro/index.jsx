import React, { useEffect, useState } from "react";

const Pomodoro = () => {
  const [time, setTime] = useState(1800); //1800
  const [running, setRunning] = useState(false);
  const [intervals, setIntervals] = useState(null);

  useEffect(
    function changeTitle() {
      if (time === 0) {
        document.title = "Finished!!..time for Break 5 minutes";
      } else {
        document.title = "Lofi Apps by TrainzCoder";
      }
    },
    [time]
  );

  useEffect(() => {
    if (time <= 0) {
      stopInterval();
      setRunning(false);
    }
  }, [time]);

  const thick = () => {
    setTime((prevTime) => prevTime - 1);
  };

  const startTimer = () => {
    setRunning(!running);

    if (running === true) {
      stopInterval();

      return;
    }

    setIntervals(setInterval(thick, 1000));
  };

  const stopInterval = () => {
    clearInterval(intervals);
    setIntervals(null);
  };

  const clearTimer = () => {
    setRunning(false);
    setTime(1800);
    stopInterval();
  };

  const minute = Math.floor(time / 60);
  const second = Math.floor(time % 60);

  const minuteFormat = minute < 10 ? `0${minute}` : minute;
  const secondFormat = second < 10 ? `0${second}` : second;

  return (
    <section className="absolute left-1/2 mt-[15vh] rounded-md transform -translate-x-1/2 py-8 px-16 bg-[rgba(15,15,15,0.59)] backdrop-blur-sm text-gray-50">
      <h2 className="text-[58px] tracking-wider">
        {minuteFormat} : {secondFormat}
      </h2>

      <div className="flex justify-center gap-5 mt-5 text-[18px]">
        <button onClick={startTimer}>{running ? "Pause" : "Start"}</button>

        <button onClick={clearTimer}>Reset</button>
      </div>

      <h3 className="mt-8 text-sm text-center">Pomodoro Timer</h3>
    </section>
  );
};

export default Pomodoro;
