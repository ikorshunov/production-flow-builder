import { readFromLocalStorage } from './helpers';

export const getModelList = (): Promise<string[]> => {
    return readFromLocalStorage({ delayed: true }).then((data) => {
        return Object.keys(data);
    });
};
