export default function createAuth({
  makeInputObj,
  findDocuments,
  insertDocument,
  get,
  logger,
}) {
  return Object.freeze({ auth });

  async function auth({ params, dbConfig, errorMsgs }) {
    let user;
    logger.info("[Auth][USE-CASE] Inserting object process - START!");
    const userFactory = makeInputObj({ params });

    user = {
      username: userFactory.username(),
      password: userFactory.password(),
      usernameHash: userFactory.usernameHash(),
      usernamePasswordHash: userFactory.usernamePasswordHash(),
    };
    // 'or' query
    const checkDuplicate = await findDocuments({
      query: {
        usernamePasswordHash: user.usernamePasswordHash,
      },
      dbConfig,
    });

    logger.info("[Auth][USE-CASE] Inserting object process - DONE!");

    const results = get({
      params: {
        username: user.username,
        userNamePasswordHash: user.usernamePasswordHash,
      },
    });

    return results;
  }
}
