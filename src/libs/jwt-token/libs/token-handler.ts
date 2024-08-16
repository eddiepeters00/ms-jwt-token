export default function makeJWTTokenHandler({ jwt }) {
  return Object.freeze({ JWTCoder, JWTdecoder });

  function JWTCoder({ data, secret }) {
    console.log(data);
    const codedToken = jwt.sign({ data }, secret);
    return codedToken;
  }

  function JWTdecoder({ token }) {
    let parts = token.split(" ");

    if (parts.length !== 2) {
      throw new Error("unauthorized");
    }

    let scheme = parts[0];
    let credentials = parts[1];

    if (!/^Bearer$/i.test(scheme)) {
      throw new Error("unauthorized");
    }

    let decoded = jwt.decode(credentials, process.env.JWT_SECRET);

    if (!decoded) throw new Error("unauthorized");

    return decoded;
  }
}
