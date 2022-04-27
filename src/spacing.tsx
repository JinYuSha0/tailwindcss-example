import React, { useState } from "react";

const Spacing: React.FC<{}> = (props) => {
  return (
    <div className="flex">
      <div className="spacing-block w-16 h-16 mr-2">Block</div>
      <div className="spacing-block w-32 h-16 mr-4">Block</div>
      <div className="spacing-block p-10 mr-10">Block</div>
      <div className="spacing-block">Block</div>
    </div>
  );
};

export default Spacing;
