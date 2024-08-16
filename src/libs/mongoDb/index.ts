import MongoDBClient from "../../initializers/mongoDb";
import makeDb from "./libs/mongodb";

const insertOneDocument = ({ document, dbName, dbUri, dbColl }) =>
  makeDb({ dbClient: MongoDBClient }).insertOneDocument({
    document,
    dbName,
    dbUri,
    dbColl,
  });

const findDocuments = ({ query, dbName, dbUri, dbColl }) =>
  makeDb({ dbClient: MongoDBClient }).findDocuments({
    query,
    dbName,
    dbUri,
    dbColl,
  });

const updateDocument = ({ query, values, dbName, dbUri, dbColl }) =>
  makeDb({ dbClient: MongoDBClient }).updateDocument({
    query,
    values: { $set: values },
    dbName,
    dbUri,
    dbColl,
  });

const dropDb = ({ test, dbName, dbUri, dbColl }) =>
  makeDb({ dbClient: MongoDBClient }).dropDb({ test, dbName, dbUri, dbColl });

export { insertOneDocument, findDocuments, updateDocument, dropDb };
