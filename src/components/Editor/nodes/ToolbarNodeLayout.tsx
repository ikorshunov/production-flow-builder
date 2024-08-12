import { HTMLAttributes } from 'react';
import { IconType } from 'react-icons';

import { HexColor } from 'src/types';

type ToolbarNodeLayoutProps = HTMLAttributes<HTMLDivElement> & {
    icon: IconType;
    iconColor?: HexColor;
};

export const ToolbarNodeLayout = (props: ToolbarNodeLayoutProps) => {
    const { icon: Icon, iconColor = '#000', ...restProps } = props;

    return (
        <div
            {...restProps}
            className="p-3 rounded-md bg-neutral-200 cursor-grab"
        >
            <Icon className="drop-shadow-md" color={iconColor} size="20" />
        </div>
    );
};
