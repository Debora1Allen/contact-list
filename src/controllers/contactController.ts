import { Request, Response } from 'express';
import { Person, IPerson } from '../models/personModel';

export const createPerson = async (req: Request, res: Response): Promise<Response> => {
  try {
    const person: IPerson = new Person(req.body);
    await person.save();
    return res.status(201).json(person);
  } catch (error) {
    return res.status(500).json({ error: 'Failed to create person' });
  }
};

export const getAllPersons = async (_req: Request, res: Response): Promise<Response> => {
  try {
    const persons = await Person.find();
    return res.status(200).json(persons);
  } catch (error) {
    return res.status(500).json({ error: 'Failed to fetch persons' });
  }
};

export const updatePerson = async (req: Request, res: Response): Promise<Response> => {
  try {
    const person = await Person.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!person) return res.status(404).json({ error: 'Person not found' });
    return res.status(200).json(person);
  } catch (error) {
    return res.status(500).json({ error: 'Failed to update person' });
  }
};

export const deletePerson = async (req: Request, res: Response): Promise<Response> => {
  try {
    const person = await Person.findByIdAndDelete(req.params.id);
    if (!person) return res.status(404).json({ error: 'Person not found' });
    return res.status(200).json({ message: 'Person deleted' });
  } catch (error) {
    return res.status(500).json({ error: 'Failed to delete person' });
  }
};
