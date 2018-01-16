const 	mongoose = require('mongoose')
		

const storeSchema = new mongoose.Schema({
	name: {type:String, required: true },
	type: String
	//products:[{}]

})

const Store = mongoose.model('store', storeSchema);

module.exports = Store;