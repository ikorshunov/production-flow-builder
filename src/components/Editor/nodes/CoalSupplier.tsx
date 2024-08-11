import { Position } from '@xyflow/react';
import { GiCoalWagon } from 'react-icons/gi';

import { NodeLayout } from './NodeLayout';
import { Handle } from './Handle';

export const CoalSupplier = () => {
    return (
        <NodeLayout name="Coal supplier" mainIcon={GiCoalWagon}>
            <Handle
                id="coalOutput"
                icon={<GiCoalWagon color="black" />}
                type="source"
                position={Position.Right}
            />
        </NodeLayout>
    );
};
