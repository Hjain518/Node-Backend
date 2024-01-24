const mongoose = require ('mongoose');
const financialDetailsSchema = new mongoose.Schema({
    userId: { type:mongoose.Schema.Types.ObjectId,ref: 'User'},
    income: Number,
    expenses : Number,
    savings : Number,
})

const FinancialDetails = mongoose.model('FinancialDetails',financialDetailsSchema);
module.exports = FinancialDetails;