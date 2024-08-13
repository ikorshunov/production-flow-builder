import { ModelState } from 'src/components/Editor/types';
import { readFromLocalStorage, writeToLocalStorage } from './helpers';

export const createModel = (): Promise<ModelState> => {
    const data = readFromLocalStorage();
    const newModelId = crypto.randomUUID();
    const newModel: ModelState = {
        id: newModelId,
        editorState: {
            nodes: [],
            edges: [],
        },
        nodeState: {},
    };
    const newData = {
        ...data,
        [newModelId]: newModel,
    };

    return writeToLocalStorage(newData).then((data) => data[newModelId]);
};
