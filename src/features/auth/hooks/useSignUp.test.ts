import { act } from "@testing-library/react-hooks";
import { renderHook, waitFor } from "@testing-library/react";
import { useSignUp } from "./useSignUp";
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { postAccount } from "@/services/postAccount";

jest.mock("firebase/auth");
jest.mock("src/services/postAccount");

const mockedCreateUserWithEmailAndPassword = createUserWithEmailAndPassword as jest.Mock;
const mockedSendEmailVerification = sendEmailVerification as jest.Mock;
const mockedPostAccount = postAccount as jest.Mock;

describe("useSignUp", () => {
  beforeEach(() => {
    mockedCreateUserWithEmailAndPassword.mockClear();
    mockedSendEmailVerification.mockClear();
    mockedPostAccount.mockClear();
  });

  it("should handle successful sign up", async () => {
    // Arrange: サクセス時のモックの設定
    mockedCreateUserWithEmailAndPassword.mockResolvedValue({ user: {} });
    mockedSendEmailVerification.mockResolvedValue(undefined);
    mockedPostAccount.mockResolvedValue({});

    const { result } = renderHook(() => useSignUp());

    // hooksの初期化を待つ
    await waitFor(() => {
      expect(result.current.request).toBeDefined();
    });

    // Act: サインアップリクエストの発行
    let requestResult;
    await act(async () => {
      requestResult = await result.current.request("test@example.com", "password");
    });

    // Assert: 成功した状態を確認
    expect(requestResult).toEqual({
      type: "success",
      data: { status: "success" },
      error: undefined,
      isLoading: false,
    });
  });

  it("should handle sign up failure", async () => {
    // Arrange: エラー時のモックの設定
    const error = new Error("Failed to sign up");
    mockedCreateUserWithEmailAndPassword.mockRejectedValue(error);

    const { result } = renderHook(() => useSignUp());

    // hooksの初期化を待つ
    await waitFor(() => {
      expect(result.current.request).toBeDefined();
    });

    // Act: サインアップリクエストの発行
    let requestResult;
    await act(async () => {
      requestResult = await result.current.request("test@example.com", "password");
    });

    // Assert: エラー状態を確認
    expect(requestResult).toEqual({
      type: "fail",
      data: undefined,
      error: "An unexpected error has occurred.",
      isLoading: false,
    });
  });
});
