import { Schema, model, Document } from 'mongoose';

export interface IContact {
  type: string;
  value: string;
}

export interface IPerson extends Document {
  name: string;
  contacts: IContact[];
}

const contactSchema = new Schema<IContact>({
  type: { type: String, required: true },
  value: { type: String, required: true },
});

const personSchema = new Schema<IPerson>({
  name: { type: String, required: true },
  contacts: [contactSchema],
});

export const Person = model<IPerson>('Person', personSchema);
