import { RouterContext } from "@koa/router";
import { Next } from "koa";
import HttpError from 'http-errors';
import { validateJWT } from "../config/jwt";

export const requireAuthHandler = async(ctx : RouterContext , next : Next) => {
    const header = ctx.request.headers.authorization;
    if(!header){
        throw new HttpError.Unauthorized("Please provide a token");
    }
    const token = header.split(' ')[1];
    const tokenPayLoad = await validateJWT(token);
    ctx.state.user_id = tokenPayLoad.id;
    await next();
};