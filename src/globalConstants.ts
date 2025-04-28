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
    value:request|undefined,
    func:any,
}