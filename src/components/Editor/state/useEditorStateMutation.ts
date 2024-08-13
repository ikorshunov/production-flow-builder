import { useMutation, useQueryClient } from '@tanstack/react-query';

import { updateEditorState } from 'src/api/updateEditorState';
import { getModelQueryKey } from './useModelQuery';
import { initialContextValue } from './constants';
import { EditorState, ModelState } from './types';

export const useEditorStateMutation = (modelId: string) => {
    const queryClient = useQueryClient();
    const modelQueryKey = getModelQueryKey(modelId);

    return useMutation({
        mutationFn: (state: EditorState) => {
            return updateEditorState({ modelId, state });
        },
        onMutate: (newEditorState) => {
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
        onSuccess: () => {
            void queryClient.invalidateQueries({ queryKey: modelQueryKey });
        },
        onError: (_err, _variables, context) => {
            queryClient.setQueryData<ModelState>(modelQueryKey, context);
        },
    });
};
