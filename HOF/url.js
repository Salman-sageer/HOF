const validateURL = (url) => {
    const regex = /^(https?:\/\/[a-zA-Z0-9-_.]+(\.[a-zA-Z]+)+)$/;
    if (regex.test(url)) {
        console.log("Valid URL:", url);
    } else {
        console.log("Invalid URL:", url);
    }
};

// Example Usage
validateURL("http://example.com");
validateURL("https://example.com");
validateURL("invalid-url");
