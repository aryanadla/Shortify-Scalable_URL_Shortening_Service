import Router from '@koa/router';
import { register } from 'module';
import { login } from '../services/users';
// import { registerVisit } from '../services/visits';

const authRouter = new Router();

authRouter
.post('/register' , async(ctx) => {
    ctx.response.body = await register(ctx.request.body as any);
})
.post('/login' , async(ctx) => {
    ctx.response.body = await login(ctx.request.body as any);
});

export default authRouter;
