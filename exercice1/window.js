let  max, Tentatives;
function SelectLevel(){
    let niveau = prompt("Choisissez le niveau de difficulté : 1.Facile, 2.Intermédiaire, 3.Difficile");
    switch(niveau) {
        case ("facile"||"Facile"||"1"):
            
            max = 10;
            Tentatives = 5;
            break;
        case ("intermédiaire"||"Intermédiaire"||"2"):
            
            max = 100;
            Tentatives = 4;
            break;
        case ("difficile"||"Difficile"||"3"):
            
            max = 1000;
            Tentatives = 3;
            break;
        default:
            alert("Niveau de difficulté invalide. Le jeu se lance en mode facile.");
            
            max = 10;
            Tentatives = 5;
            break;
    }
    
}
function RandomNumber() {
    SelectLevel();
    let nombreAleatoire = Math.floor(Math.random() * max ) ;
    let essaisRestants = Tentatives;
    let trouve = false;
    
    while (essaisRestants > 0 && !trouve) {
        let Essai = parseInt(prompt(`Il vous reste ${essaisRestants} essais. Entrez un nombre entre 0 et ${max}.`));
        if ( Essai <= max) {
            if (Essai === nombreAleatoire) {
                alert("Bravo, vous avez trouvé le chiffre caché !");
                trouve = true;
            } else {
                essaisRestants--;
                if (essaisRestants > 0) {
                    alert(`Dommage, le chiffre caché est ${Essai < nombreAleatoire ? "plus grand" : "plus petit"} que ${Essai}.`);
                }
            }
        } else {
            alert("Nombre invalide. Veuillez entrer un nombre entre 1 et " + max + ".");
        }
    }
    
    if (!trouve) {
        alert(`Vous avez épuisé tous vos essais. Le chiffre caché était ${nombreAleatoire}.`);
    }
    
    if (confirm("Voulez-vous jouer une autre partie ?")) {
        RandomNumber();
    } else {
        alert("Merci d'avoir joué !");
    }
}
RandomNumber();

  