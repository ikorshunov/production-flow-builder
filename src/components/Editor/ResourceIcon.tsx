import { IconBaseProps, IconType } from 'react-icons';
import {
    GiCoalWagon,
    GiPaintBucket,
    GiPlasticDuck,
    GiWindTurbine,
} from 'react-icons/gi';
import { HiMiniInboxArrowDown } from 'react-icons/hi2';
import { ImPower } from 'react-icons/im';
import { SiGumtree } from 'react-icons/si';
import { GrStatusUnknown } from 'react-icons/gr';

import { HexColor } from 'src/types';
import { ResourceType } from './types';

type ResourceIconProps = IconBaseProps & {
    name: ResourceType;
};

export const ResourceIcon = (props: ResourceIconProps) => {
    let IconComponent: IconType;
    let iconColor: HexColor;

    switch (props.name) {
        case 'coal':
            IconComponent = GiCoalWagon;
            iconColor = '#000';
            break;
        case 'wind':
            IconComponent = GiWindTurbine;
            iconColor = '#0078ff';
            break;
        case 'paint':
            IconComponent = GiPaintBucket;
            iconColor = '#8200ff';
            break;
        case 'power':
            IconComponent = ImPower;
            iconColor = '#ffda00';
            break;
        case 'rubber':
            IconComponent = SiGumtree;
            iconColor = '#fff';
            break;
        case 'rubberDuck':
            IconComponent = GiPlasticDuck;
            iconColor = '#ffeb00';
            break;
        case 'any':
            IconComponent = HiMiniInboxArrowDown;
            iconColor = '#fff';
            break;
        case 'unknown':
            IconComponent = GrStatusUnknown;
            iconColor = '#fff';
            break;
    }

    return <IconComponent {...props} color={iconColor} />;
};
