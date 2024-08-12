import { GiCoalWagon } from 'react-icons/gi';

import { ResourceHandle } from '../handles/ResourceHandle';
import { NodeLayout } from './NodeLayout';

export const CoalPowerPlant = () => {
    return (
        <NodeLayout name="Coal power plant" category="power" icon={GiCoalWagon}>
            <ResourceHandle type="source" resourceType="power" />
            <ResourceHandle type="target" resourceType="coal" />
        </NodeLayout>
    );
};
