import { Position } from '@xyflow/react';
import { IoStorefrontSharp } from 'react-icons/io5';
import { HiMiniInboxArrowDown } from 'react-icons/hi2';

import { NodeLayout } from './NodeLayout';
import { Handle } from './Handle';

export const Store = () => {
    return (
        <NodeLayout
            name="Store"
            mainIcon={IoStorefrontSharp}
            mainIconColor="#dc029b"
        >
            <Handle
                id="coalOutput"
                icon={<HiMiniInboxArrowDown color="white" />}
                type="target"
                position={Position.Left}
            />
        </NodeLayout>
    );
};
