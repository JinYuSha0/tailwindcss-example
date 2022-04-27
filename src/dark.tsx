import React, { useState } from "react";

const Dark: React.FC<{}> = (props) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  return (
    <div className={isDarkMode ? "dark" : ""}>
      <div className="bg-white dark:bg-slate-900 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
        <h3 className="text-slate-900 dark:text-white text-base font-medium tracking-tight">
          Writes Upside-Down
        </h3>
        <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
          The Zero Gravity Pen can be used to write in any orientation,
          including upside-down. It even works in outer space.
        </p>
      </div>
      <button
        className="btn btn-blue dark:bg-slate-800"
        onClick={() => setIsDarkMode((prev) => !prev)}
      >
        toggle mode
      </button>
    </div>
  );
};

export default Dark;
