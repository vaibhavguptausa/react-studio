export const ItemTypes = {
    BOX: 'box',
    INPUT: 'input',
    NORMALBOX: 'normalBox' ,
    DRAGGABLEINPUT : 'draggableInput'
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