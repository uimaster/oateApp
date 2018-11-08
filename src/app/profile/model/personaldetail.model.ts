export class ResponsePersonalDetail{
    isSuccess: boolean;
    message: string;
    statusCode: number;
    entity: PersonalResponseData;
}

export class PersonalResponseData{
    id: any;
    updatedBy: any;
    createdBy: string;
    createdAt: string;
    updatedAt: string;
    deleted: boolean;
    emailId: string;
    password: any;
    token: any;
    lastLogin: number;
    alternateEmailId: string;
    companyName: string;
    contactPersonName: string;
    designation: string;
    industryType: string;
    employerType: string;
    mobileNumber: number;
    alternateMobileNumber: number;
    companyLogo: any;
    companyRegistrationDate: any;
    companyRegistrationNumber: string;
    verified: boolean;
    companyUrl: string;
    gstiNumber: any;
    aboutCompany: string;
    officeAddress: {
      address: string;
      city: string;
      state: string;
      pincode: number;
      landmark: string;
      country: string;
    };
    officeLandline: number;
    mobileVerified: boolean;
    emailVerified: boolean;
}