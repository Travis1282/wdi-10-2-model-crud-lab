const 	express = require('express'),
		bodyParser = require('body-parser'),
		app = express();


app.use(bodyParser.urlencoded({
	extended: false
}));

require('./db/db.js')

const storesController = require('./controllers/storeController');
app.use('/stores', storesController);


app.listen(3000, ()=>{
	console.log('running on 3000')
})

