import { Application, Router } from "https://deno.land/x/oak@v11.1.0/mod.ts"
import { oakCors } from "https://deno.land/x/cors@v1.2.2/mod.ts";
import { GetDataMiddleware, GetTweets } from './middleware.ts'

const app = new Application();
const router = new Router();

router.get("/",GetDataMiddleware)
router.get("/tweets", GetTweets)

app.use(oakCors()); 
app.use(router.routes());
app.use(router.allowedMethods());

const port = 3000;

app.listen({ port });
console.log("The APi is Running")
