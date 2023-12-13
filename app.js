"use strict"

// let Form = document.forms.AgeCal

// let Para_inn = document.querySelector(".Para")

// console.log(Form);

// Form.addEventListener("submit", (event) => {
//     event.preventDefault();

//     let Date_val = new Date(Form.elements.Date_Cal.value).getTime();
//     console.log(Date_val);

//     let Current_Date = new Date().getTime();
//     console.log(Current_Date);

//     let Time_Differ = Date_val - Current_Date;
//     console.log(Time_Differ);

//     let Year = Math.floor(Time_Differ / (1000 * 60 * 60 * 24 * 365));
//     let Remain_Months = Math.floor((Time_Differ / (1000 * 60 * 60 * 24 * 30)));
//     let Remain_Days = Math.floor((Time_Differ / (1000 * 60 * 60 * 24 )));

//     console.log(Year);
//     console.log(Remain_Months);
//     console.log(Remain_Days);

//     Para_inn.innerHTML = `${Year} Years, ${Remain_Months} Months, ${Remain_Days} Days`;
// })




//Way 2



// let Form = document.forms.AgeCal;
// let Para_inn = document.querySelector(".Para");

// Form.addEventListener("submit", (event) => {
//     event.preventDefault();

//     let Date_val = Form.elements.Date_Cal.value;

//     let Date = new Date(Date_val).getDate();
//     let Months = new Date(Date_val).getMonth() + 1;
//     let year = new Date(Date_val).getFullYear();

//     let Current_Date = new Date().getTime();

//     let CurrDate = new Date(Current_Date).getDate();
//     let CurrMonths = new Date(Current_Date).getMonth() + 1;
//     let Curryear = new Date(Current_Date).getFullYear();

//     let Time_Day = Day - CurrDate;
//     let Time_Month = Months - CurrMonths;
//     let Time_year = year - Curryear;

//    if(CurrMonths < Months){
//        year-1
//       CurrMonths+12
//      Time_Month=CurrMonths-Months
//    }
//    if(CurrDate < Date){
//      Time_Month-1

//    }


//     Para_inn.innerHTML = `${Time_year} Years ${Time_Month} Months ${Time_Day} Days`;
// }





let Form = document.forms.AgeCal;
let Para_inn = document.querySelector(".Para");

Form.addEventListener("submit", (event) => {
    event.preventDefault();

    let Date_val = Form.elements.Date_Cal.value;

    let BirthDate = new Date(Date_val).getDate();
    let BirthMonths = new Date(Date_val).getMonth() + 1;
    let Birthyear = new Date(Date_val).getFullYear();

    let Current_Date = new Date();

    let CurrDate = new Date(Current_Date).getDate();
    let CurrMonths = new Date(Current_Date).getMonth() + 1;
    let Curryear = new Date(Current_Date).getFullYear();

    let Time_Day = Math.abs(BirthDate- CurrDate);
    let Time_Month = Math.abs(BirthMonths - CurrMonths);
    let Time_year = Math.abs(Birthyear - Curryear);

    if (CurrMonths < BirthMonths) {
        Time_year--;
        Time_Month =  (12 - BirthMonths) + CurrMonths ;
        console.log(Time_Month);
    }

    let daysInMonth = new Date(Birthyear,BirthMonths, 0).getDate();
    if (CurrDate < BirthDate) {
        Time_Month--;
        Time_Day = (daysInMonth - BirthDate) + CurrDate
    }
    else{
     Time_Day=CurrDate-BirthDate
    }

    if(Time_Month < 0){
      Time_Month += 12
      Time_year--
    }

    Para_inn.innerHTML = `${Time_year} Years ${Time_Month} Months ${Time_Day} Days`;
});




// let Form = document.forms.AgeCal;
// let Para_inn = document.querySelector(".Para");

// Form.addEventListener("submit", (event) => {
//     event.preventDefault();

//     let Date_val = Form.elements.Date_Cal.value;

//     let BirthDay = new Date(Date_val).getDate();
//     let BirthMonths = new Date(Date_val).getMonth() + 1;
//     let Birthyear = new Date(Date_val).getFullYear();

//     let Current_Date = new Date();

//     let CurrDate = new Date(Current_Date).getDate();
//     let CurrMonths = new Date(Current_Date).getMonth() + 1;
//     let Curryear = new Date(Current_Date).getFullYear();

//     let Time_Day = Math.abs(BirthDay - CurrDate);
//     let Time_Month = Math.abs(BirthMonths - CurrMonths);
//     let Time_year = Math.abs(Birthyear - Curryear);

//     if (CurrMonths < BirthMonths) {
//         Time_year--;
//         Time_Month = 12 + CurrMonths - BirthMonths;
//     }

//     if (CurrDate < BirthDay) {
//         Time_Month--;
//         let daysInPrevMonth = new Date(Birthyear, BirthMonths - 1, 0).getDate()+1;
//         Time_Day = (daysInPrevMonth - BirthDay) + CurrDate;
//     } else {
//         Time_Day = CurrDate - BirthDay;
//     }

//     if (Time_Month < 0) {
//         Time_Month += 12;
//         Time_year--;
//     }

//     Para_inn.innerHTML = `${Time_year} Years ${Time_Month} Months ${Time_Day} Days`;
// });





















