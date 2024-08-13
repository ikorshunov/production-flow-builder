import { useMutation, useQueryClient } from '@tanstack/react-query';

import { updateEditorState } from 'src/api/updateEditorState';
import { getModelQueryKey } from './useModelQuery';
import { initialContextValue } from './constants';
import { EditorState, ModelState } from './types';

export const useEditorStateMutation = (modelId: string) => {
    const queryClient = useQueryClient();
    const modelQueryKey = getModelQueryKey(modelId);

    return useMutation({
        mutationFn: (params: { state: EditorState; isLocal?: boolean }) => {
            const { state, isLocal } = params;
            if (isLocal) {
                return Promise.resolve();
            }
            return updateEditorState({ modelId, state });
        },
        onMutate: ({ state: newEditorState }) => {
            const prevModel =
                queryClient.getQueryData<ModelState>(modelQueryKey);
            queryClient.setQueryData<ModelState>(modelQueryKey, (prevModel) => {
                return {
                    ...(prevModel || initialContextValue.model),
                    editorState: newEditorState,
                };
            });
            return prevModel;
        },
        onSuccess: (_data, { isLocal }) => {
            if (!isLocal) {
                void queryClient.invalidateQueries({ queryKey: modelQueryKey });
            }
        },
        onError: (_err, _variables, context) => {
            queryClient.setQueryData<ModelState>(modelQueryKey, context);
        },
    });
};
