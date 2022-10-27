import { Controller } from 'egg';

export default class TestController extends Controller {
  async index() {
    const { ctx } = this;
    const { id } = ctx.params;
    const { query, body } = ctx.request;
    // const res = await this.app.axiosInstance.get('/api/breeds/image/random');
    const person = await ctx.service.user.showPlayers();
    const resp = {
      query,
      id,
      body,
      person,
      mongooseId: ctx.app.mongoose.id,
    };
    ctx.helper.success({ ctx, res: resp });
  }
  async getDog() {
    const { ctx } = this;
    // const resp = await service.dog.show();
    await ctx.render('test.nj', { url: '111' });
  }
}
