import { MongoSchema, MongoModel } from "@mayajs/mongo";
import paginate from "mongoose-paginate";

const options = {
  timestamps: {
    createdAt: "DateCreated",
    updatedAt: "DateUpdated",
  },
};

const schema = MongoSchema(
  {
    firstName: {
      required: [true, "First Name is required."],
      type: String,
    },
    lastName: {
      required: [true, "Last Name is required."],
      type: String,
    },
  },
  options
);

schema.plugin(paginate);

export default MongoModel("Sample", schema);
