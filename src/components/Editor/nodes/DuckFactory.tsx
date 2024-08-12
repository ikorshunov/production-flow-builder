import { MdFactory } from 'react-icons/md';
import { GiPlasticDuck } from 'react-icons/gi';

import { NodeLayout } from './NodeLayout';
import { ResourceHandle } from './ResourceHandle';

export const DuckFactory = () => {
    return (
        <NodeLayout
            name="Duck factory"
            mainIcon={MdFactory}
            mainIconColor="#9b5151"
            auxIcon={GiPlasticDuck}
            auxIconColor="#ffeb00"
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
