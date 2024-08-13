import { useCallback, useContext } from 'react';

import { Context } from './EditorContext';

export const useNodeState = (params: { nodeId: string }) => {
    const { nodeId } = params;
    const {
        model: { nodeState },
        api: { setNodeState },
    } = useContext(Context);

    const updateNodeState = useCallback<typeof setNodeState>(setNodeState, [
        setNodeState,
    ]);

    return [nodeState[nodeId], updateNodeState];
};
