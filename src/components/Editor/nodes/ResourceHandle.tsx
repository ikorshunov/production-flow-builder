import {
    Position,
    Handle as ReactFlowHandle,
    HandleProps as ReactFlowHandleProps,
} from '@xyflow/react';
import { GiCoalWagon, GiPaintBucket, GiPlasticDuck } from 'react-icons/gi';
import { HiMiniInboxArrowDown } from 'react-icons/hi2';
import { ImPower } from 'react-icons/im';
import { SiGumtree } from 'react-icons/si';
import classNames from 'classnames';

import { HandleId, ResourceType } from './types';

type ResourceHandleProps = Omit<ReactFlowHandleProps, 'id' | 'position'> & {
    resourceType: ResourceType;
    size?: 'sm' | 'md';
};

function getHandleClassName(params: {
    size: 'sm' | 'md';
    customClassName?: string;
}) {
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

function getHandleIcon(params: { resourceType: ResourceType }) {
    switch (params.resourceType) {
        case 'coal':
            return <GiCoalWagon color="black" />;
        case 'paint':
            return <GiPaintBucket color="#8200ff" />;
        case 'power':
            return <ImPower color="#ffda00" />;
        case 'rubber':
            return <SiGumtree color="white" />;
        case 'rubberDuck':
            return <GiPlasticDuck color="#ffeb00" />;
        case 'any':
            return <HiMiniInboxArrowDown color="white" />;
    }
}

export const ResourceHandle = (props: ResourceHandleProps) => {
    const {
        size = 'md',
        type,
        resourceType,
        className: customClassName,
        ...restProps
    } = props;
    const className = getHandleClassName({ size, customClassName });
    const position = type === 'source' ? Position.Right : Position.Left;
    const id: HandleId = `${resourceType}-${type}`;
    const icon = getHandleIcon({ resourceType });

    return (
        <ReactFlowHandle
            {...restProps}
            id={id}
            type={type}
            position={position}
            className={className}
        >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 drop-shadow-md pointer-events-none">
                {icon}
            </div>
        </ReactFlowHandle>
    );
};
