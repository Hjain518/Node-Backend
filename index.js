const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const compression = require('compression');
const exampleRoutes = require('./routes/exampleRoute')
const userRoutes = require('./routes/userRoutes')
const financialDetailsRoutes= require('./routes/financialDetailsRoutes')
const mongoose = require('mongoose')
const cors = require('cors')


const app = express();

// for middlewares
app.use(morgan('combined'));
app.use(helmet());
app.use(compression());
app.use(cors());
app.use(express.json());
//mongoose
//uncomment the below code if using connection string

// mongoose.connect('mongodb://localhost:27017/stepForm',{
//     useNewUrlParser : true,
//     useUnifiedTopology : true,
// });
// routes
app.use('/api',exampleRoutes);
app.use('/api/user',userRoutes);
app.use('/api/financial-details',financialDetailsRoutes)

const PORT = process.env.PORT || 3002;
app.listen(PORT, ()=>{
    console.log(`server successfully running on ${PORT}`);
})


