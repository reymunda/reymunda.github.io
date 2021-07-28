window.addEventListener('load',() =>{
    loadQuestion(i)
})

let point = 0,
    i = 0,
    questions = [
        {
            question: "Yang dijuluki kota kembang?",
            option: [
                {
                    answer: "Bandung",
                    isCorrect: true
                },{
                    answer: "Jakarta",
                    isCorrect: false
                },{
                    answer: "Bogor",
                    isCorrect: false
                },{
                    answer: "Bali",
                    isCorrect: false
                },
            ]
        },{
            question: "Pulau paling timur di Indonesia?",
            option: [
                {
                    answer: "Sumatera",
                    isCorrect: false
                },{
                    answer: "Papua",
                    isCorrect: false
                },{
                    answer: "Miangas",
                    isCorrect: true
                },{
                    answer: "Halmahera",
                    isCorrect: false
                },
            ]
        },{
            question: "Suku baduy terletak di?",
            option: [
                {
                    answer: "Bali",
                    isCorrect: false
                },{
                    answer: "Jakarta",
                    isCorrect: false
                },{
                    answer: "Banten",
                    isCorrect: true
                },{
                    answer: "Surabaya",
                    isCorrect: false
                },
            ]
        },{
            question: "Lagu daerah Sumatera Barat yang mana?",
            option: [
                {
                    answer: "Ampar Ampar Pisang",
                    isCorrect: false
                },{
                    answer: "Kampuang Nan Jauh di Mato",
                    isCorrect: true
                },{
                    answer: "Yamko Rambe Yamko",
                    isCorrect: false
                },{
                    answer: "Manuk Dadali",
                    isCorrect: false
                },
            ]
        },{
            question: "Dari tepung sagu khas Indonesia Timur. Apakah itu?",
            option: [
                {
                    answer: "Pempek",
                    isCorrect: false
                },{
                    answer: "Cireng",
                    isCorrect: false
                },{
                    answer: "Laupek Sage",
                    isCorrect: false
                },{
                    answer: "Papeda",
                    isCorrect: true
                },
            ]
        }
    ],
    answer = document.querySelectorAll('.answer p'),
    questionCase = document.getElementById('question');
    
const loadQuestion = (i) => {
    questionCase.textContent = questions[i].question;
    questions[i].option.forEach((e,i) => {
        answer[i].textContent = e.answer;
        answer[i].id = e.isCorrect;
    })
}
answer.forEach((e) => {
    e.addEventListener('click',() =>{
        i++
        if(e.id === "true"){
            point++
        }
        if(i == questions.length){
            let menus = document.querySelector('.menus');
            menus.style.height = '375px';
            menus.style.backgroundColor = '#6fa8ff';
            menus.innerHTML = `<h1 class="text-center" style="line-height:330px;color:white;">Skor kamu adalah: ${point}/5</h1>`;
        }else{
            loadQuestion(i)
        }
    })
})

