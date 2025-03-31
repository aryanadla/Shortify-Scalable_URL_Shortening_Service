import 'dotenv/config';
import Koa from 'koa';
import { onDatabaseConnect } from './config/knex';
 import { login, register } from "./services/users";
import { validateJWT } from './config/jwt';
import cors from '@koa/cors';
import helmet from 'koa-helmet';
import bodyParser from 'koa-bodyparser';
import router from './routes/index';
// import { comparePassword } from './config/encryption';

const app = new Koa();

app.use(cors());
app.use(helmet());
app.use(bodyParser());

app.use(router.routes()).use(router.allowedMethods());

const main = async () => {
  try {
    await onDatabaseConnect();
    console.log('Database is connected');
    // Database is ready
    app.listen(Number(process.env.PORT) , () =>
      console.log(`Server started with port ${process.env.PORT}`));
    const results = await login({username : "Course" , password : "123456"});
    console.log(await validateJWT(results.token));
  } catch(e){
    console.log(e);
  }
};

main();