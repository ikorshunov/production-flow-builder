import { Position } from '@xyflow/react';
import { ImPower } from 'react-icons/im';
import { GiCoalWagon } from 'react-icons/gi';

import { NodeLayout } from './NodeLayout';
import { Handle } from './Handle';

export const CoalPowerPlant = () => {
    return (
        <NodeLayout
            name="Coal power plant"
            mainIcon={ImPower}
            mainIconColor="#ffda00"
            auxIcon={GiCoalWagon}
        >
            <Handle
                id="powerOutput"
                icon={<ImPower color="#ffda00" />}
                type="source"
                position={Position.Right}
            />
            <Handle
                id="coalInput"
                icon={<GiCoalWagon color="black" />}
                type="target"
                position={Position.Left}
            />
        </NodeLayout>
    );
};
