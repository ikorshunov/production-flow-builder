import { useQuery } from '@tanstack/react-query';

import { getModel } from 'src/api/getModel';
import { PROJECT_NAME } from '../constants';

export const getModelQueryKey = (modelId: string) => {
    return [PROJECT_NAME, 'model', modelId];
};

export const useModelQuery = (modelId: string) => {
    return useQuery({
        queryKey: getModelQueryKey(modelId),
        queryFn: () => getModel(modelId),
    });
};
