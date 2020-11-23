import type { DestroyMode } from "../../../../Enums/Modes/DestroyMode";
import { ISplit } from "./ISplit";

/**
 * @category Options
 * [[include:Destroy.md]]
 */
export interface IDestroy {
    mode: DestroyMode;
    split: ISplit;
}
