export interface ISmartphone{
    credit: number;
    price?: number;
    phoneNumber?:number
    numberOfCall:number;
    Registry:{id:number, duration:number, dateHourCall:string}[];

    topUp(money: number): void;

    call(duration: number): void;

    get callNumber404(): string;

    get callNumber(): string;

    resetCalls(): void;

    showRegistry():{id:number, duration:number, dateHourCall:string}[]
}

