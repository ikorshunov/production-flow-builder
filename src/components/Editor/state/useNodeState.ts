import { useCallback, useContext } from 'react';

import { NodeStateMap } from '../nodes/types';
import { NodeCategory } from '../types';
import { Context } from './EditorContext';

export const useNodeState = <T extends NodeCategory>(params: {
    nodeId: string;
}) => {
    const { nodeId } = params;
    const {
        model: { nodeState },
        api: { setNodeState },
    } = useContext(Context);

    const updateNodeState = useCallback<typeof setNodeState>(setNodeState, [
        setNodeState,
    ]);

    return [nodeState[nodeId]?.state, updateNodeState] as [
        NodeStateMap[T],
        typeof setNodeState,
    ];
};
