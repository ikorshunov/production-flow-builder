import { CSSProperties, PropsWithChildren, useMemo } from 'react';
import { IconType } from 'react-icons';

import { HexColor } from 'src/types';
import { categoryLayoutConfigMap } from '../constants';
import { NodeCategory } from '../types';

type NodeLayoutProps = PropsWithChildren<{
    name: string;
    category: NodeCategory;
    icon: IconType;
    iconColor?: HexColor;
}>;

export const NodeLayout = (props: NodeLayoutProps) => {
    const { children, name, category, icon: Icon, iconColor = '#000' } = props;

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
                <Icon className="drop-shadow-md" color={iconColor} size="40" />
                <CategoryIcon
                    className="absolute left-1/2 -translate-x-1/2 top-2 drop-shadow-md"
                    color={categoryIconColor}
                    size="15"
                />
            </div>
            <div className="text-xs text-center max-w-20">{name}</div>
            {children}
        </div>
    );
};
