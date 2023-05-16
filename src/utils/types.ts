export type Diet = "carnivorous" | "herbivorous";

export interface Dino {
  name: string;
  imageUrl: string;
  diet: Diet;
  weightInKg: number;
  description: string;
}
