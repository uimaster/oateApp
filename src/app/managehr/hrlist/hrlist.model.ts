export class HrlistResponse{   
    isSuccess: boolean;
    message: string;
    statusCode: number;
    entities: HrlistResponseData;
}

export class HrlistResponseData{
      id: string;
      updatedBy: string;
      createdBy: string;
      createdAt: string;
      updatedAt: string;
      deleted: boolean;
      password: string;
      role: string;
      email: string;
      token: string;
      lastLogin: string;
      fname: string;
      lname: string;
      address: any[];
}