import { useMutation, useQueryClient } from '@tanstack/react-query';

import { updateNodeState } from 'src/api/updateNodeState';
import { NodeStateType } from '../nodes/types';
import { getModelQueryKey } from './useModelQuery';
import { initialContextValue } from './constants';
import { ModelState } from './types';

export const useNodeStateMutation = (modelId: string) => {
    const queryClient = useQueryClient();
    const modelQueryKey = getModelQueryKey(modelId);

    const updateNodeStateMutation = useMutation({
        mutationFn: (params: { id: string; state: NodeStateType }) => {
            const { id, state } = params;
            return updateNodeState({ modelId, nodeId: id, state });
        },
        onMutate: ({ id, state: newState }) => {
            const prevModel =
                queryClient.getQueryData<ModelState>(modelQueryKey);

            if (!prevModel) {
                return;
            }

            const prevNodeState = prevModel.nodeState[id];
            queryClient.setQueryData<ModelState>(modelQueryKey, (prevModel) => {
                const { nodeState, ...rest } =
                    prevModel || initialContextValue.model;

                return {
                    ...rest,
                    nodeState: {
                        ...nodeState,
                        [id]: {
                            ...prevNodeState,
                            state: newState,
                        },
                    },
                };
            });
            return prevModel;
        },
        onSuccess: () => {
            void queryClient.invalidateQueries({ queryKey: modelQueryKey });
        },
        onError: (_err, _variables, context) => {
            queryClient.setQueryData<ModelState>(modelQueryKey, context);
        },
    });
    return updateNodeStateMutation;
};
