declare class Signal {
    signal: {
        tipo: string;
        data: {};
    };
    resetSignal(): void;
    sendSignal(tipo: string, data?: any): void;
}
declare const sinalizador: Signal;
export default sinalizador;
