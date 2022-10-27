import { Service } from 'egg';
import { Model, Schema } from 'mongoose';

interface IPersonModel {
  name: string;
  age: number;
  hobbies: string[] | undefined;
  team?: Schema.Types.ObjectId;
}
export default class TestDBService extends Service {
  static PersonModel: Model<IPersonModel>;
  private getPersonModel() {
    if (!TestDBService.PersonModel) {
      const app = this.app;
      const UserSchema = new Schema<IPersonModel>(
        {
          name: { type: String },
          age: { type: Number },
          hobbies: { type: Array },
          team: { type: Schema.Types.ObjectId, ref: 'Team' },
        },
        { collection: 'user' }
      );
      // 当使用了 mongoose 的 createConnection 创建链接时，
      // 这里不能用 mongoose 的 model，要用链接实例上的 model 方法
      TestDBService.PersonModel = app.mongoose.model('User', UserSchema);
    }
    return TestDBService.PersonModel;
  }
  async showPlayers() {
    const PersonModel = this.getPersonModel();
    const result = await PersonModel.find({ age: { $gt: 30 } }).exec();
    return result;
  }
}
