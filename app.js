// // const amount = 9
// const os = require("os")
// // const user = os.userInfo()
// // console.log(user)
// // console.log(`The system is ${os.uptime()} seconds`)


// const currentOs = {
//     name:os.type(),
//     release: os.release(),
//     totalMem : os.totalmem(),
//     freeMem : os.freemem()
// }

// console.log(currentOs)


// const path = require("path");
// const file = path.join('content','subfolder','index.html')

// const base = path.basename(file)

// const abs = path.resolve(__dirname,file)
// console.log(abs)


// const fs = require('fs')

// const first = fs.readFileSync('./content/first.txt','utf8')
// const second = fs.readFileSync('./content/second.txt','utf8')

// // console.log(first)
// // console.log(second)



// const fs = require('fs')

// fs.writeFileSync("./content/passage.txt",' Now I am starting wonder if i fit here',{flag: 'a'})

// const read = fs.readFileSync("./content/passage.txt","utf8");

// console.log(read)

const fs = require('fs')


// fs.readFile('./content/passage.txt','utf8',(err,result)=>{
//     if (err){
//         console.log(err);
//         return
//     }

//     console.log(result)
// })

// fs.writeFile('./content/passage.txt','Hi it is me',(err)=>{
//     if (err){
//         console.log(err)
//     }
// })

// console.log("Start")
// fs.readFile('./content/first.txt','utf8',(err,result)=>{
//     if (err){
//         console.log(err)
//         return;
//     }

//     first = result

//     fs.readFile('./content/passage.txt','utf8', (err,result)=>{
//         if (err){
//             console.log(err)
//             return;
//         }

//         passage = result

//         fs.writeFile('./content/second.txt','Im sadly second', (err)=>{
//             if (err){
//                 console.log(err)
//                 return
//             }
//             console.log(`Hey ${first}, ${passage}`)
//         })
//     })
// })

// console.log("Start Next")

// const http = require('http')
// const server = http.createServer((req,res)=>{
//     if (req.url === "/"){
//         res.end('Welcome MOTHERFUCKER')
//     }

//     if (req.url === "/about"){
//         res.end('WHAT THE FUCK U THINK U DOING')
//     }
//         res.end(`
//     <h1>Oops</h1>
//     <p>The page You are searching is not found</p>
//     <a href="/">back home</a>
//     `)
    
    
// })

// server.listen(7000)


const _ = require('lodash')

const arr =[1,[2,[3]],4,[5]]

const n = _.flattenDeep(arr)
console.log(n)


