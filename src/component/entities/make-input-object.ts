export default function makeInputObjectFactory({ md5, sanitize }) {
  return Object.freeze({ inputObj });
  function inputObj({ params, errorMsgs }) {
    const { token } = params;

    return Object.freeze({
      token: () => checkToken({ token, errorMsgs }),
    });
  }

  function checkToken({ token, errorMsgs }) {
    checkRequiredParam({
      param: token,
      paramName: "token",
      errorMsgs,
    });

    return token;
  }

  function checkRequiredParam({ param, paramName, errorMsgs }) {
    if (!param || param === "")
      throw new Error(`${errorMsgs.MISSING_PARAMETER}${paramName}`);
    return;
  }
}
