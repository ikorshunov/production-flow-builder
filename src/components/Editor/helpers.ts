import { NodeType } from './nodes/types';

export const createNewNode = (
    type: Exclude<NodeType['type'], undefined>,
    position: { x: number; y: number }
): NodeType => {
    const nodeTemplate = {
        id: crypto.randomUUID(),
        position,
    };

    switch (type) {
        case 'coalSupplier':
        case 'rubberSupplier':
        case 'paintSupplier': {
            return {
                ...nodeTemplate,
                type,
                data: { supplyRate: 0 },
            };
        }
        case 'coalPowerPlant':
        case 'windPowerPlant':
            return {
                ...nodeTemplate,
                type,
                data: { power: 0 },
            };
        case 'duckFactory':
            return {
                ...nodeTemplate,
                type,
                data: { productionRate: 0 },
            };
        case 'defaultStore':
            return {
                ...nodeTemplate,
                type,
                data: {
                    stock: {
                        rubberDuck: 0,
                        power: 0,
                        coal: 0,
                        rubber: 0,
                        paint: 0,
                        any: 0, // total items
                    },
                },
            };
    }
};
