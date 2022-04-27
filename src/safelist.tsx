import React, { useState } from "react";

const Safelist: React.FC<{}> = (props) => {
  const [hasError, setHasError] = useState<boolean>(false);
  return (
    <div className={`bg-${hasError ? "red" : "green"}-300`}>
      <div className={`text-${hasError ? "red" : "green"}-600`}>I am safe</div>
      <div className={`text-${"yellow"}-600`}>I'm not safe</div>
    </div>
  );
};

export default Safelist;
