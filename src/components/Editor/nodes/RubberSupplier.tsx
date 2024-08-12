import { SiGumtree } from 'react-icons/si';

import { ResourceHandle } from '../handles/ResourceHandle';
import { NodeLayout } from './NodeLayout';

export const RubberSupplier = () => {
    return (
        <NodeLayout
            name="Rubber supplier"
            category="supplier"
            icon={SiGumtree}
            iconColor="#fff"
        >
            <ResourceHandle type="source" resourceType="rubber" />
        </NodeLayout>
    );
};
