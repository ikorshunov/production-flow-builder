import {
    Position,
    Handle as ReactFlowHandle,
    HandleProps as ReactFlowHandleProps,
} from '@xyflow/react';
import classNames from 'classnames';

import { ResourceType } from '../types';
import { HandleId } from './types';
import { HandleIcon } from './HandleIcon';

type ResourceHandleProps = Omit<ReactFlowHandleProps, 'id' | 'position'> & {
    resourceType: ResourceType;
    size?: 'sm' | 'md';
};

function getClassName(params: { size: 'sm' | 'md'; customClassName?: string }) {
    const { size, customClassName } = params;
    const isMd = size === 'md';
    const isSm = size === 'sm';

    return classNames(
        'rounded-md',
        'bg-slate-400',
        {
            'w-7': isMd,
            'w-6': isSm,
            'h-7': isMd,
            'h-6': isSm,
        },
        customClassName
    );
}

export const ResourceHandle = (props: ResourceHandleProps) => {
    const {
        size = 'md',
        type,
        resourceType,
        className: customClassName,
        ...restProps
    } = props;
    const className = getClassName({ size, customClassName });
    const position = type === 'source' ? Position.Right : Position.Left;
    const id: HandleId = `${resourceType}-${type}`;

    return (
        <ReactFlowHandle
            {...restProps}
            id={id}
            type={type}
            position={position}
            className={className}
        >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 drop-shadow-md pointer-events-none">
                <HandleIcon name={resourceType} />
            </div>
        </ReactFlowHandle>
    );
};
