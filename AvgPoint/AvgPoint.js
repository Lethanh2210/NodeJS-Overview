let students =  [
    {
        name: "Ha",
        gender: 'female',
        point: 8
    },
    {
        name: "Huy",
        gender: 'male',
        point: 9
    },
    {
        name: "Hung",
        gender: 'male',
        point: 7
    },
    {
        name: "Phuong",
        gender: 'female',
        point: 6
    },
    {
        name: "Huyen",
        gender: 'female',
        point: 10
    },
    {
        name: "Long",
        gender: 'male',
        point: 5
    },
    {
        name: "Luan",
        gender: 'male',
        point: 10
    },
    {
        name: "Linh",
        gender: 'female',
        point: 8
    }

];

function avgPoint(students){
    let sumBoy = 0;
    let sumGirl = 0;
    let avgBoy = 0;
    let avgGirl = 0;
    let countBoy = 0;
    let countGirl = 0;

    students.forEach((student)=>{
        if(student.gender === 'male'){
            sumBoy += student.point;
            countBoy++;
        }else{
            sumGirl += student.point;
            countGirl++;
        }
    })

    avgBoy = sumBoy/countBoy;
    avgGirl = sumGirl/countGirl;

    console.log('Point Average of Girl = ' + avgGirl + ' Point Average of Boy = ' + avgBoy);
}

avgPoint(students);