// envUtils.ts
import env from "react-dotenv";

export const getApiUrl = (): string => {
  return env.API_URL;
};

