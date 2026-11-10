const Destination = require('../models/Destination');

// Add destination
exports.addDestination = async (req, res) => {
    try {
        const destination = await Destination.create(req.body);

        res.status(201).json({
            message: "Destination added successfully",
            destination
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all destinations
exports.getDestinations = async (req, res) => {
    try {
        const destinations = await Destination.find();

        res.json(destinations);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get destination by ID
exports.getDestinationById = async (req, res) => {
    try {
        const destination = await Destination.findById(req.params.id);

        if (!destination) {
            return res.status(404).json({
                message: "Destination not found"
            });
        }

        res.json(destination);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update destination
exports.updateDestination = async (req, res) => {
    try {
        const destination = await Destination.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!destination) {
            return res.status(404).json({
                message: "Destination not found"
            });
        }

        res.json({
            message: "Destination updated successfully",
            destination
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete destination
exports.deleteDestination = async (req, res) => {
    try {
        const destination = await Destination.findByIdAndDelete(
            req.params.id
        );

        if (!destination) {
            return res.status(404).json({
                message: "Destination not found"
            });
        }

        res.json({
            message: "Destination deleted successfully"
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};