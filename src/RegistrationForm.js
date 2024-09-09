import React, { useState } from "react";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    userId: "",
    password: "",
    name: "",
    address: "",
    country: "",
    zipCode: "",
    email: "",
    sex: "",
    language: {
      english: false,
      nonEnglish: false,
    },
    about: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const errors = {};
    if (!formData.userId || formData.userId.length < 5 || formData.userId.length > 12) {
      errors.userId = "Required and must be of length 5 to 12.";
    }
    if (!formData.password || formData.password.length < 7 || formData.password.length > 12) {
      errors.password = "Required and must be of length 7 to 12.";
    }
    if (!formData.name || !/^[A-Za-z]+$/.test(formData.name)) {
      errors.name = "Required and alphabets only.";
    }
    if (!formData.country) {
      errors.country = "Required. Must select a country.";
    }
    if (!formData.zipCode || !/^[0-9]+$/.test(formData.zipCode)) {
      errors.zipCode = "Required. Must be numeric only.";
    }
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Required. Must be a valid email.";
    }
    if (!formData.sex) {
      errors.sex = "Required.";
    }
    if (!formData.language.english && !formData.language.nonEnglish) {
      errors.language = "Required.";
    }
    return errors;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name === "english" || name === "nonEnglish") {
      setFormData({
        ...formData,
        language: {
          ...formData.language,
          [name]: checked,
        },
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log("Form Data Submitted:", formData);
      // Clear errors if submission is successful
      setErrors({});
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>User id:</label>
        <input
          type="text"
          name="userId"
          value={formData.userId}
          onChange={handleChange}
        />
        {errors.userId && <p style={{ color: "red" }}>{errors.userId}</p>}
      </div>

      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
      </div>

      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
      </div>

      <div>
        <label>Address:</label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
        />
        <p>Optional.</p>
      </div>

      <div>
        <label>Country:</label>
        <select name="country" value={formData.country} onChange={handleChange}>
          <option value="">(Please select a country)</option>
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="UK">UK</option>
        </select>
        {errors.country && <p style={{ color: "red" }}>{errors.country}</p>}
      </div>

      <div>
        <label>ZIP Code:</label>
        <input
          type="text"
          name="zipCode"
          value={formData.zipCode}
          onChange={handleChange}
        />
        {errors.zipCode && <p style={{ color: "red" }}>{errors.zipCode}</p>}
      </div>

      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
      </div>

      <div>
        <label>Sex:</label>
        <input
          type="radio"
          name="sex"
          value="Male"
          onChange={handleChange}
        />
        Male
        <input
          type="radio"
          name="sex"
          value="Female"
          onChange={handleChange}
        />
        Female
        {errors.sex && <p style={{ color: "red" }}>{errors.sex}</p>}
      </div>

      <div>
        <label>Language:</label>
        <input
          type="checkbox"
          name="english"
          checked={formData.language.english}
          onChange={handleChange}
        />
        English
        <input
          type="checkbox"
          name="nonEnglish"
          checked={formData.language.nonEnglish}
          onChange={handleChange}
        />
        Non-English
        {errors.language && <p style={{ color: "red" }}>{errors.language}</p>}
      </div>

      <div>
        <label>About:</label>
        <textarea
          name="about"
          value={formData.about}
          onChange={handleChange}
        />
        <p>Optional.</p>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default RegistrationForm;
