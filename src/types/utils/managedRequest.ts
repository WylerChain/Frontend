/** 初期状態を表現する型 */
type Init = undefined;

/** リクエスト中を表現する型 */
type Loading = { isLoading: true; type: "loading" };

/** リクエスト成功を表現する型 */
type Success<T> = {
  isLoading: false;
  data: T;
  error: undefined;
  type: "success";
};

/** リクエスト失敗を表現する型 */
type Fail = { isLoading: false; data: undefined; error: string; type: "fail" };

/** リクエスト状態を表現する型 */
export type RequestManageState<T> = Init | Loading | Success<T> | Fail;

/**
 * Init型を作る
 * @returns Init型を表現するオブジェクト
 */
const createInitState = (): Init => {
  return undefined;
};

/**
 * Loading型を作る
 * @returns Loading型を表現するオブジェクト
 */
export const createLoadingState = (): Loading => {
  return { isLoading: true, type: "loading" };
};

/**
 * Success型を作る
 * @param data データ
 * @returns 成功型を表現するオブジェクト
 */
export const createSuccessState = <T>(data: T): Success<T> => {
  return { isLoading: false, data, error: undefined, type: "success" };
};

/**
 * Fail型を作る
 * @param message エラーメッセージ
 * @returns Fail型を表現するオブジェクト
 */
export const createFailState = (message: string): Fail => {
  return { isLoading: false, data: undefined, error: message, type: "fail" };
};

export const isInitState = <T>(data: RequestManageState<T>): data is Init => {
  return data === undefined;
};

export const isLoadingState = <T>(
  data: RequestManageState<T>
): data is Loading => {
  return !isInitState(data) && data.isLoading;
};

export const isSuccessState = <T>(
  data: RequestManageState<T>
): data is Success<T> => {
  return !isInitState(data) && !isLoadingState(data) && data.data !== undefined;
};

export const isFailState = <T>(data: RequestManageState<T>): data is Fail => {
  return (
    !isInitState(data) && !isLoadingState(data) && data.error !== undefined
  );
};
