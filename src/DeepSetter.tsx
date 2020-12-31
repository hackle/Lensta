import React from "react";
import { withState } from "./store";

type Props = {
    setDeep: () => void,
};

const DeepSetter = (props: Props) => <button onClick={() => props.setDeep() }>Set deeply</button>;

export default withState(React.memo(DeepSetter), (state, appIO) => ({ setDeep: appIO.setDeep }));