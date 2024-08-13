import { NodeStateType } from 'src/components/Editor/nodes/types';
import { readFromLocalStorage, writeToLocalStorage } from './helpers';

export const updateNodeState = <T extends NodeStateType>(params: {
    modelId: string;
    nodeId: string;
    state: T;
}) => {
    const { modelId, nodeId, state } = params;
    const data = readFromLocalStorage();
    const model = data[modelId];
    const node = model.nodeState[nodeId];
    model.nodeState[nodeId] = {
        ...node,
        state,
    };
    return writeToLocalStorage(data).then(() => undefined);
};
