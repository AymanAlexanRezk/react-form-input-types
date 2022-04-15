import { useState } from "react";
import "./styles.css";

export default function App() {
  const [inputData, setInputData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    message: "",
    isAccessed: false,
    skillLevel: "",
    employment: ""
  });

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setInputData((prevInputData) => ({
      ...prevInputData,
      [name]: type === "checkbox" ? checked : value
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(inputData);
  }

  return (
    <div className="App">
      <h1>React Form Inputs</h1>
      <h2>text, checkbox, radio, select</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name </label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          placeholder="Insert your first name"
          onChange={handleChange}
          value={inputData.firstName}
        />
        <br />
        <br />
        <label htmlFor="lastName">Last Name </label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          placeholder="Insert your last name"
          onChange={handleChange}
          value={inputData.lastName}
        />
        <br />
        <br />
        <label htmlFor="email">Email </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Insert your email"
          onChange={handleChange}
          value={inputData.email}
        />{" "}
        <br />
        <br />
        <label htmlFor="password">Password </label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Insert your last name"
          onChange={handleChange}
          value={inputData.password}
        />
        <br />
        <br />
        <label htmlFor="isAccessed">Is accessed </label>
        <input
          type="checkbox"
          id="isAccessed"
          name="isAccessed"
          onChange={handleChange}
          checked={inputData.isAccessed}
        />
        <br />
        <br />
        <label htmlFor="skillLevel">Experience </label>
        <select
          id="skillLevel"
          onChange={handleChange}
          name="skillLevel"
          value={FormData.skillLevel}
        >
          <option value="">--select--</option>
          <option value="fresh">Fresh Graduate</option>
          <option value="beginner">Beginner</option>
          <option value="mid-level">Mid Level</option>
          <option value="senior">Senior</option>
          <option value="tech-lead">Tech Lead</option>
        </select>
        <br />
        <br />
        <label htmlFor="message">Your Message </label>
        <br />
        <textarea
          id="message"
          name="message"
          placeholder="Type your message"
          value={inputData.message}
          onChange={handleChange}
        />
        <br />
        <br />
        <label>Employment</label>
        <br />
        <input
          id="unemployed"
          name="employment"
          type="radio"
          value="unemployed"
          checked={inputData.employment === "unemployed"}
          onChange={handleChange}
        />
        <label htmlFor="unemployed"> Unemployed</label>
        <br />
        <input
          id="part-time"
          name="employment"
          type="radio"
          value="part-time"
          checked={inputData.employment === "part-time"}
          onChange={handleChange}
        />
        <label htmlFor="part-time"> Part Time</label>
        <br />
        <input
          id="fulltime"
          name="employment"
          type="radio"
          value="fulltime"
          checked={inputData.employment === "fulltime"}
          onChange={handleChange}
        />
        <label htmlFor="fulltime"> Full Time</label>
        <br />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}
