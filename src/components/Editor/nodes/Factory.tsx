import { NodeProps } from '@xyflow/react';

import { useNodeState } from '../state/useNodeState';

import { ResourceHandle } from '../ResourceHandle';
import { NodeLayout } from './NodeLayout';
import { FactoryNode } from './types';

export const Factory = (props: NodeProps<FactoryNode>) => {
    const { id } = props;
    const [nodeState] = useNodeState<'factory'>({
        nodeId: id,
    });
    const resource = nodeState ? nodeState.resource : 'unknown';
    const isUnknownResource = resource === 'unknown';
    const name = isUnknownResource ? 'Choose product' : `${resource} factory`;

    const handles = [];
    if (!isUnknownResource) {
        handles.push(
            <ResourceHandle
                key={`${resource}-source`}
                type="source"
                resourceType={resource}
            />
        );
    }
    if (resource === 'rubberDuck') {
        handles.push(
            <ResourceHandle
                key="power-target"
                resourceType="power"
                className="top-4 -translate-x-1/2"
                size="sm"
                type="target"
            />,
            <ResourceHandle
                key="rubber-target"
                resourceType="rubber"
                size="sm"
                type="target"
            />,
            <ResourceHandle
                key="paint-target"
                resourceType="paint"
                className="bottom-4 top-auto -translate-x-1/2"
                size="sm"
                type="target"
            />
        );
    }

    return (
        <NodeLayout name={name} category="factory" iconName={resource}>
            {handles}
        </NodeLayout>
    );
};
