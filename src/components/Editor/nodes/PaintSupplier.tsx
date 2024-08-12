import { GiPaintBucket } from 'react-icons/gi';

import { ResourceHandle } from '../handles/ResourceHandle';
import { NodeLayout } from './NodeLayout';

export const PaintSupplier = () => {
    return (
        <NodeLayout
            name="Paint supplier"
            category="supplier"
            icon={GiPaintBucket}
            iconColor="#8200ff"
        >
            <ResourceHandle type="source" resourceType="paint" />
        </NodeLayout>
    );
};
