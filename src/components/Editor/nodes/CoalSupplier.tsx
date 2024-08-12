import { GiCoalWagon } from 'react-icons/gi';

import { NodeLayout } from './NodeLayout';
import { ResourceHandle } from '../handles/ResourceHandle';

export const CoalSupplier = () => {
    return (
        <NodeLayout
            name="Coal supplier"
            category="supplier"
            mainIcon={GiCoalWagon}
        >
            <ResourceHandle type="source" resourceType="coal" />
        </NodeLayout>
    );
};
