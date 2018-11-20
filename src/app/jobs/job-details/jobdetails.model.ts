export class JobdetailResponse {
    isSuccess: boolean;
    message: string;
    statusCode: number;
    entities: JobdetailsResponseData;
}


export class JobdetailsResponseData {

    appliedCount: number;
    companyDesc: string;
    companyLogo: string;
    companyName: string;
    companyUrl: string;
    createdAt: string;
    createdBy: string;
    deleted: boolean;
    eligibility: string;
    employerId: string;
    eventDate: string;
    eventLocation: string;
    fromSalary: number;
    id: string;
    jobDescription: string;
    jobLocation: string;
    jobPostedDate: string;
    jobType: string;
    lastDateToApply: string;
    passoutYearBatch: string;
    position: string;
    postedJobNumber: number;
    requiredExperience: number;
    requiredSkillsMandatory: string;
    requiredSkillsPreferred: string
    specialNoteTitle1: string;
    specialNoteTitle2: string;
    specialNoteTitle3: string;
    specialNotes1: string;
    specialNotes2: string;
    specialNotes3: string;
    toSalary: number;
    totalRequirement: number;
    updatedAt: string;
    updatedBy: string;
    verifiedByAdmin: string;
    verifierName: string;

}