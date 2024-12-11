const validateLinkedInURL = (url) => {
    const regex = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}$/;
    if (regex.test(url)) {
        console.log("Valid LinkedIn Profile URL:", url);
    } else {
        console.log("Invalid LinkedIn Profile URL:", url);
    }
};

// Example Usage
validateLinkedInURL("https://www.linkedin.com/in/johndoe123");
validateLinkedInURL("https://www.linkedin.com/in/short");
validateLinkedInURL("https://www.example.com/in/johndoe");
