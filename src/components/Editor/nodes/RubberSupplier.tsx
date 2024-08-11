import { Position } from '@xyflow/react';
import { SiGumtree } from 'react-icons/si';

import { NodeLayout } from './NodeLayout';
import { Handle } from './Handle';

export const RubberSupplier = () => {
    return (
        <NodeLayout
            name="Rubber supplier"
            mainIcon={SiGumtree}
            mainIconColor="#fff"
        >
            <Handle
                id="rubberOutput"
                icon={<SiGumtree color="white" />}
                type="source"
                position={Position.Right}
            />
        </NodeLayout>
    );
};
