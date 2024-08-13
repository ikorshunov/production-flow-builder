import { useMutation, useQueryClient } from '@tanstack/react-query';

import { createNode } from 'src/api/createNode';
import { NodeStateType, NodeType } from '../nodes/types';
import { getModelQueryKey } from './useModelQuery';
import { initialContextValue } from './constants';
import { ModelState } from './types';

export const useCreateNodeMutation = (modelId: string) => {
    const queryClient = useQueryClient();
    const modelQueryKey = getModelQueryKey(modelId);

    return useMutation({
        mutationFn: (params: { node: NodeType; nodeState: NodeStateType }) => {
            const { node, nodeState } = params;
            return createNode({ modelId, node, state: nodeState });
        },
        onMutate: ({ node: newNode }) => {
            const prevModel =
                queryClient.getQueryData<ModelState>(modelQueryKey);
            queryClient.setQueryData<ModelState>(modelQueryKey, (prevModel) => {
                if (!prevModel) {
                    return;
                }

                return {
                    ...(prevModel || initialContextValue.model),
                    editorState: {
                        ...prevModel.editorState,
                        nodes: [...prevModel.editorState.nodes, newNode],
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
};
