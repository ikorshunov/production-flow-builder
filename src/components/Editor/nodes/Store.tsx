import { IoStorefrontSharp } from 'react-icons/io5';

import { NodeLayout } from './NodeLayout';
import { ResourceHandle } from './ResourceHandle';

export const Store = () => {
    return (
        <NodeLayout
            name="Store"
            mainIcon={IoStorefrontSharp}
            mainIconColor="#dc029b"
        >
            <ResourceHandle type="target" resourceType="any" />
        </NodeLayout>
    );
};
