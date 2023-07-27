
//declaring  HTML elements

const imgDiv = document.querySelector('.user_profile');
const img = document.querySelector('#photo');
const file = document.querySelector('#file');
const uploadBtn = document.querySelector('#uploadBtn');

//if user hover on img div

imgDiv.addEventListener('mouseenter',function()
{
        uploadBtn.style.display = "block";
});

//if we hover out  from img div

imgDiv.addEventListener('mouseleave', function()
{
        uploadBtn.style.display = "none";
});

//Image showing functionality

file.addEventListener('change', function()
{
    //this refers to file
    const choosedFile = this.files[0];
    
    if (choosedFile){

        const reader = new FileReader();
        //filereader is a predefined function of JS

        reader.addEventListener('load', function()
        {
            img.setAttribute('src',reader.result);
        });

        reader.readAsDataURL(choosedFile);

        //lets check on browser
    }
});