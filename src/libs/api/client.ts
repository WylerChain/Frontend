import axios, { AxiosInstance, InternalAxiosRequestConfig } from "axios";
import { API_VERSIONS, ApiVersion, DEFAULT_API_URL } from "./constant";
// import {
//   getLatestIdToken,
//   initFirebaseAuth,
// } from "@/utils/firebaseAuthGetIdToken";
import chain from "@/services/fixtures/chain.json";

const MOCKED_DATA: Record<string, any> = {
  chain,
};

const isUrlMocked = (url: string) => url in MOCKED_DATA;

class MockError extends Error {
  public mockData: any;
  public config: InternalAxiosRequestConfig | undefined;

  constructor(mockData?: any, config?: InternalAxiosRequestConfig) {
    super();

    this.mockData = mockData;
    this.config = config;
  }
}

const getMockError = (config: InternalAxiosRequestConfig) => {
  const mockError = new MockError(
    config.url ? MOCKED_DATA[config.url] : undefined,
    config
  );
  return Promise.reject(mockError);
};

const isMockError = (error: Error) => error instanceof MockError;

const getMockResponse = (mockError: MockError) => {
  const { mockData, config } = mockError;

  return Promise.resolve({
    data: mockData,
    status: 200,
    statusText: "OK",
    headers: {},
    config,
  });
};

/**
 * Description If user is already logged in, get the latest id token
 * @returns {Promise<void>}
 */
const getIdToken = async () => {
  // const user = await initFirebaseAuth();
  // if (user == undefined) return;

  // const latestIdToken = await getLatestIdToken(user);
  // return latestIdToken;
  return "";
};

/**
 * Description Set the idToken required for authentication in the Authorization header
 */
const setAuthorizationHeader = async (config: InternalAxiosRequestConfig) => {
  const token = await getIdToken();
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  } else {
    // NOTE: To prevent only the idToken from remaining when logging out, leave it empty if there is no idToken.
    config.headers["Authorization"] = "";
  }
  return config;
};

const initializeAxiosInstance = ({
  baseURL = DEFAULT_API_URL,
  apiVersion = API_VERSIONS.v1,
}: {
  baseURL?: string | undefined;
  apiVersion?: ApiVersion;
}): AxiosInstance => {
  const axiosInstance = axios.create({
    baseURL: `${baseURL}/${apiVersion}`,
  });

  axiosInstance.interceptors.request.use(
    async (config) => {
      if (
        process.env.MOCK_FIXTURES === "enabled" &&
        config.url &&
        isUrlMocked(config.url)
      ) {
        return getMockError(config);
      }

      await setAuthorizationHeader(config);
      return config;
    },
    (error) => Promise.reject(error)
  );
  axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
      if (isMockError(error)) {
        return getMockResponse(error);
      }
      return Promise.reject(error);
    }
  );

  return axiosInstance;
};

export default initializeAxiosInstance;
