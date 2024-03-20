import { JsonFormData } from "../components/json-form/json-form.component";

//export interface Questionary{
//    id: string;
//    question: string;
//    answer: string;
//}

export interface Visit{
    id: string;
    title: string;
    code: string;
    date: string;
    people_on_charge: string;
    geoposition: string;
    questionary: Questionary[];
    photos: string[];
}

export interface Campaign{
    id: string;
    title: string;
    code: string,
    resume: string;
    imageURL: string;
    date_start: string;
    date_end: string;
    people_on_charge: string;
    visits: Visit[];
}

export interface Quiz{
id:string;
quiz:JsonFormData;
}

export interface Questionary{
    id:string;
    data:string;
    }

export interface imgFile {
        name: string;
        filepath: string;
        size: number;
      }
      