// prototype:
// id
// name
// usia
// divisi

// let karyawanList = [];
// function create(data){
//     // insert new data
// }

// function read(id){
//     // tampilkan karyawan ${id}
// }

// function update(data){
//     // update data ${id}
// }

// function delete(id){
//     // hapus data karyawan dari array ${id}
// }


let karyawanList = []

function Karyawan (name, usia, divisi){
    this.id = karyawanList.length + 1000
    this.name = name;
    this.usia = usia;
    this.divisi = divisi;
}

function updateData (name, usia, divisi){
    karyawanList.push(new Karyawan(name, usia, divisi));
}

function readId(idnumb){

    for (var i = 0; i<karyawanList.length; i++){
        if (karyawanList[i].id == idnumb){

            return `id : ${karyawanList[i].id}
            \n name : ${karyawanList[i].name}
            \n usia : ${karyawanList[i].usia}
            \n divisi : ${karyawanList[i].divisi}`
        }
    }

    console.log ("karyawan tidak diketahui");
    
}

function deleteId (idnumbdel){
for (var i = 0; i<karyawanList.length; i++){
    if (karyawanList[i].id == idnumbdel){
        delete karyawanList[i];
    }
}    
    return karyawanList
}

updateData("Melissa",22,"Career Development");
updateData("Angel",22,"Talent Acquisition");
updateData("Marin",24,"Organization Dev Dept");
console.log(karyawanList);
console.log(readId(1001));
console.log(deleteId(1002));
