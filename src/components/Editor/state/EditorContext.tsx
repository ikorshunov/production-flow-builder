import {
    createContext,
    PropsWithChildren,
    useEffect,
    useMemo,
    useState,
} from 'react';
import { useMutation, useQuery } from '@tanstack/react-query';
import { ImSpinner9 } from 'react-icons/im';

import { getModel } from 'src/api/getModel';
import { updateModel } from 'src/api/updateModal';
import { initialContextValue, PROJECT_NAME } from '../constants';
import {
    EditorContextValue,
    ModelState,
    NodeType,
    NodeStateType,
    EditorState,
} from '../types';

type EditorContextProps = PropsWithChildren<{
    modelId: string;
}>;

export const Context = createContext<EditorContextValue>(initialContextValue);

export const EditorContext = (props: EditorContextProps) => {
    const { children, modelId } = props;
    const { data } = useQuery({
        queryKey: [PROJECT_NAME, 'model', modelId],
        queryFn: () => getModel(modelId),
    });
    const updateModelMutation = useMutation({
        mutationFn: (model: ModelState) => updateModel(model),
    });
    const [state, setState] = useState<ModelState>(
        data || initialContextValue.model
    );

    useEffect(() => {
        if (data) {
            setState(data);
        }
    }, [data]);

    const contextValue: EditorContextValue = useMemo(() => {
        return {
            model: state,
            api: {
                setNodeState: (params: {
                    id?: string;
                    node: NodeType;
                    nodeState: NodeStateType;
                }) => {
                    const { node, nodeState, id } = params;

                    setState((prevState) => {
                        if (!node.type) {
                            return prevState;
                        }

                        const prevNodes = prevState.editorState.nodes;
                        let newNodes = prevNodes;

                        // editing existing node
                        if (id) {
                            const filteredNodes = prevNodes.filter(
                                (node) => node.id !== id
                            );
                            newNodes = [...filteredNodes, node];
                        } else {
                            // adding new node
                            newNodes = [...prevNodes, node];
                        }

                        const updatedModel = {
                            ...(prevState || initialContextValue.model),
                            editorState: {
                                ...prevState.editorState,
                                nodes: newNodes,
                            },
                            nodeState: {
                                ...prevState.nodeState,
                                [node.id]: {
                                    id: node.id,
                                    type: node.type,
                                    state: nodeState,
                                },
                            },
                        };

                        updateModelMutation.mutate(updatedModel);
                        return updatedModel;
                    });
                },
                setEditorState: (params: { state: EditorState }) => {
                    setState((prevState) => {
                        const updatedModel = {
                            ...prevState,
                            editorState: params.state,
                        };
                        updateModelMutation.mutate(updatedModel);
                        return updatedModel;
                    });
                },
            },
        };
    }, [state, updateModelMutation]);

    if (!data) {
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
