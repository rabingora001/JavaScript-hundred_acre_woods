// var tigger = { character: "Tigger" }; // start with just the character attribute
// var pooh = { character: "Winnie the Pooh" };
// tigger.north = pooh; // add more attributes, where we are actually storing the memory location for the other object
// pooh.south = tigger;

// var piglet = { character: "Piglet"};        // create Piglet's home object with just the character attribute
// piglet.east = tigger.north;          // Piglet's east attribute is Tigger's north attribute, which is a memory address
// tigger.north.west = piglet;          // Follow Tigger's north attribute to a location in memory
//                                     // Assign that object's west attribute to piglet

// var bees = {character : "Bees"};
// bees.west=tigger.north;
// tigger.north.east=bees;

// var robin={character:"Cristopher Robin"};
// robin.south=tigger.north;
// tigger.north.north=robin;

// var owl =  {character:"Owl"};
// owl.east=tigger.north.north;
// tigger.north.north.west=owl;

// var rabbit={character:"Rabbit"};
// rabbit.west=tigger.north.north;
// tigger.north.north.east=rabbit;

// var gopher={character:"Gopher"};
// gopher.west=tigger.north.north.east;
// tigger.north.north.east.east=gopher;

// var kanga={character:"Kanga"};
// kanga.south=tigger.north.north;
// tigger.north.north.north=kanga;

// var eeyore={character:"Eeyore"};
// eeyore.south=tigger.north.north.north;
// tigger.north.north.north.north=eeyore;

// var heffalumps={character:"Heffalupms"};
// heffalumps.west=tigger.north.north.north.north;
// tigger.north.north.north.north.east=heffalumps;

// var player={
//     location : tigger
// }

// function move(str){
//     if(str=="north"){
//         player.location=player.location.north;
//         return "you are now at " + player.location.character +"'s house";
//     }
//     if(str=="south"){
//         player.location=player.location.south;
//         return "you are now at " + player.location.character +"'s house";
//     }
//     if(str=="east"){
//         player.location=player.location.east;
//         return "you are now at " + player.location.character +"'s house";
//     }
//     if(str=="west"){
//         player.location=player.location.west;
//         return "you are now at " + player.location.character +"'s house";
//     }
//     else
//     if(str=="null"){
//     return "you cannot go that way! go back!"
//     }
// }

// move("south");