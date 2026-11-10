const express = require('express');

const router = express.Router();

const {
    addDestination,
    getDestinations,
    getDestinationById,
    updateDestination,
    deleteDestination
} = require('../controllers/destinationController');

router.post('/', addDestination);

router.get('/', getDestinations);

router.get('/:id', getDestinationById);

router.put('/:id', updateDestination);

router.delete('/:id', deleteDestination);

module.exports = router;