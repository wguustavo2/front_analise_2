const lampada = document.getElementById('lampada')
const btnAlternar = document.getElementById('btn-alternar')
const baseUrlimg = 'https://bug-free-space-journey-wrj56vqjgv7v3v45v-5503.app.github.dev/Aulas/LampadaJavascript/'

// alert(lampada.src)
// alert(btnAlternar.textContent)
// btnAlternar.addEventListener('click', function(){
//     if (lampada.src == baseUrlimg+ 'lampada1.png'){
//         lampada.src = 'lampada2.png'
//         btnAlternar.textContent = "Lampada acessa!"
//     }
// })

btnAlternar.addEventListener('click', function(){
    if (lampada.src == baseUrlimg+ 'lampada1.png'){
        lampada.src = 'lampada2.png'
        btnAlternar.textContent = "Lampada acessa!"
        btnAlternar.style.backgroundColor = 'green'
    } else {
        lampada.src = 'lampada1.png'
        btnAlternar.textContent = "Lampada Apagada"
        btnAlternar.style.backgroundColor = 'yellow' 
    }
})