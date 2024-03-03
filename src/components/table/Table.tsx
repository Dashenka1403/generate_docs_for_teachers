import {FC} from 'react';
import { TableProps } from './TableProps';
import './tableStyles.scss';

export const Table : FC<TableProps> = props => {

    const { items, open = false} = props;

    

    // if(!open) {
    //   return null;
    // }
 


    
    return (
       <div  className="table"  >
          <table  >
          <thead>
                    <tr className='table__title'>
                        <th>Компетенция</th>
                        <th>Результаты</th>
                    </tr>
                </thead>
          {items.map(item => {
            
                return (
            
                    <tbody key={item.id}       >
                
                        <tr className='table__row' >
                            <td >{`${item.competence}`.trim()}</td>
                            <td>{`${item.results}`.trim()}</td>
                        </tr>  
                    </tbody>
                );
            })}
            </table>
       </div>
    )
}

// {items.map(item =>  ( <span  key={item.id}>{item.data} </span> ))}