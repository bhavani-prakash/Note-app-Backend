import Note from '../models/Note.js';

export const getNotes = async (req, res) => {
    try {
        const notes = (await Note.find().sort({ createdAt: -1 }));
        res.status(200).json(notes);
        
    } catch (error) {

        console.log("Error in the getNotes controllre",error)
        res.status(500).json({message:"Server Error in getNotes controller"})

        
    }
}

export const creatNotes = async(req,res)=>{
    try {
        const {title,content}= req.body;
    const newNote = await Note.create({title,content});
    res.status(201).send("Hey notes created succesfully ");
    } catch (error) {
        console.log("Error in the createNotes controller",error)
        res.status(500).json({message:"Server Error in createNotes controller"})
    }
}

export const updateNotes = async(req,res)=>{
    try {
        const {title,content}= req.body;
        await Note.findByIdAndUpdate(req.params.id,{title , content});
        res.status(200).send("Your note is updated succesfully !")
        
    } catch (error) {
        console.log("Error in the updateNotes controller",error)
        res.status(500).json({message:"Server Error in updateNotes controller"}) 
    }
}

export const deleteNotes= async(req,res)=>{
    try {
       const deletedNote = await Note.findByIdAndDelete(req.params.id);
       if(!deletedNote){
        return res.status(404).json({message:"Note not found"})
       }
       
       res.status(200).json({message:"Note deleted succesfully "})
        
    } catch (error) {
        res.status(500).json({message:"Server Error in deleteNotes controller"})
        console.log("Error in the deleteNotes controller",error)

        
    }
   
}