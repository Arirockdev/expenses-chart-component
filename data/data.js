import { Expense } from '../models/Expense.js'
import data from '../data.json' with { type: "json" };



export const expense = data.map((dato) => new Expense(dato.day, dato.amount))