import Player from "../models/Player.js";

export const AddPlayer = async (req, res) => {
    try{

        const {name, country} = req.body;

        if(!name || !country){
                return res.status(400).json({
                    message: "Fill All Feilds"
                });
        }

        const newPlayer = new Player({
            name,
            country
        });

        await newPlayer.save();

        res.status(201).json({
            message: "Player Created Successfully",
            player: newPlayer
        });
        

    }catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};