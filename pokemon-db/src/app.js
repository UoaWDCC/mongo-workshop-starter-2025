import "dotenv/config";
import mongoose from "mongoose";
import { PokemonSpecies, Trainer } from "./schema.js";

// Connect to MongoDB
await mongoose.connect(process.env.DB_URL);
console.log("Connected to MongoDB!");

// const species = await PokemonSpecies.find({types: {$in: ["Water", "Fire"]}});
// console.log("Pokémon species:", species);

// const pikachu = await PokemonSpecies.findById("000000000000000000000001");
// console.log("Pikachu:", pikachu);

// const species = await PokemonSpecies.find();
// console.log("Pokemon Species:", species);

// const trainers = await Trainer.find({age: {$lte: 15}});
// console.log("Trainers:", trainers);

// console.log(trainers[0].team);

const ash = await Trainer.findOne({name: "Ash Ketchum"}).populate("team.species");
console.log("Ash's team:", ash.team);

// Disconnect when done
await mongoose.disconnect();
console.log("Done!");