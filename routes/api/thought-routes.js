const router = require('express').Router();
const {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought
} = require('../../controllers/thought-controller');

// /api/pizzas
router
  .route('/')
  .get(getAllThoughts)
  .post(createThought);

// /api/pizzas/:id
router
  .route('/:id')
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

router.route('/:thoughtId/reactions/')
   .post(addReaction)
   .delete(deleteReaction)

module.exports = router;