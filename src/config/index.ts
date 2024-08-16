const APP_NAME = process.env.NODE_NAME;
const NODE_ENV = process.env.NODE_ENV;
const NODE_HOSTNAME = process.env.NODE_HOSTNAME;
const NODE_PORT = process.env.NODE_PORT;
const JWT_SECRET = process.env.JWT_TOKEN_SECRET;

const ERROR_MSG = {
  post: {
    MISSING_PARAMETER: "missing parameter: ",
    EXISTING_USER: "user already exists",
    INVALID_EMAIL: "invalid email",
  },
};

export default Object.freeze({
  APP_NAME,
  ERROR_MSG,
  JWT_SECRET,
  NODE_ENV,
  NODE_HOSTNAME,
  NODE_PORT,
});
