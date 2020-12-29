import { withState } from "./store";

type StateProps = {
    increase: () => void,
};

type OwnProps = {
    color: 'silver' | 'snow'
};

type Props = StateProps & OwnProps;

const SeparateIncrease = (props: Props) => <button style={{ backgroundColor: props.color }} onClick={() => props.increase() }>Increase by 1</button>;

export default withState<OwnProps, StateProps>(SeparateIncrease, (state, appIO) => ({ increase: appIO.increase }));