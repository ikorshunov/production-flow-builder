import { createContext, PropsWithChildren, useMemo } from 'react';
import { ImSpinner9 } from 'react-icons/im';

import { useModelQuery } from './useModelQuery';
import { useNodeStateMutation } from './useNodeStateMutation';
import { useEditorStateMutation } from './useEditorStateMutation';
import { initialContextValue } from './constants';
import { EditorContextValue } from './types';

type EditorContextProps = PropsWithChildren<{
    modelId: string;
}>;

export const Context = createContext<EditorContextValue>(initialContextValue);

export const EditorContext = (props: EditorContextProps) => {
    const { children, modelId } = props;
    const { data: model } = useModelQuery(modelId);
    const updateNodeStateMutation = useNodeStateMutation(modelId);
    const updateEditorStateMutation = useEditorStateMutation(modelId);

    const contextValue: EditorContextValue = useMemo(() => {
        return {
            model: model || initialContextValue.model,
            api: {
                setNodeState: updateNodeStateMutation.mutate,
                setEditorState: updateEditorStateMutation.mutate,
            },
        };
    }, [
        model,
        updateEditorStateMutation.mutate,
        updateNodeStateMutation.mutate,
    ]);

    if (!model) {
        return (
            <div className="w-screen h-screen flex items-center justify-center">
                <ImSpinner9
                    size="100"
                    color="#c6ff00"
                    className="animate-spin"
                />
            </div>
        );
    }

    return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};
