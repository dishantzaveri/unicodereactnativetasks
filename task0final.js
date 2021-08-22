function details(data) {
  
    let data1 = data[0];
    let data2 = data[1];
    let data3 = data[2];
    //storing each string in a variable
  
    let arr1 =  data1.split(" ");
    let arr2 = data2.split(" ");
    let arr3 = data3.split(" ");
    //data string is splitted


    n1 = arr1[0]+" "+arr1[1];
    p1 = parseInt(arr1[2]);
    s1 = parseInt(arr1[3]);
    i1 = parseInt(arr1[4]);
    avg1=(parseInt(arr1[2])+parseInt(arr1[3])+parseInt(arr1[4]))/3

    n2 = arr2[0]+" "+arr2[1];
    p2 = parseInt(arr2[2]);
    s2 = parseInt(arr2[3]);
    i2 = parseInt(arr2[4]);
    avg2=(parseInt(arr2[2])+parseInt(arr2[3])+parseInt(arr2[4]))/3

    n3 = arr3[0]+" "+arr3[1];
    p3 = parseInt(arr3[2]);
    s3 = parseInt(arr3[3]);
    i3 = parseInt(arr3[4]);
    avg3=(parseInt(arr3[2])+parseInt(arr3[3])+parseInt(arr3[4]))/3
    //values from array have been assigned using specific indexes
    //The parseInt() function parses a string and returns an integer.

    let array = [
        o1 = {
            Name: n1,
            Score:  {
                            Personality: p1,
                            Strength: s1,
                            Intelligence: i1
                    },
            avg :avg1

        },
       o2 = {
            Name: n2,
            Score:  {
                            Personality: p2,
                            Strength: s2,
                            Intelligence: i2
                    },
            avg: avg2
        },
        o3 = {
            Name: n3,
            Score:  {
                            Personality: p3, 
                            Strength: s3,
                            Intelligence: i3
                    },
            avg:avg3
        }
        //every object is an array
    ]
    array.sort((a,b)=>{
        return b.avg-a.avg
    })
    //sorting the array in descending order
   
    console.log(array);
}

details(["Star Lord 8 8 7", "Tony Stark 10 8 10", "Bruce Banner 10 10 10"]);
  //fetching the input by calling the main function