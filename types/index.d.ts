/* eslint-disable no-unused-vars */

declare type SearchParamProps = {
    params: { [key: string]: string };
    searchParams: { [key: string]: string | string[] | undefined };
};

declare type Gender = "男" | "女";
declare type Status = "pending" | "scheduled" | "cancelled";


declare interface LoginUserParams {
    phone: string;
    password: string
}

declare interface CreateUserParams {
    name: string;
    email: string;
    phone: string;
}

declare interface User extends CreateUserParams {
    $id: string;
}

declare interface RegisterUserParams extends CreateUserParams {
    // userId: string;
    birthDate: Date;
    gender: Gender;
    address: string;
    occupation: string;
    emergencyContactName: string;
    emergencyContactNumber: string;
    primaryPhysician: string;
    // insuranceProvider: string;
    // insurancePolicyNumber: string;
    allergies?: string | undefined;
    currentMedication?: string | undefined;
    familyMedicalHistory?: string | undefined;
    personalMedicalHistory?: string | undefined;
    identificationType?: string | undefined;
    identificationNumber?: string | undefined;
    // identificationDocument?: FormData | undefined;
    privacy: boolean;
}

declare type CreateAppointmentParams = {
    userId: string | undefined;
    patientId: string | undefined;
    doctorId: number | undefined;
    reason: string | undefined;
    schedule: Date | undefined;
    status: Status;
    note: string | undefined;
};

declare type AddpatientQueueParams = {
    id: string | undefined;
    doctorId: string | undefined;
    name: string | undefined;
    reason: string | undefined;
};

declare type UpdateAppointmentParams = {
    appointmentId: string;
    userId: string;
    appointment: Appointment;
    type: string;
};