import {
    addEdge,
    applyEdgeChanges,
    applyNodeChanges,
    Background,
    Controls,
    Edge,
    OnConnect,
    OnEdgesChange,
    OnNodesChange,
    ReactFlow,
} from '@xyflow/react';

import { nodeTypes } from './nodes/nodeTypes';
import { NodeType } from './nodes/types';
import { useCallback, useState } from 'react';

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

    return (
        <ReactFlow<NodeType>
            nodes={nodes}
            edges={edges}
            onNodesChange={handleNodesChange}
            onEdgesChange={handleEdgesChange}
            onConnect={handleConnect}
            nodeTypes={nodeTypes}
            fitView
        >
            <Background />
            <Controls />
        </ReactFlow>
    );
};
