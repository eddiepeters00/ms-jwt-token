import { logger } from "../../libs/logger";
import { post } from "../use-case";
const baseUrl = "/api/v1/token";

const postEP = async (req, res) => {
  try {
    let results = await post({ params: req.body });
    res.json({ err: 0, data: results });
  } catch (err) {
    logger.error(`[EP][POST] ${req.method}: ${err.message}`);
    res.status(403);
    res.json({ err: 1, data: err.message });
  }
};

const routes = [{ path: `${baseUrl}/`, method: "post", component: postEP }];

export { routes };
