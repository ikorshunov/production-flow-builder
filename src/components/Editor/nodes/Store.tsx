import { HiMiniInboxArrowDown } from 'react-icons/hi2';

import { ResourceHandle } from '../handles/ResourceHandle';
import { NodeLayout } from './NodeLayout';

export const Store = () => {
    return (
        <NodeLayout
            name="Store"
            category="store"
            icon={HiMiniInboxArrowDown}
            iconColor="#fff"
        >
            <ResourceHandle type="target" resourceType="any" />
        </NodeLayout>
    );
};
