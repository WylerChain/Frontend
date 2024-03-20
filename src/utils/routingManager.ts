import {
  ACCOUNT_STATUS_TYPE_MAP,
  AccountStatusType,
} from "@/constants/accounts";

// NOTE: backend側のUUIDの正規表現
// 0~9とa~fの英数字の文字列がそれぞれ8-4-4-4-12文字の並びになっていることを保証
const UUID_RAGEXP = `[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}`;

const BASE_ALLOWED_PATHS = [
  new RegExp(`^(\/)$`),
  new RegExp(`^(\/auctions)$`),
  new RegExp(`^\/auctions\/${UUID_RAGEXP}$`),
  new RegExp(`^(\/auth\/action)$`),
  new RegExp(`^(\/auth\/reset-password)$`),
] as const;

/**
 * ユーザーの状態によってアクセス可能なパスと、リダイレクト先のパスを管理する
 */
export const ROUTING_MANAGE_MAP = {
  // sign inが必要（認証未完了）
  requiredSignedIn: {
    value: ACCOUNT_STATUS_TYPE_MAP.requiredSignedIn,
    allowedPaths: [
      ...BASE_ALLOWED_PATHS,
      new RegExp(`^(\/auth\/sign-in)$`),
      new RegExp(`^(\/auth\/sign-up)$`),
    ],
    redirectPath: "/auth/sign-in",
  },
  // email検証が必要（認証未完了）
  requiredVerifyEmail: {
    value: ACCOUNT_STATUS_TYPE_MAP.requiredVerifyEmail,
    allowedPaths: [
      ...BASE_ALLOWED_PATHS,
      new RegExp(`^(\/auth\/required-verify-email)$`),
    ],
    redirectPath: "/auth/required-verify-email",
  },
  // profile登録が必要（アカウント登録未完了）
  requiredProfile: {
    value: ACCOUNT_STATUS_TYPE_MAP.requiredProfile,
    allowedPaths: [
      ...BASE_ALLOWED_PATHS,
      new RegExp(`^(\/account\/agreement)$`),
      new RegExp(`^(\/account\/entry)$`),
    ],
    redirectPath: "/account/agreement",
  },
  // 個人証明書が必要（アカウント登録未完了）
  requiredCertificates: {
    value: ACCOUNT_STATUS_TYPE_MAP.requiredCertificates,
    allowedPaths: [
      ...BASE_ALLOWED_PATHS,
      new RegExp(`^(\/account\/agreement)$`),
      new RegExp(`^(\/account\/entry)$`),
      new RegExp(`^(\/account\/certificate)$`),
    ],
    redirectPath: "/account/certificate",
  },
  // アカウント情報の提出が必要（アカウント登録未完了）
  requiredAccountInfoSubmission: {
    value: ACCOUNT_STATUS_TYPE_MAP.requiredAccountInfoSubmission,
    allowedPaths: [
      ...BASE_ALLOWED_PATHS,
      new RegExp(`^(\/account\/agreement)$`),
      new RegExp(`^(\/account\/entry)$`),
      new RegExp(`^(\/account\/certificate)$`),
      new RegExp(`^(\/account\/confirm)$`),
    ],
    redirectPath: "/account/confirm",
  },
  // レビュー承認が必要（承認未完了）
  requiredReviewApproval: {
    value: ACCOUNT_STATUS_TYPE_MAP.requiredReviewApproval,
    allowedPaths: [...BASE_ALLOWED_PATHS],
    // TODO: レビュー承認が必要な場合の遷移先は要確認
    redirectPath: "/",
  },
  // 再度アカウント情報の提出が必要（アカウント登録未完了）
  requiredAccountInfoReSubmission: {
    value: ACCOUNT_STATUS_TYPE_MAP.requiredAccountInfoReSubmission,
    allowedPaths: [...BASE_ALLOWED_PATHS],
    // TODO: レビュー拒否された場合の遷移先は要確認
    redirectPath: "/",
  },
  // 完了
  completed: {
    value: ACCOUNT_STATUS_TYPE_MAP.completed,
    allowedPaths: [...BASE_ALLOWED_PATHS],
    redirectPath: "/",
  },
};

/**
 * ユーザーの状態と現在のパスを元にして、アクセス可能なパスかどうかを判定する
 * @param {AccountStatusTypes} status
 * @param pathname
 * @return {boolean} isAllowed
 * @return {string} redirectPath
 */
export const routingManageResult = (
  status: AccountStatusType,
  pathname: string
) => {
  const routingManger = ROUTING_MANAGE_MAP[status];
  const isAllowed = routingManger.allowedPaths.some((allowedPath) =>
    allowedPath.test(pathname)
  );
  return {
    isAllowed,
    redirectPath: routingManger.redirectPath,
  };
};
