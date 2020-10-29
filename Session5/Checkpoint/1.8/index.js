let quizz = [
    q1 = {
        question : 'Which fictional detective lived at 221b Baker Street?',
        ans:['Waston','Sam Spade','Scubidi','Sherlock Holmes'],
        right:'Sherlock Holmes',
        used : false
    },
    q2 = {
        question : 'What sweet food made by bees using nectar from flowers?',
        ans : ['Bread','Honey','Sugar','Potent'],
        right:'Honey',
        used: false
    
    },
    q3 = {
        question : 'Which country is home to the kangaroo?',
        ans : ['Australia','Autria','New Zealand','US'],
        right:'Australia',
        used : false
    
    },
    q4 = {
        question : 'How many legs do an optopus has?',
            ans : ['4 legs','No legs','8 legs','2 legs'],
        right: '8 legs',
        used: false
    },
];
    for(let i=0;i<quizz.length;i++){
    let a =[Math.floor(Math.random()*quizz.length)];
    let b = [Math.floor(Math.random()*quizz[a].ans.length)];
    let x = prompt(`${quizz[a].question} \n A. ${quizz[a].ans[b]} \n B. ${quizz[a].ans[b]} \n C. ${quizz[a].ans[b]} \n D. ${quizz[a].ans[b]} `);
    }
    alert("We are out of question");