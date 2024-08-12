import { GiCoalWagon } from 'react-icons/gi';

import { NodeLayout } from './NodeLayout';
import { ResourceHandle } from './ResourceHandle';

export const CoalSupplier = () => {
    return (
        <NodeLayout name="Coal supplier" mainIcon={GiCoalWagon}>
            <ResourceHandle type="source" resourceType="coal" />
        </NodeLayout>
    );
};
