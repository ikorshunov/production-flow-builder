import { useCallback, useContext } from 'react';

import { Context } from './EditorContext';

export const useCreateNode = () => {
    const {
        api: { createNode },
    } = useContext(Context);

    return useCallback<typeof createNode>(createNode, [createNode]);
};
