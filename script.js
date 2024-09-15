var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _a;
// personal information section interactivity
var personalInfoSection = document.getElementById("personalInfoSection");
var togglePersonalInformation = document.getElementById("togglePersonalInformation");
var isPersonalInformationSectionVisible = true;
togglePersonalInformation.addEventListener("click", function () {
    if (isPersonalInformationSectionVisible) {
        personalInfoSection.style.display = "none";
        togglePersonalInformation.textContent = "Show Personal Information";
    }
    else {
        personalInfoSection.style.display = "block";
        togglePersonalInformation.textContent = "Hide Personal Information";
    }
    isPersonalInformationSectionVisible = !isPersonalInformationSectionVisible;
});
// personal Education section interactivity
var educationSection = document.getElementById("education");
var toggleEducationButton = document.getElementById("toggleEducationButton");
toggleEducationButton.addEventListener("click", function () {
    if (educationSection.style.display === "none") {
        educationSection.style.display = "block";
        toggleEducationButton.textContent = "Hide Education";
    }
    else {
        educationSection.style.display = "none";
        toggleEducationButton.textContent = "Show Education";
    }
});
// summary section interactivity
var professionalSummarySection = document.getElementById("professionalSummary");
var toggleProfessionalSummary = document.getElementById("toggleProfessionalSummary");
toggleProfessionalSummary.addEventListener("click", function () {
    if (professionalSummarySection.style.display === "none") {
        professionalSummarySection.style.display = "block";
        toggleProfessionalSummary.textContent = "Hide Professional Summary";
    }
    else {
        professionalSummarySection.style.display = "none";
        toggleProfessionalSummary.textContent = "Show Professional Summary";
    }
});
// Experience section interactivity 
var experienceSection = document.getElementById("experience");
var toggleExperienceButton = document.getElementById("toggleExperienceButton");
toggleExperienceButton.addEventListener("click", function () {
    if (experienceSection.style.display === "none") {
        experienceSection.style.display = "block";
        toggleExperienceButton.textContent = "Hide Experience";
    }
    else {
        experienceSection.style.display = "none";
        toggleExperienceButton.textContent = "Show Experience";
    }
});
// Skils section interactivity
var skillSection = document.getElementById("skills");
var toggleSkillsButton = document.getElementById("toggleSkillsButton");
toggleSkillsButton.addEventListener("click", function () {
    if (skillSection.style.display === "none") {
        skillSection.style.display = "block";
        toggleSkillsButton.textContent = "Hide Skills";
    }
    else {
        skillSection.style.display = "none";
        toggleSkillsButton.textContent = "Show Skills";
    }
});
// resume Output
// listing elements
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _this = this;
    var _a;
    event.preventDefault();
    var resumeOutputDisplay = document.getElementById('resumeOutput').style.display = 'block';
    var profilePictureInput = document.getElementById('profilePicture');
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var cityElement = document.getElementById('city');
    var professionalSummaryElement = document.getElementsByName('professionalSummary')[0];
    var educationElement = document.getElementsByName('education')[0];
    var experienceElement = document.getElementsByName('experience')[0];
    var skillsElement = document.getElementsByName('skills')[0];
    var usernameElement = document.getElementById('userName');
    //create resume Output
    var allElements = usernameElement && profilePictureInput && nameElement && emailElement && phoneElement && cityElement && professionalSummaryElement && educationElement && experienceElement && skillsElement;
    if (allElements) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var city = cityElement.value;
        var professionalSummary = professionalSummaryElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        var username = usernameElement.value;
        var uniquePath = "resumes/".concat(username.replace(/\s+/g, '_'), "_cv.html"); //unique path to download CV
        var profilePictureFile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';
        var resumeOutput = "\n\n  <h2><u><i><center>Congratulations! Your Resume has been Generated</u></i></h2>\n  ".concat(profilePictureURL ? "<img src=\"".concat(profilePictureURL, "\" alt=\"Profile Picture\" class=\"profilePicture\">") : "", "\n\n  <p><strong>Name:</strong> <span > ").concat(name_1, "</span></p>\n  <p><strong>Email:</strong> <span > ").concat(email, "</span></p>\n  <p><strong>Phone:</strong> <span > ").concat(phone, "</span></p>\n  <p><strong>City:</strong> <span > ").concat(city, "</span></p>\n  <h3>Professional Summary</h3>\n  <p >").concat(professionalSummary.replace(/\n/g, '<br>'), "</p>\n  <h3>Education Details</h3>\n  <p >").concat(education.replace(/\n/g, '<br>'), "</p>\n  <h3>Experience</h3>\n  <p >").concat(experience.replace(/\n/g, '<br>'), "</p>\n  <h3>Skills</h3>\n  <p >").concat(skills, "</p>\n\n  ");
        var downloadLink = document.createElement('a');
        downloadLink.href = 'data:text/html;charset=utf-8,' + encodeURIComponent(resumeOutput);
        downloadLink.download = uniquePath;
        downloadLink.textContent = 'Download your Resume';
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            // resumeOutputElement.appendChild(downloadLink) //jo b download links we provide - consider them in that link
            // resumeOutputElement.style.display = 'block'
            resumeOutputElement.classList.remove("hidden");
            var buttonsContainer = document.createElement("div");
            buttonsContainer.id = "buttonsContainer";
            resumeOutputElement.appendChild(buttonsContainer);
            // add download button pdf
            var downloadButton = document.createElement("button");
            downloadButton.textContent = "Download as PDF";
            downloadButton.addEventListener("click", function () {
                window.print(); //opens the print dialog
            });
            buttonsContainer.appendChild(downloadButton);
            // add shareable link button
            var shareLinkButton = document.createElement("button");
            shareLinkButton.textContent = "Copy shareable link";
            shareLinkButton.addEventListener("click", function () { return __awaiter(_this, void 0, void 0, function () {
                var shareableLink, err_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            shareableLink = "https://domain.com/resumes/".concat(name_1.replace(/\s+/g, '_'), "_cv.html");
                            //use clipboard API to copy shareable link
                            return [4 /*yield*/, navigator.clipboard.writeText(shareableLink)];
                        case 1:
                            //use clipboard API to copy shareable link
                            _a.sent();
                            alert("Shareable link copied");
                            return [3 /*break*/, 3];
                        case 2:
                            err_1 = _a.sent();
                            console.log("failed to copy link", err_1);
                            alert("Please try again");
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            }); });
            buttonsContainer.appendChild(shareLinkButton);
        }
        else {
            console.error('Resume Output elements are missing');
        }
    }
    else {
        console.error('one or more output');
    }
});
