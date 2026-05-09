import { gql } from "@api-wrappers/api-core";
import { STAFF_BASIC_FRAGMENT } from "./entities/staff.js";

export const STAFF_FRAGMENT = gql`
  ${STAFF_BASIC_FRAGMENT}
  fragment StaffFragment on Staff {
    ...StaffBasicFragment
  }
`;
