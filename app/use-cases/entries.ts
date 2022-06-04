import { isValidObjectId } from "mongoose"
import { db } from "../datasources";
import { Entry, IEntry } from "../models"

export const getEntryId = async (id: string): Promise<IEntry | null> =>{
  if (!isValidObjectId(id)) return null;

  await db.connect();
  const entry = await Entry.findById(id).lean();
  await db.disconnect();

  return JSON.parse(JSON.stringify(entry));
}