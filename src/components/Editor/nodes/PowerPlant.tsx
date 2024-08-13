import { NodeProps } from '@xyflow/react';

import { useNodeState } from '../state/useNodeState';
import { ResourceHandle } from '../ResourceHandle';
import { NodeLayout } from './NodeLayout';
import { PowerPlantNode } from './types';

export const PowerPlant = (props: NodeProps<PowerPlantNode>) => {
    const { id } = props;
    const [nodeState] = useNodeState<'power'>({
        nodeId: id,
    });
    const resource = nodeState ? nodeState.resource : 'unknown';
    const isUnknownResource = resource === 'unknown';
    const name = isUnknownResource
        ? 'Choose energy source'
        : `${resource} power plant`;

    const handles = [];
    if (!isUnknownResource) {
        handles.push(
            <ResourceHandle
                key="power-source"
                type="source"
                resourceType="power"
            />
        );
    }
    if (resource === 'coal') {
        handles.push(
            <ResourceHandle
                key="coal-target"
                type="target"
                resourceType="coal"
            />
        );
    }

    return (
        <NodeLayout name={name} category="power" iconName={resource}>
            {handles}
        </NodeLayout>
    );
};
