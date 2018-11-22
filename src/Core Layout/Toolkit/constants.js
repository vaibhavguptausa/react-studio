export const ItemTypes = {
  BOX: 'box',
  INPUT: 'input',
  NORMALBOX: 'normalBox',
  DRAGGABLEINPUT: 'draggableInput',
  RADIO: 'radio',
  NORMALRADIO: 'normalRadio',
  CHECKBOX: 'checkbox',
  NORMALCHECKBOX: 'normalCheckbox',
  BUTTON: 'button',
  NORMALBUTTON: 'normalbutton',
  DATEPICKER: 'datepicker',
  NORMALDATEPICKER: 'normaldatepicker'
};

export let children = [];
export var counter = 0;
export const incrementCounter = () => {
  counter = counter + 1;
}
export const addChild = (child) => {
  children.push(child);
}

export const modifyChild = (id, positionX, positionY) => {
  children[id]['x'] = positionX;
  children[id]['y'] = positionY;
}

export const modifyChildAttributes = (id, height, width, color, text, ifRender) => {
  children[id].height = height;
  children[id].width = width;
  children[id].color = color;
  children[id].text = text;
  children[id].ifRender= ifRender ;
}

export const deleteChild = (id) => {

  debugger
  children = children.filter((ch, i) => {
    if (ch.id != id) {
      ch.id = ch.id > id ? ch.id - 1 : ch.id
      return ch
    }
  })
  debugger
  console.log(`children`, children);

}