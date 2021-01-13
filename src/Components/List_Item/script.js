import './style.css';
import React from 'react';

import deleteIcon from '../../Resources/delete-btn-icon.png';



function onMouseOverDelBtn(divId){
    document.getElementById(divId).className = "animation-effect";
    document.querySelector(`#${divId} li`).style.paddingLeft="30px";
};

function onMouseOutDelBtn(divId){
    document.getElementById(divId).classList.remove("animation-effect");
    document.getElementById(divId).className = "list-item-container";
    document.querySelector(`#${divId} li`).style.paddingLeft="";
};

function onDoneTask(taskId, checkBoxId){
    document.getElementById(taskId).style.textDecoration = "line-through";
    document.getElementById(taskId).style.color = "gray";
    document.getElementById(checkBoxId).setAttribute('disabled', true);
}

function onDeleteTask(deletedTaskId) {
    document.getElementById(deletedTaskId).style.display = "none";
}

class ListItem extends React.Component{
    render(){
        return(
            <div>
                {this.props.itemList.map((item, index)=>{
                    return(
                        <div id={`main-list-item-container-${index}`} className={`main-list-item-container`}>
                            <div id={`list-item-container-${index}`} className="list-item-container">
                                <input id={`check-item-${index}`} for="list-item" type="checkbox" onClick={()=>onDoneTask(`list-item${index}`, `check-item-${index}`)}/>
                                <div className="li-item-delete-btn">
                                    <li id={`list-item${index}`}>{item}</li>
                                    <div className="delete-btn-container">
                                        <img id={`del-btn-${index}`} className="del-btn" src={deleteIcon} onClick={()=>onDeleteTask(`main-list-item-container-${index}`)} onMouseOver={()=>onMouseOverDelBtn(`list-item-container-${index}`)} onMouseOut={()=>onMouseOutDelBtn(`list-item-container-${index}`)} alt="" height="20px"/>
                                    </div>
                                </div>
                            </div>
                            <hr/>
                        </div>
                    );  
                })}
                
            </div>
        );
    }
}

export default ListItem;