import { Mongo } from "@mayajs/mongo";
import sample from "../controllers/sample/sample.model";

export = Mongo({
  name: "main",
  connectionString: "mongodb+srv://root:root@sample.3mhig.mongodb.net/test?retryWrites=true&w=majority",
  schemas: [sample],
});
