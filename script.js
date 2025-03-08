const GITHUB_USERNAME = "AhmedGamal2004";
const REPO_NAME = "My-Life";
const FILE_PATH = "main/profile.json";

// تحميل بيانات البروفايل من GitHub
async function fetchProfileData() {
    try {
        const response = await fetch(`https://raw.githubusercontent.com/${GITHUB_USERNAME}/${REPO_NAME}/${FILE_PATH}`);
        const data = await response.json();

        // تحديث البيانات في الصفحة
        document.getElementById("profilePic").src = data.profilePicture;
        document.getElementById("cover").style.backgroundImage = `url(${data.coverPicture})`;
        document.getElementById("bioText").value = data.bio;

    } catch (error) {
        console.error("Error fetching profile data:", error);
    }
}

// تحميل البيانات عند فتح الصفحة
fetchProfileData();
