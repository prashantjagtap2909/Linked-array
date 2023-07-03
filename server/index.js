const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
const { registerUser, loginUser } = require('./controllers/auth');
const { dashBoardData } = require('./controllers/dashboard');
const { getUserData, getUserSocials } = require('./controllers/getUserData');
const { saveSocials, saveProfile,saveLinks } = require('./controllers/saveItems');
const { loadSocials, loadLinks } = require('./controllers/loadPrevious');
require('dotenv').config();




app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/linkTree-9').then(()=>{console.log(`mongodb COnnected`)}).catch(err=>{console.log(err.message)});

app.get('/', (req, res)=>{
    res.send(`Server is running on port ${port}`);
})

app.post('/api/login', loginUser);
app.post('/api/register', registerUser);

app.post('/data/dashboard', dashBoardData);

app.get('/get/:handle', getUserData);

app.post('/save/socials', saveSocials)
app.post('/save/profile', saveProfile)
app.post('/save/links', saveLinks)
app.post('/load/socials', loadSocials)
app.post('/load/links', loadLinks)






const port = process.env.PORT || 8080;

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})