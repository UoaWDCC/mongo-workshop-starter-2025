import mongoose from "mongoose";

const Schema = mongoose.Schema;

const PokemonSpeciesSchema = new Schema({
  name: { type: String, required: true },
  dexNumber: { type: Number, required: true },
  types: [String],
  dexEntry: String
});

const TrainerSchema = new Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  gender: { type: String, enum: ["Male", "Female", "Nonbinary", "Other"] },
  team: [{ nickname: String, species: { type: Schema.Types.ObjectId, ref: "PokemonSpecies" } }]
});

export const PokemonSpecies = mongoose.model("PokemonSpecies", PokemonSpeciesSchema);
export const Trainer = mongoose.model("Trainer", TrainerSchema);
