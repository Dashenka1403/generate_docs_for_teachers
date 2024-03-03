import { PropsWithChildren } from "react";
import { TableTab } from "../../types/models";

export interface InfoTableProps extends PropsWithChildren {
    tabs:Array<TableTab>
    onTabClick?:(id: string) => void;
    className?: string;
}


export type { TableTab };

