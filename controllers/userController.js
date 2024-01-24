const bcrypt = require("bcrypt");
const User = require("../models/userModel");

const userController = {
  signup: async (req, res) => {
    const { first, last, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      first,
      last,
      email,
      password: hashedPassword,
    });
    try {
      await newUser.save();
      res.status(201).json({ message: "user created successfully" });
    } catch (error) {
      res.status(500).json({ error: "internal server error" });
    }
  },

  checkEmail: async (req, res) => {
    const { email } = req.body;
    try {
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        res.status(409).json({ message: "email in use already" });
      } else {
        res.status(200).json({ message: "email available" });
      }
    } catch (error) {
      res.status(500).json({ error: "internal server error" });
    }
  },
};
module.exports = userController;
