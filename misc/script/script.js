var link = document.querySelectorAll("li.item");
var p_tags = document.querySelectorAll("li.item p");
var course_des = []; 
var course_num = [];
var date1 = [];
for (i = 0 ; i < link.length; i++){
    course_des.push(toString(link[i].querySelector('p')));
    course_num.push(link[i].querySelector('a').text);
    date1.push(p_tags[i+1])
}
for(i=0;i<date1.length;i++)
    console.log(date1[i])
const courselist = [];
for (i=0 ; i <course_num.length;i++){
    var temp = {code: course_num[i], name: course_des[i], date: date1[i]}
    courselist.push(temp)
}

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
        document.querySelector('li.item').style.color = 'red'
        break;}

    else if (i == courselist.length-1){
        courselist.push({code: answer, name: "N/A", date:"Fall2020"});
        console.log("Successfully Added to the list")
        break;}
    i+=1}


