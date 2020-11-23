const reportList = document.querySelector('.reports');
const logoutlinks = document.querySelectorAll('.logged-out');
const loginlinks = document.querySelectorAll('.logged-in');
const acctdetails = document.querySelector('.account-details');


const setupNav = (user) => {
    if (user) {
        //user infor

        const html = `<div> logged in as ${user.email}</div>`;
        acctdetails.innerHTML = html;

        loginlinks.forEach(item => item.style.display = 'block')
        logoutlinks.forEach(item => item.style.display = 'none')
    } else {
        loginlinks.forEach(item => item.style.display = 'none')
        logoutlinks.forEach(item => item.style.display = 'block')


    }
}

//setup reports
const setupReports = (data) => {
    if (data.length) {
        let html = '';
        data.forEach(doc => {
            const report = doc.data();
            const li = `
            <div>
            <li>
            <div class="collapsible-header grey lighten-4">${report.organization}</div>
            <div class="collapsible-body white"><p> Location : ${report.location}</p> <span> Contact Info: ${report.contact}</span> <p> Mode of Incident : ${report.sys_app}</p> <p> Date Detected: ${report.datedetected}</p></div>            
             </li>
             </div>
            
            
             
            `;
            
            html += li
            
        });

        reportList.innerHTML = html;

    } else {
        reportList.innerHTML = `
            
            <div class="about container" id="about">
            <div class="row">
                <div class="col s6">
                    <h4> Welcome. </h4>
                    <h6> CERRT Unit Reports</h6>
                    <p>Computer Emergency Readiness And Response Team  provide report on incidents that have occured their mitigation process and advisory on this platform </p>
                    <a class="waves-effect green btn">Please Login to View The reports</a>
                </div>
               
                <div class="col s6 text-center">
                    <img src="./im/NITDALOGO.jpg" alt="" class="about-img">
                </div>
            </div>
        </div>
        `;
    }
}

// setup materialize components
document.addEventListener('DOMContentLoaded', function() {

    var modals = document.querySelectorAll('.modal');
    M.Modal.init(modals);

    var items = document.querySelectorAll('.collapsible');
    M.Collapsible.init(items);

});

