/**A type that represents the initial state */
type Init = undefined;

/** Type that represents request status */
type Loading = { isLoading: true; type: "loading" };

/** Type that represents request success */
type Success<T> = {
  isLoading: false;
  data: T;
  error: undefined;
  type: "success";
};

/** Type representing request failure */
type Fail = { isLoading: false; data: undefined; error: string; type: "fail" };

/** A type that represents the request state */
export type RequestManageState<T> = Init | Loading | Success<T> | Fail;

/**
 * Create an Init type
 * @returns An object representing the Init type
 */
const createInitState = (): Init => {
  return undefined;
};

/**
 * Create a Loading type
 * @returns An object representing the Loading type
 */
export const createLoadingState = (): Loading => {
  return { isLoading: true, type: "loading" };
};

/**
 * Create Success type
 * @param data data
 * @returns An object representing the success type
 */
export const createSuccessState = <T>(data: T): Success<T> => {
  return { isLoading: false, data, error: undefined, type: "success" };
};

/**
 * Create a Fail type
 * @param message Error message
 * @returns An object representing the Fail type
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
