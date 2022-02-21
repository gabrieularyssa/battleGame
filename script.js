
class hero {
    constructor(name, type, st, agi, int, hp, def, picture) {
        this.name = name
        this.type = type
        this.st = st // força
        this.agi = agi // agilidade
        this.int = int // inteligencia 
        this.hp = hp   // pontos de vida proporcional a força, agilidade e inteligencia
        this.def = def // defesa em função de hp
        this.picture = picture
    }
}

// -----------------------------------------------------------------------------------------------

let time01 = []
let time02 = []

const heroes = [
    new hero("ArqueiroVerde", "agility", 25, 35, 25, 85, 42.5, '<img class="img" src="picture-hero/arqueiro.jpg" />'),
    new hero("Super Girl", "strength", 39, 25, 20, 84, 42, '<img class="img" src="picture-hero/supergirl.jpg"/>'),
    new hero("Flash", "agility", 25, 38, 26, 89, 44.5, '<img class="img" src="picture-hero/flash.jpeg"/>'),
    new hero("Batman", "intelligence", 29, 29, 37, 95, 47.5, '<img class="img" src="picture-hero/batman.jpg"/>'),
    new hero("Superman", "strength", 39, 36, 25, 100, 50, '<img class="img" src="picture-hero/superman.jpg"/>'),
    new hero("Mulher Maravilha", "strength", 38, 28, 23, 89, 44.5, '<img class="img" src="picture-hero/mulhermaravilha.jpg"/>'),
    new hero("Aquaman", "strength", 39, 20, 28, 87, 43.5, '<img class="img" src="picture-hero/aquaman.jpg"/>')
];

//Cria o borao do heroi contido no classe, com valor e id dinamico
heroes.forEach(function (hero, index) {
    let htmlToAppend = `<input type="button" value="${hero.name}" class="heroi" id="hero${index}" />`;
    $("#heroes-container").append(htmlToAppend);
});

//Adicionando o heroi no vetor de herois, adicionando imagem a cada personagem imprimindo dados de jogo na tela
$(".heroi").click(function () {
    let idHero = this.id.replace("hero", "");
    time01.push(heroes[idHero]);

    //Adicionando a imagem e dados de jogo do respectivo heroi
    let imagg = time01[0].picture
    $(".imageOne").append(imagg)

    $(".dados1").append(
        `<br /><br /><br /><br /><span id="life">Pontos de vida: ${time01[0].hp}</span> <br />
         <span>Pontos de Inteligencia: ${time01[0].int}</span><br />
         <span>Pontos de Força: ${time01[0].st}</span><br />
         <span>Pontos de Agilidade: ${time01[0].agi}</span><br />`
    )
    console.log(time01);

    //desativando os botoes de herois após fazer a escolha
    $(".heroi").each(function () {
        this.setAttribute("disabled", true);
    });
})

// ------------------------------------------------------------------------------------
const villains = [
    new hero("Coringa", "agility", 25, 40, 35, 100, 50, '<img class="img" src="picture-villain/joker.jpg"/>'),
    new hero("Bansh", "strength", 36, 20, 30, 86, 43, '<img class="img" src="picture-villain/bansh.jpg"/>'),
    new hero("Flash Reverso", "agility", 24, 35, 30, 79, 39.5, '<img class="img" src="picture-villain/flashReverso.jpg"/>'),
    new hero("Arraia Negra", "strength", 35, 20, 25, 80, 40, '<img class="img" src="picture-villain/arraia.jpg"/>'),
    new hero("Darkseid", "strength", 40, 30, 28, 98, 49, '<img class="img" src="picture-villain/darkseid.jpg"/>'),
    new hero("Mulher Leopardo", "agility", 35, 37, 20, 92, 46, '<img class="img" src="picture-villain/leopardo.jpg"/>'),
    new hero("Charada", "intelligence", 22, 36, 40, 98, 49, '<img class="img" src="picture-villain/charada.jpg"/>')
]

villains.forEach(function (villain, index) {
    let htmlToAppend = `<input type="button" value="${villain.name}" class="vilao" id="villain${index}" />`;
    $("#villains-container").append(htmlToAppend);
});


$(".vilao").click(function () {
    let idVillain = this.id.replace("villain", "");
    time02.push(villains[idVillain]);
    console.log(time02)
    //Adicionando a imagem e dados de jogo do respectivo heroi
    let imagem = time02[0].picture
    $(".imageTwo").append(imagem)
    $(".dados2").append(
        `<br /><br /><br /><br /><span id="life">Pontos de vida: ${time02[0].hp}</span> <br />
         <span>Pontos de Inteligencia: ${time02[0].int}</span><br />
         <span>Pontos de Força: ${time02[0].st}</span><br />
         <span>Pontos de Agilidade: ${time02[0].agi}</span><br />`
    )


    //desativando os botoes de herois após fazer a escolha
    $(".vilao").each(function () {
        this.setAttribute("disabled", true);
    });
})

//dinamica de tela
$(".tela").fadeOut()
$("#botLog").fadeOut()
$("#startBattle").click(function () {
    $("#buttonBattle").fadeOut()
    $("#botLog").fadeIn()
    $(".tela").fadeIn()

    //escolhe aleatoriamente quem começa desabilitando o botao do oponente
    function random(max, min) {
        return Math.random() * (min - max) + 1
    }
    let whoBegins = parseInt(random(1, 20))
    if (whoBegins >= 10) {
        $(".ataqueA").prop("disabled", true)
    } else {
        $(".ataqueB").prop("disabled", true)
    }
})

// --------------------------------------------------------------------------------------------------------//
function ativarDesativar(classe, classe2) {
    $(classe).prop("disabled", true);
    $(classe2).prop("disabled", false);

}
// função para nao permitir valores de life negativo
function zeraVida01(time) {
    if (time[0].hp <= 0) {
        time[0].hp = 0;
    }
    if (time[0].def <= 0) {
        time[0].def = 0
    }
    if (time[0].int <= 0) {
        time[0].int = 0
    }
    if (time[0].st <= 0) {
        time[0].st = 0
    }
    if (time[0].agi <= 0) {
        time[0].agi = 0
    }
}
// função de ataque
function attack(timeAtacado, attr) {
    if (attr == "int") {
        timeAtacado[0].int -= 5
        timeAtacado[0].hp -= 5
        timeAtacado[0].def -= 5
        if (timeAtacado[0].int <= 0) {
            timeAtacado[0].hp -= 10
            timeAtacado[0].def -= 10
        }
    } else if (attr == "st") {
        timeAtacado[0].st -= 5
        timeAtacado[0].hp -= 5
        timeAtacado[0].def -= 5
        if (timeAtacado[0].st <= 0) {
            timeAtacado[0].hp -= 10
            timeAtacado[0].def -= 10
        }
    } else if (attr == "agi") {
        timeAtacado[0].agi -= 5
        timeAtacado[0].hp -= 5
        timeAtacado[0].def -= 5
        if (timeAtacado[0].agi <= 0) {
            timeAtacado[0].hp -= 10
            timeAtacado[0].def -= 10
        }
    }
}



// ------------------------------------------------------------------------------------------------------------ //

$("#ataque1I").click(function () {
    attack(time02, "int")
    ativarDesativar(".ataqueA", ".ataqueB")
    zeraVida01(time02)
    $(".dados2").html(
        `<br /><span id="life">Pontos de vida: ${time02[0].hp}</span> <br />
         <span>Pontos de Inteligencia: ${time02[0].int}</span><br />
         <span>Pontos de Força: ${time02[0].st}</span><br />
         <span>Pontos de Agilidade: ${time02[0].agi}</span><br />`
    )
    if (time02[0].int == 0) {
        $("#ataque2I").remove()
    }
    $("#botLog").html(`<h2>${time01[0].name} acertou a Inteligencia de ${time02[0].name}, causando 5 pontos de dano!`)
    endBattle()
})


$("#ataque1F").click(function () {
    attack(time02, "st")
    ativarDesativar(".ataqueA", ".ataqueB")

    zeraVida01(time02)
    $(".dados2").html(
        `<br /><span id="life">Pontos de vida: ${time02[0].hp}</span> <br />
         <span>Pontos de Inteligencia: ${time02[0].int}</span><br />
         <span>Pontos de Força: ${time02[0].st}</span><br />
         <span>Pontos de Agilidade: ${time02[0].agi}</span><br />`
    )
    if (time02[0].st == 0) {
        $("#ataque2F").remove()
    }
    $("#botLog").html(`<h2>${time01[0].name} acertou a Força de ${time02[0].name}, causando 5 pontos de dano!`)
    endBattle()
})

$("#ataque1A").click(function () {
    attack(time02, "agi")
    ativarDesativar(".ataqueA", ".ataqueB")
    zeraVida01(time02)
    $(".dados2").html(
        `<br /><span id="life">Pontos de vida: ${time02[0].hp}</span> <br />
         <span>Pontos de Inteligencia: ${time02[0].int}</span><br />
         <span>Pontos de Força: ${time02[0].st}</span><br />
         <span>Pontos de Agilidade: ${time02[0].agi}</span><br />`
    )
    if (time02[0].agi == 0) {
        $("#ataque2A").remove()
    }
    $("#botLog").html(`<h2>${time01[0].name} acertou a Agilidade de ${time02[0].name}, causando 5 pontos de dano!`)
    endBattle()
})

// -----------------------------------------------------------------------------------------------------

$("#ataque2I").click(function () {
    attack(time01, "int")
    ativarDesativar(".ataqueB", ".ataqueA")
    zeraVida01(time01)
    $(".dados1").html(
        `<br /><span id="life">Pontos de vida: ${time01[0].hp}</span> <br />
         <span>Pontos de Inteligencia: ${time01[0].int}</span><br />
         <span>Pontos de Força: ${time01[0].st}</span><br />
         <span>Pontos de Agilidade: ${time01[0].agi}</span><br />`
    )
    $("#botLog").html(`<h2>${time02[0].name} acertou a Inteligencia de ${time01[0].name}, causando 5 pontos de dano!`)
    endBattle()
    if (time01[0].int == 0) {
        $("#ataque1I").remove()
    }
})
$("#ataque2F").click(function () {
    attack(time01, "st")
    ativarDesativar(".ataqueB", ".ataqueA")
    zeraVida01(time01)
    $(".dados1").html(
        `<br /><span id="life">Pontos de vida: ${time01[0].hp}</span> <br />
         <span>Pontos de Inteligencia: ${time01[0].int}</span><br />
         <span>Pontos de Força: ${time01[0].st}</span><br />
         <span>Pontos de Agilidade: ${time01[0].agi}</span><br />`
    )
    if (time01[0].st == 0) {
        $("#ataque1F").remove()
    }
    $("#botLog").html(`<h2>${time02[0].name} acertou a Força de ${time01[0].name}, causando 5 pontos de dano!`)
    endBattle()
})

$("#ataque2A").click(function () {
    attack(time01, "agi")
    ativarDesativar(".ataqueB", ".ataqueA")

    zeraVida01(time01)
    $(".dados1").html(
        `<br /><span id="life">Pontos de vida: ${time01[0].hp}</span> <br />
         <span>Pontos de Inteligencia: ${time01[0].int}</span><br />
         <span>Pontos de Força: ${time01[0].st}</span><br />
         <span>Pontos de Agilidade: ${time01[0].agi}</span><br />`
    )
    if (time01[0].agi == 0) {
        $("#ataque1A").remove()
    }
    $("#botLog").html(`<h3>${time02[0].name} acertou a Agilidade de ${time01[0].name}, causando 5 pontos de dano!</h3>`)
    endBattle()
})

function endBattle() {
    setTimeout(() => {
        if (time01[0].hp > 0 && time02[0].hp <= 0) {
            $(".tela").fadeOut()
            $("#botLog").fadeOut()
            $("#printResult").html(`<h1>${time01[0].name} Venceu!</h1`)
        } else if (time02[0].hp > 0 && time01[0].hp <= 0) {
            $(".tela").fadeOut()
            $("#botLog").fadeOut()
            $("#printResult").html(`<h1>${time02[0].name} Venceu!</h1>`)
        }
    }, 2000)
}

