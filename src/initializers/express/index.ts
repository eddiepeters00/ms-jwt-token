import * as express from "express";
import * as compression from "compression";
import * as cors from "cors";
import * as helmet from "helmet";
import createServer from "./libs/express";
import { routes } from "../../component/controller";

const app = express();
const json = express.json;
const urlencoded = express.urlencoded;

const server = ({ hostname, port }) =>
  createServer({
    json,
    app,
    compression,
    cors,
    helmet,
    urlencoded,
  }).server({ hostname, port, routes });

export { server };
