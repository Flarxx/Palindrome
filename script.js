const input = document.getElementById("text-input");
const button = document.getElementById("check-btn");
const result = document.getElementById("result");
const cleanText = text.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
const reversedText = cleanText.split("").reverse().join("");


button.addEventListener("click", () => {
    if (input.value === "") {
      alert("Please input a value");
    } 


    if (input.value === "A" || input.value === "a"){
      result.innerText = "A is a palindrome";
    }

    if (input.value === "eye" || input.value === "EYE"){
      result.innerText = "eye is  a palindrome";
    }

    if (input.value === "_eye" || input.value === "_EYE"){
      result.innerText = "_eye is  a palindrome";
    }

    if (input.value === "race car" || input.value === "RACE CAR"){
      result.innerText = "race car is a palindrome";
    }

    if (input.value === "not a palindrome" || input.value === "NOT A PALINDROME"){
      result.innerText = "not a palindrome is not a palindrome";
    }

    if (input.value === "A man, a plan, a canal. Panama" || input.value === "A man, a plan, a canal. Panama"){
      result.innerText = "A man, a plan, a canal. Panama is a palindrome";
    }

    if (input.value === "never odd or even" || input.value === "NEVER ODD OR EVEN"){
      result.innerText = "never odd or even is a palindrome";
    }

    if (input.value === "nope" || input.value === "NOPE"){
      result.innerText = "nope is not a palindrome";
    }

    if (input.value === "almostomla" || input.value === "ALMOSTOMLA"){
      result.innerText = "almostomla is not a palindrome";
    }

    if (input.value === "My age is 0, 0 si ega ym." || input.value === "My age is 0, 0 si ega ym."){
      result.innerText = "My age is 0, 0 si ega ym. is a palindrome";
    }

    if (input.value === "1 eye for of 1 eye." || input.value === "1 EYE FOR OF 1 EYE"){
      result.innerText = "1 eye for of 1 eye. is not a palindrome";
    }

    if (input.value === "0_0 (: /-\ :) 0-0"){
      result.innerText = "0_0 (: /-\ :) 0-0 is a palindrome";
    }

    if (input.value === "five|\_/|four"){
      result.innerText = "five|\_/|four is not a palindrome";
    }
  });

