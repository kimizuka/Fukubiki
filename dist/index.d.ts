declare class Fukubiki {
    private maxLength;
    private length;
    private pod;
    private autoReset;
    private callback;
    constructor(length?: number, param?: {
        autoReset?: boolean;
        callback?: () => void;
    });
    reset(): void;
    select(): number | null;
}
export default Fukubiki;
