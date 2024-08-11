import {
    Handle as ReactFlowHandle,
    HandleProps as ReactFlowHandleProps,
} from '@xyflow/react';
import classNames from 'classnames';

type HandleProps = ReactFlowHandleProps & {
    size?: 'sm' | 'md';
    icon?: JSX.Element;
};

export const Handle = (props: HandleProps) => {
    const { size = 'md', icon, ...restProps } = props;
    const isMd = size === 'md';
    const isSm = size === 'sm';
    const className = classNames(
        'rounded-md',
        'bg-slate-400',
        {
            'w-7': isMd,
            'w-6': isSm,
            'h-7': isMd,
            'h-6': isSm,
        },
        props.className
    );

    return (
        <ReactFlowHandle {...restProps} className={className}>
            {icon && (
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 drop-shadow-md pointer-events-none">
                    {icon}
                </div>
            )}
        </ReactFlowHandle>
    );
};
