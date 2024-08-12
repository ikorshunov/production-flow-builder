import { SiGumtree } from 'react-icons/si';

import { NodeLayout } from './NodeLayout';
import { ResourceHandle } from '../handles/ResourceHandle';

export const RubberSupplier = () => {
    return (
        <NodeLayout
            name="Rubber supplier"
            category="supplier"
            mainIcon={SiGumtree}
            mainIconColor="#fff"
        >
            <ResourceHandle type="source" resourceType="rubber" />
        </NodeLayout>
    );
};
