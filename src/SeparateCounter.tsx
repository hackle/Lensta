import React from "react";
import { State } from "./state";
import { withState } from "./stateProvider";

type Props = { counter: number };
const SeparateCounter = (props: Props) => <blockquote>quite separately, the counter is { props.counter }</blockquote>;

export default withState(React.memo(SeparateCounter), (state: State) => ({ counter: state.counter }));