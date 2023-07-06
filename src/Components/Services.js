import React from "react";
import { Title } from "./Title";
// import { servicesData } from "../utils/data";
import Service from "./Service";

export const Services = () => {
  return (
    <section className="section services" id="services">
      <div className="section-title">
        <Title mainTitle="our" subTitle="services"></Title>
      </div>

      <Service></Service>
    </section>
  );
};
