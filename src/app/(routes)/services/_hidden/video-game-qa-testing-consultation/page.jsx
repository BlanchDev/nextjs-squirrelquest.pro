import ContactButtons from "../../components/ContactButtons/ContactButtons";

export const metadata = {
  title: "Video Game QA Testing & Consultation | SquirrelQuest",
  description:
    "Video game QA testing and consultation services for your needs. Using years of experience and expert consultants. Quality craftsmanship and reliable service.",
};

function VideoGameQATestingConsultation() {
  return (
    <div className='services-content video-game-qa-testing-consultation column gap30'>
      <div className='content column gap20'>
        <h1>Video Game QA Testing & Consultation</h1>
        <p>
          Squirrel Quest Productions is an expert company in video game testing
          and consultancy.
          <br /> <br />
          With years of experience, we offer quality testing services to game
          developers and publishers.
          <br /> <br />
          Our team of expert consultants guide our customers in the game
          development process and help them create better games.
          <br /> <br />
          Additionally, we conduct continuous research and use the latest
          technologies to stay up-to-date with the gaming industry.
          <br /> <br />
          We offer customized solutions to ensure your games perform at their
          best.
          <br /> <br />
          We understand your needs and are constantly improving ourselves to
          provide the best service.
          <br /> <br />
          If you would like to receive professional video game testing and
          consultancy services, please feel free to contact us.
        </p>
        <ContactButtons />
      </div>
    </div>
  );
}

export default VideoGameQATestingConsultation;
