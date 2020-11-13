import { Mongo } from "@mayajs/mongo";
import sample from "../controllers/sample/sample.model";

export = Mongo({
  name: "main",
  connectionString: "mongo-connection-here",
  schemas: [sample],
});
