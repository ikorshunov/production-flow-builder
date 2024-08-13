import { Edge } from '@xyflow/react';

import { NodeStateMap, NodeStateType, NodeType } from '../nodes/types';
import { NodeCategory } from '../types';

export type EditorState = {
    nodes: NodeType[];
    edges: Edge[];
};

export type NodeState = Record<
    string,
    {
        id: string;
        type: NodeCategory;
        state: NodeStateType;
    }
>;

export type ModelState = {
    id: string;
    editorState: EditorState;
    nodeState: NodeState;
};

export type EditorContextValue = {
    model: ModelState;
    api: {
        setNodeState: <T extends NodeCategory>(params: {
            id: string;
            state: NodeStateMap[T];
        }) => void;
        setEditorState: (state: EditorState) => void;
    };
};
