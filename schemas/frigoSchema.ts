import { z } from "zod";

export const AddFoodSchema = z.object({
  nom: z.string().min(1, "Le nom est requis"),
  nombre: z.number().positive("La quantité à ajouter doit être positive"),
  date_expiration: z.coerce.date()
});

export type AddFoodInput = z.infer<typeof AddFoodSchema>;


export const RemoveFoodSchema = z.object({
  nom: z.string().min(1, "Le nom est requis"),
  nombre: z.number().positive("La quantité à retirer doit être positive")
});

export type RemoveFoodInput = z.infer<typeof RemoveFoodSchema>;
