import { Position } from '@xyflow/react';
import { ImPower } from 'react-icons/im';
import { GiWindTurbine } from 'react-icons/gi';

import { NodeLayout } from './NodeLayout';
import { Handle } from './Handle';

export const WindPowerPlant = () => {
    return (
        <NodeLayout
            name="Wind power plant"
            mainIcon={GiWindTurbine}
            mainIconColor="#0078ff"
        >
            <Handle
                id="powerOutput"
                icon={<ImPower color="#ffda00" />}
                type="source"
                position={Position.Right}
            />
        </NodeLayout>
    );
};
