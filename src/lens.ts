import { L } from "tsminilens";
import { State } from "./state";
const root = L<State>();

export const lens = {
    counter: root.to('counter'),
    deep: root.to('a', 'very', 'deep', 'value')
};