import { FormElement } from "../utils/FormInput";
import styles from "./Contact.module.scss";
import { useState } from "react";
import axios from "axios";
const Contact = () => {
  const inputs = [
    {
      id: 1,
      name: "name",
      type: "text",
      errormessage: "This field is required",
      label: "Your Name",
      required: true,
      maxLength: "50",
    },
    {
      id: 2,
      name: "phone",
      type: "tel",
      errormessage: "Please enter a valid phone number",
      label: "Your Phone Number",
      pattern: "^[0-9]+$",
      required: true,
      maxLength: 9,
    },
    {
      id: 3,
      name: "email",
      type: "email",
      errormessage: "Please enter a valid email",
      label: "Your Email",
      required: true,
      maxLength: "50",
    },
    {
      id: 4,
      name: "subject",
      type: "text",
      errormessage: "This field is required",
      label: "Your Title",
      required: true,
      maxLength: "50",
    },
    {
      id: 5,
      name: "message",
      errormessage: "This field is required",
      label: "Your Message",
      required: true,
      maxLength: "1000",
      as: "textarea",
    },
  ];
  const [error, setError] = useState(false);
  const onClick = () => {
    setError(true);
  };
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null,
  });
  const handleServerResponse = async (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg },
    });
    const hasEmptyInput = inputs.some((input) => {
      return input.required && !form[input.id].value;
    });
    if (hasEmptyInput) {
      setError(true);
      return;
    } else if (ok) {
      setError(false);
      form.reset();
    }
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = {};
    let hasError = false;
    for (let [name, value] of formData.entries()) {
      const input = inputs.find((input) => input.name === name);
      data[name] = value;
      if (input.pattern && !new RegExp(input.pattern).test(value)) {
        hasError = true;
      } else if (input.required && !value) {
        hasError = true;
      } else {
        input.errormessage = "";
      }
    }
    if (!hasError) {
      setServerState({ submitting: true });

      axios({
        method: "post",
        url: process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT,
        data: formData,
      })
        .then((r) => {
          handleServerResponse(true, "Thanks!", form);
          setError(false);
          hasError = false;
          form.reset();
        })
        .catch((r) => {
          handleServerResponse(false, r.response.data.error, form);
          setError(true);
        });
    } else {
      handleServerResponse(false, "Please complete required fields", form);
    }
  };
  const disable = (e) => {
    setTimeout(() => {
      if (error === true) {
        disable(e);
      }
    }, 2000);
  };
  return (
    <div className={styles.container}>
      <section className={styles.secForm}>
        <form
          noValidate
          onSubmit={handleOnSubmit}
          className={styles.form}
          method="POST"
        >
          {inputs.map((input) => {
            return (
              <FormElement
                onInvalid={(e) => e.preventDefault()}
                key={input.id}
                {...input}
                className={styles.input}
                error={error}
                focused={error}
              />
            );
          })}
          <div>
            <button type="submit" disabled={disable()} onClick={onClick}>
              SEND
            </button>
            {serverState.status && (
              <p className={!serverState.status.ok ? "errorMsg" : ""}>
                {serverState.status.msg}
              </p>
            )}
          </div>
        </form>
      </section>
      <section className={styles.secContact}>
        <div></div>
      </section>
    </div>
  );
};

export default Contact;
