
export let userChildren =[];
export let updateChildren=(children)=>{
   userChildren=[];
    for(var i=0;i<children.length;i++)
    {
        userChildren.push(children[i]);
    }
    console.log(`userChildren`, userChildren);
}