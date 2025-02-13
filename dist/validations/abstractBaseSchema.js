export class BaseSchema {
    async validate(data) {
        try {
            const schema = this.getSchema();
            return schema.validate(data);
        }
        catch (error) {
            throw error;
        }
    }
}
