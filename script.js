const Quizdata=[]
{
   question:"which language runs in a web browser?"
   a:"java",
   b;"c"
   c:"python"
   d:"javascript"
   correct:"d"
 


    question:"what does css stand for?",
    a;"central style sheets"
    b:"cascading style sheet"
    c:"cascading simple sheet"
    d:"cars simple sheet"
    correct:"d" 
}
{
    question:"what does html stand for ?",
    a;"Hypertext markup language"
    b:"Hypertext markdown language"
    c:"Hyperloop machine language"
    d:"Helicopters Termunals motorboats Lambogins"
    correct:"a" 
}
question:"Javascript was launched whith year?"
    a;"1994"
    b:"1995"
    c:"1996"
    d:"1997"
    correct:"b"
{
}
    const quiz=document.getElementById('quiz')
    const answerEls=document.querySelectorAll('.answer')
    const questionEl=document.getElementById('question')
    const a_text=document.getElementById('a_text')
    const b_text=document.getElementById('b_text')
    const c_text=document.getElementById('c_text')
    const d_text=document.getElementById('d_text')
    const submitBtn=document.getElementById('submit')


    function loadQuiz() {

        deselectAnswer()
        
        const currentquizData=quizData[currentquiz]

        questionEl.innerText=currentquizData.question
        a_text=innerText=currentquizData.a
        b_text=innerText=currentquizData.b
        c_text=innerText=currentquizData.c
        d_text=innerText=currentquizData.d
    }

    function getselected() {
      let answerEls
      answerEls.forEach(element => {
        if(answerEl.checked) {
            answer=answerEl.id
        }
        
      })
      return answer 

    }



    submitBtn.addEventListerner('click',() => {
        const answer=getselected()
        if(answer){
            if(answer===quizData[currentquiz].correct) {
                score++
            }

            currentquiz++

            if(currentquiz < quiz.length){
                loadQuiz()
            }else{
                quiz.innerHtml= `
                <h2>you answered${score}/${Quizdata.length}questions correctly</h2>

                <button onclick="location.reload()">Reload>
            }