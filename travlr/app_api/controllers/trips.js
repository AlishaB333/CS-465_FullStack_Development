const mongoose = require('mongoose');
const Trip = require('../models/travlr'); // Register model
const Model = mongoose.model('trips');

// GET: /trips - lists all the trips
const tripsList = async (req, res) => {
    try {
        const q = await Model.find({}).exec();
        if (!q || q.length === 0) {
            return res.status(404).json({ message: 'No trips found.' });
        }
        return res.status(200).json(q);
    } catch (err) {
        return res.status(500).json({ message: err.message || err });
    }
};

// GET: /trips/:tripCode - lists a single trip
const tripsFindByCode = async (req, res) => {
    try {
        const q = await Model.findOne({ code: req.params.tripCode }).exec();
        if (!q) {
            return res.status(404).json({ message: 'Trip not found.' });
        }
        return res.status(200).json(q);
    } catch (err) {
        return res.status(500).json({ message: err.message || err });
    }
};

// POST: /trips - adds a new trip
const tripsAddTrip = async (req, res) => {
    try {
        const newTrip = new Trip({
            code: req.body.code,
            name: req.body.name,
            length: req.body.length,
            start: req.body.start,
            resort: req.body.resort,
            perPerson: req.body.perPerson,
            image: req.body.image,
            description: req.body.description,
        });

        const q = await newTrip.save();
        if (!q) {
            return res.status(400).json({ message: 'Trip could not be created.' });
        }
        return res.status(201).json(q);
    } catch (err) {
        return res.status(500).json({ message: err.message || err });
    }
};

// PUT: /trips/:tripCode - updates an existing trip
const tripsUpdateTrip = async (req, res) => {
    try {
        const q = await Model.findOneAndUpdate(
            { code: req.params.tripCode },
            {
                code: req.body.code,
                name: req.body.name,
                length: req.body.length,
                start: req.body.start,
                resort: req.body.resort,
                perPerson: req.body.perPerson,
                image: req.body.image,
                description: req.body.description,
            },
            { new: true, runValidators: true }
        ).exec();

        if (!q) {
            return res.status(404).json({ message: 'Trip not found.' });
        }
        return res.status(200).json(q);
    } catch (err) {
        return res.status(500).json({ message: err.message || err });
    }
};

module.exports = {
    tripsList,
    tripsFindByCode,
    tripsAddTrip,
    tripsUpdateTrip
};