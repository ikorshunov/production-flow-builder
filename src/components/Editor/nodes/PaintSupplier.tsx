import { GiPaintBucket } from 'react-icons/gi';

import { NodeLayout } from './NodeLayout';
import { ResourceHandle } from '../handles/ResourceHandle';

export const PaintSupplier = () => {
    return (
        <NodeLayout
            name="Paint supplier"
            category="supplier"
            mainIcon={GiPaintBucket}
            mainIconColor="#8200ff"
        >
            <ResourceHandle type="source" resourceType="paint" />
        </NodeLayout>
    );
};
