import { Router } from "express";
import { createPaste } from "../controllers/createPaste.js";
import { getPaste } from "../controllers/getPaste.js";


export const apiRouter=Router();

apiRouter.get("/healthz",(req,res)=>[
    res.status(200).json({ok:true})
])

apiRouter.get("/pastes/:id",getPaste)

apiRouter.post("/pastes",createPaste)