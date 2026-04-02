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

export const GetPakistaniPlayer = async (req, res) => {

    //instead of displaying all players display only those players whose country is pakistan
    try{
        const player = await Player.find({ 
            country: 
            { $in: ["Pakistan", "India"] } 
        });
        return res.status(200).json(player)
    }
    catch(error){
        return res.status(500).json({
            message: error.message
        });
    }
};