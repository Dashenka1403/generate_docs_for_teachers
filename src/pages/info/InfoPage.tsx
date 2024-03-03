import { FC, useEffect, useState } from "react";
import { Layout } from "../../components/layouts";
import './infoPageStyles.scss';
import {  Discipline, Group,  TableDataResults } from "../../types/models";
import { DisciplineList, GroupList, InfoTable } from "../../components";
import { TableTab } from "../../components/infoTable/infoTableProps";
import { Table } from "../../components/table";

const fakegroupData = 
[
   {id: 1, title: 'ИВТ', year: 2020, disciplines: [{id: 1, title: 'Управление данными', status: 'Новая'},{id: 2, title: 'Разработка пользовательских интерфейсов', status: 'Готова'}, {id: 3, title: 'Профессиональная этика', status: 'Утверждена'} ]},
   {id: 2, title: 'ИСТ', year: 2020,disciplines: [{id: 1, title: 'Проектная деятельность', status: 'Готова'},{id: 2, title: 'Разработка автоматизированных систем', status:'Новая'}] },
   {id: 3, title: 'ПО', year: 2020, disciplines: []},
   {id: 4, title: 'ВМ', year: 2020, disciplines: []},
   {id: 5, title: 'АП', year: 2020, disciplines: []},
   {id: 6, title: 'ИБ', year: 2020, disciplines: []},
   {id: 7, title: 'СИБ', year: 2020, disciplines: []},
   {id: 8, title: 'АБВ', year: 2020, disciplines: []},
   {id: 9, title: 'ГДЕ', year: 2020, disciplines: []},
   {id: 10, title: 'ЖЗИ', year: 2020, disciplines: []},
   {id: 11, title: 'КЛМ', year: 2020, disciplines: []},
   {id: 12, title: 'ПО', year: 2020, disciplines: []},
   {id: 13, title: 'ВМ', year: 2020, disciplines: []},
   {id: 14, title: 'АП', year: 2020, disciplines: []},
   {id: 15, title: 'ИБ', year: 2020, disciplines: []},
//    {id: 16, title: 'СИБ', year: 2020, disciplines: []},
//    {id: 17, title: 'АБВ', year: 2020, disciplines: []},
//    {id: 18, title: 'ГДЕ', year: 2020, disciplines: []},
//    {id: 19, title: 'ЖЗИ', year: 2020, disciplines: []},
//    {id: 20, title: 'КЛМ', year: 2020, disciplines: []},
   
] as Array<Group> ;

const tableResults = [{id: 1, competence: 'Компетенция', results: 'Результаты'}, {id: 2, competence:'ОПК-1', results : 'row 1 cell 2' }, 
 {id: 3, competence:'ОПК-2', results : 'row 1 cell 2' },
 {id: 3, competence:'ОПК-2', results : 'row 2 cell 2' },
 {id: 3, competence:'ОПК-2', results : 'row 2 cell 2' },
 {id: 3, competence:'ОПК-2', results : 'row 2 cell 2' },
 {id: 3, competence:'ОПК-2', results : 'row 2 cell 2' },
 {id: 3, competence:'ОПК-2', results : 'row 2 cell 2' },
 {id: 3, competence:'ОПК-2', results : 'row 2 cell 2' },
 {id: 3, competence:'ОПК-2', results : 'row 2 cell 2' },
 {id: 3, competence:'ОПК-2', results : 'row 2 cell 2' },
 {id: 3, competence:'ОПК-2', results : 'row 2 cell 2' },
 {id: 3, competence:'ОПК-2', results : 'row 2 cell 2' },
 {id: 3, competence:'ОПК-2', results : 'row 2 cell 2' },
 {id: 3, competence:'ОПК-2', results : 'row 2 cell 2' },
 {id: 3, competence:'ОПК-2', results : 'row 2 cell 2' },
//  {id: 3, competence:'ОПК-2', results : 'row 2 cell 2' },
//  {id: 3, competence:'ОПК-2', results : 'row 2 cell 2' },
//  {id: 3, competence:'ОПК-2', results : 'row 2 cell 2' },
//  {id: 3, competence:'ОПК-2', results : 'row 2 cell 2' },
//  {id: 3, competence:'ОПК-2', results : 'row 2 cell 2' },

 ] as Array<TableDataResults>

 
export const InfoPage: FC =  () =>{

    const [groupData, setGroupData] = useState<Array<Group>>([]);
    const [disciplineData, setDisciplineData] = useState<Array<Discipline>>([]);
    const [selectedGroupId, setSelectedGroupId] = useState<number>();
    const [selectedGroup, setSelectedGroup] = useState<Group>();
    const [selectedDiscipline, setSelectedDiscipline] = useState<Discipline>();
    const [selectedDisciplineId, setSelectedDisciplineId] = useState<number>();
    const [showDisciplineList, setShowDisciplineList] = useState(false);
    const [showTitle, setShowTitle] = useState(true);
    const [showTable, setShowTable] = useState(false);
    const [showTabRes, setShowTabRes] = useState(false);
    
    const titleInfo = 'Выберите дисциплину для просмотра';

    useEffect(() => {
        setGroupData(fakegroupData);
            if(Array.isArray(fakegroupData) && fakegroupData.length) {
                 setSelectedGroupId(undefined);
            }
    }, []);

    useEffect(() => {
        const selectedGroup = groupData.find(g => g.id === selectedGroupId);
       // console.log(selectedGroup)
        const selectedDiscipline = disciplineData.find(d => d.id === selectedDisciplineId);
        setDisciplineData(selectedGroup ? selectedGroup.disciplines : []);
        setSelectedDiscipline(undefined);
       // console.log(selectedDiscipline)
        
    }, [groupData, selectedGroupId, selectedDisciplineId]);

    const groupSelectedHandler = (id: number) => {
        setSelectedGroupId(id);
        setShowDisciplineList(true);
        setSelectedDiscipline(undefined)
        if(selectedDiscipline == undefined )
        {setShowTitle(true);
        setShowTable(false)}
        const group = groupData.find(g => g.id === id);
        setSelectedGroup(group);
        //console.log(selectedDiscipline)
       // console.log(selectedGroup)
    }



    const disciplineSelectedHandler = (id?: number) => {
        // const _id: number | undefined = !id ? undefined : +id;
        setSelectedDisciplineId(id);
        setShowTitle(false);
        setShowTable(true);
        setShowTabRes(true);

        
        const discipline =disciplineData.find(g => g.id === id);
        setSelectedDiscipline(discipline);
        // console.log(selectedDiscipline)
    }

    const tabSelectedHandler = (id:string) => {
        if(id!== 'results')
        setShowTabRes(false);
        else 
        setShowTabRes(true);
    }

    const infoTableTab: TableTab = {
        id: 'info',
        tabTitle: 'Информация'
    };

    const resultsTableTab: TableTab =  {
        id: 'results',
        tabTitle: 'Результаты'
    };

    
    return(
        <Layout title="Генерация документации для преподавателей" >
          <div className='info-page'>  
            <div className='info-page__group-info'>
                <div className='info-page__group-info__title'>Мои дисциплины</div>
                <DisciplineList  open = {showDisciplineList} disciplineList={disciplineData} onItemClick={(id) => disciplineSelectedHandler(id)}/>
                <GroupList  groupList={fakegroupData}  onItemClick={(id) => groupSelectedHandler(id)} />   
            </div>
            <div className='info-page__main-info'>
            {showTitle&&(<div >{titleInfo}</div>)}
           {showTable&& (<InfoTable  tabs={[infoTableTab, resultsTableTab]} onTabClick={(id) => tabSelectedHandler(id)} >
            {showTabRes&&(<Table className='info-page__table' items={tableResults}/>)}
            </InfoTable>
            )}
           
           </div>
        </div>
         </Layout>
    )
        
}