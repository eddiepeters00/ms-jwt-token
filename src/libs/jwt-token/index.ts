const jwt = require("jsonwebtoken");
import makeJWTTokenHandler from "./libs/token-handler";

const decodeJWT = ({ token }) =>
  makeJWTTokenHandler({ jwt }).JWTdecoder({ token });
const codeJWT = ({ data, secret }) =>
  makeJWTTokenHandler({ jwt }).JWTCoder({ data, secret });

export { decodeJWT, codeJWT };
