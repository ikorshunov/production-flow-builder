import { useEffect } from 'react';
import { NodeProps, useUpdateNodeInternals } from '@xyflow/react';

import { useNodeState } from '../state/useNodeState';
import { ResourceHandle } from '../ResourceHandle';
import { NodeLayout } from './NodeLayout';
import { FactoryNode } from './types';

export const Factory = (props: NodeProps<FactoryNode>) => {
    const { id } = props;
    const nodeState = useNodeState<'factory'>(id);
    const resource = nodeState ? nodeState.resource : 'unknown';
    const isUnknownResource = resource === 'unknown';
    const name = isUnknownResource ? 'Choose product' : `${resource} factory`;

    const updateNodeInternals = useUpdateNodeInternals();
    useEffect(() => {
        updateNodeInternals(id);
    }, [id, resource, updateNodeInternals]);

    return (
        <NodeLayout name={name} category="factory" iconName={resource}>
            {!isUnknownResource && (
                <ResourceHandle type="source" resourceType={resource} />
            )}
            {resource === 'rubberDuck' && (
                <>
                    <ResourceHandle
                        resourceType="power"
                        className="top-4 -translate-x-1/2"
                        size="sm"
                        type="target"
                    />
                    <ResourceHandle
                        resourceType="rubber"
                        size="sm"
                        type="target"
                    />
                    <ResourceHandle
                        resourceType="paint"
                        className="bottom-4 top-auto -translate-x-1/2"
                        size="sm"
                        type="target"
                    />
                </>
            )}
        </NodeLayout>
    );
};
