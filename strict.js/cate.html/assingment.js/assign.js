function getGrade(){
    var marks=84;
    switch(true){
        case marks>=80:
        console.log("A")
        break;
        case marks>=70:
            console.log("B")
        break;
        case marks>=60:
            console.log("C")
            break;
            case marks>=50:
                console.log("D")
                break;
                case marks>=40:
                    console.log("E")
                    break;
                    default:
                        console.log("F");

        }

   
}getGrade();