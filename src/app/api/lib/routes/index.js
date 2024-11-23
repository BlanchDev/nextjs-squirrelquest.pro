import testRoutes from "./test.routes";
import contactRoutes from "./contact.routes";

export default function setupRoutes(app) {
  app.use(testRoutes);
  app.use(contactRoutes);
}
