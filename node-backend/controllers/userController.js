import User from "../models/User.js";

export const AddUser = async (req, res) => {

  try {

    const { name, email } = req.body;

    // FIX: Validation
    if (!name || !email) {
      return res.status(400).json({
        message: "Please fill all fields"
      });
    }

    // FIX: Create new user
    const newUser = new User({
      name,
      email
    });

    // FIX: Save to MongoDB
    await newUser.save();

    res.status(201).json({
      message: "User created successfully",
      user: newUser
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};