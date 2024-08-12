import { GiPlasticDuck } from 'react-icons/gi';

import { ResourceHandle } from '../handles/ResourceHandle';
import { NodeLayout } from './NodeLayout';

export const DuckFactory = () => {
    return (
        <NodeLayout
            name="Duck factory"
            category="factory"
            icon={GiPlasticDuck}
            iconColor="#ffeb00"
        >
            <ResourceHandle type="source" resourceType="rubberDuck" />
            <ResourceHandle
                className="top-3 -translate-x-1/2"
                size="sm"
                type="target"
                resourceType="power"
            />
            <ResourceHandle size="sm" type="target" resourceType="rubber" />
            <ResourceHandle
                className="bottom-3 top-auto -translate-x-1/2"
                size="sm"
                type="target"
                resourceType="paint"
            />
        </NodeLayout>
    );
};
