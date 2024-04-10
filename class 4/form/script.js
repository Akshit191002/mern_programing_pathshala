// const firstnamechange=(e)=>{
//     const el=e.target.value
//     if(el.length>2){
//         console.log('correct')
//     }
// }
function submitform(e){
    e.preventDefault()
    const t=e.target
    const res={
        hobbies:[]
    };
    for(let i=0;i<t.length;i++)
    {
        const ty=t[i].type;
        if(ty!='submit'){
            const vl=t[i].value
            const nm=t[i].name
            if(ty=='checkbox' && t[i].checked){
                res.hobbies.push(vl);
            }
            if(ty!='checkbox'){
                res[nm]=vl;
            }
        }
        // console.log(t[i].value)
        // const vl=t[i].value;
        // console.log(ty,vl);
        // if(ty=='checkbox'){
        //     console.log(t[i].checked)
        // }

    }
    // console.log(res)
    
    for(let i in res){
        console.log(res[i])
    }

}