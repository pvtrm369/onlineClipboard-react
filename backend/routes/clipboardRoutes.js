const express = require("express");
const Clipboard = require("../models/Clipboard");
const router = express.Router();

const generateUniqueCode= async()=>{
    let code;
    let exists=true;
    while(exists){
        code=Math.floor(100000+Math.random()*900000).toString();
        exists= await Clipboard.findOne({uniqueCode:code});
    }
    return code;
};

router.post("/save", async(req , res)=>{
    try {

        const {text}=req.body;
        if(!text) return res.status(400).json({uniqueCode:"Text is Required"});
        
        const uniqueCode=  await generateUniqueCode();
        
        const newClipboard= new Clipboard({uniqueCode,text});
        await newClipboard.save();
        console.log(newClipboard);

        
        res.status(201).json({uniqueCode});
        
       
        
    } catch (error) {
        console.error(error)
        res.status(500).json({message:"server error"});
    }
});

    router.get("/:uniqueCode", async ( req,res)=>{
        try {
            const {uniqueCode}= req.params;
            if(uniqueCode==" ") return res.json({text:"Enter valid code"})

            const clipboard = await Clipboard.findOne({uniqueCode});
          
            if(!uniqueCode) return res.status(404).json({text:"Not Found"});

            res.status(200).json({text:clipboard.text});

            
        } catch (error) {
            res.status(500).json({ message: "Server Error" });
        }
    })

    module.exports=router;


