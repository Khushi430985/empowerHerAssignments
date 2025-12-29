import React, { useReducer } from "react";
import { formReducer, initialState } from "../reducer/formReducer";

const MultiStepForm = () => {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const handleChange = (e) => {
    dispatch({
      type: "UPDATE_FIELD",
      field: e.target.name,
      value: e.target.value,
    });
  };

  const next = () => dispatch({ type: "NEXT_STEP" });
  const prev = () => dispatch({ type: "PREVIOUS_STEP" });
  const submit = () => dispatch({ type: "SUBMIT_FORM" });
  const reset = () => dispatch({ type: "RESET_FORM" });

  const { step, formData, isSubmitted } = state;

  if (isSubmitted) {
    return (
      <div>
        <h2>Form Submitted Successfully </h2>
        <button onClick={reset}>Reset</button>
      </div>
    );
  }

  return (
    <div>
      <h2>Step {step} / 3</h2>

      {step === 1 && (
        <>
          <input
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
          />
          <br />
          <input
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          <br />
          <button onClick={next} disabled={!formData.name || !formData.email}>
            Next
          </button>
        </>
      )}

      {step === 2 && (
        <>
          <input
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
          />
          <br />
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          <br />
          <button onClick={prev}>Back</button>
          <button
            onClick={next}
            disabled={!formData.username || !formData.password}
          >
            Next
          </button>
        </>
      )}

      {step === 3 && (
        <>
          <h3>Review Details</h3>
          <p>Name: {formData.name}</p>
          <p>Email: {formData.email}</p>
          <p>Username: {formData.username}</p>

          <button onClick={prev}>Back</button>
          <button onClick={submit}>Submit</button>
        </>
      )}
    </div>
  );
};

export default MultiStepForm;
