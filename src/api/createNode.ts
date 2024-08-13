import { NodeStateType, NodeType } from 'src/components/Editor/nodes/types';
import { readFromLocalStorage, writeToLocalStorage } from './helpers';

export const createNode = <
    T extends NodeType,
    S extends NodeStateType,
>(params: {
    modelId: string;
    node: T;
    state: S;
}) => {
    const { modelId, node, state } = params;
    const data = readFromLocalStorage();
    const model = data[modelId];
    const nodeId = crypto.randomUUID();
    const nodeState = {
        id: nodeId,
        type: node.type!,
        state,
    };
    model.nodeState[nodeId] = nodeState;
    model.editorState.nodes.push({ ...node, id: nodeId });

    return writeToLocalStorage(data).then(() => ({ nodeState, node }));
};
