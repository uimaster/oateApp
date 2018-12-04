export class JobdescResponse {

    isSuccess: boolean;
    message: string;
    statusCode: number;
    entity: JobdescResponseData;

}
export class JobdescResponseData {

    id: any;
    appliedCount: number;
    companyDesc: string;
    companyLogo: string;
    companyName: string;
    companyUrl: string;
    createdAt: string;
    createdBy: string;
    deleted: boolean;
    eligibility: Array<string>;
    employerId: string;
    eventDate: any;
    eventLocation: string;
    fromSalary: number;
    toSalry: number;
    jobDescription:  Array<string>;
    jobLocation: Array<string>;
    jobType: string;
    lastDateToApply: any;
    passoutYearBatch: string;
    position: string;
    postedJobDate: any;
    updatedBy: string;
    updatedAt: string;
    requiredExperience: number;
    postedJobNumber: number;
    requiredSkillsMandatory: Array<string>;
    requiredSkillsPreferred: Array<string>;
    specialNoteTitle1: string;
    specialNoteTitle2: string;
    specialNoteTitle3: string;
    specialNotes1: string;
    specialNotes2: string;
    specialNotes3: string;
    totalRequirement: number;
    verifiedByAdmin: boolean;
    verifierName: string;
}
