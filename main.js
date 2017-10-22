// splice(1,3)-silir
// slice(1,3)-silmek ucun qeyd edir
// push("gjh")-sona elave edir
// pop()-sondan silir
// shift()-evvelden silir
// unshift("hjk")-evvele elave edir
// splice(1,3,"yanvar")-silir sildiyimiz yere eleve edir
// exp: var list["khgj","khkh"]
// mylist.push("hjk");
// console.log(list)
// list.reverse();- bawdan axira duzur eger yanvar fevral idise olur fevral yanvar

// var check =list.indexof("yanvar")- arrayda olub olmadigin yoxlyin inde qaytarir


// if(list.indexof("yanvar")!=-1){
// 	list.splice((list.indexof("yanvar"),1,"gjhgjhg") - yoxluyur var ya yoxdu yoxdusa -1 qaytarir. yanvar varsa tapib silsin ve o birin elave
// }

// list.join("/")-iware ile birlewdirecek yanvar/fevral ve string edecek

// list.lenght; -elementlerin sayin qaytarir

// queue first in first out -fifo
// enque-elave, deque silmek queue dadi
// stack last in first out














// ==========================================

 var list=["iyun","iyul"];

 function enq (mylist,a){
 	return list.push(a);
 }

 enq(list,"avqust")
 // console.log(list);



// ===========================================


function dec(mylist2,b){
	return list.shift(b);
}

dec(list);
// console.log(list);





// =====================================


 var list=["iyun","iyul"];

 function stack1 (mylist,a){
 	return list.push(a);
 }

 stack1(list,"avqust")
 console.log(list);



 // ==========================

 function stack2(mylist2,b){
	return list.pop(b);
}

stack2(list);
console.log(list);

// =======================


// st axirinci
// qu 1ci


// 123 
// 1234
// 123
// 234

// eger stackdisa(lifo) axirincini silir quedisa(fifo) 1ci silir.


// =====================================




var teacher ={"name":"Ismayil","lastname":"ismayilov"}; //object
console.log(teacher.name+" " + teacher.lastname);
// ====================================================


