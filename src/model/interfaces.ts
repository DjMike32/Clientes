type Gender = "Male" | "Female";
//En caso que sean tipos muy cortos

export interface Usuario{
    id: string;
    name: string;
    gender: Gender;
    estado?: string;
    carreras: Array<string>;
    estudios:string[];
};
