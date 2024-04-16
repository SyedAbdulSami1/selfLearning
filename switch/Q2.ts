/*Thora Mushkil:
Question 2: Ek user se input lekar uski age ke hisaab se kuch categories assign karni hai. 
Agar user ki age 18 se kam hai to "Minor" print karna hai, agar 18 se 60 ke beech mein hai to "Adult" 
print karna hai, aur agar 60 se zyada hai to "Senior Citizen" print karna hai.*/
let age:number=61;
switch(true) {
    case age < 18:
        console.log("First Answer: Minor");
        break;
    case age<60:
        console.log("First Answer: Adult");
        break;
    default:
        console.log("First Answer: Senior Citizen")
        break;
};

/*Kafi Mushkil:
Question 3: Ek company mein employees ke grade ke hisaab se bonus distribute karna hai. 
Agar employee ka grade 'A' hai to 20% bonus dena hai, agar 'B' hai to 15% bonus dena hai, 
agar 'C' hai to 10% bonus dena hai, aur agar koi aur grade hai to "No bonus" print karna hai.*/
let employeeGrade="C";
switch (employeeGrade) {
    case "A":
        console.log("20% bonus dena hai")
        break;
    case "B":
        console.log("15% bonus dena hai")
        break;
    case "C":
        console.log("10% bonus dena hai")
        break;
    default:
        console.log("No bonus")
        break;
}