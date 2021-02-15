import React, {useState, useCallback} from 'react';
import DesignNew from './Design';
import TableNew from './Table';


function DataGrid({data, setData}) {

    const onClick = useCallback(i => (e) => {setData(data.map(  (el,index)=> i===index ? ({...el, isSelected: !el.isSelected}) : el ))});

    return (
        <div>
            {data.map((d,i) => <DesignNew id={d.id} title={d.title} url={d.url} key={d.id} 
            onClick={onClick} index={i} isSelected={d.isSelected} />)}

        <TableNew data={data.filter(d => d.isSelected)} />
        </div>
    )
}

export default DataGrid;
