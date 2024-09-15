
// personal information section interactivity
const personalInfoSection = document.getElementById("personalInfoSection") as HTMLElement;
const togglePersonalInformation = document.getElementById("togglePersonalInformation") as HTMLElement;
  
  let isPersonalInformationSectionVisible = true;
  
  togglePersonalInformation.addEventListener("click", () => {
    if (isPersonalInformationSectionVisible) {
      personalInfoSection.style.display = "none";
      togglePersonalInformation.textContent = "Show Personal Information";
    } else {
      personalInfoSection.style.display = "block";
      togglePersonalInformation.textContent = "Hide Personal Information";
    }
    isPersonalInformationSectionVisible = !isPersonalInformationSectionVisible;
  });
  


// personal Education section interactivity

const educationSection = document.getElementById("education") as HTMLTextAreaElement;
const toggleEducationButton = document.getElementById("toggleEducationButton") as HTMLButtonElement;



  toggleEducationButton.addEventListener("click", () => {
    if (educationSection.style.display === "none") {
      educationSection.style.display = "block";
      toggleEducationButton.textContent = "Hide Education";
    } else {
      educationSection.style.display = "none";
      toggleEducationButton.textContent = "Show Education";
    }
  });




// summary section interactivity

const professionalSummarySection = document.getElementById("professionalSummary") as HTMLTextAreaElement;
const toggleProfessionalSummary = document.getElementById("toggleProfessionalSummary") as HTMLButtonElement;
  
  toggleProfessionalSummary.addEventListener("click", () => {
    if (professionalSummarySection.style.display === "none") {
      professionalSummarySection.style.display = "block";
      toggleProfessionalSummary.textContent = "Hide Professional Summary";
    } else {
      professionalSummarySection.style.display = "none";
      toggleProfessionalSummary.textContent = "Show Professional Summary";
    }
  });





 // Experience section interactivity 
const experienceSection = document.getElementById(
    "experience"
  ) as HTMLTextAreaElement;
  const toggleExperienceButton = document.getElementById(
    "toggleExperienceButton"
  ) as HTMLButtonElement;
  
  toggleExperienceButton.addEventListener("click", () => {
    if (experienceSection.style.display === "none") {
      experienceSection.style.display = "block";
      toggleExperienceButton.textContent = "Hide Experience";
    } else {
      experienceSection.style.display = "none";
      toggleExperienceButton.textContent = "Show Experience";
    }
  });
  
  

 // Skils section interactivity

const skillSection = document.getElementById("skills") as HTMLTextAreaElement;
const toggleSkillsButton = document.getElementById(
  "toggleSkillsButton"
) as HTMLButtonElement;

toggleSkillsButton.addEventListener("click", () => {
  if (skillSection.style.display === "none") {
    skillSection.style.display = "block";
    toggleSkillsButton.textContent = "Hide Skills";
  } else {
    skillSection.style.display = "none";
    toggleSkillsButton.textContent = "Show Skills";
  }
});






// resume Output

// listing elements

document.getElementById('resumeForm')?.addEventListener('submit', function(event) {
  event.preventDefault();

  const resumeOutputDisplay = document.getElementById('resumeOutput')!.style.display = 'block'
  const profilePictureInput = document.getElementById('profilePicture') as HTMLInputElement
  const nameElement = document.getElementById('name') as HTMLInputElement
  const emailElement = document.getElementById('email') as HTMLInputElement
  const phoneElement = document.getElementById('phone') as HTMLInputElement
  const cityElement = document.getElementById('city') as HTMLInputElement
  const professionalSummaryElement = document.getElementsByName('professionalSummary')[0] as HTMLTextAreaElement
  const educationElement = document.getElementsByName('education')[0] as HTMLTextAreaElement
  const experienceElement = document.getElementsByName('experience')[0] as HTMLTextAreaElement
  const skillsElement = document.getElementsByName('skills')[0] as HTMLTextAreaElement
  const usernameElement = document.getElementById('userName') as HTMLInputElement


  //create resume Output

  let allElements = usernameElement && profilePictureInput && nameElement && emailElement && phoneElement && cityElement && professionalSummaryElement && educationElement && experienceElement && skillsElement
  if(allElements) {

    const name = nameElement.value
    const email = emailElement.value
    const phone = phoneElement.value
    const city = cityElement.value
    const professionalSummary = professionalSummaryElement.value
    const education = educationElement.value
    const experience = experienceElement.value
    const skills = skillsElement.value
    const username = usernameElement.value
    const uniquePath = `resumes/${username.replace(/\s+/g, '_')}_cv.html` //unique path to download CV


    const profilePictureFile = profilePictureInput.files?.[0]
    const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';
  


  const resumeOutput = `

  <h2><u><i><center>Congratulations! Your Resume has been Generated</u></i></h2>
  ${profilePictureURL ? `<img src="${profilePictureURL}" alt="Profile Picture" class="profilePicture">` : ""}

  <p><strong>Name:</strong> ${name}</p>
  <p><strong>Email:</strong> ${email}</p>
  <p><strong>Phone:</strong> ${phone}</p>
  <p><strong>City:</strong> ${city}</p>
  <h3>Professional Summary</h3>
  <p >${professionalSummary.replace(/\n/g,'<br>')}</p>
  <h3>Education Details</h3>
  <p >${education.replace(/\n/g, '<br>')}</p>
  <h3>Experience</h3>
  <p >${experience.replace(/\n/g, '<br>')}</p>
  <h3>Skills</h3>
  <p >${skills}</p>

  `

//creating download link

  // const downloadLink = document.createElement('a')
  // downloadLink.href = 'data:text/html;charset=utf-8,' + encodeURIComponent(resumeOutput)
  // downloadLink.download = uniquePath
  // downloadLink.textContent = 'Download your Resume'



 




  const resumeOutputElement = document.getElementById('resumeOutput')
  if (resumeOutputElement){
    resumeOutputElement.innerHTML = resumeOutput
    resumeOutputElement.classList.remove("hidden")

    const buttonsContainer = document.createElement("div")
    buttonsContainer.id = "buttonsContainer"
    resumeOutputElement.appendChild(buttonsContainer)

    // add download button pdf
    const downloadButton = document.createElement("button")
    downloadButton.textContent = "Download as PDF"
    downloadButton.addEventListener("click", ()=>{
      window.print() //opens the print dialog
    })
    buttonsContainer.appendChild(downloadButton)

    // add shareable link button

    const shareLinkButton = document.createElement("button")
    shareLinkButton.textContent = "Copy shareable link"
    shareLinkButton.addEventListener("click", async () => {
        try {
          const shareableLink = `https://domain.com/resumes/${name.replace(/\s+/g, '_')}_cv.html`
          

          //use clipboard API to copy shareable link
          await navigator.clipboard.writeText(shareableLink)
          alert ("Shareable link copied")
          
        } catch (err) {
          console.log("failed to copy link", err);
          alert("Please try again")
          
        }
    })
    buttonsContainer.appendChild(shareLinkButton)





  } else {
    console.error ('Resume Output elements are missing')
  } 

  } else {
    console.error ('one or more output')
  }
  
})


