export class HrdetailResponse{   
    isSuccess: boolean;
    message: string;
    statusCode: number;
    entities: HrdetailResponseData;
}

export class HrdetailResponseData{
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
      address: []
}