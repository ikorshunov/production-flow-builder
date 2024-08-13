import { useEffect } from 'react';
import { NodeProps, useUpdateNodeInternals } from '@xyflow/react';

import { useNodeState } from '../state/useNodeState';
import { ResourceHandle } from '../ResourceHandle';
import { NodeLayout } from './NodeLayout';
import { PowerPlantNode } from './types';

export const PowerPlant = (props: NodeProps<PowerPlantNode>) => {
    const { id } = props;
    const nodeState = useNodeState<'power'>(id);
    const resource = nodeState ? nodeState.resource : 'unknown';
    const isUnknownResource = resource === 'unknown';
    const name = isUnknownResource
        ? 'Choose energy source'
        : `${resource} power plant`;

    const updateNodeInternals = useUpdateNodeInternals();
    useEffect(() => {
        updateNodeInternals(id);
    }, [id, resource, updateNodeInternals]);

    return (
        <NodeLayout name={name} category="power" iconName={resource}>
            {resource === 'coal' && (
                <ResourceHandle type="target" resourceType="coal" />
            )}
            {!isUnknownResource && (
                <ResourceHandle type="source" resourceType="power" />
            )}
        </NodeLayout>
    );
};
