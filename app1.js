


// let Form = document.forms.AgeCal;
// let Para_inn = document.querySelector(".Para");

// Form.addEventListener("submit", (event) => {
//     event.preventDefault();

//     let Date_val = Form.elements.Date_Cal.value;

//     let BirthDate = new Date(Date_val);

//     let CurrentDate = new Date();

//     let Time_Day = Math.abs(CurrentDate.getDate() - BirthDate.getDate());
//     let Time_Month = Math.abs(CurrentDate.getMonth() - BirthDate.getMonth());
//     let Time_year = Math.abs(CurrentDate.getFullYear() - BirthDate.getFullYear());

//     if (CurrentDate.getMonth() < BirthDate.getMonth()) {
//         Time_year--;
//         Time_Month = CurrentDate.getMonth() + 12 - BirthDate.getMonth();
//     }

//     let daysInMonth = getDaysInMonth(BirthDate.getFullYear(), BirthDate.getMonth() + 1);

//     if (CurrentDate.getDate() < BirthDate.getDate()) {
//         Time_Month--;
//         Time_Day = CurrentDate.getDate() + daysInMonth - BirthDate.getDate();
//     }
    
//     Para_inn.innerHTML = `${Time_year} Years ${Time_Month} Months ${Time_Day} Days`;
// });

// function getDaysInMonth(year, month) {
//     return new Date(year, month, 0).getDate();
// }











// let Form = document.forms.AgeCal;
// let Para_inn = document.querySelector(".Para");

// Form.addEventListener("submit", (event) => {
//     event.preventDefault();

//     let birthDate = moment(Form.elements.Date_Cal.value);
    
//     var today = moment();
  
//     var yearsDiff = today.diff(birthDate, 'years');
//     birthDate.add(yearsDiff, 'years');
  
//     var monthsDiff = today.diff(birthDate, 'months');
//     birthDate.add(monthsDiff, 'months');
  
//     var daysDiff = today.diff(birthDate, 'days');
  
//     var age = {
//       years: yearsDiff,
//       months: monthsDiff,
//       days: daysDiff
//     };
  
//      Para_inn.innerHTML = "Your age is: " + age.years + " years, " + age.months + " months, and " + age.days + " days.";
//   })



// let Form = document.forms.AgeCal

// let Para_inn = document.querySelector(".Para")


// Form.addEventListener("submit", (event) => {
//     event.preventDefault();


//     var birthDate = new Date(Form.elements.Date_Cal.value);
//     console.log(birthDate);

//     var today = new Date();
  
//     var yearsDiff = today.getFullYear() - birthDate.getFullYear();
//     var monthsDiff = today.getMonth() - birthDate.getMonth();
//     var daysDiff = today.getDate() - birthDate.getDate();
  
   

//     if (monthsDiff < 0  || (monthsDiff === 0 && daysDiff < 0)) {
//        yearsDiff--;
//        monthsDiff += 12;
//     }
  
//     if (daysDiff < 0) {
//       var lastMonth = new Date(today.getFullYear(), today.getMonth() - 1, 0);
//       daysDiff = lastMonth.getDate() - birthDate.getDate() + today.getDate();
//       monthsDiff--;
//     }
  
//    Para_inn.innerHTML=`${yearsDiff} years ${monthsDiff} Months ${daysDiff} Days`  
//    })





