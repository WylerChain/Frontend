const ACCOUNT_STATUS_BEFORE_REVIEW = "before_review" as const;
const ACCOUNT_STATUS_UNDER_REVIEW = "under_review" as const;
const ACCOUNT_STATUS_APPROVED = "approved" as const;
const ACCOUNT_STATUS_REJECTED = "rejected" as const;

export const ACCOUNT_STATUS_MAP = {
  beforeReview: ACCOUNT_STATUS_BEFORE_REVIEW,
  underReview: ACCOUNT_STATUS_UNDER_REVIEW,
  approved: ACCOUNT_STATUS_APPROVED,
  rejected: ACCOUNT_STATUS_REJECTED,
};

const ACCOUNT_STATUS_TYPE_REQUIRED_SIGNED_IN = "requiredSignedIn" as const;
const ACCOUNT_STATUS_TYPE_REQUIRED_VERIFY_EMAIL = "requiredVerifyEmail" as const;
const ACCOUNT_STATUS_TYPE_REQUIRED_PROFILE = "requiredProfile" as const;
const ACCOUNT_STATUS_TYPE_REQUIRED_CERTIFICATES = "requiredCertificates" as const;
const ACCOUNT_STATUS_TYPE_REQUIRED_ACCOUNT_INFO_SUBMISSION =
  "requiredAccountInfoSubmission" as const;
const ACCOUNT_STATUS_TYPE_REQUIRED_REVIEW_APPROVAL = "requiredReviewApproval" as const;
const ACCOUNT_STATUS_TYPE_REQUIRED_ACCOUNT_INFO_RE_SUBMISSION =
  "requiredAccountInfoReSubmission" as const;
const ACCOUNT_STATUS_TYPE_COMPLETED = "completed" as const;

export const ACCOUNT_STATUS_TYPE_MAP = {
  requiredSignedIn: ACCOUNT_STATUS_TYPE_REQUIRED_SIGNED_IN,
  requiredVerifyEmail: ACCOUNT_STATUS_TYPE_REQUIRED_VERIFY_EMAIL,
  requiredProfile: ACCOUNT_STATUS_TYPE_REQUIRED_PROFILE,
  requiredCertificates: ACCOUNT_STATUS_TYPE_REQUIRED_CERTIFICATES,
  requiredAccountInfoSubmission: ACCOUNT_STATUS_TYPE_REQUIRED_ACCOUNT_INFO_SUBMISSION,
  requiredReviewApproval: ACCOUNT_STATUS_TYPE_REQUIRED_REVIEW_APPROVAL,
  requiredAccountInfoReSubmission: ACCOUNT_STATUS_TYPE_REQUIRED_ACCOUNT_INFO_RE_SUBMISSION,
  completed: ACCOUNT_STATUS_TYPE_COMPLETED,
};

export type AccountStatusType =
  (typeof ACCOUNT_STATUS_TYPE_MAP)[keyof typeof ACCOUNT_STATUS_TYPE_MAP];
