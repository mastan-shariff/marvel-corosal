const heroimg = document.querySelector('.content img');
const content = document.querySelector('.content');
const text = document.querySelector('.content .text');
const heroicons = document.querySelectorAll('.fitem img');
const title = document.querySelector('.content .title p');
const cover = document.querySelector('.cover');
const para=document.querySelector('.text p');
const colors = ['var(--darkblue)', 'var(--red)', 'var(--skyblue)', 'var(--green)', 'var(--reddish)'];
const titles = ['DR.STRANGE', 'SPIDER-MAN', 'CAPTAINAMERICA', 'HULK', 'IRON-MAN'];
const description = [
    ' Doctor Strange is a mystical and enigmatic superhero in the Marvel universe. With his background as a brilliant neurosurgeon, Doctor Stephen Strange was thrust into the world of magic and mysticism after a life-altering accident. He embarked on a journey to become the Sorcerer Supreme',

    'Spider-Man, also known as Peter Parker, is a beloved and iconic superhero in the Marvel universe. Bitten by a radioactive spider, Peter gained incredible powers, including superhuman strength, agility, and the ability to cling to walls. With his sense of responsibility and unwavering moral compass, Spider-Man swings through the city, protecting the innocent and fighting against villains',

    'Captain America, whose alter ego is Steve Rogers, is a symbol of patriotism and unwavering heroism. Enhanced by a super-soldier serum during World War II, Captain America possesses enhanced strength, speed, and agility. Wielding his iconic shield, he fights for justice, freedom, and the American ideals he holds dear',

    'The Hulk, with his alter ego being Dr. Bruce Banner, is a complex and immensely powerful superhero. Driven by rage and transformed into a massive, green-skinned creature, the Hulk possesses unparalleled strength and invulnerability. While the Hulks raw power is unmatched, Bruce Banner struggles to control his transformations',

    'Iron Man, also known as Tony Stark, is a charismatic and ingenious superhero. As a genius billionaire and inventor, Tony Stark created a high-tech suit of armor that grants him flight, superhuman strength, and an array of powerful weapons. Using his intelligence and technological prowess, Iron Man fights against evil forces and protects the world from various threats.'

]
const urls = ['url("https://i.pinimg.com/564x/fd/6f/64/fd6f64e632c5f35fc51d3e1413a2c841.jpg")',
    'url("https://i.pinimg.com/564x/9c/85/c6/9c85c6b1f00af127717e4b4c802896d1.jpg")',
    "url('https://i.pinimg.com/564x/17/ac/ce/17acce645cf4f62bc0321fc61e245669.jpg')",
    "url('https://i.pinimg.com/564x/a3/17/64/a317643e4f52f397f1c0cf5b03079b45.jpg')",
    "url('https://i.pinimg.com/564x/9b/2e/eb/9b2eebe01f9f73940b4ec49e69eee79e.jpg')"
]
heroicons.forEach((icon, index) => {

    icon.addEventListener('click', () => {
        cover.style.background = urls[index];
        cover.style.backgroundRepeat = 'no-repeat';
        cover.style.backgroundSize = 'contain';
        cover.style.backgroundPosition = 'right';
        icon.style.filter = 'brightness(160px)';
        content.style.backgroundColor = colors[index];
        title.textContent = titles[index];
        para.textContent=description[index];
        heroimg.style.transform = 'translateX(-100%)';
        text.style.transform = 'translateY(calc(-100% - 100px))';
        text.style.opacity = '0';

        heroimg.style.opacity = '0';
        setTimeout(function () {
            heroimg.src = icon.src;
            heroimg.style.transform = 'translateX(25%)';
            text.style.transform = 'translateY(0%)';
            setTimeout(function () {
                heroimg.style.transform = 'translateX(-0%)';

            }, 500)
            heroimg.style.opacity = '1';
            text.style.opacity = '1';
        }, 500);

    });

});