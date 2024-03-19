import { RuleSet } from "styled-components";

export type VariantStyle<Variant extends string> = {
  [key in Variant]: RuleSet<object>;
};
