import { createContext, PropsWithChildren } from 'react';
import { State } from './types';

type EditorContextProps = PropsWithChildren<{
    modelId: string;
}>;

const initialContextValue: State = {};
const Context = createContext<State>(initialContextValue);

export const EditorContext = (props: EditorContextProps) => {
    const { children } = props;

    return (
        <Context.Provider value={initialContextValue}>
            {children}
        </Context.Provider>
    );
};
