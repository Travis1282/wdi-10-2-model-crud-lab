const 	express = require('express'),
		router = express.Router(),
		Store = require('../models/store.js');


router.get('/',(req, res) => {
	Store.find({}, (err, foundStores) => {
			res.render('store/index.ejs', {stores:foundStores})
	})
});



router.post('/', (req, res) => {
	// console.log(req.body)
	Store.create(req.body, (err, created) => {
		res.redirect('/stores')
		console.log(created)
	})
});

router.get('/new', (req, res)=> {
	res.render('store/new.ejs')
});

router.get('/:id', (req, res) =>{
	Store.findById(req.params.id, (err, foundStore) => {
		res.render('store/show.ejs', {store: foundStore})
	})

});


router.get('/:id/edit', (req, res) => {
	Store.findById(req.params.id, (err, foundStore)=> {
		// console.log(foundStore)
			res.render('store/show.ejs', {store: foundStore})
	})
});

router.put('/:id', (req,res) => {
	Store.findByIdAndUpdate(req.params.id, req.body, (err, storeUpdate) =>{
		res.redirect('/stores')

	})

})



module.exports = router;