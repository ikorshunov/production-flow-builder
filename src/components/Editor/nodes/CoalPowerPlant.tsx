import { ImPower } from 'react-icons/im';
import { GiCoalWagon } from 'react-icons/gi';

import { NodeLayout } from './NodeLayout';
import { ResourceHandle } from '../handles/ResourceHandle';

export const CoalPowerPlant = () => {
    return (
        <NodeLayout
            name="Coal power plant"
            category="power"
            mainIcon={ImPower}
            mainIconColor="#ffda00"
            auxIcon={GiCoalWagon}
        >
            <ResourceHandle type="source" resourceType="power" />
            <ResourceHandle type="target" resourceType="coal" />
        </NodeLayout>
    );
};
