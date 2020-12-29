import { withState } from "./store";

type Props = {
    increase: () => void,
};

const AsyncIncrease = (props: Props) => <button onClick={() => props.increase() }>Increase by 1 async</button>;

export default withState(AsyncIncrease, (state, appIO) => ({ increase: appIO.increaseAsync }));