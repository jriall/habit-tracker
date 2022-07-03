import { IS_LOCAL_DEV } from "../common/constants/environment";

import { Habits } from "./Habits";
import { Users } from "./Users";

const BASE_URL = IS_LOCAL_DEV ? "http://localhost:3000" : "";

export const habitApi = new Habits({ baseURL: BASE_URL });
export const userApi = new Users({ baseURL: BASE_URL });
