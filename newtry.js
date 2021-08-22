function details(data) {
    let i=0;
    var details=[];
    var arr=[];
    var name=[];
    var personality=[];
    var strength=[];
    var intelligence=[];
    var object=[];
    var avg=[];

    for(i=0;i<3;i++){
    
    details[i] = data[i];

    arr[i] = details[i].split(" ");
    

    name[i] = arr[i][0]+" "+arr[i][1];
    personality[i] = parseInt(arr[i][2]);
    strength[i] = parseInt(arr[i][3]);
    intelligence[i] = parseInt(arr[i][4]);
    avg[i]=(parseInt(arr[i][2])+parseInt(arr[i][3])+parseInt(arr[i][4]))/3
    
    array = [
        object[i] = {
            Name: name[i],
            Score: {
                Personality: personality[i],
                Strength: strength[i],
                Intelligence: intelligence[i],
              
            },
            avg:avg[i]
        }
    ]

array.sort((a,b)=>{
    return b.avg-a.avg
}
)
console.log(array);
}
}
details(["Star Lord 8 8 7", "Tony Stark 10 8 10", "Bruce Banner 10 10 10"]);
