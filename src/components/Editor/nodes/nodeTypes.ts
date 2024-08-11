import { NodeTypes } from '@xyflow/react';

import { CoalPowerPlant } from './CoalPowerPlant';
import { CoalSupplier } from './CoalSupplier';
import { DuckFactory } from './DuckFactory';
import { Store } from './Store';

export const nodeTypes: NodeTypes = {
    coalPowerPlant: CoalPowerPlant,
    coalSupplier: CoalSupplier,
    duckFactory: DuckFactory,
    store: Store,
};
