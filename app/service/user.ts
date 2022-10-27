import { Service } from 'egg';

export default class UserService extends Service {
  async showPlayers() {
    const result = await this.app.model.User.find({ age: { $gt: 5 } }).exec();
    return result;
  }
}
