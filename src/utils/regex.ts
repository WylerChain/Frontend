/**
 ** メールアドレスの正規表現
 */
export const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

/**
 ** パスワードの正規表現
 * [文字数]
 *  - 8文字以上 16文字以内
 * [使用可能な文字列]
 *  - アルファベットの大文字・小文字
 *  - 数字
 *  - 記号(. / ? -)
 */
export const PASSWORD_REGEX = /^[a-zA-Z0-9.?/-]{8,16}$/;

/**
 * 電話番号の正規表現
 * @see https://www.oreilly.com/library/view/regular-expressions-cookbook/9781449327453/ch04s03.html
 */
export const FORMATTED_FULL_PHONE_NUMBER_REGEX = /^\+\d{1,3}\-\d{6,14}$/;
export const PHONE_NUMBER_REGEX = /^(?:[0-9]-?){5,13}[0-9]$/;
export const PHONE_CODE_REGEX = /^\+(?:[0-9]●?){1,3}$/;

/**
 * 日付
 * yyyy-mm-dd
 */
export const DATE_FORMAT_REGEX = /^\d{4}-\d{2}-\d{2}$/;
