import { Slide, ToastContainer } from "react-toastify";
import "./admin.css";
import "react-toastify/dist/ReactToastify.css";

export const metadata = {
  title: "Admin | SquirrelQuest",
  description:
    "Manage and oversee SquirrelQuest operations, support, and feedback. Admins can access all necessary tools and information.",

  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function AdminLayout({ children }) {
  return (
    <>
      <div className='admin-page column aic'>
        <div className='admin-container column'>
          <div className='admin-content column'>{children}</div>
        </div>
      </div>
      <ToastContainer
        position='top-center'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='colored'
        transition={Slide}
      />
    </>
  );
}
