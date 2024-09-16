function openWindow(){
    window.open("new.html");
}

function background(){
    const colors=['red','yellow','skyblue','orange','cyan','lime'];
    const rancolor=colors[Math.floor(Math.random()*colors.length)];
    document.body.style.backgroundColor=rancolor;
}

function calendar(){
    const month=document.getElementById('month').value;
    const year=document.getElementById('year').value;
    const caldiv=document.getElementById('calender').value;
    const daysInMonth=new Date(year,parseInt(month)+1,0).getDate();
    
    let calendarHTML=`<h3>${new Date(year,month,30).getDate()}${new Date(year,month).toLocaleString('default',{month:'long'})}${year}</h3>`
    calendarHTML+='<table border="1" cellspacing="0" cellpadding="5"><tr>';

    for(let i=1;i<=daysInMonth;i++){
        if(i==1){
            const firstday=new Date(year,month,1).getDay();
            for(let j=0;j<firstday;j++){
                calendarHTML+='<td></td>';
            }
        }
        calendarHTML+=`<td>${i}</td>`;
        if(new Date(year,month,i).getDay() ===6){
            calendarHTML+='</tr><tr>';
        }
    }
    calendarHTML+='</tr></table>';
    caldiv.innerHTML=calendarHTML;
    caldiv.style.display='block';
}
document.getElementById('registrationForm').addEventListener('submit',function(event) {
    const username=document.getElementById('username').value;
    const email=document.getElementById('email').value;
    const password=document.getElementById('password').value;

    if(username === '' || email === '' || password === ''){
        alert('Fill the Details!!!');
        event.preventDefault();
    }else{
        alert('Registration Successful!!!');
    }
});