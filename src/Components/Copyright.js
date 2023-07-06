import React from "react";

const Copyright = () => {
  return (
    <p className="copyright">
      copyright &copy; Nature Palace Travel Tours Company
      <span id="date">{new Date().getFullYear()}</span> all rights reserved
    </p>
  );
};

export default Copyright;
