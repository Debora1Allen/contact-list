import mongoose, { Document, Schema } from 'mongoose';

export interface IContact {
  type: string;
  value: string;
}

export interface IPerson extends Document {
  name: string;
  contacts: IContact[];
}

const ContactSchema: Schema = new Schema({
  type: { type: String, required: true },
  value: { type: String, required: true },
});

const PersonSchema: Schema = new Schema({
  name: { type: String, required: true },
  contacts: [ContactSchema],
});

export const Person = mongoose.model<IPerson>('Person', PersonSchema);
