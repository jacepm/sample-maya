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
      return { status: 200, message: "Successfully created.", data: result, meta: {} };
    } catch (error) {
      await this.model.findByIdAndDelete({ _id: sample._id });
      return { status: 422, message: error.errmsg ? error.errmsg : error.toString(), data: [], meta: {} };
    }
  }

  async update(id: string, body: any): Promise<any> {
    try {
      const result = await this.model.findByIdAndUpdate(id, body, { new: true }).select("-_id");
      return { status: 200, message: "Successfully updated.", data: result, meta: {} };
    } catch (error) {
      return { status: 422, message: error.errmsg ? error.errmsg : error.toString(), data: [], meta: {} };
    }
  }

  async all(): Promise<any> {
    try {
      const result = await this.model.find().select("-_id");
      return { status: 200, message: "Successfully fecthed.", data: result, meta: {} };
    } catch (error) {
      return { status: 422, message: error.errmsg ? error.errmsg : error.toString(), data: [], meta: {} };
    }
  }

  async getById(id: string): Promise<any> {
    try {
      const result = await this.model.findById(id).select("-_id");
      return { status: 200, message: "Successfully fecthed by id.", data: result, meta: {} };
    } catch (error) {
      return { status: 422, message: error.errmsg ? error.errmsg : error.toString(), data: [], meta: {} };
    }
  }
}
