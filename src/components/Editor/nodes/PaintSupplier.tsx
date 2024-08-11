import { Position } from '@xyflow/react';
import { GiPaintBucket } from 'react-icons/gi';

import { NodeLayout } from './NodeLayout';
import { Handle } from './Handle';

export const PaintSupplier = () => {
    return (
        <NodeLayout
            name="Paint supplier"
            mainIcon={GiPaintBucket}
            mainIconColor="#8200ff"
        >
            <Handle
                id="paintOutput"
                icon={<GiPaintBucket color="#8200ff" />}
                type="source"
                position={Position.Right}
            />
        </NodeLayout>
    );
};
