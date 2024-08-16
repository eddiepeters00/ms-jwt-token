import createPost from "./post";
import config from "../../config";
import { logger } from "../../libs/logger";
import { makeInputObj } from "../entities";
import { codeJWT } from "../data-access";

const errorMsgs = config.ERROR_MSG;

const post = ({ params }) =>
  createPost({
    makeInputObj,
    codeJWT,
    logger,
  }).post({
    params,
    JWTSecret: config.JWT_SECRET,
    errorMsgs: errorMsgs.post,
  });

export { post };
