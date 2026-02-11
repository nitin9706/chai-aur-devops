import "dotenv/config";
import { MongoClient } from "mongodb";

// Initialize MongoDB client
const mongoClient = new MongoClient(process.env.MONGO_URI);

export { mongoClient };
