import { NodeProps } from '@xyflow/react';

import { ResourceHandle } from '../ResourceHandle';
import { NodeLayout } from './NodeLayout';
import { PowerPlantNode, StatefulPowerPlantNode } from './types';

type PowerPlantProps = NodeProps<PowerPlantNode> &
    StatefulPowerPlantNode['state'];

export const PowerPlant = (props: PowerPlantProps) => {
    const { source = 'unknown' } = props;
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
