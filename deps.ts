import { config } from "https://deno.land/x/dotenv@v3.2.0/mod.ts";
export {Application, Router, type RouterMiddleware} from 'https://deno.land/x/oak@v11.1.0/mod.ts'

export const env = config();
