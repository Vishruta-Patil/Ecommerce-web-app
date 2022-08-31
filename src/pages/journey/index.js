import grasspic from "assets/grasspic.jpg";
import { journeyData } from "data/journeyData";
import "./journey.css";

export const Journey = () => {
  return (
    <section className="journey-container">
        <div className="journey-img-box">
      <img src={grasspic} alt="journey" className="journey-img" />
      <p className="journey-img-content">THE JOURNEY</p>
      </div>
      <div className="journey-content">
        {journeyData.map((item, index) => (
          <div className="journey-content-unit" key={index}>
            <p className="journey-unit-header">{item?.title}</p>
            <p className="font-xs">{item?.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
