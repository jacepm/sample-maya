import { App } from "@mayajs/core";
import Mongo from "./databases/mongo";
import { routes } from "./app.routing.module";

@App({
  cors: true,
  logs: "dev",
  databases: [Mongo],
  routes,
})
export class AppModule {}
