const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
mongoose.connect("mongodb://127.0.0.1:27017/auth-app", {
    useNewUrlParser: true,
    UseUnifiedTopology: true,
})
.then(() => console.log('Our Database is connected'))
.catch(err => console.log(err));
