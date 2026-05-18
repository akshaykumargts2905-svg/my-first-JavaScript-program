for(let n=2; n<100; n++){
    let count=0;
    for(let i=1;i<=n; i++){
        if (n%i==0){
            count++;
        }
    }
    if(count==2){
        console.log(n);
    }
}