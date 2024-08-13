import { NodeTypes } from '@xyflow/react';

import { Supplier } from './nodes/Supplier';
import { PowerPlant } from './nodes/PowerPlant';
import { Factory } from './nodes/Factory';
import { Store } from './nodes/Store';

export const nodeTypes: NodeTypes = {
    supplier: Supplier,
    power: PowerPlant,
    factory: Factory,
    store: Store,
};
