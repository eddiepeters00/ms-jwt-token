export default function createGet({
  makeInputObj,
  findDocuments,
  makeOutputObj,
  logger,
}) {
  return Object.freeze({ get });

  async function get({ params, dbConfig, errorMsgs }) {
    logger.info(`[USE-CASE][GET] Reading from db - START!`);
    Object.keys(params).forEach(
      (key) => params[key] === undefined && delete params[key]
    );

    console.log(params);
    const passwordUsernameHash = params.userNamePasswordHash;

    if (Object.values(params).length) {
      const userFactory = makeInputObj({ params });

      params = {
        usernameHash: !params.username ? undefined : userFactory.usernameHash(),
        emailHash: !params.email ? undefined : userFactory.emailHash(),
        usernamePasswordHash: !params.usernamePasswordHash
          ? undefined
          : userFactory.usernamePasswordHash(),
      };

      Object.keys(params).forEach(
        (key) => params[key] === undefined && delete params[key]
      );
    }

    // 'and' query
    const dbResults = await findDocuments({ query: params, dbConfig });

    //Validate password
    console.log("DB-results", dbResults);
    if (dbResults[0].usernamePasswordHash !== passwordUsernameHash)
      throw new Error("Invalid password");

    const results = dbResults.map((post) => {
      const resultsObj = makeOutputObj({ params: post });
      return {
        username: resultsObj.username(),
        email: resultsObj.email(),
        created: resultsObj.created(),
        modified: resultsObj.modified(),
      };
    });

    return results;
  }
}
