import { ResourceHandle } from '../ResourceHandle';
import { NodeLayout } from './NodeLayout';

export const Store = () => {
    return (
        <NodeLayout name="Store" category="store" iconName="any">
            <ResourceHandle type="target" resourceType="any" />
        </NodeLayout>
    );
};
