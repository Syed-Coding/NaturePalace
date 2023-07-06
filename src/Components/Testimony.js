import React from "react";
import { testimonalData } from "../utils/data";
const Testimony = () => {
  return (
    <div className="grid">
      {testimonalData.map((testimonal) => {
        const { id, image, review, name, job } = testimonal;
        return (
          <div className="mycard text-center" key={id}>
            <div className="content">
              <div className="text">
                <p>{review}</p>
              </div>
            </div>
            <div className="author">
              <div className="image">
                <img src={image} className="img-fluid" alt={name} />
              </div>
              <div className="details">
                <h2>
                  {name}
                  <br />
                  <span>{job}</span>
                </h2>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Testimony;
