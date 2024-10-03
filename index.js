const express = require('express');
const dotenv = require('dotenv');
const product_router = require('./routes/productRoutes.js');
const users_router = require('./routes/userRoute.js');
const { PrismaClient} = require('@prisma/client');
const auth_router = require('./routes/authRoute.js')
const prisma = new PrismaClient();


dotenv.config()

// initialize the app 
const app = express()

app.use(express.json())
app.use('/api/products',product_router)
app.use('/api/users',users_router)
app.use('/api/auth', auth_router)
app.get('/', (req,res) => {
    res.send('Welcome back to bonewireApp')
})
app.listen(5000,() => {
    console.log('started successfully')
})