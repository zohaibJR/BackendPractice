import User from "../models/User.js";

export const AddUser = async (req, res) => {
  try {
    const { name, email } = req.body;

    if (!name || !email) {
      return res.status(400).json({
        message: "Please fill all fields"
      });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(409).json({
        message: "User already exists"
      });
    }

    const newUser = new User({
      name,
      email
    });

    await newUser.save();

    return res.status(201).json({
      message: "User created successfully",
      user: newUser
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message
    });
  }
};

export const GetAllUsers = async (req, res) => {
  try {
    const users = await User.find().sort({ createdAt: -1 });

    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({
      message: error.message
    });
  }
};
