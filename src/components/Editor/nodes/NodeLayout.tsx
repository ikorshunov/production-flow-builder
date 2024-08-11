import { PropsWithChildren } from 'react';
import { IconType } from 'react-icons';

type NodeLayoutProps = PropsWithChildren<{
    name: string;
    mainIcon: IconType;
    mainIconColor?: `#${string}`;
    auxIcon?: IconType;
    auxIconColor?: `#${string}`;
}>;

export const NodeLayout = (props: NodeLayoutProps) => {
    const {
        children,
        name,
        mainIcon: MainIcon,
        mainIconColor = '#000',
        auxIcon: AuxIcon,
        auxIconColor = '#000',
    } = props;
    return (
        <div className="p-8 rounded-lg flex flex-col items-center gap-2 bg-neutral-300">
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
