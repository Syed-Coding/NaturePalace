import React, { useMemo, useState } from "react";
import about from "../images/about.jpeg";
import { Title } from "./Title";
import { aboutData } from "../utils/data";

const About = () => {
  const [readmore, setReadMore] = useState(false);

  // const data = aboutData.map((data) => {
  //   console.log("inside about");
  //   return data.text;
  // });
  //if we log log above commneted data we can see that whenever the change the state , it logs 'inside about' , this can prevrent by usememo
  const data = useMemo(() => {
    return aboutData.map((data) => {
      // console.log("inside about");
      return data.text;
    });
  }, []);

  const [firstData] = data;

  return (
    <section className="section" id="about">
      <Title mainTitle="About" subTitle="us"></Title>

      <div className="section-center about-center">
        <div className="about-img">
          <img src={about} className="about-photo" alt="awesome beach" />
        </div>
        <article className="about-info">
          <h3>explore the difference</h3>
          {!readmore && <p>{firstData}</p>}
          {readmore && data.map((ele, i) => <p key={i}>{ele}</p>)}

          <button onClick={() => setReadMore(!readmore)} className="btn">
            {readmore ? "read less" : "read more"}
          </button>
        </article>
      </div>
    </section>
  );
};

export default About;

//below is harded coded about data method
// import React, { useState } from "react";
// import about from "../images/about.jpeg";
// import { Title } from "./Title";
// // import { aboutData } from "../utils/data";

// const About = () => {
//   const [readmore, setReadMore] = useState(false);
//   return (
//     <section className="section" id="about">
//       <Title mainTitle="About" subTitle="us"></Title>

//       <div className="section-center about-center">
//         <div className="about-img">
//           <img src={about} className="about-photo" alt="awesome beach" />
//         </div>
//         <article className="about-info">
//           <h3>explore the difference</h3>
//           <p>
//             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
//             quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
//             unde dolor?
//           </p>
//           {readmore && (
//             <>
//               <p>
//                 Lorem ipsum, dolor sit amet consectetur adipisicing elit.
//                 Aspernatur quisquam harum nam cumque temporibus explicabo
//                 dolorum sapiente odio unde dolor?
//               </p>
//               <p>
//                 Lorem ipsum, dolor sit amet consectetur adipisicing elit.
//                 Aspernatur quisquam harum nam cumque temporibus explicabo
//                 dolorum sapiente odio unde dolor?
//               </p>
//             </>
//           )}
//           <button onClick={() => setReadMore(!readmore)} className="btn">
//             {readmore ? "read less" : "read more"}
//           </button>
//         </article>
//       </div>
//     </section>
//   );
// };

// export default About;
