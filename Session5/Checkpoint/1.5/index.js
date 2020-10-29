let quizz = [
    q1 = {
        question : 'Which fictional detective lived at 221b Baker Street?',
        ans: {
            a:'Watson',
            b:'Sam Spade',
            c:'Scubidu',
            d:'Sherlock Holmes'
        },
        right:'d',
    },
    q2 = {
        question : 'What sweet food made by bees using nectar from flowers?',
        ans:{
            a:'Bread',
            b:'Honey',
            c:'Sugar',
            d:'Potent',
        },
        right:'b',
    
    },
    q3 = {
        question : 'Which country is home to the kangaroo?',
        ans : {
            a: 'Australia',
            b:'Autria',
            c:'New Zealand',
            d:'US',
        },
        right:'a',
    
    },
    q4 = {
        question : 'How many legs do an optopus has?',
            ans: {
            a: '4 legs',
            b: 'No legs',
            c: '8 legs',
            d: ' 2 legs',
            },
        right: 'c',
    },
    ];
    let a =[Math.floor(Math.random()*quizz.length)];
    let x = prompt(`${quizz[a].question} \n A. ${quizz[a].ans.a} \n B. ${quizz[a].ans.b} \n C. ${quizz[a].ans.c} \n D. ${quizz[a].ans.d} `);
    let c=x.toLowerCase();
    if(c==quizz[a].right){
        alert("Correct");
    } else {
        alert("Wrong");
    }