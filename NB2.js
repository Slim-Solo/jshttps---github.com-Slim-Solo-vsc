const film1 = ['pjuklas', 'siaubo', 3]
const film2 = ['diuna', 'fantastika', 9]
const film3 = ['ring', 'siaubo', 7]
const film4 = ['ziedu valdovas', 'fenteze', 8]
const film5 = ['redirected', 'komedija', 7]

const MegstamasZanras = 'siaubo'
const ManoBalas = 8

function norimasFilmas (filmA, filmB, filmC, balas, zanras)
{
    let ArYraFilmas = false;

    

    if (filmA[2] >= balas && filmA[1] == zanras)
    {
        
        console.log('Jums tiktu filmas: '+filmA[0]);
        ArYraFilmas = true;
    }
    if (filmB[2] >= balas && filmB[1] == zanras)
    {
        console.log('Jums tiktu filmas: '+filmB[0]);
        ArYraFilmas = true;
    }
    if (filmC[2] >= balas && filmC[1] == zanras)
    {
        console.log('Jums tiktu filmas: '+filmC[0]);
        ArYraFilmas = true;
    }
    if(ArYraFilmas = false)
    {
        console.log('Jums Tinkamu filmu nera');
        
    }
}

norimasFilmas(film1, film2, film3, ManoBalas, MegstamasZanras)