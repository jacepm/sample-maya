import { Injectable } from "@mayajs/core";
import { Models } from "@mayajs/mongo";

@Injectable()
export class SampleServices {
  @Models("sample") model: any;

  constructor() {}

  async create(body: any): Promise<any> {
    let sample;

    try {
      sample = await this.model.create(body);
    } catch (error) {
      return { status: 422, message: error.errmsg ? error.errmsg : error.toString(), data: [], meta: {} };
    }

    try {
      const result = await sample.save();
      return { status: 200, message: "YES", data: result, meta: {} };
    } catch (error) {
      await this.model.findByIdAndDelete({ _id: sample._id });
      return { status: 422, message: error.errmsg ? error.errmsg : error.toString(), data: [], meta: {} };
    }
  }
}
