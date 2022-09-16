import jwt from "jsonwebtoken";
import { JWT_SECRET } from '../utils'

const generarJWT = (id) => {
  return jwt.sign({ id }, JWT_SECRET, {
    expiresIn: "30d",
  });
};
export default generarJWT;
