/* import Commerce from "@chec/commerce.js";

export const commerce = new Commerce(
  process.env.REACT_APP_CHEC_PUBLIC_KEY,
  true
); */

import CommerceSDK from "@chec/commerce.js";

const commerce = new CommerceSDK(process.env.NEXT_PUBLIC_CHEC_PUBLIC_API_KEY);

export default commerce;