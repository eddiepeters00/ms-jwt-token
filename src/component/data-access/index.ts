import {
  insertOneDocument as makeInsertDocument,
  updateDocument as makeUpdateDocument,
  findDocuments as makeFindDocuments,
} from "../../libs/mongoDb";

import {
  setCache as makeSetCache,
  getCache as makeGetCache,
} from "../../libs/redis-cache";

import {
  codeJWT as makeCodeJWT,
  decodeJWT as makeDecodeJWT,
} from "../../libs/jwt-token";

const insertDocument = ({ document, dbConfig }) =>
  makeInsertDocument({ document, ...dbConfig });

const updateDocument = ({ query, values, dbConfig }) =>
  makeUpdateDocument({ query, values, ...dbConfig });

const findDocuments = ({ query, dbConfig }) =>
  makeFindDocuments({ query, ...dbConfig });

const setCache = ({ data, cacheKey, cacheConfig }) =>
  makeSetCache({ data, cacheKey, cacheConfig });

const getCache = ({ cacheKey, cacheConfig }) =>
  makeGetCache({ cacheKey, cacheConfig });

const codeJWT = ({ data, secret }) => makeCodeJWT({ data, secret });

export {
  findDocuments,
  insertDocument,
  updateDocument,
  setCache,
  getCache,
  codeJWT,
};
