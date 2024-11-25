import AuthCheck from "./components/AuthCheck/AuthCheck";
import DashboardNav from "./components/DashboardNav/DashboardNav";

export const metadata = {
  title: "Admin Dashboard | SquirrelQuest",
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

export default function DashboardLayout({ children }) {
  return (
    <AuthCheck>
      <DashboardNav />
      {children}
    </AuthCheck>
  );
}
