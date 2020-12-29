import { withState } from "./store";

type Props = {
    setDeep: () => void,
};

const DeepSetter = (props: Props) => <button onClick={() => props.setDeep() }>Set deeply</button>;

export default withState(DeepSetter, (state, appIO) => ({ setDeep: appIO.setDeep }));