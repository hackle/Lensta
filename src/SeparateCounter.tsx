import { State } from "./state";
import { withState } from "./store";

type Props = { counter: number };
const SeparateCounter = (props: Props) => <blockquote>quite separately, the counter is { props.counter }</blockquote>;

export default withState(SeparateCounter, (state: State) => ({ counter: state.counter }));