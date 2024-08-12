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
} from '@xyflow/react';
import { useCallback, useState } from 'react';

import { nodeTypes } from './nodes/nodeTypes';
import {
    isSourceHandle,
    isTargetHandle,
    NodeType,
    ResourceType,
} from './nodes/types';

const initialNodes: NodeType[] = [
    {
        id: '1',
        type: 'coalSupplier',
        position: { x: 200, y: 200 },
        data: { supplyRate: 0 },
    },
    {
        id: '2',
        type: 'coalPowerPlant',
        position: { x: 400, y: 200 },
        data: { power: 0 },
    },
    {
        id: '3',
        type: 'duckFactory',
        position: { x: 625, y: 200 },
        data: { productionRate: 0 },
    },
    {
        id: '4',
        type: 'store',
        position: { x: 825, y: 200 },
        data: { stock: { rubberDuck: 0 } },
    },
    {
        id: '5',
        type: 'windPowerPlant',
        position: { x: 400, y: 350 },
        data: { power: 0 },
    },
    {
        id: '6',
        type: 'rubberSupplier',
        position: { x: 200, y: 350 },
        data: { supplyRate: 0 },
    },
    {
        id: '7',
        type: 'paintSupplier',
        position: { x: 200, y: 500 },
        data: { supplyRate: 0 },
    },
];

const initialEdges: Edge[] = [];

export const Editor = () => {
    const [nodes, setNodes] = useState(initialNodes);
    const [edges, setEdges] = useState(initialEdges);

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
            } else {
                // Otherwise, allow connections only between handles of the same resource type.
                return sourceResource === targetResource;
            }
        },
        []
    );

    return (
        <ReactFlow<NodeType>
            nodes={nodes}
            edges={edges}
            onNodesChange={handleNodesChange}
            onEdgesChange={handleEdgesChange}
            onConnect={handleConnect}
            isValidConnection={validateNewConnection}
            nodeTypes={nodeTypes}
            fitView
        >
            <Background />
            <Controls />
        </ReactFlow>
    );
};
