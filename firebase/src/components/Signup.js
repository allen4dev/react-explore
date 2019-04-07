import React, { useState } from 'react';
import { register, signinWithGoogle } from 'utils/firebase';

function useForm(initialValues) {
  const [values, setValues] = useState(initialValues);

  const handleInputChange = ({ target: { name, value } }) =>
    setValues({ ...values, [name]: value });

  return { values, handleInputChange };
}

function Signup() {
  const { values, handleInputChange } = useForm({ email: '', password: '' });

  const handleSubmit = e => {
    e.preventDefault();

    register(values.email, values.password);
  };

  return (
    <>
      <div>
        <label htmlFor="email">
          Email:
          <input
            id="email"
            name="email"
            type="text"
            value={values.email}
            onChange={handleInputChange}
          />
        </label>

        <label htmlFor="password">
          Password:
          <input
            id="password"
            name="password"
            type="password"
            value={values.password}
            onChange={handleInputChange}
          />
        </label>

        <button type="button" onClick={handleSubmit}>
          Register
        </button>
      </div>

      <button type="button" onClick={signinWithGoogle}>
        Signin with Google
      </button>
    </>
  );
}

export default Signup;
