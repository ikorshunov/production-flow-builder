import { GiCoalWagon } from 'react-icons/gi';

import { ResourceHandle } from '../handles/ResourceHandle';
import { NodeLayout } from './NodeLayout';

export const CoalSupplier = () => {
    return (
        <NodeLayout name="Coal supplier" category="supplier" icon={GiCoalWagon}>
            <ResourceHandle type="source" resourceType="coal" />
        </NodeLayout>
    );
};
