

export interface ObjectType<T> {
    [key:string]: T
};

export function assert(value:any, message:string) {
    if (!value) {
        const valueName = Object.keys({value})[0];
        throw (`Assertion Error: ${valueName} ${message}` || `Assertion ${valueName} failed`);
    }
}

export function castExists<T>(value: T, text:string) {
    assert(value, text); 
    return value;
    }
