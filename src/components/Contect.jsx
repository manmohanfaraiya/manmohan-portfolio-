import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    // Web3Forms Access Key
    formData.append("access_key", "9f5787fe-ad1b-476b-9bad-f7b9928574fb");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      }).then((res) => res.json());

      if (res.success) {
        setResult("Message sent successfully!");
        event.target.reset();
        setTimeout(() => setResult(""), 4000);
      } else {
        setResult(res.message);
        setTimeout(() => setResult(""), 4000);
      }
    } catch (e) {
      setResult("Something went wrong!");
      setTimeout(() => setResult(""), 4000);
    }
  };

  return (
    <section id="contact" className="bento-card span-2 contact-bento">
      <h2>Let's Talk</h2>
      <p className="contact-subtitle">
        Feel free to reach out for projects, internships, or collaborations.
      </p>
      <form className="contact-form" onSubmit={onSubmit}>
        <div className="form-row">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
        </div>
        <textarea name="message" rows="4" placeholder="Your Message" required></textarea>
        <button type="submit" className="btn">Send Message</button>
      </form>
      {result && <p className="contact-result">{result}</p>}
    </section>
  );
}

export default Contact;