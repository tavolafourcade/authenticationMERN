import { z } from 'zod'

export const createTaskSchema = z.object({
  title: z.string({
    required_error: 'Title is required'
  }).min(3).max(100),
  description: z.string({
    required_error: 'Description must be a string'
  }),
  date: z.string({
    required_error: 'Date is required'
  }).optional(),
})