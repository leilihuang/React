export default class Util{
    timeOut(date){
        let d = new Date(date);
        let y=d.getFullYear();
        let M=Number(d.getMonth())+1 > 10 ? Number(d.getMonth())+1 : 0+''+Number(d.getMonth())+1 ;
        let day=Number(d.getDate()) > 10 ? Number(d.getDate()) : 0+''+d.getDate();

        return y+'-'+M+'-'+day;
    }
} 