import React, { useState } from "react";

const Screen: React.FC<{}> = (props) => {
  return (
    <div className="flex flex-row">
      <div className="basis-1/5 md:basis-1/3 bg-blue-500">01</div>
      <div className="basis-1/5 md:basis-1/3 bg-yellow-500">02</div>
      <div className="basis-1/2 md:basis-1/3 bg-green-500">03</div>
    </div>
  );
};

export default Screen;
