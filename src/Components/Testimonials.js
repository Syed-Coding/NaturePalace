import React from "react";
import { Title } from "./Title";
// import { testimonalData } from "../utils/data";
import Testimony from "./Testimony";

const Testimonials = () => {
  return (
    <section className="testimonal" id="testimonial">
      <Title mainTitle="customers" subTitle="Testimonial"></Title>
      <Testimony></Testimony>
    </section>
  );
};

export default Testimonials;

// import React from "react";
// import { Title } from "./Title";
// import { testimonalData } from "../utils/data";

// const Testimonials = () => {
//   return (
//     <section className="testimonal" id="testimonial">
//       <Title mainTitle="customers" subTitle="Testimonial"></Title>
//       <div className="grid">
//         {testimonalData.map((testimonal) => {
//           const { id, image, review, name, job } = testimonal;
//           return (
//             <div className="mycard text-center" key={id}>
//               <div className="content">
//                 <div className="text">
//                   <p>{review}</p>
//                 </div>
//               </div>
//               <div className="author">
//                 <div className="image">
//                   <img src={image} className="img-fluid" alt={name} />
//                 </div>
//                 <div className="details">
//                   <h2>
//                     {name}
//                     <br />
//                     <span>{job}</span>
//                   </h2>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// };

// export default Testimonials;
