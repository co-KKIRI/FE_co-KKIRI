import { authAddress } from "../address";
import { apiRequest } from "../axios";

const { google } = authAddress;

export const googleLogin = (code: string) => apiRequest("post", google.redirect(code));
