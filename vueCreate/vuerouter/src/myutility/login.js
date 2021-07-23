
 const checkUserAccess = (to)=>{
    console.log("to", to)
    let answer = true;
    answer = confirm("Are you sure you want to enter /user?");

    return Promise.resolve(answer)

}

export default checkUserAccess;