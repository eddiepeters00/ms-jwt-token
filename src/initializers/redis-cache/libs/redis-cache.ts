export default function makeRedisClient({ Redis, logger }) {
  return Object.freeze({
    setCache,
    getCache,
  });

  async function setCache({ data, cacheKey, cacheConfig }) {
    try {
      const redisClient = await createClient({ cacheConfig });

      const inputData = JSON.stringify(data);
      console.log(inputData);
      await redisClient.set(cacheKey, inputData);

      console.log(typeof cacheConfig.ttl);
      redisClient.expire(cacheKey, cacheConfig.ttl);

      redisClient.quit();

      return;
    } catch (err) {
      logger.error(err);
      throw err;
    }
  }

  async function getCache({ cacheKey, cacheConfig }) {
    try {
      const redisClient = await createClient({ cacheConfig });
      const results = await redisClient.get(cacheKey);
      redisClient.quit();

      return results;
    } catch (err) {
      logger.error(err);
      throw err;
    }
  }

  async function createClient({ cacheConfig }) {
    const client = await Redis.createClient({ cacheConfig })
      .on("error", (err) => logger.error("Redis Client Error", err))
      .connect();

    return client;
  }
}
