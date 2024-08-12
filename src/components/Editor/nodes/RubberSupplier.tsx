import { SiGumtree } from 'react-icons/si';

import { NodeLayout } from './NodeLayout';
import { ResourceHandle } from './ResourceHandle';

export const RubberSupplier = () => {
    return (
        <NodeLayout
            name="Rubber supplier"
            mainIcon={SiGumtree}
            mainIconColor="#fff"
        >
            <ResourceHandle type="source" resourceType="rubber" />
        </NodeLayout>
    );
};
