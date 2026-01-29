import { Router } from "express";
import { PasteDocs } from "../model.js";
import { renderPaste } from "../controllers/renderPaste.js";

export const pasteRouter=Router()

pasteRouter.get("/:id",renderPaste)