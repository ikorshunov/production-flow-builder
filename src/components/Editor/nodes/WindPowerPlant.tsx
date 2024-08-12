import { GiWindTurbine } from 'react-icons/gi';

import { NodeLayout } from './NodeLayout';
import { ResourceHandle } from '../handles/ResourceHandle';

export const WindPowerPlant = () => {
    return (
        <NodeLayout
            name="Wind power plant"
            category="power"
            mainIcon={GiWindTurbine}
            mainIconColor="#0078ff"
        >
            <ResourceHandle type="source" resourceType="power" />
        </NodeLayout>
    );
};
