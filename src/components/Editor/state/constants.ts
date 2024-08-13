import { EditorContextValue } from './types';

export const initialContextValue: EditorContextValue = {
    model: {
        id: '',
        editorState: {
            nodes: [],
            edges: [],
        },
        nodeState: {},
    },
    api: {
        setNodeState: () => {},
        setEditorState: () => {},
    },
};
