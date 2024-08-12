import { GiCoalWagon, GiPaintBucket, GiPlasticDuck } from 'react-icons/gi';
import { HiMiniInboxArrowDown } from 'react-icons/hi2';
import { ImPower } from 'react-icons/im';
import { SiGumtree } from 'react-icons/si';
import { IconBaseProps, IconType } from 'react-icons';

import { HexColor } from 'src/types';
import { ResourceType } from '../types';

type HandleIconProps = IconBaseProps & {
    name: ResourceType;
};

export const HandleIcon = (props: HandleIconProps) => {
    let IconComponent: IconType;
    let iconColor: HexColor;

    switch (props.name) {
        case 'coal':
            IconComponent = GiCoalWagon;
            iconColor = '#000';
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
    }

    return <IconComponent {...props} color={iconColor} />;
};
