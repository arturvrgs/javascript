let val = [8,1,7,4,2,9]
/*
console.log(val);
console.log(val[0]);


for (let i=1; i < val.length; i++) {
    console.log(`A posição ${i} tem o valor ${val[i]}`);
}
*/

for (let i in val) {
    val.sort()
    console.log(val[i]);
}