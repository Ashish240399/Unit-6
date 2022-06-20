
process.stdin.on('data',data=>{
    
    var ans=0;
    var A=[1,6]
    //console.log(A)
  if(data>=3){
  ans=(A[data-2]+2)*2 - A[data-3]
}
else{
  ans=(A[data-2]+2)*2
}
//console.log(A)
    console.log(ans);
    process.exit();
})
// process.stdin.on('readable',()=>{
//     let chunk;
//     while((chunk=process.stdin.read())!==null){
//         process.stdout.write(`data:${chunk}`)
//     }
// })


