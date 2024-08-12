import { CSSProperties, PropsWithChildren, useMemo } from 'react';
import { IconType } from 'react-icons';
import { NodeCategory } from './types';
import { HexColor } from '../types';

type NodeLayoutProps = PropsWithChildren<{
    name: string;
    category: NodeCategory;
    mainIcon: IconType;
    mainIconColor?: HexColor;
    auxIcon?: IconType;
    auxIconColor?: HexColor;
}>;

const categoryToColorMap: Record<NodeCategory, HexColor> = {
    supplier: '#d6ff8f',
    power: '#ffb392',
    factory: '#c0ebff',
    store: '#f8ccff',
};

export const NodeLayout = (props: NodeLayoutProps) => {
    const {
        children,
        name,
        category,
        mainIcon: MainIcon,
        mainIconColor = '#000',
        auxIcon: AuxIcon,
        auxIconColor = '#000',
    } = props;
    const nodeStyle: CSSProperties = useMemo(
        () => ({
            backgroundColor: categoryToColorMap[category],
        }),
        [category]
    );

    return (
        <div
            className="p-8 rounded-lg flex flex-col items-center gap-2 bg-neutral-300"
            style={nodeStyle}
        >
            <div>
                <MainIcon
                    className="drop-shadow-md"
                    color={mainIconColor}
                    size="40"
                />
                {AuxIcon && (
                    <AuxIcon
                        className="absolute left-1/2 -translate-x-1/2 top-1 drop-shadow-md"
                        color={auxIconColor}
                        size="20"
                    />
                )}
            </div>
            <div className="text-xs text-center max-w-20">{name}</div>
            {children}
        </div>
    );
};
