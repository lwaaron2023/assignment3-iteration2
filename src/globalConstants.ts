export type request = {
    firstName: string,
    lastName: string,
    priority: string,
    departmentName: string,
    hospitalLocation: string,
    requestedEquipment: string,
    status: string,
}

export interface callback {
    value:any,
    func:any,
}

export interface inputComponent{
    call:callback,
    id:string,
    value?:string,
    text?:string,
    type?:string,
}

export interface selectComponent{
    call:callback,
    id:string,
    values:string[],
    texts:string[],
    selected:boolean[],
    mainText?:string,
}

export interface menu{
    call:callback,
    name:string,
    type:string,
    ids:string[],
    values:string[],
    texts:string[],
}

export interface menuComponent{
    call:callback,
    menu:menu,
    value:string,
    id:string,
    text:string,
    type:string
}