import { ModelState } from 'src/components/Editor/types';
import { PROJECT_NAME } from '../components/Editor/constants';

export type State = Record<string, ModelState>;

const STORAGE_KEY = `${PROJECT_NAME}Data`;

const getRandomInt = (min: number, max: number) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Let's have an artificial delay to have an impression of a real API
const withDelay = <T>(func: () => T) => {
    return new Promise<T>((resolve) => {
        setTimeout(
            () => {
                const result = func();
                resolve(result);
            },
            getRandomInt(0, 700)
        );
    });
};

export function readFromLocalStorage(): State;
export function readFromLocalStorage(params: {
    delayed: boolean;
}): Promise<State>;
export function readFromLocalStorage(params?: { delayed: boolean }) {
    const dataString = localStorage.getItem(STORAGE_KEY);
    const data = !dataString ? {} : (JSON.parse(dataString) as State);

    if (params && params.delayed) {
        return withDelay(() => data);
    }

    return data;
}

export const writeToLocalStorage = (data: State) => {
    return withDelay(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
        return data;
    });
};
