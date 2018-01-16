const 	mongoose = require('mongoose')
		

const storeSchema = new mongoose.Schema({
	name: {type:String, required: true },
	products:[{}]

})

const Store = mongoose.model('store', storeSchema);

module.exports = Store;