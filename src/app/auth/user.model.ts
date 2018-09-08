export interface LoginRequest {
    username: string;
    password: string;
}

export interface LoginResponse {
    isSuccess: boolean;
    message: string;
    statusCode: number;
    entity: LoginResponseData;
}

export interface LoginResponseData {
    id: string,
    updatedBy: string,
    createdBy: string,
    createdAt: string,
    updatedAt: string,
    deleted: boolean,
    emailId: string,
    password: string,
    token: string,
    lastLogin: any,
    alternateEmailId: string,
    companyName: string,
    contactPersonName: string,
    designation: string,
    industryType: string,
    employerType: string,
    mobileNumber: string,
    alternateMobileNumber: string,
    companyLogo: string,
    companyRegistrationDate: string,
    companyRegistrationNumber: string,
    verified: boolean,
    gstiNumber: string,
    aboutCompany: string,
    officeAddress: string,
    emailVerified: boolean,
    mobileVerified: boolean
}
