import Link from "next/link";
import "./ContactButtons.css";

function ContactButtons() {
  return (
    <nav
      className='contact-buttons row aic jcc gap10 w100'
      aria-label='Contact Buttons'
    >
      <Link
        className='button whatsapp'
        href='https://wa.me/15872299345'
        target='_blank'
        rel='noopener noreferrer'
        aria-label='Contact via WhatsApp'
      >
        WhatsApp
      </Link>
      <pre>or</pre>
      <Link className='button call' href='tel:+15872299345' aria-label='Call'>
        Call 1-(587)-229-9345
      </Link>
    </nav>
  );
}

export default ContactButtons;
