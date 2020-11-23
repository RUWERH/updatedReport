//auth listerner

auth.onAuthStateChanged(user => {
    if (user) {
        db.collection('reports').onSnapshot(snapshot => {
            setupReports(snapshot.docs);
            setupNav(user);
        });

    } else {
        setupNav()
        setupReports([]);

    }
})


// const createReport = document.querySelector('#create-form');
// createReport.addEventListener('submit', (e) => {
//     e.preventDefault();

//     db.collection('reports').add({
//         organization: createReport['OrgName'].value,
//         location: createReport['location'].value,
//         contact: createReport['contact'].value,
//         sys_app: createReport['sys_app'].value,
//         datedetected: createReport['datedetcted'].value,

//     }).then(() => {
//         const modal = document.querySelector('#modal-create');
//         M.Modal.getInstance(modal).close();
//         //resetform
//         createReport.reset()


//     }).catch(err => {
//         console.log(err.message)
//     })
// })


//signup

const signupForm = document.querySelector('#signup-form')

signupForm.addEventListener('submit', (e) => {
    e.preventDefault();


    //get user info
    const email = signupForm['signup-email'].value;
    const password = signupForm['signup-password'].value;

    auth.createUserWithEmailAndPassword(email, password).then(cred => {

        const modal = document.querySelector('#modal-signup')
        M.Modal.getInstance(modal).close();
        //resetform
        signupForm.reset()


    })

})

//logout
const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut();
})


//login
const signin = document.querySelector('#login-form')

signin.addEventListener('submit', (e) => {
    e.preventDefault();


    //get user info
    const email = signin['login-email'].value;
    const password = signin['login-password'].value;

    auth.signInWithEmailAndPassword(email, password).then(cred => {

        const modal = document.querySelector('#modal-login')
        M.Modal.getInstance(modal).close();
        //resetform
        signin.reset()


    })

})