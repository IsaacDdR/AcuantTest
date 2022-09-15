import { useState } from "react";

const From = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const validateData = (data) => {
    const error = {};

    if (!data.firstName) {
      error.firstName = "First name is required";
    }

    if (!data.lastName) {
      error.lastName = "Last name is required";
    }

    if (!data.company) {
      error.company = "Company is required";
    }

    if (!data.email) {
      error.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)) {
      error.email = "Invalid email";
    }

    return error;
  };

  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.firstName]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <h1>Contact us today</h1>
      <form onSubmit={handleSubmit}>
        <p>
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            value={data.firstName}
            onChange={handleChange}
          ></input>

          <label>Last Name</label>
          <input
            type="text"
            name="firstName"
            value={data.firstName}
            onChange={handleChange}
          ></input>

          <label>Company</label>
          <input
            type="text"
            name="firstName"
            value={data.firstName}
            onChange={handleChange}
          ></input>

          <label>Company</label>
          <input
            type="text"
            name="firstName"
            value={data.firstName}
            onChange={handleChange}
          ></input>
        </p>
      </form>
    </div>
  );
};
