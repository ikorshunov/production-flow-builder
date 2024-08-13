import { NodeProps } from '@xyflow/react';

import { ResourceHandle } from '../ResourceHandle';
import { NodeLayout } from './NodeLayout';
import { NodeStateMap, SupplierNode } from './types';

type SupplierProps = NodeProps<SupplierNode> & NodeStateMap['supplier'];

export const Supplier = (props: SupplierProps) => {
    const { resource = 'unknown' } = props;
    const isUnknownResource = resource === 'unknown';
    const name = isUnknownResource ? 'Choose resource' : `${resource} supplier`;

    return (
        <NodeLayout name={name} category="supplier" iconName={resource}>
            {!isUnknownResource && (
                <ResourceHandle type="source" resourceType={resource} />
            )}
        </NodeLayout>
    );
};
