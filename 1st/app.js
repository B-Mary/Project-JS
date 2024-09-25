const slidesCollection = document.querySelectorAll('.slide')
const back = document.querySelector('.body')
const mainTitle = document.querySelector('h2')
const COLORS = [
     'blue',
     'violet',
     'orange'
];

const ColorsText= [
    'text-color-black',
    'text-color-white',
    'text-color-red'
]


for( const item of slidesCollection){
    item.addEventListener('click', () => {

        clearActiveClass()

        item.classList.add('active')
        let numberColor = Math.floor(Math.random() * COLORS.length);
        let valueColor = COLORS[numberColor]

        let numberColorText = Math.floor(Math.random() * ColorsText.length);
        let valueColorText = ColorsText[numberColorText]

        back.classList.add(valueColor)
        mainTitle.classList.add(valueColorText)
    })
}

function clearActiveClass() {
    slidesCollection.forEach((item) => {
        item.classList.remove('active')
        let numberColor = Math.floor(Math.random() * COLORS.length);
    let valueColor = COLORS[numberColor]

    let numberColorText = Math.floor(Math.random() * ColorsText.length);
        let valueColorText = ColorsText[numberColorText]

        back.classList.remove(valueColor)

        mainTitle.classList.remove(valueColorText)
    })
}