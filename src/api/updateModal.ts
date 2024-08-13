import { ModelState } from '../components/Editor/state/types';
import { readFromLocalStorage, writeToLocalStorage } from './helpers';

export const updateModel = (model: ModelState): Promise<ModelState> => {
    const data = readFromLocalStorage();
    const newData = {
        ...data,
        [model.id]: model,
    };

    return writeToLocalStorage(newData).then((data) => data[model.id]);
};
