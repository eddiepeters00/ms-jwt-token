export default function createPost({ makeInputObj, codeJWT, logger }) {
  return Object.freeze({ post });

  async function post({ params, JWTSecret, errorMsgs }) {
    try {
      const makeTokenFactory = makeInputObj({ params });

      const results = {
        token: makeTokenFactory.token(),
      };
      const token = codeJWT({ data: results, secret: JWTSecret });

      return token;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
}
