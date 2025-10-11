const path=require('path');
const fs=require('fs');

const myPath= path.join(__dirname, "test-folder")
console.log(myPath)

fs.readdir(myPath, (err,files)=>{
    if(err) console.log(err);
    else{
        console.log(files)
        files.forEach((item)=>{
            console.log(path.extname(item))
            let type=path.extname(item).slice(1)
            // console.log(type)
            let folderPath=path.join(__dirname, type)
            // console.log(folderPath)
            fs.mkdirSync(folderPath, {recursive:true})
            
            const old_path= path.join(myPath, item)
            const new_path=path.join(folderPath, item)

            fs.renameSync(old_path, new_path)
            
        })
    }
})
// console.log(path.extname(myPath))