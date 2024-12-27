import express from "express";
import { router } from "./routes";
import cors from "cors";
const app = express()
app.use(express.json())
app.use(cors())
router.map(e=>{
    return app.use(e.url, e.route)
})

app.listen(4000,()=>console.log("api rodando..."))