import { routerTypes } from "../types";
import produtosRouter from "./produtosRouter";
import userRouter from "./userRouter";

export const router:routerTypes[] = [
   {url:"/usuario",route:userRouter},
   {url:"/produto",route:produtosRouter},
]