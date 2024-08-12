import { DragEvent, useCallback, useState } from 'react';
import {
    addEdge,
    applyEdgeChanges,
    applyNodeChanges,
    Background,
    Controls,
    Edge,
    IsValidConnection,
    OnConnect,
    OnEdgesChange,
    OnNodesChange,
    ReactFlow,
    useReactFlow,
} from '@xyflow/react';

import { isSourceHandle, isTargetHandle } from './handles/helpers';
import { nodeTypes } from './nodeTypes';
import { NodeType } from './nodes/types';
import { ResourceType } from './types';
import { NodeSelectorPanel } from './panels/NodeSelectorPanel';
import { createNewNode } from './helpers';

export const Editor = () => {
    const [nodes, setNodes] = useState<NodeType[]>([]);
    const [edges, setEdges] = useState<Edge[]>([]);

    const handleNodesChange: OnNodesChange<NodeType> = useCallback(
        (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
        []
    );
    const handleEdgesChange: OnEdgesChange = useCallback(
        (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
        []
    );
    const handleConnect: OnConnect = useCallback(
        (connection) => setEdges((eds) => addEdge(connection, eds)),
        []
    );

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
            setNodes((nds) => nds.concat(newNode));
        },
        [screenToFlowPosition]
    );

    return (
        <ReactFlow<NodeType>
            nodes={nodes}
            edges={edges}
            onNodesChange={handleNodesChange}
            onEdgesChange={handleEdgesChange}
            onConnect={handleConnect}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            isValidConnection={validateNewConnection}
            nodeTypes={nodeTypes}
        >
            <NodeSelectorPanel />
            <Background />
            <Controls />
        </ReactFlow>
    );
};
