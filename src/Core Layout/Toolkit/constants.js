export const ItemTypes = {
    BOX: 'box',
    INPUT: 'input',
    NORMALBOX: 'normalBox' ,
    DRAGGABLEINPUT : 'draggableInput',
    RADIO: 'radio',
    NORMALRADIO: 'normalRadio',
    CHECKBOX:'checkbox',
    NORMALCHECKBOX : 'normalCheckbox',
    BUTTON: 'button',
    NORMALBUTTON: 'normalbutton',
    DATEPICKER : 'datepicker',
    NORMALDATEPICKER : 'normaldatepicker'
  };
export let children =[];
export const addChild=(child)=>{
  children.push(child);
}
export const modifyChild=(id,positionX, positionY)=>{
  children[id]['x']=positionX;
  children[id]['y']=positionY;
}
export const modifyChildAttributes=(id,height, width, color, text)=>{
  children[id].height= height;
  children[id].width=width;
  children[id].color= color;
  children[id].text=text;
}
export const deleteChild=(id)=>{
  let newChildren=[];
  for(var i=0;i<children.length;i++)
  {
    if(children[i].id!==id)
    {
      newChildren.push(children[i]);
    }
  }
  console.log(`newChildren`, newChildren);
  children= [];
  for(var i=0;i<newChildren.length;i++)
  {
    children.push(newChildren[i]);
  }
  

}