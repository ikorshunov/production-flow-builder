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
    const product = id ? nodeState.product : 'unknown';
    const isUnknownProduct = product === 'unknown';
    const name = isUnknownProduct ? 'Choose product' : `${product} factory`;

    const handles = [];
    if (!isUnknownProduct) {
        handles.push(<ResourceHandle type="source" resourceType={product} />);
    }
    if (product === 'rubberDuck') {
        handles.push(
            <ResourceHandle
                key="power"
                resourceType="power"
                className="top-4 -translate-x-1/2"
                size="sm"
                type="target"
            />,
            <ResourceHandle
                key="rubber"
                resourceType="rubber"
                size="sm"
                type="target"
            />,
            <ResourceHandle
                key="paint"
                resourceType="paint"
                className="bottom-4 top-auto -translate-x-1/2"
                size="sm"
                type="target"
            />
        );
    }

    return (
        <NodeLayout name={name} category="factory" iconName={product}>
            {handles}
        </NodeLayout>
    );
};
