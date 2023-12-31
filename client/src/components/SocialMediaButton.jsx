import React from "react";

const SocialMediaButton = ({ logoImage }) => {
  return (
    <button>
      <div className="bg-sea rounded-full p-2.5 hover:bg-sky">
        {" "}
        <img alt="" src={logoImage} className="w-6"></img>
      </div>
    </button>
  );
};

export default SocialMediaButton;
