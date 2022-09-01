import "./contact.css";
import insta from "assets/insta.png";
import twitter from "assets/twitter.png";
import facebook from "assets/facebook.png";

export const Contact = () => {
  const contactData = [
    {
      emailId: "support@kicksup.com",
      description: "for any technical support",
    },

    {
      emailId: "info@kicksup.com",
      description: "for more information",
    },
    {
      emailId: "feedback@kicksup.com",
      description: "to send your feedback",
    },
    {
      emailId: "jobs@kicksup.com",
      description: "to work with us",
    },
  ];
  return (
    <section className="contact-content">
      <div className="mild-shadow contact-block">
        <p className="font-md contact-main-header">REACH US AT</p>

        <div>
          {contactData.map((item,index) => (
            <div className="contact-unit" key={index}>
            <p className="font-sm">{item.emailId}</p>
            <p className="font-xs">{item.description}</p>
          </div>
          ))}
          
          
        </div>
      </div>

      <div className="social-handles ">
        <p className="font-xs">Stay in touch</p>

        <div className="social-icons flex-center">
          <img src={twitter} alt="twitter" />
          <img src={insta} alt="insta" />
          <img src={facebook} alt="facebook" />
        </div>
      </div>
    </section>
  );
};
