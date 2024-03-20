import axios, { AxiosInstance, InternalAxiosRequestConfig } from "axios";
import { API_VERSIONS, ApiVersion, DEFAULT_API_URL } from "./constant";
// import {
//   getLatestIdToken,
//   initFirebaseAuth,
// } from "@/utils/firebaseAuthGetIdToken";
import auctions from "@/services/fixtures/auctions.json";

const MOCKED_DATA: Record<string, any> = {
  auctions,
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
 * Description userがログイン済みの場合、最新のid Tokenを取得する
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
 * Description Authorizationヘッダーに認証に必要なidTokenをセットする
 */
const setAuthorizationHeader = async (config: InternalAxiosRequestConfig) => {
  const token = await getIdToken();
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  } else {
    // NOTE: ログアウト時にidTokenだけが残ってしまうのを防ぐため、idTokenがない場合は空にしておく
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
