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
    const source = id ? nodeState.source : 'unknown';
    const isUnknownSource = source === 'unknown';
    const name = isUnknownSource
        ? 'Choose energy source'
        : `${source} power plant`;

    const handles = [];
    if (!isUnknownSource) {
        handles.push(
            <ResourceHandle key="power" type="source" resourceType="power" />
        );
    }
    if (source === 'coal') {
        handles.push(
            <ResourceHandle key="coal" type="target" resourceType="coal" />
        );
    }

    return (
        <NodeLayout name={name} category="power" iconName={source}>
            {handles}
        </NodeLayout>
    );
};
