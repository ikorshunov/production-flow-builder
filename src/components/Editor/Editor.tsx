import { DragEvent, useCallback, useState } from 'react';
import {
    addEdge,
    applyEdgeChanges,
    applyNodeChanges,
    Background,
    Controls,
    IsValidConnection,
    MiniMap,
    NodeMouseHandler,
    OnConnect,
    OnEdgesChange,
    OnNodesChange,
    Panel,
    ReactFlow,
    useReactFlow,
} from '@xyflow/react';
import { AiOutlineRollback } from 'react-icons/ai';

import { NodeSelectorPanel } from './NodeSelectorPanel';
import {
    isSourceHandle,
    isTargetHandle,
    createNewNode,
    createNewNodeState,
} from './helpers';
import { nodeTypes } from './nodeTypes';
import { NodeCategory, NodeType, ResourceType } from './types';
import { NodeStateModal } from './NodeStateModal';
import { useEditorContext } from './state/useEditorContext';

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

    const {
        model: {
            editorState: { nodes, edges },
        },
        api: { setEditorState, setNodeState },
    } = useEditorContext();

    const handleNodesChange: OnNodesChange<NodeType> = useCallback(
        (changes) => {
            const updatedNodes = applyNodeChanges(changes, nodes);
            setEditorState({
                state: {
                    nodes: updatedNodes,
                    edges,
                },
            });
        },
        [edges, nodes, setEditorState]
    );
    const handleEdgesChange: OnEdgesChange = useCallback(
        (changes) => {
            const updatedEdges = applyEdgeChanges(changes, edges);
            setEditorState({
                state: {
                    nodes,
                    edges: updatedEdges,
                },
            });
        },
        [edges, nodes, setEditorState]
    );
    const handleConnect: OnConnect = useCallback(
        (connection) => {
            const updatedEdges = addEdge(connection, edges);
            setEditorState({
                state: {
                    nodes,
                    edges: updatedEdges,
                },
            });
        },
        [edges, nodes, setEditorState]
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
    const handleDragStart = useCallback(
        (event: DragEvent, nodeType: Exclude<NodeType['type'], undefined>) => {
            event.dataTransfer.setData('application/reactflow', nodeType);
            event.dataTransfer.effectAllowed = 'move';
        },
        []
    );
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
            setNodeState({ node: newNode, nodeState: newNodeState });
        },
        [screenToFlowPosition, setNodeState]
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
                <Panel
                    position="top-left"
                    className="flex flex-col shrink-0 gap-2"
                >
                    <div>Back to models list</div>
                    <a
                        href="/"
                        className="bg-slate-300 shadow-sm rounded-md w-[60px] h-[60px]"
                    >
                        <AiOutlineRollback size="60" />
                    </a>
                </Panel>
                <NodeSelectorPanel onDragStart={handleDragStart} />
                <Background />
                <Controls />
                <MiniMap />
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
