import * as Redis from "redis";
import { logger } from "../../libs/logger";
import cacheManager from "./libs/redis-cache";

const setCache = ({ data, cacheKey, cacheConfig }) =>
  cacheManager({ Redis, logger }).setCache({ data, cacheKey, cacheConfig });

const getCache = ({ cacheKey, cacheConfig }) =>
  cacheManager({ Redis, logger }).getCache({ cacheKey, cacheConfig });

export { setCache, getCache };
