import express from 'express';
import { creatNotes, deleteNotes, getNotes, updateNotes } from '../controllers/notesControler.js';

const router=express.Router();

router.get("/",getNotes); 

router.post("/",creatNotes)

router.put("/:id",updateNotes)

router.delete("/:id",deleteNotes)



export default router;