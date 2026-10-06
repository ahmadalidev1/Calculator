alert("Hello! Welcome to Calculator")


const allBtns = document.querySelectorAll("button");
const inp = document.querySelector("input");

allBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const btnContent = btn.innerText;
  
      if (btnContent === "=") {
  
        if (inp.value.includes("%")) {
          const operators = ["+", "-", "/", "*"];
          let ope = "";
          let firstVal = "";
          let secVal = "";
  
          for (let i = 0; i < inp.value.length; i++) {
            if (operators.includes(inp.value[i])) {
              ope = inp.value[i];
              firstVal = Number(inp.value.slice(0, i));
              secVal = Number(inp.value.slice(i + 1, inp.value.length - 1));
              break;
            }
          }
  
          const res = eval(
            `${firstVal} ${ope} ${(secVal / 100) * firstVal}`
          );
  
          inp.value = res;
  
        } else {
          inp.value = eval(inp.value);
        }
  
      } else if (btnContent === "AC") {
        inp.value = "";
  
      } else if (btnContent === "C") {
        inp.value = inp.value.slice(0, -1);
  
      } else if (btnContent === "%") {
        inp.value += "%";
  
      } else {
        inp.value += btnContent;
      }
    });
  });
  