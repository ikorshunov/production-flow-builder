import { HTMLAttributes } from 'react';

import { NodeCategory } from '../types';
import { categoryLayoutConfigMap } from '../constants';

type ToolbarNodeLayoutProps = HTMLAttributes<HTMLDivElement> & {
    categoryName: NodeCategory;
};

export const ToolbarNode = (props: ToolbarNodeLayoutProps) => {
    const { categoryName, ...restProps } = props;
    const {
        icon: Icon,
        iconColor,
        nodeColor,
    } = categoryLayoutConfigMap[categoryName];

    return (
        <div
            {...restProps}
            style={{
                backgroundColor: nodeColor,
            }}
            className="p-3 rounded-md bg-neutral-200 cursor-grab"
        >
            <Icon
                className="drop-shadow-md m-auto"
                color={iconColor}
                size="20"
            />
            <div className="capitalize text-xs">{categoryName}</div>
        </div>
    );
};
