import { GiWindTurbine } from 'react-icons/gi';

import { NodeLayout } from './NodeLayout';
import { ResourceHandle } from './ResourceHandle';

export const WindPowerPlant = () => {
    return (
        <NodeLayout
            name="Wind power plant"
            mainIcon={GiWindTurbine}
            mainIconColor="#0078ff"
        >
            <ResourceHandle type="source" resourceType="power" />
        </NodeLayout>
    );
};
