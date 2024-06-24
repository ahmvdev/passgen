const chars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9,"!", "@", "#", "$", "%" ]
const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const genEl = document.getElementById("generate-el")
const inputEl = document.getElementById("input-el")
genEl.addEventListener("click", generate);
let pass = [];



function generate(){
    for(let i=0; i<10 && i<chars.length; i++){
        pass[i] = chars[Math.floor(Math.random() * chars.length)];
    };
        inputEl.value = pass.join('');
        checkSpecialChar(inputEl.value);
};



function checkSpecialChar(val) {
    if(/^(?=.*[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~])(?=.*[0-9])/.test(val)){
    }
    else {
        let value = inputEl.value;
        let specialCharacterAdd = "$";
        let specialNumAdd ="3";
        let position = Math.random() * value.length;
        inputEl.value = value.substring(0, position-1) + specialCharacterAdd + specialNumAdd + value.substring(position);
    }
    
}