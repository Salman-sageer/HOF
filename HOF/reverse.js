const input = "Hello, World!";
setTimeout(() => {
    const reversed = input.split("").reverse().join("");
    console.log("Reversed String:", reversed);
}, 2000);
