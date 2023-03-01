export const dateSetter = () =>{
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();
    if (day < 10){
      day = '0' + day;
    }
    return `${year}-${month +1}-${day}`
  }