import ContactButtons from "../../components/ContactButtons/ContactButtons";

export const metadata = {
  title: "Miniature Painting | SquirrelQuest",
  description:
    "Miniature painting services for your needs. Using high-quality materials and detailed craftsmanship. Quality craftsmanship and reliable service.",
};

function MiniaturePainting() {
  return (
    <div className='services-content miniature-painting column gap30'>
      <div className='content column gap20'>
        <h1>Miniature Painting</h1>
        <p>
          We are SquirrelQuest Productions and we specialize in miniature
          painting. With our professional services, we make your miniatures
          unique and special.
          <br /> <br />
          Thanks to the high-quality materials we use and our detailed
          craftsmanship, your miniatures will have a realistic and lively
          appearance.
          <br /> <br />
          We create miniatures that perfectly match our customers’ needs with
          our customized miniature painting services.
          <br /> <br />
          At Squirrel Quest Productions, our aim is to exceed our customers’
          expectations. By combining our expertise in miniature painting with
          our creativity, we produce personalized miniatures for you.
          <br /> <br />
          With our diverse and fascinating concepts, we turn your imagined
          worlds into reality.
          <br /> <br />
          At Squirrel Quest Productions, we always prioritize our customers’
          satisfaction. We are here to share our expertise in miniature painting
          and help you turn your dreams into reality.
          <br /> <br />
          Contact us now to meet our special miniatures that you can use for
          either collection or gift purposes.
        </p>
        <ContactButtons />
      </div>
    </div>
  );
}

export default MiniaturePainting;
