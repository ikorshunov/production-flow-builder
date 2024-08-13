import { NodeProps } from '@xyflow/react';

import { ResourceHandle } from '../ResourceHandle';
import { NodeLayout } from './NodeLayout';
import { FactoryNode, StatefulFactoryNode } from './types';

type FactoryProps = NodeProps<FactoryNode> & StatefulFactoryNode['state'];

export const Factory = (props: FactoryProps) => {
    const { product = 'unknown' } = props;
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
