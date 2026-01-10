import { z } from "zod";

const MAX_UPLOAD_SIZE = 1024 * 1024 * 3; // 3MB
const ACCEPTED_FILE_TYPES = ["text/csv"];

export const restaurantDialogSchema = z.object({
  name: z
    .string()
    .min(1, "Restaurant name is required")
    .max(30, "Restaurant name must be less than 100 characters"),
  description: z
    .string()
    .nonempty("Description is required")
    .max(500, "Description must be less than 500 characters"),
  founder: z.string().nonempty("Founder is required"),
  administrator: z.string().nonempty("Administrator is required"),
  numberOfTables: z.number({
    message: "Number of tables is required"
  }),
  phone: z.string().nonempty("Phone number is required"),
  address: z.string().nonempty("Address is required"),
  menuCsv: z
    .instanceof(File, { message: "File is required." })
    .refine((file) => file.size <= MAX_UPLOAD_SIZE, {
      message: "File size must be less than 3MB."
    })
    .refine((file) => ACCEPTED_FILE_TYPES.includes(file.type), {
      message: "Only CSV files are accepted."
    })
});
