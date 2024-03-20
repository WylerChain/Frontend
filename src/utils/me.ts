import { MeState } from "@/hooks/useGetMe";
import { ACCOUNT_STATUS_MAP, ACCOUNT_STATUS_TYPE_MAP } from "@/constants/accounts";
import { isFailState, isLoadingState, isSuccessState } from "@/types/utils/managedRequest";

export const meStateType = (meState: MeState) => {
  if (isLoadingState(meState)) {
    return undefined;
  }

  if (isFailState(meState)) {
    return ACCOUNT_STATUS_TYPE_MAP.requiredSignedIn;
  }

  if (isSuccessState(meState)) {
    const me = meState.data;
    if (!me.email_verified) {
      return ACCOUNT_STATUS_TYPE_MAP.requiredVerifyEmail;
    }

    if (!me.profile) {
      return ACCOUNT_STATUS_TYPE_MAP.requiredProfile;
    }

    if (!me.has_base_certificates) {
      return ACCOUNT_STATUS_TYPE_MAP.requiredCertificates;
    }

    switch (me.status) {
      case ACCOUNT_STATUS_MAP.beforeReview:
        return ACCOUNT_STATUS_TYPE_MAP.requiredAccountInfoSubmission;
      case ACCOUNT_STATUS_MAP.underReview:
        return ACCOUNT_STATUS_TYPE_MAP.requiredReviewApproval;
      case ACCOUNT_STATUS_MAP.rejected:
        return ACCOUNT_STATUS_TYPE_MAP.requiredAccountInfoReSubmission;
      case ACCOUNT_STATUS_MAP.approved:
        return ACCOUNT_STATUS_TYPE_MAP.completed;
      default:
        // TODO: bug snagに通知を送る
        throw new Error(`${me.status} is invalid me status`);
    }
  }
};
