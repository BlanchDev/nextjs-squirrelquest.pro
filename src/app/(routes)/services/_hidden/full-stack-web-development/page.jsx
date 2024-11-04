import ContactButtons from "../../components/ContactButtons/ContactButtons";

export const metadata = {
  title: "Full Stack Web Consulting & Development | SquirrelQuest",
  description:
    "Full stack web consulting and development services for your needs. Using languages such as HTML, CSS, React.js, Next.js, Node.js, and PHP. Quality craftsmanship and reliable service.",
};

function FullStackWebDevelopment() {
  return (
    <div className='services-content web-development column gap30'>
      <div className='content column gap20'>
        <h1>Full Stack Web Consulting & Development</h1>
        <p>
          You can work with us to create a customized website for your business.
          Using languages such as HTML, CSS, React.js, Next.js, Node.js, and
          PHP, we can design a website that is unique to you.
          <br /> <br />
          By increasing your online presence, you can expand your customer base.
          The design and features of your website can be customized to fit the
          goals and target audience of your business.
          <br /> <br />
          Having a mobile-responsive website can improve user experience and
          allow your customers to find you anywhere, anytime. Additionally,
          keeping your website up-to-date is important for attracting and
          retaining customers.
          <br /> <br />
          Having an SEO-friendly website can also help you rank higher on search
          engines, making it easier for potential customers to find you.
          <br /> <br />
          We offer customized website solutions to our clients, tailored to
          their specific goals. A good website can inspire trust and encourage
          customers to reach out to your business.
          <br /> <br />
          By working with us, you can obtain a professional website for your
          business. With our solutions, you can increase your digital presence
          and have a successful online presence for your business.
        </p>
        <ContactButtons />
      </div>
    </div>
  );
}

export default FullStackWebDevelopment;
