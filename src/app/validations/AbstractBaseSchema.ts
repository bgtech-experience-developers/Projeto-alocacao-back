import { Schema, ValidationResult } from "joi";
export abstract class BaseSchema {
  abstract getSchema(): Schema;
  abstract update(): Schema;
  
  async validate(data: any): Promise<ValidationResult> {
    try {
      const schema = this.getSchema();
      return schema.validate(data);
    } catch (error) {
      throw error;
    }
  }

  async validateUpdate(data: any): Promise<ValidationResult> {
    try {
      const schema = this.update();

      return schema.validate(data);
    }
    catch(error) {
      throw error;
    }
  }
}
