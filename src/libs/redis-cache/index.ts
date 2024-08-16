import {
  setCache as makeSetCache,
  getCache as makeGetCache,
} from "../../initializers/redis-cache";
import redisCache from "./libs/redis-cache";

const setCache = ({ data, cacheKey, cacheConfig }) =>
  redisCache({ makeSetCache, makeGetCache }).setCache({
    data,
    cacheKey,
    cacheConfig,
  });

const getCache = ({ cacheKey, cacheConfig }) =>
  redisCache({ makeGetCache, makeSetCache }).getCache({
    cacheKey,
    cacheConfig,
  });

export { setCache, getCache };
