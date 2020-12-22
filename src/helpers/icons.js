import { library } from "@fortawesome/fontawesome-svg-core";

import {
  faTrash,
  faSignOutAlt,
  faEdit,
  faSpinner,
  faFeather,
  faEnvelopeOpenText,
  faPhone,
  faThumbtack,
  faFingerprint
} from "@fortawesome/free-solid-svg-icons";

const Icons = () => {
  return library.add(faTrash, faSignOutAlt, faEdit, faSpinner, faFeather, faEnvelopeOpenText, faPhone, faThumbtack, faFingerprint);
}

export default Icons;