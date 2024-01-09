let Team = [
    {
        image:"images/team/1.png" ,
        MemberName: "Luke Miller",
        Role: "Salesman"
    },
    {
        image:"images/team/2.png" ,
        MemberName: "Michael Diaz",
        Role: "Business Owner"
    },
    {
        image:"images/team/3.png" ,
        MemberName: "Briana Ross",
        Role: "Photographer"
    },
    {
        image:"images/team/4.png" ,
        MemberName: "Lauren Rivera",
        Role: "Car Specialist"
    },
    {
        image:"images/team/5.png" ,
        MemberName: "Martin Rizz",
        Role: "Martin Rizz"
    },
    {
        image:"images/team/6.png" ,
        MemberName: "Caitlyn Hunt",
        Role: "Manager"
    }
]

let teamHTML = "";
Team.forEach((member) =>{
   teamHTML += `
   <div class="memeber">
   <div class="member-img">
       <img src="${member.image}" alt="">
   </div>
   <div class="member-info">
       <h3>${member.MemberName}</h3>
       <p>${member.Role}</p>
   </div>
</div>
   `
})

let teamContainer = document.querySelector(".team-container");
teamContainer.innerHTML = teamHTML;