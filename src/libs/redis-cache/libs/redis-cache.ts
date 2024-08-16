export default function makeRedisCache({ makeSetCache, makeGetCache }) {
  return Object.freeze({
    setCache,
    getCache,
  });

  function setCache({ data, cacheKey, cacheConfig }) {
    makeSetCache({ data, cacheKey, cacheConfig });
    return;
  }

  async function getKeys({ cacheKey, cacheConfig }) {
    // return makeGetCache({ cacheKey, cacheConfig});
  }

  function getCache({ cacheKey, cacheConfig }) {
    return makeGetCache({ cacheKey, cacheConfig });
  }
}
