const ans = document.querySelector("#ans");
const reset = document.querySelector("#reset");
ans.textContent = 0;
let maxx = 0;
let points = 0;
let totalCredit = 0;
let gpa = 0;
function calcgpa() {
    if (totalCredit == 0) return gpa;
    else {
        gpa = maxx/totalCredit;
    }
    return gpa;
}

const button2 = document.querySelector("#submit2");
button2.addEventListener("click", (e) => {
    e.preventDefault();
    const grade = document.querySelector("#grade").value.toLowerCase();
    const credit = parseFloat(document.querySelector("#creditGrade").value);
    totalCredit += credit;
    if (grade == "f") points = 0;
    else if (grade == "e") points = 4;
    else if (grade == "d") points = 5;
    else if (grade == "c") points = 6;
    else if (grade == "b") points = 7;
    else if (grade == "b+") points = 8;
    else if (grade == "a") points = 9;
    else if (grade == "a+") points = 10;
    maxx += (credit*points);
    let res = calcgpa();
    ans.textContent = res;
    document.querySelector("#grade").value = "";
    document.querySelector("#creditGrade").value = "";
});
const button1 = document.querySelector("#submit1");

button1.addEventListener("click", (e) => {
    e.preventDefault();
    const internal = parseFloat(document.querySelector("#internal").value);
    const external = parseFloat(document.querySelector("#external").value);
    const credit = parseFloat(document.querySelector("#creditNum").value);
    totalCredit += credit;
    let val = internal + external;
    if (val < 40) points = 0;
    else if (val >= 40 && val < 45) points = 4;
    else if (val >= 45 && val < 50) points = 5;
    else if (val >= 50 && val < 60) points = 6;
    else if (val >= 60 && val < 70) points = 7;
    else if (val >= 70 && val < 80) points = 8;
    else if (val >= 80 && val < 90) points = 9;
    else points = 10;
    maxx += (credit * points);
    let res = calcgpa();
    ans.textContent = res;
    document.querySelector("#internal").value = "";
    document.querySelector("#external").value = "";
    document.querySelector("#creditNum").value = "";
});
reset.addEventListener("click", () => {
    totalCredit = 0;
    points = 0;
    maxx = 0;
    gpa = 0;
    ans.textContent = 0;
})

