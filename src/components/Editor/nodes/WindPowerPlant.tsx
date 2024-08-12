import { GiWindTurbine } from 'react-icons/gi';

import { NodeLayout } from './NodeLayout';
import { ResourceHandle } from '../handles/ResourceHandle';
import { ImPower } from 'react-icons/im';

export const WindPowerPlant = () => {
    return (
        <NodeLayout
            name="Wind power plant"
            category="power"
            mainIcon={ImPower}
            mainIconColor="#ffda00"
            auxIcon={GiWindTurbine}
            auxIconColor="#0078ff"
        >
            <ResourceHandle type="source" resourceType="power" />
        </NodeLayout>
    );
};
