const express = require('express');
const Pet = require('../db/models/pet');
const router = express.Router();

// Get all pets
router.get('/pets', async (req, res) => {
  try {
    const pets = await Pet.find();
    res.json({ pets });
  } catch (error) {
    res.sendStatus(404);
  }
});

// Add new pet
router.post('/pets', async (req, res) => {
  try {
    const existingPet = await Pet.find({
      name: req.body.name,
      animal: req.body.animal,
    });

    if (existingPet.length) {
      throw new Error(
        'Pet already exists. Please update existing records instead.'
      );
    }

    const newPet = new Pet({
      ...req.body,
    });
    await newPet.save();
    res.sendStatus(200);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Update a pet record
router.put('/pets', async (req, res) => {
  try {
    const pet = await Pet.find({
      animal: req.body.animal,
      name: req.body.name,
    });

    if (!pet.length) {
      throw new Error(
        'No pet found. Please check your information and try again.'
      );
    }

    const filter = { animal: req.body.animal, name: req.body.name };
    await Pet.findOneAndUpdate(filter, req.body);
    res.status(200).send(`${req.body.name}'s record updated successfully!`);
  } catch (error) {
    res
      .status(404)
      .send(
        `Error updating records for "${req.body.name}". Please check your information and try again.`
      );
  }
});

// Remove a pet from database (RIP)
router.delete('/pets', async (req, res) => {
  try {
    const pet = await Pet.find({
      animal: req.body.animal,
      name: req.body.name,
    });

    if (!pet.length) {
      throw new Error('Pet not found. Please check your data and try again.');
    }

    await Pet.deleteOne({ animal: req.body.animal, name: req.body.name });
    res
      .status(200)
      .send(`We're sorry for your loss of your beloved ${req.body.name}`);
  } catch (error) {
    res.status(404).send('Error removing your pet from our database');
  }
});

module.exports = router;
