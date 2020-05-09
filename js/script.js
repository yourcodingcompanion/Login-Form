window.addEventListener('load', function () {
    // select tab element
    const signUpTab = document.getElementById('signUp');
    const signInTab = document.getElementById('signIn');

    //select form element
    const signUpForm = document.getElementById('signUp-form');
    const signInForm = document.getElementById('signIn-form');

    signUpTab.addEventListener('click', () => {
        signInTab.classList.remove('active');
        signUpTab.classList.add('active');

        signInForm.classList.remove('active');
        signUpForm.classList.add('active');
    });

    signInTab.addEventListener('click', () => {
        signUpTab.classList.remove('active');
        signInTab.classList.add('active');

        signUpForm.classList.remove('active');
        signInForm.classList.add('active');
    });
});