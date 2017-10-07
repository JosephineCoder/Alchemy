//What my dad asked me to do last week:
//My answer:
var elements = [{
    //how it looks
    //id #
    id: 1,
    //name
    name: "water",
    //parents
    parents: [],
    primary: true
    //Find Id of fire = 4 and ice
}, {
    //how it looks
    //id #
    id: 2,
    //name
    name: "air",
    //parents
    parents: [],
    primary: true
}, {
    //how it looks
    //id #
    id: 3,
    //name
    name: "earth",
    //parents
    parents: [],
    primary: true
}, {
    //how it looks
    //id #
    id: 4,
    //name
    name: "fire",
    //parents
    parents: [],
    primary: true
}, {
    //how it looks
    //id #
    id: 5,
    //name
    name: "steam",
    //parents fire and water
    parents: [
        [1, 4]
    ]
}, {
    //how it looks
    //id #
    id: 6,
    //name
    name: "pressure",
    //parents earth and earth or water and water
    parents: [
        [3, 3],
        [1, 1]
    ]
}
,
{
    //how it looks
    //id #
    id: 7,
    //name
    name: "lava",
    //parents earth and fire
    parents: [
        [3,4]
        
    ]
}
,
{
    //how it looks
    //id #
    id: 8,
    //name
    name: "rubiks_cube",
    //parents, rainbow and cube
    parents: [
    [13, 14]
        
    ]
}
,
{
    //how it looks
    //id #
    id: 9,
    //name
    name: "rain",
    //parents cloud and water or water and air
    parents: [
        [2, 1],
        [10,1]
    ]
}
,
{
    //how it looks
    //id #
    id: 10,
    //name
    name: "cloud",
    //parents air and steam
    parents: [
        [5, 2]
    ]
}
,
{
    //how it looks
    //id #
    id: 11,
    //name
    name: "sky",
    //parents air and cloud
    parents: [
        [2, 10]
    ]
}
,
{
    //how it looks
    //id #
    id: 12,
    //name
    name: "sun",
    //parents sky and fire
    parents: [
        [11, 4]
    ]
}
,
{
    //how it looks
    //id #
    id: 13,
    //name
    name: "rainbow",
    //parents sun and rain
    parents: [
        [12, 9]
    ]
}
,
{
    //how it looks
    //id #
    id: 14,
    //name
    name: "cube",
    //parents wood and sandpaper
    parents: [
        [21, 33]
    ]
}
,
{
    //how it looks
    //id #
    id: 15,
    //name
    name: "metal",
    //parents fire and stone
    parents: [
        [19, 4]
    ]
}
,
{
    //how it looks
    //id #
    id: 16,
    //name
    name: "tool",
    //parents human and metal
    parents: [
        [17, 15]
    ]
}
,
{
    //how it looks
    //id #
    id: 17,
    //name
    name: "human",
    //parents earth and life
    parents: [
        [3, 18]
    ]
}
,
{
    //how it looks
    //id #
    id: 18,
    //name
    name: "life",
    //parents energy and swamp
    parents: [
        [23, 24]
    ]
}
,
{
    //how it looks
    //id #
    id: 19,
    //name
    name: "stone",
    //parents air and lava
    parents: [
        [2, 7]
    ]
}
,
{
    //how it looks
    //id #
    id: 20,
    //name
    name: "paper",
    //parents wood and presssure
    parents: [
        [21, 6]
    ]
}
,
{
    //how it looks
    //id #
    id: 21,
    //name
    name: "wood",
    //parents tree and tool
    parents: [
        [27, 16]
    ]
}
,{
    //how it looks
    //id #
    id: 22, 
    //name
    name: "angel",
    //parents bird and human
    parents: [
        [78, 17]
    ]
}
,{
    //how it looks
    //id #
    id: 23,
    //name
    name: "energy",
    //parents air and fire or plant and sun
    parents: [
        [2, 4],
        [12 , 25]
    ]
}
,
{
    //how it looks
    //id #
    id: 24,
    //name
    name: "swamp",
    //parents grass and mud
    parents: [
        [57, 26]
    ]
}
,
{
    //how it looks
    //id #
    id: 25,
    //name
    name: "plant",
    //parents rain and earth
    parents: [
        [9, 3]
    ]
}
,
{
    //how it looks
    //id #
    id: 26,
    //name
    name: "mud",
    //parents water and earth
    parents: [
        [1, 3]
    ]
}
,
{
    //how it looks
    //id #
    id: 27,
    //name
    name: "tree",
    //parents plant and time 
    parents: [
        [25, 28]
    ]
}
,
{
    //how it looks
    //id #
    id: 28,
    //name
    name: "time",
    //parents glass and sand
    parents: [
        [29, 30]
    ]
}
,
{
    //how it looks
    //id #
    id: 29,
    //name
    name: "sand",
    //parents wind and stone
    parents: [
        [32, 19]
    ]
}
,
{
    //how it looks
    //id #
    id: 30,
    //name
    name: "glass",
    //parents sand and fire
    parents: [
        [4, 29]
    ]
}
,
{
    //how it looks
    //id #
    id: 31,
    //name
    name: "hourglass",
    //parents sand and glass 
    parents: [
        [29, 30]
    ]
}
,
{
    //how it looks
    //id #
    id: 32,
    //name
    name: "wind",
    //parents pressure and air or air and energy
    parents: [
        [6, 2],
        [23, 2]
    ]
}
,
{
    //how it looks
    //id #
    id: 33,
    //name
    name: "sandpaper",
    //parents sand and paper
    parents: [
        [20, 29]
    ]
}
,
{
    //how it looks
    //id #
    id: 34 ,
    //name
    name: "aquarium",
    //parents  glass and water
    parents: [
        [1, 30]
    ]
}
,
{
    //how it looks
    //id #
    id: 35,
    //name
    name: "dust",
    //parents earth and air 
    parents: [
        [2, 3]
    ]
}
,
{
    //how it looks
    //id #
    id: 36,
    //name 
    name: "gunpowder",
    //parents fire and dust  
    parents: [
        [35, 4]
    ]
}
,
{
    //how it looks
    //id #
    id: 37,
    //name
    name: "bullet",
    //parents metal and gunpowder 
    parents: [
        [36, 15]
    ]
}
,
{
    //how it looks
    //id #
    id: 38,
    //name
    name: "gun",
    //parents bullet and metal  
    parents: [
        [37, 15]
    ]
}
,
{
    //how it looks
    //id #
    id: 39,
    //name
    name: "flamethrower",
    //parents gun and flame  
    parents: [
        [38, 4]
    ]
}
,
{
    //how it looks
    //id #
    id: 40,
    //name
    name: "sunflower",
    //parents sun and flower or sun and plant  
    parents: [
        [12, 25],
        [12,42]
    ]
}
,
{
    //how it looks
    //id #
    id: 41 ,
    //name
    name: "oxygen",
    //parents plant and sun  
    parents: [
        [12, 25]
    ]
}
,
{
    //how it looks
    //id #
    id: 42,
    //name
    name: "flower",
    //parents plant and garden 
    parents: [
        [25, 43]
    ]
}
,
{
    //how it looks
    //id #
    id: 43,
    //name
    name: "garden",
    //parents plant and plant 
    parents: [
        [25, 25]
    ]
}
,
{
    //how it looks
    //id #
    id: 44,
    //name
    name: "oil",
    //parents pressure and sunflower 
    parents: [
        [40, 6]
    ]
}
,
{
    //how it looks
    //id #
    id: 45,
    //name
    name: "soap",
    //parents ash and oil  
    parents: [
        [46, 44]
    ]
}
,
{
    //how it looks
    //id #
    id: 46,
    //name
    name: "ash",
    //parents volcano and energy 
    parents: [
        [47, 23]
    ]
}
,
{
    //how it looks
    //id #
    id: 47,
    //name
    name: "volcano",
    //parents lava and earth or fire and mountain or lava and mountain 
    parents: [
        [48,4],
        [3,7],
        [48,7],

    ]
}
,
{
    //how it looks
    //id #
    id: 48,
    //name
    name: "mountain",
    //parents earthquake and earth 
    parents: [
        [49, 3]
    ]
}
,
{
    //how it looks
    //id #
    id: 49,
    //name
    name: "earthquake",
    //parents earth and energy  
    parents: [
        [3, 23]
    ]
}
,
{
    //how it looks
    //id #
    id: 50,
    //name
    name: "hay",
    //parents grass and scythe or grass and sun or grass and farmer 
    parents: [
        [57, 12],
        [57, 52],
        [57, 51]
    ]
}
,
{
    //how it looks
    //id #
    id: 51,
    //name
    name: "scythe",
    //parents  blade and grass or blade and wheat
    parents: [
        [54, 57],
        [55, 54]
    ]
}
,
{
    //how it looks
    //id #
    id: 52,
    //name
    name: "farmer",
    //parents  field and human or human and plant or human and pitchfork
    parents: [
        [17, 56],
        [17, 25],
        [17, 58]
    ]
}
,
{
    //how it looks
    //id #
    id: 53,
    //name
    name: "scissors",
    //parents  blade and blade
    parents: [
        [54, 54]
    ]
}
,
{
    //how it looks
    //id #
    id: 54,
    //name
    name: "blade",
    //parents metal and stone 
    parents: [
        [15, 19]
    ]
}
,
{
    //how it looks
    //id #
    id: 55,
    //name
    name: "wheat",
    //parents feild and farmer or plant and farmer 
    parents: [
        [52, 25],
        [52, 56]
    ]
}
,
{
    //how it looks
    //id #
    id: 56,
    //name
    name: "field",
    //parents  earth and tool or earth and farmer
    parents: [
        [3, 52],
        [3, 16]
    ]
}
,
{
    //how it looks
    //id #
    id: 57,
    //name
    name: "grass",
    //parents plant and earth  
    parents: [
        [3, 25]
    ]
}
,
{
    //how it looks
    //id #
    id: 58,
    //name
    name: "pitchfork",
    //parents  tool and hay
    parents: [
        [50, 16]
    ]
}
,
{
    //how it looks
    //id #
    id: 59,
    //name
    name: "leaf",
    //parents tree and wind  
    parents: [
        [32, 27]
    ]
}
,
{
    //how it looks
    //id #
    id: 60,
    //name
    name: "tea",
    //parents water and leaf 
    parents: [
        [1, 59]
    ]
}
,
{
    //how it looks
    //id #
    id: 61,
    //name
    name: "corpse",
    //parents human and gun or human and grim reaper 
    parents: [
        [17, 63],
        [38, 17]
    ]
}
,
{
    //how it looks
    //id #
    id: 62,
    //name
    name: "zombie",
    //parents corpse and life 
    parents: [
        [61, 18]
    ]
}
,
{
    //how it looks
    //id #
    id: 63,
    //name
    name: "grimreaper",
    //parents  scythe and human
    parents: [
        [17, 51]
    ]
}
,
{
    //how it looks
    //id #
    id: 64,
    //name
    name: "lawnmower",
    //parents tool and grass 
    parents: [
        [16, 57]
    ]
}
,
{
    //how it looks
    //id #
    id: 65,
    //name
    name: "ferret",
    //parents  slinky and wild animal
    parents: [
        [68, 70]
    ]
}
,
{
    //how it looks
    //id #
    id: 66,
    //name
    name: "toy",
    //parents  human and rubix cube
    parents: [
        [8, 17]
    ]
}
,
{
    //how it looks
    //id #
    id: 67,
    //name
    name: "wire",
    //parents metal and energy 
    parents: [
        [15, 23]
    ]
}
,
{
    //how it looks
    //id #
    id: 68,
    //name
    name: "wild_animal",
    //parents forest and life 
    parents: [
        [69, 18]
    ]
}
,
{
    //how it looks
    //id #
    id: 69,
    //name
    name: "forest",
    //parents tree and tree 
    parents: [
        [27, 27]
    ]
}
,
{
    //how it looks
    //id #
    id: 70,
    //name
    name: "slinky",
    //parents toy and metal or toy and wire 
    parents: [
        [15, 66],
        [67, 66]
    ]
}
,
{
    //how it looks
    //id #
    id: 71,
    //name
    name: "livestock",
    //parents farmer and life
    parents: [
        [52, 18]
    ]
}
,
{
    //how it looks
    //id #
    id: 72,
    //name
    name: "milk",
    //parents farmer and cow or cow and human
    parents: [
        [76, 17],
        [76, 52]
    ]
}
,
{
    //how it looks
    //id #
    id: 73,
    //name
    name: "cheese",
    //parents milk and time
    parents: [
        [72, 28]
    ]
}
,
{
    //how it looks
    //id #
    id: 74,
    //name
    name: "mouse",
    //parents wild animal and cheese
    parents: [
        [73, 68]
    ]
}
,
{
    //how it looks
    //id #
    id: 75,
    //name
    name: "pikachu",
    //parents electricity and mouse
    parents: [
        [77, 74]
    ]
}
,
{
    //how it looks
    //id #
    id: 76,
    //name
    name: "cow",
    //parents livestock and grass
    parents: [
        [57, 71]
    ]
}
,
{
    //how it looks
    //id #
    id: 77,
    //name
    name: "electricity",
    //parents energy and metal 
    parents: [
        [23, 15]
    ]
}
,
{
    //how it looks
    //id #
    id: 78,
    //name
    name: "bird",
    //parents wild animal and sky
    parents: [
        [11, 68]
    ]
}
,
{
    //how it looks
    //id #
    id: 79,
    //name
    name: "desert",
    //parents sand and sand
    parents: [
        [29, 29]
    ]
}
,
{
    //how it looks
    //id #
    id: 80,
    //name
    name: "camel",
    //parents desert and wild animal
    parents: [
        [68, 79]
    ]
}
,
{
    //how it looks
    //id #
    id: 81,
    //name
    name: "coffee",
    //parents water and bean
    parents: [
        [1, 82]
    ]
}
,
{
    //how it looks
    //id #
    id: 82,
    //name
    name: "bean",
    //parents plant and leaf
    parents: [
        [25, 59]
    ]
}
,
{
    //how it looks pressure and coal or coal and time
    //id #
    id: 83,
    //name
    name: "jewel",
    //parents 
    parents: [
        [28, 84],
        [6, 84]
    ]
}
,
{
    //how it looks
    //id #
    id: 84,
    //name
    name: "coal",
    //parents plant and pressure 
    parents: [
        [6, 25]
    ]
}
,
{
    //how it looks
    //id #
    id: 85,
    //name
    name: "blake_jewell",
    //parents human and jewell
    parents: [
        [17, 83]
    ]
}
,
{
    //how it looks
    //id #
    id: 86,
    //name
    name: "cotton",
    //parents cloud and plant
    parents: [
        [10, 25]
    ]
}
,
{
    //how it looks
    //id #
    id: 87,
    //name
    name: "thread",
    //parents tool and cotton
    parents: [
        [16, 86]
    ]
}
,
{
    //how it looks
    //id #
    id: 88,
    //name
    name: "fabric",
    //parents tool and thread
    parents: [
        [16, 87]
    ]
}
,
{
    //how it looks
    //id #
    id: 89,
    //name
    name: "ribbon",
    //parents tool and fabric 
    parents: [
        [87, 16]
    ]
}
,
{
    //how it looks
    //id #
    id: 90,
    //name
    name: "amelie_nguyen",
    //parents human and ribbon
    parents: [
        [17, 89]
    ]
}
,
{
    //how it looks
    //id #
    id: 91,
    //name
    name: "spring",
    //parents metal and metal
    parents: [
        [15, 15]
    ]
}
,
{
    //how it looks
    //id #
    id: 92,
    //name
    name: "kangaroo",
    //parents wild animal and spring
    parents: [
        [68, 91]
    ]
}
,
{
    //how it looks
    //id #
    id: 93,
    //name
    name: "joey_stockton",
    //parents human and kangaroo
    parents: [
        [17, 92]
    ]
}
,
{
    //how it looks
    //id #
    id: 94,
    //name
    name: "glasses",
    //parents glass and glass
    parents: [
        [30, 30]
    ]
}
,
{
    //how it looks
    //id #
    id: 95,
    //name
    name: "cat",
    //parents milk and wild animal
    parents: [
        [72, 68]
    ]
}
,
{
    //how it looks
    //id #
    id: 96,
    //name
    name: "monkey",
    //parents wild animal and tree
    parents: [
        [68, 27]
    ]
}
,
{
    //how it looks
    //id #
    id: 97,
    //name
    name: "banana",
    //parents fruit and monkey
    parents: [
        [96, 98]
    ]
}
,
{
    //how it looks
    //id #
    id: 98,
    //name
    name: "fruit",
    //parents farmer and tree
    parents: [
        [27, 52]
    ]
}
,
{
    //how it looks
    //id #
    id: 99,
    //name
    name: "juice",
    //parents blender and fruit
    parents: [
        [100, 98]
    ]
}
,
{
    //how it looks
    //id #
    id: 100,
    //name
    name: "blender",
    //parents glass and blade
    parents: [
        [54, 30]
    ]
}
,
];

//1 water
//2 air
//3 earth
//4 fire
//5 steam
//6 pressure
//7 lava
//8 rubix_cube
//9 rain 
//10 cloud 
//11 sky
//12 sun
//13 rainbow
//14 cube
//15 metal
//16 tool
//17 human
//18 life
//19 stone
//20 paper
//21 wood
//22 angel
//23 energy
//24 swamp
//25 plant
//26 mud
//27 tree
//28 time
//29 sand
//30 glass
//31 hour glass
//32 wind
//33 sandpaper
//34 aquarium
//35 dust
//36 gunpowder 
//37 bullet
//38 gun
//39 flame thrower
//40 sunflower
//41 oxygen
//42 flower
//43 garden
//44 oil
//45 soap
//46 ash
//47 volcano
//48 mountain
//49 earthquake
//50 hay
//51 scythe
//52 farmer
//53 scissors
//54 blade
//55 wheat
//56 field
//57 grass
//58 pitch fork
//59 leaf
//60 tea
//61 corpse
//62 zombie
//63 grimreaper
//64 lawnmower
//65 ferret
//66 toy
//67 wire
//68 wild animal
//69 forest
//70 slinky
//71 livestock
//72 milk
//73 cheese
//74 mouse
//75 pikachu 
//76 cow
//77 electricity
//78 bird
//79 desert
//80 camel
//81 coffee
//82 bean
//83 jewel
//84 coal
//85 Blake Jewell
//86 cotton
//87 thread 
//88 fabric
//89 ribbon
//90 Amelie Nyugen
//91 spring
//92 kangaroo
//93 Joey Stockton
//94 glasses
//95 cat
//96 monkey
//97 banana
//98 fruit
//99 juice
//100 blender

//note to make 