import "./index.scss";
import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Dark from "./dark";
import Screen from "./screen";
import Color from "./color";
import Spacing from "./spacing";
import Safelist from "./safelist";
import CustomValue from "./customValue";

const Example = {
  "1.Screen": Screen,
  "2.Color": Color,
  "3.Spacing": Spacing,
  "5.CustomValue": CustomValue,
  "6.Dark": Dark,
  "7.Safelist": Safelist,
};

const Main: React.FC<{}> = (props) => {
  const [example, setExample] = useState<keyof typeof Example>();
  return (
    <div>
      <select
        defaultValue={""}
        onChange={(event) =>
          setExample(event.target.value as keyof typeof Example)
        }
        className="form-select appearance-none
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        aria-label="Default select example"
      >
        <option value="">Open this select menu</option>
        {Object.keys(Example).map((name) => (
          <option key={name} value={name}>
            {name}
          </option>
        ))}
      </select>

      <div className="mt-4">
        {Example[example] && React.createElement(Example[example])}
      </div>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  React.createElement(Main)
);
