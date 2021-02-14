
//start the quiz
function startQuiz() {
    document.getElementById("intro").style.display = "none";
    document.getElementById("question1").style.display = "inline-block";
}

//move onto next question 

function showQ2() {
    document.getElementById("question1").style.display = "none";
    document.getElementById("question2").style.display = "inline-block";
}

function showQ3() {
    document.getElementById("question2").style.display = "none";
    document.getElementById("question3").style.display = "inline-block";
}

function showQ4() {
    document.getElementById("question3").style.display = "none";
    document.getElementById("question4").style.display = "inline-block";
}

function showQ5() {
    document.getElementById("question4").style.display = "none";
    document.getElementById("question5").style.display = "inline-block";
}


//show results
function showResult() {
    calculateResult()
    document.getElementById("question5").style.display = "none";
    document.getElementById("result").style.display = "inline-block";
  }

//calculate results

function calculateResult() {
    const radios1 = document.querySelectorAll('input[name="q1"]');
    let q1Value;
    for (const rb of radios1) {
        if (rb.checked) {
            q1Value = rb.value;
            break;
        }
    }

        const radios2 = document.querySelectorAll('input[name="q2"]');
        let q2Value;
        for (const rb of radios2) {
            if (rb.checked) {
                q1Value = rb.value;
                break;
            }
        }

            const radios3 = document.querySelectorAll('input[name="q3"]');
            let q3Value;
            for (const rb of radios3) {
                if (rb.checked) {
                    q1Value = rb.value;
                    break;
                }
            }   

                const radios4 = document.querySelectorAll('input[name="q4"]');
                let q4Value;
                for (const rb of radios4) {
                    if (rb.checked) {
                        q1Value = rb.value;
                        break;
                    }
                }

                const radios5 = document.querySelectorAll('input[name="q5"]');
                let q5Value;
                for (const rb of radios5) {
                    if (rb.checked) {
                        q1Value = rb.value;
                        break;
                    }
                }


                let total = Number(q1Value) + Number(q2Value) + Number(q3Value) + Number(q4Value) + Number(q5Value);
                result = total / 6;             

                if (result > 2)  {
                    msg = "You have 'completed' lockdown, is there anything you haven't done? (Except go out)."; 
                  } else if (result >= 1.5) {
                    msg = "You've had a good go at lockdown, you could have been more productive though, there is a pandemic going on..";
                  } else if (result >= 0.5) {
                    msg = "You have clearly lost in entirely, and to be honest, who could blame you.";
                  }
                 
                  document.getElementById("result-text").innerHTML = msg
                }

                
//ensure each question has a response


//go back to start of quiz