import { createRouteHandler } from "../lib/create-route-handler";
import handler from "../lib/express-handler";

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

export const GET = createRouteHandler(handler, "/test");
