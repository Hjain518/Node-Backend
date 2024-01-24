const bcrypt = require("bcrypt");
const FinancialDetails = require("../models/financialModel");

const financialDetailsController = {
  saveDetails: async (req, res) => {
    const { userId, income, expenses, savings } = req.body;
    const newFinancialDetails = new FinancialDetails({
        userId,
        income,
        expenses,
        savings,
    });
    try {
      await newFinancialDetails.save();
      res.status(201).json({ message: "Financial Details Saved Successfully" });
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  },
};
module.exports = financialDetailsController;
