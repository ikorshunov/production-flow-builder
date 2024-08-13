import { ModelState } from '../components/Editor/state/types';
import { readFromLocalStorage } from './helpers';

export const getModel = (id: string): Promise<ModelState> => {
    return readFromLocalStorage({ delayed: true }).then((data) => {
        return data[id];
    });
};
