import ServicesNav from "./components/ServicesNav/ServicesNav";
import "./services.css";

export const metadata = {
  title: "Our Services | SquirrelQuest",
  description:
    "Explore our professional services. Carpentry, Web Development, and more.",
};

export default function ServicesLayout({ children }) {
  return (
    <div className='services-page column aic jcc'>
      <div className='services-container'>
        <ServicesNav />
        {children}
      </div>
    </div>
  );
}
