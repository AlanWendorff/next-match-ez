import { EMatchType } from "@constants/enums";

export type TMatchType = EMatchType.HISTORIC | EMatchType.UPCOMING;

export type TBestOfMatches = {
  [key: number]: number;
};
