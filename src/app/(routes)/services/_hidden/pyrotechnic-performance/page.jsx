import ContactButtons from "../../components/ContactButtons/ContactButtons";

export const metadata = {
  title: "Pyrotechnic Performance | SquirrelQuest",
  description:
    "Pyrotechnic performance services for your needs. Using professional equipment and safety measures. Quality craftsmanship and reliable service.",
};

function PyrotechnicPerformance() {
  return (
    <div className='services-content pyrotechnic-performance column gap30'>
      <div className='content column gap20'>
        <h1>Pyrotechnic Performance</h1>
        <p>
          As SquirrelQuest Productions, we provide professional fire shows. If
          you want to discover the power of fire on your special days or events,
          you are in the right place.
          <br /> <br />
          Our fire shows offer an unforgettable experience for the audience with
          impressive light and sound effects, adding a unique atmosphere to your
          surroundings.
          <br /> <br />
          Moreover, our shows are performed using completely safe and
          professional equipment. Therefore, you can enjoy your event with
          confidence and comfort.
          <br /> <br />
          At Pyrotechnic Performances, we also offer customized shows according
          to our clients’ special needs. Thus, we can provide a fire show that
          suits the concept of your event.
          <br /> <br />
          With our fire shows, you can make your event unforgettable. We always
          prioritize our clients’ satisfaction by providing them with a
          memorable experience.
          <br /> <br />
          With our fire shows, you can bring the atmosphere of your event to
          life with the power of fire. By contacting us, you can plan a
          customized fire show and turn your dreams into reality.
        </p>
        <ContactButtons />
      </div>
    </div>
  );
}

export default PyrotechnicPerformance;
