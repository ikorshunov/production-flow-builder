import { GiPaintBucket } from 'react-icons/gi';

import { NodeLayout } from './NodeLayout';
import { ResourceHandle } from './ResourceHandle';

export const PaintSupplier = () => {
    return (
        <NodeLayout
            name="Paint supplier"
            mainIcon={GiPaintBucket}
            mainIconColor="#8200ff"
        >
            <ResourceHandle type="source" resourceType="paint" />
        </NodeLayout>
    );
};
