import { Edge } from '@xyflow/react';

import { NodeStateMap, NodeType } from '../nodes/types';
import { NodeCategory } from '../types';

export type EditorState = {
    nodes: NodeType[];
    edges: Edge[];
};

export type NodeState<T extends NodeCategory = NodeCategory> = Record<
    string,
    {
        id: string;
        type: T;
        state: NodeStateMap[T];
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
            id?: string;
            node: NodeType;
            nodeState: NodeStateMap[T];
        }) => void;
        setEditorState: (params: { state: EditorState }) => void;
    };
};
