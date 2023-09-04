const toggle = document.querySelector('input[type="checkbox"]');
const toggleText = document.querySelector('.toggle_text_sp');

// Dark/Light mode function
function themeMode(mode, icon1, icon2) {
    document.querySelector('#ab_image1').src = `illustrations/undraw_search_app_${mode}.svg`;
    document.querySelector('#ab_image2').src = `illustrations/undraw_experience_design_${mode}.svg`;
    document.querySelector('#ab_image3').src = `illustrations/undraw_traveling_${mode}.svg`;
    
    document.querySelector('#pro_image1').src = `illustrations/project/undraw_aircraft_${mode}.svg`;
    document.querySelector('#pro_image2').src = `illustrations/project/undraw_cloud_hosting_${mode}.svg`;
    document.querySelector('#pro_image3').src = `illustrations/project/undraw_make_it_rain_${mode}.svg`;
    document.querySelector('#pro_image4').src = `illustrations/project/undraw_online_test_${mode}.svg`;
    document.querySelector('#pro_image5').src = `illustrations/project/undraw_react_re_${mode}.svg`;
    document.querySelector('#pro_image6').src = `illustrations/project/undraw_team_up_${mode}.svg`;

    document.querySelector('.bx').classList.remove(`bx-${icon1}`);
    document.querySelector('.bx').classList.add(`bx-${icon2}`);

    mode === 'dark' ? toggleText.textContent = 'Dark Mode' : toggleText.textContent = 'Light Mode';
};

// The function for changing the theme form light mode to dark mode and wise-versa
function switchTheme (event) {
    if (event.target.checked){
        document.documentElement.setAttribute('dark-theme', 'dark');
        themeMode("dark", 'sun', 'moon');
        localStorage.setItem("theme", "dark");
    }else {
        document.documentElement.setAttribute('dark-theme', 'light');
        themeMode('light', 'moon', 'sun');
        localStorage.setItem("theme", "light");
    };
};

toggle.addEventListener('change', switchTheme);

// Getting data from local storage and appling the functionalities
const currentTheme = localStorage.getItem('theme');

if (currentTheme === 'dark'){
    themeMode(currentTheme, 'sun', 'moon');
    document.documentElement.setAttribute('dark-theme', 'dark');
    toggle.checked = true;
}else if (currentTheme === 'light'){
    themeMode(currentTheme, 'moon', 'sun');
    document.documentElement.setAttribute('dark-theme', 'light');
};