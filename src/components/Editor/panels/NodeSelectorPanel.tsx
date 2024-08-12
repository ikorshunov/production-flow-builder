import { Panel } from '@xyflow/react';
import {
    GiCoalWagon,
    GiPaintBucket,
    GiPlasticDuck,
    GiWindTurbine,
} from 'react-icons/gi';
import { HiMiniInboxArrowDown } from 'react-icons/hi2';
import { SiGumtree } from 'react-icons/si';

import { ToolbarNodeLayout } from '../nodes/ToolbarNodeLayout';
import { ToolbarLayout } from './ToolbarLayout';

export const NodeSelectorPanel = () => {
    return (
        <Panel className="flex gap-5">
            <ToolbarLayout category="supplier">
                <ToolbarNodeLayout icon={GiCoalWagon} />
                <ToolbarNodeLayout icon={SiGumtree} iconColor="#fff" />
                <ToolbarNodeLayout icon={GiPaintBucket} iconColor="#8200ff" />
            </ToolbarLayout>
            <ToolbarLayout category="power">
                <ToolbarNodeLayout icon={GiCoalWagon} />
                <ToolbarNodeLayout icon={GiWindTurbine} iconColor="#0078ff" />
            </ToolbarLayout>
            <ToolbarLayout category="factory">
                <ToolbarNodeLayout icon={GiPlasticDuck} iconColor="#ffeb00" />
            </ToolbarLayout>
            <ToolbarLayout category="store">
                <ToolbarNodeLayout
                    icon={HiMiniInboxArrowDown}
                    iconColor="#fff"
                />
            </ToolbarLayout>
        </Panel>
    );
};
