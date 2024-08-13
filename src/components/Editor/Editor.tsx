import { DragEvent, useCallback, useState } from 'react';
import {
    addEdge,
    applyEdgeChanges,
    applyNodeChanges,
    Background,
    Controls,
    IsValidConnection,
    NodeMouseHandler,
    OnConnect,
    OnEdgesChange,
    OnNodesChange,
    ReactFlow,
    useReactFlow,
} from '@xyflow/react';

import { NodeSelectorPanel } from './panels/NodeSelectorPanel';
import {
    isSourceHandle,
    isTargetHandle,
    createNewNode,
    createNewNodeState,
} from './helpers';
import { nodeTypes } from './nodeTypes';
import { NodeType } from './nodes/types';
import { NodeCategory, ResourceType } from './types';
import { useEditorState } from './state/useEditorState';
import { useCreateNode } from './state/useCreateNode';
import { NodeStateModal } from './NodeStateModal';

export const Editor = () => {
    const [editedNode, setEditedNode] = useState<{
        nodeId: string;
        nodeCategory: NodeCategory;
    }>();
    const handleOpenChange = useCallback((open: boolean) => {
        if (!open) {
            setEditedNode(undefined);
        }
    }, []);

    const [editorState, updateEditorState] = useEditorState();
    const createNode = useCreateNode();
    const { nodes, edges } = editorState;

    const handleNodesChange: OnNodesChange<NodeType> = useCallback(
        (changes) => {
            const hasDraggingInProgress = changes.some(
                (change) => change.type === 'position' && change.dragging
            );

            const updatedNodes = applyNodeChanges(changes, editorState.nodes);
            updateEditorState({
                state: {
                    ...editorState,
                    nodes: updatedNodes,
                },
                // Avoid redundant updates while dragging.
                isLocal: hasDraggingInProgress,
            });
        },
        [editorState, updateEditorState]
    );
    const handleEdgesChange: OnEdgesChange = useCallback(
        (changes) => {
            const updatedEdges = applyEdgeChanges(changes, editorState.edges);
            updateEditorState({
                state: {
                    ...editorState,
                    edges: updatedEdges,
                },
            });
        },
        [editorState, updateEditorState]
    );
    const handleConnect: OnConnect = useCallback(
        (connection) => {
            const updatedEdges = addEdge(connection, editorState.edges);
            updateEditorState({
                state: {
                    ...editorState,
                    edges: updatedEdges,
                },
            });
        },
        [editorState, updateEditorState]
    );

    const handleNodeClick = useCallback<NodeMouseHandler>((_event, node) => {
        setEditedNode({
            nodeId: node.id,
            nodeCategory: node.type as NodeCategory,
        });
    }, []);

    const validateNewConnection: IsValidConnection = useCallback(
        (connection) => {
            const { sourceHandle, targetHandle } = connection;
            if (
                !isSourceHandle(sourceHandle) ||
                !isTargetHandle(targetHandle)
            ) {
                // Don't allow connections between handles of unspecified/unknown resources.
                return false;
            }
            const sourceResource = sourceHandle.split('-')[0] as ResourceType;
            const targetResource = targetHandle.split('-')[0] as ResourceType;

            if (targetResource === 'any') {
                // Allow any node to connect to an "any" resource target handle.
                return true;
            }

            // Otherwise, allow connections only between handles of the same resource type.
            return sourceResource === targetResource;
        },
        []
    );

    // Made with drag & drop feature tutorial: https://reactflow.dev/examples/interaction/drag-and-drop
    const { screenToFlowPosition } = useReactFlow();

    const handleDragOver = useCallback((event: DragEvent) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
    }, []);

    const handleDrop = useCallback(
        (event: DragEvent) => {
            event.preventDefault();
            const type = event.dataTransfer.getData(
                'application/reactflow'
            ) as NodeType['type'];

            // check if the dropped element is valid
            if (typeof type === 'undefined' || !type) {
                return;
            }

            const position = screenToFlowPosition({
                x: event.clientX,
                y: event.clientY,
            });
            const newNode = createNewNode(type, position);
            const newNodeState = createNewNodeState(type);
            createNode({ node: newNode, nodeState: newNodeState });
        },
        [createNode, screenToFlowPosition]
    );

    return (
        <>
            <ReactFlow<NodeType>
                nodes={nodes}
                edges={edges}
                onNodesChange={handleNodesChange}
                onEdgesChange={handleEdgesChange}
                onConnect={handleConnect}
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                onNodeClick={handleNodeClick}
                isValidConnection={validateNewConnection}
                nodeTypes={nodeTypes}
            >
                <NodeSelectorPanel />
                <Background />
                <Controls />
            </ReactFlow>
            {editedNode && editedNode.nodeCategory !== 'store' && (
                <NodeStateModal
                    open
                    onOpenChange={handleOpenChange}
                    nodeId={editedNode.nodeId}
                    nodeCategory={editedNode.nodeCategory}
                />
            )}
        </>
    );
};
