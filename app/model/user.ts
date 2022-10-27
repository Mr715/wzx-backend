import { Application } from 'egg';
import { Schema } from 'mongoose';

function initUserModel(app: Application) {
  const UserSchema = new Schema(
    {
      name: { type: String },
      age: { type: Number },
    },
    { collection: 'user' }
  );
  return app.mongoose.model('user', UserSchema);
}

export default initUserModel;
