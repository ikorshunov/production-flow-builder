import { useEffect } from 'react';
import { NodeProps, useUpdateNodeInternals } from '@xyflow/react';

import { useNodeState } from '../state/useNodeState';
import { ResourceHandle } from '../ResourceHandle';
import { NodeLayout } from './NodeLayout';
import { SupplierNode } from '../types';

export const Supplier = (props: NodeProps<SupplierNode>) => {
    const { id } = props;
    const nodeState = useNodeState<'supplier'>(id);
    const resource = nodeState ? nodeState.resource : 'unknown';
    const isUnknownResource = resource === 'unknown';
    const name = isUnknownResource ? 'Choose resource' : `${resource} supplier`;

    const updateNodeInternals = useUpdateNodeInternals();
    useEffect(() => {
        updateNodeInternals(id);
    }, [id, resource, updateNodeInternals]);

    return (
        <NodeLayout name={name} category="supplier" iconName={resource}>
            {!isUnknownResource && (
                <ResourceHandle type="source" resourceType={resource} />
            )}
        </NodeLayout>
    );
};
