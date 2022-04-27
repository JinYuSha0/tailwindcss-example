import React, { useState } from "react";

const Color: React.FC<{}> = (props) => {
  return (
    <>
      <div className="bg-myfavoritebgcolor">
        <h1 className="text-myfavoritecolor">Hahaha</h1>
        <h1 className="text-myfavoritecolor/50">Hahaha</h1>
      </div>
    </>
  );
};

export default Color;
