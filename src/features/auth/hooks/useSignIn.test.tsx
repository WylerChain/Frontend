import { act } from "@testing-library/react-hooks";
import { renderHook, waitFor } from "@testing-library/react";
import { useSignIn } from "./useSignIn";
import { signInWithEmailAndPassword } from "firebase/auth";

jest.mock("firebase/auth");

const mockedSignInithEmailAndPassword = signInWithEmailAndPassword as jest.Mock;

describe("useSignIn", () => {
  beforeEach(() => {
    mockedSignInithEmailAndPassword.mockClear();
  });

  it("should handle successful sign in", async () => {
    // Arrange: サクセス時のモックの設定
    mockedSignInithEmailAndPassword.mockResolvedValue({ user: {} });

    const { result } = renderHook(() => useSignIn());

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

  it("should handle sign in failure", async () => {
    // Arrange: エラー時のモックの設定
    const error = new Error("Failed to sign in");
    mockedSignInithEmailAndPassword.mockRejectedValue(error);

    const { result } = renderHook(() => useSignIn());

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
