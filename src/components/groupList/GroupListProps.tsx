import { Discipline, Group } from "../../types/models";

export interface GroupListProps {
    
    groupList:Array<Group>;
    onItemClick?:(id:number) => void; 
    disciplineList?:Array<Discipline>;  
}