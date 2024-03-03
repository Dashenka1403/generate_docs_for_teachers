import { TableDataResults } from "../../types/models";

export interface TitleColumn {
    id: string;
    label: string;
    action: () => void;
}

export interface TableProps  {
    items: Array<TableDataResults>;
    // titleColumn ?: string;
    open?:boolean;
    className?: string;
    
}
