// 

function myData (callback:(name:string)=>void, newName:string){
    callback(newName)
}

let myFullDta =(name:string)=>{
    console.log(`Hello ${name}`);
    
}

myData(myFullDta,"SaimShaikh")
