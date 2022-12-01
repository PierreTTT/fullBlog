import Head from "next/head";
import { Fragment } from "react";
import ContactForm from "../../components/contact-form/contact-form";

function ContactPage() {
  return (
    <Fragment>
      <Head>
        <title>Contact Me</title>
        <meta name="Description" content="contact info" />
      </Head>
      <ContactForm />
    </Fragment>
  );
}

export default ContactPage;
