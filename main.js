// Para mudar o conteudo da pagina - mantendo o background

function changeToConceito() {
    document.getElementById('titulo').innerText = 'Conceito';

    document.getElementById('s2').innerHTML = '<h2>Teste teste teste</h2>'
        + '<h3>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et'
        + 'dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip'
        + 'ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu'
        + 'fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia'
        + 'deserunt mollit anim i."</h3>'
        + '<p>Face melt by instagram<br>Snake bb by lucii_ferr<br>Bem Panterona by brunamanzon<br>Puppy by'
        + 'instagram<br>Narcisse by johwska<br>Funny mirror by wow filtered<br>Piercing by superba_ar<br>Freckles'
        + 'by dricaterto<br>Sparkles by instagram<br>One by exitsimulation<br>Big mouth by thefinnomenon<br>Tattoo'
        + 'by er_ger<br>Freckles Mood by aurorepariente<br>Doodle Sparkles by instagram<br>Mecha Girl by'
        + 'bittermash<br>Funny face by lilmvdi<br>Iconic nose Piercing by kyo_p<br>Foxy love by sasha_soul_art'
        + '<br>Bunny by instagram<br>Untold by sarahmayer<br>Baby face by intellmediamx<br>Eyebrown piercing by'
        + '5ick5ucka<br>TOP FOXY EYES LOOK by xeniabelskaya<br>Kitten by instagram<br>Silver Wave by chungcy</p>';

    document.getElementById('s3').innerHTML = '<img class="carap" src="fotos/original.jpg">'
        + '<p>Bad face by 1_jonas_12<br>Bandage by tzhenghsu<br>LiL Icey Eyes by paigepiskin<br>Cute by'
        + 'robertobrendo<br>DIGI-GXL by inter_sexy<br>Funnyy by funny_number01<br>Shiny latex mask by'
        + 'thebinarycurse<br>Boho Chic by mayabengal<br>Raibow Cute by robertobrendo<br>byallangregorio<br>Big eyes'
        + 'by saar_masks<br>Dark trash realism x byanrijsstraume<br>foxy eyes glam by shamoraiss<br>Kawaii by'
        + 'icelovesbubbletea<br>Ocluder by amnrhm<br>Big nose by callus<br>Random face tattoo'
        + 'byalex_tabuns<br>Expensive by Jepharaujo<br>Kawaii by totallyspiritedaway<br>LazerBoy by'
        + 'davidvfilipe<br>Ricas funny mirrors by wrld.space<br>Ethnic tattoo by varwarock<br>Perfect Tan by'
        + 'bianca_petry<br>Pikachu cute by ngocht2509<br>Cyber Princess by paigepiskin</p>';

    document.getElementById('conceito').className = "active";
    document.getElementById('publicacao').className = "";
    document.getElementById('index').className = "";
}

function changeToPublicacao() {
    document.getElementById('titulo').innerText = 'Publicação';

    document.getElementById('s2').innerHTML = '<img class="cara" src="fotos/teste.png">';

    document.getElementById('s3').innerHTML = '';

    document.getElementById('conceito').className = "";
    document.getElementById('publicacao').className = "active";
    document.getElementById('index').className = "";
}

let index = 1;

let changeImage;

function changeToIndex() {
    document.getElementById('titulo').innerText = 'Our skin is for life, not for likes.';

    document.getElementById('s2').innerHTML = '<img class="cara" id="slider">';

    document.getElementById('s3').innerHTML = '';

    document.getElementById('conceito').className = "";
    document.getElementById('publicacao').className = "";
    document.getElementById('index').className = "active";

    // Para slider

    let numberOfImages = 50;
    let time = 200;
    index = 1;
    

    changeImage = function() {
        let slider = document.getElementById("slider");
        if (slider == null)
            return;
        slider.src = `fotos/f_${index}.png`;
        if (++index > numberOfImages)
            index = 1;
        console.log(index);
        setTimeout(changeImage, time);
    }
    window.onload = changeImage;

}

changeToIndex();