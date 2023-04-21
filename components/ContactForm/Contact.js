import { FormElement } from "../utils/FormInput";
import styles from "./Contact.module.scss";
import { useState,useRef } from "react";
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
      pattern: "^[0-9]{9}$",
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
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null,
  });
  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg },
    });
    if (ok) {
      form.reset();
    }
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    setServerState({ submitting: true });
    axios({
      method: "post",
      url: process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT,
      data: new FormData(form),
    })
      .then((r) => {
        handleServerResponse(true, "Thanks!", form);
      })
      .catch((r) => {
        console.log(r);
        handleServerResponse(false, r.response.data.error, form);
      });
  };
  return (
    <div className={styles.container}>
      <section className={styles.secForm}>
        <form novalidate onSubmit={handleOnSubmit} className={styles.form} method="POST">
          {inputs.map((input) => {
            return (
              <FormElement key={input.id} {...input} className={styles.input} />
            );
          })}
          <button type="submit" disabled={serverState.submitting}>
            Send
          </button>
          {serverState.status && (
            <p className={!serverState.status.ok ? "errorMsg" : ""}>
              {serverState.status.msg}
            </p>
          )}
        </form>
      </section>
      <section className={styles.secContact}>
        <div>
          <p>asdjfghaklsdjghlsdkfjghlksdfjghs</p>
          <p>djfghbasdljhgalsdfjkghlasdfgj</p>
        </div>
        <div>
          <p>asdjfghaklsdjghlsdkfjghlksdfjghs</p>
          <p>djfghbasdljhgalsdfjkghlasdfgj</p>
        </div>
      </section>
    </div>
  );
};

export default Contact;
