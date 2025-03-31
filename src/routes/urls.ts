import Router from "@koa/router";
import { createShortURL, deleteURL, getURLS, updateURL } from "../services/urls";

const urlsRouter = new Router();

urlsRouter.get('/' , async(ctx) =>{
    ctx.response.body = await getURLS(ctx.state.user_id , Number(ctx.request.query.limit) , Number(ctx.request.query.offset));
}).post('/' , async(ctx) => {
    return ctx.response.body = await createShortURL(ctx.request.body as { url: string; id?: string | undefined; }, ctx.state.user_id);
}).put('/:id' , async(ctx) => {
    return ctx.response.body = await updateURL(ctx.params.id, ctx.request.body as { url: string; }, ctx.state.user_id);
}).delete('/:id' , async(ctx) => {
    ctx.response.body = await deleteURL(ctx.params.id , ctx.state.user_id);
});

export default urlsRouter;