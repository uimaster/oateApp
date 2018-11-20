export class JobdetailResponse{

    isSuccess: boolean;
    message: string;
    statusCode: number;
    entities: HrJobdetailResponseData;
    
}
export class HrJobdetailResponseData{

    id: any;
    updatedBy: string;
    createdBy: string;
    createdAt: string;
    updatedAt: string;
    deleted: boolean;
    employerId: string;
    companyName: string;
    position: string;
    jobType: string;
    jobLocation: string;
    fromSalary: number;
    toSalry: number;
    requiredExperience: number;
    eventDate: any;
    eventLocation: string;
    lastDateToApply: any;
    companyUrl: string;
    companyLogo: string;
    companyDesc: string;
    verifiedByAdmin: boolean;
    verifierName: string;
    postedJobDate: any;
    postedJobNumber: number;
    eligibility: string;
    requiredSkillsMandatory: string;
    requiredSkillsPreferred: string;
    jobDescription: string;
    specialNoteTitle1: string;
    specialNotes1: string;
    specialNoteTitle2: string;
    specialNotes2: string;
    specialNoteTitle3: string;
    specialNotes3: string;
    passoutYearBatch: string;
    appliedCount: number;
    totalRequirement: number;

}