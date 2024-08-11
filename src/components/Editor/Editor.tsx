import { Background, Controls, ReactFlow } from '@xyflow/react';

import { nodeTypes } from './nodes/nodeTypes';
import { NodeType } from './nodes/types';

const nodes: NodeType[] = [
    {
        id: '1',
        type: 'coalSupplier',
        position: { x: 200, y: 500 },
        data: { supplyRate: 0 },
    },
    {
        id: '2',
        type: 'coalPowerPlant',
        position: { x: 400, y: 500 },
        data: { power: 0 },
    },
    {
        id: '3',
        type: 'duckFactory',
        position: { x: 625, y: 500 },
        data: { productionRate: 0 },
    },
    {
        id: '4',
        type: 'store',
        position: { x: 825, y: 500 },
        data: { stock: { rubberDuck: 0 } },
    },
];

export const Editor = () => {
    return (
        <ReactFlow<NodeType> nodes={nodes} nodeTypes={nodeTypes}>
            <Background />
            <Controls />
        </ReactFlow>
    );
};
