import { act } from "@testing-library/react-hooks";
import { renderHook, waitFor } from "@testing-library/react";
import { useResetPasswordRequest } from "./useResetPasswordRequest";
import { sendPasswordResetEmail } from "firebase/auth";

jest.mock("firebase/auth");

const mockedSendPasswordResetEmail = sendPasswordResetEmail as jest.Mock;

describe("useSignIn", () => {
  beforeEach(() => {
    mockedSendPasswordResetEmail.mockClear();
  });

  it("should handle successful sign in", async () => {
    // Arrange: サクセス時のモックの設定
    mockedSendPasswordResetEmail.mockResolvedValue(Promise.resolve());

    const { result } = renderHook(() => useResetPasswordRequest());

    // hooksの初期化を待つ
    await waitFor(() => {
      expect(result.current.request).toBeDefined();
    });

    // Act: サインアップリクエストの発行
    let requestResult;
    await act(async () => {
      requestResult = await result.current.request("test@example.com");
    });

    // Assert: 成功した状態を確認
    expect(requestResult).toEqual({
      type: "success",
      data: { status: "success" },
      error: undefined,
      isLoading: false,
    });
  });

  it("should handle sign in failure", async () => {
    // Arrange: エラー時のモックの設定
    const error = new Error("Failed to sign in");
    mockedSendPasswordResetEmail.mockRejectedValue(error);

    const { result } = renderHook(() => useResetPasswordRequest());

    // hooksの初期化を待つ
    await waitFor(() => {
      expect(result.current.request).toBeDefined();
    });

    // Act: サインアップリクエストの発行
    let requestResult;
    await act(async () => {
      requestResult = await result.current.request("test@example.com");
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
