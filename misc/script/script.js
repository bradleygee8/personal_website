const courselist = [
    {code:"ACIT 1620", name: "Web Fundamentals Technologies"}, 
    {code:"ACIT 1515", name: "Introduction to Python"},
    {code: "ACIT 1630", name: "Introduction to Databases"}
]

var answer = prompt ("Enter a 4 digit number: ");
i=0;
while (i< courselist.length){
    let num =''
    for(count = 0; count<courselist[i].code.length; count ++){
        if (isNaN(courselist[i].code[count])==false)
            num+=courselist[i].code[count]
    }

    if (answer.length!=4 || isNaN(answer)){
        answer = prompt("Invalid data entered")
        i=0
    }
    else if (num.trim() == answer){
        alert(`Yes I am taking the course: ${courselist[i].code} ${courselist[i].name}`);
        break;}

    else if (i == courselist.length-1){
        courselist.push({code: answer, name: null});
        console.log("Successfully Added to the list")
        break;}
    i+=1}

    

    
    