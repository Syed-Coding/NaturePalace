import React from "react";
import { Title } from "./Title";
import { tourData } from "../utils/data";
import Tour from "./Tour";

const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title mainTitle="featured" subTitle="tours"></Title>

      <div className="section-center featured-center">
        {tourData.map((tour) => {
          return <Tour {...tour} key={tour.id}></Tour>;
        })}
      </div>
    </section>
  );
};

export default Tours;
