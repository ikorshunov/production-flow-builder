import { CSSProperties, PropsWithChildren, useMemo } from 'react';

import { categoryLayoutConfigMap } from '../constants';
import { NodeCategory, ResourceType } from '../types';
import { ResourceIcon } from '../ResourceIcon';

type NodeLayoutProps = PropsWithChildren<{
    name: string;
    category: NodeCategory;
    iconName: ResourceType;
}>;

export const NodeLayout = (props: NodeLayoutProps) => {
    const { children, name, category, iconName } = props;

    const {
        nodeColor,
        icon: CategoryIcon,
        iconColor: categoryIconColor,
    } = categoryLayoutConfigMap[category];

    const nodeStyle: CSSProperties = useMemo(
        () => ({
            backgroundColor: nodeColor,
        }),
        [nodeColor]
    );

    return (
        <div
            className="p-7 rounded-lg flex flex-col items-center gap-2"
            style={nodeStyle}
        >
            <div>
                <ResourceIcon
                    name={iconName}
                    size="40"
                    className="drop-shadow-md"
                />
                <CategoryIcon
                    className="absolute left-1/2 -translate-x-1/2 top-2 drop-shadow-md"
                    color={categoryIconColor}
                    size="15"
                />
            </div>
            <div className="text-xs text-center max-w-20 capitalize">
                {name}
            </div>
            {children}
        </div>
    );
};
