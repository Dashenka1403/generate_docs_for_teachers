export interface Discipline{
    id:number;
    title: string;
    status:'Новая' | 'В работе' | 'Утверждена'| 'Готова'| 'Завершена';
}

export interface Group{
    id: number;
    title:string;
    year:number;
    description?: string;
    disciplines: Array<Discipline>
}

export interface User {
    id: number;
    firstName: string;
    lastName: string;
    midleName?: string;
    login: string;
    password: string;
    role: 'admin' | 'zav_kaf' | 'ruk_OP'| 'teacher';
    groups: Array<Group>;
    workExperience: Array<Discipline>;
   
}

export interface TableTab {
    id: string;
    tabTitle: string;
}

export interface TableDataResults {
    id: number;
    competence: string;
    results:string;
}