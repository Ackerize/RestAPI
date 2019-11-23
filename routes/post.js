const express = require('express')
const router = express.Router();
const postController = require('../controllers/PostController');

router.get('/search/:search', postController.find);
router.get('/:id', postController.getOne);
router.get('/', (req, res, next) => {
                req.listPost = true;
                next()
            }, postController.find);

router.post('/', postController.create)
router.put('/:id', postController.update);

router.delete('/:id', postController.delete);
module.exports = router;
