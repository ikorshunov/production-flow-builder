import { GiWindTurbine } from 'react-icons/gi';

import { ResourceHandle } from '../handles/ResourceHandle';
import { NodeLayout } from './NodeLayout';

export const WindPowerPlant = () => {
    return (
        <NodeLayout
            name="Wind power plant"
            category="power"
            icon={GiWindTurbine}
            iconColor="#0078ff"
        >
            <ResourceHandle type="source" resourceType="power" />
        </NodeLayout>
    );
};
