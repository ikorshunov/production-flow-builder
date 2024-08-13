import { IconType } from 'react-icons';
import { ImPower } from 'react-icons/im';
import { HiArrowRightEndOnRectangle } from 'react-icons/hi2';
import { MdFactory } from 'react-icons/md';
import { IoStorefrontSharp } from 'react-icons/io5';

import { HexColor } from 'src/types';
import { NodeCategory } from './types';

export const PROJECT_NAME = 'productionFlowBuilder';

export const categories: NodeCategory[] = [
    'supplier',
    'power',
    'factory',
    'store',
];

export const categoryLayoutConfigMap: Record<
    NodeCategory,
    {
        name: string;
        editText: string;
        nodeColor: HexColor;
        icon: IconType;
        iconColor: HexColor;
    }
> = {
    supplier: {
        name: 'Supplies',
        editText: 'Choose resource this node will be supplying',
        nodeColor: '#d6ff8f',
        icon: HiArrowRightEndOnRectangle,
        iconColor: '#3b8fff',
    },
    power: {
        name: 'Power',
        editText: 'Choose energy source',
        nodeColor: '#ffb392',
        icon: ImPower,
        iconColor: '#ffda00',
    },
    factory: {
        name: 'Factories',
        editText: 'Choose what this factory will be producing',
        nodeColor: '#c0ebff',
        icon: MdFactory,
        iconColor: '#9b5151',
    },
    store: {
        name: 'Stores',
        editText: '',
        nodeColor: '#f8ccff',
        icon: IoStorefrontSharp,
        iconColor: '#dc029b',
    },
};

export const categoryNodeOptions = {
    supplier: ['coal', 'paint', 'rubber'],
    power: ['coal', 'wind'],
    factory: ['rubberDuck'],
    store: ['any'],
} as const;
