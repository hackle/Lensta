import { L } from "tsminilens";
import { State } from "./state";
const root = L<State>();

/**
 * Your reducers/selectors should be made one-liners with lens
 * To set multiple fields in one combined expression, see [setSequentially](https://github.com/hackle/TsMiniLens/blob/master/lens.extension.ts)
 */
export const lens = {
    counter: root.to('counter'),
    deep: root.to('a', 'very', 'deep', 'value')
};