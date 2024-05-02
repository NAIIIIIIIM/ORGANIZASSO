export const workEmojis = [
	"💼", // mallette
	"📁", // dossier
	"📊", // graphiques
	"📈", // graphique montant
	"📉", // graphique descendant
	"💻", // ordinateur portable
	"🖥️", // ordinateur de bureau
	"🖨️", // imprimante
	"📞", // téléphone
	"📠", // fax
	"🔖", // marque-page
	"✒️", // stylo-plume
	"🖋️", // stylo
	"🖌️", // pinceau
	"🖍️", // crayon de couleur
	"📝", // note
	"🗂️", // intercalaires
	"🗃️", // boîte d'archive
	"🗄️", // fichier cabinet
	"🗒️", // bloc-notes
	"🗓️", // calendrier
	"📅", // date
	"📆", // calendrier à feuille
	"📇", // fichier index
	"📋", // presse-papiers
	"📌", // punaise
	"📍", // épingle
	"✂️", // ciseaux
	"📐", // règle
	"📏", // équerre
	"🔍", // loupe pour agrandir
	"🔎", // loupe pour réduire
	"🔒", // cadenas fermé
	"🔓", // cadenas ouvert
	"🔏", // cadenas avec stylo
	"🔐", // cadenas avec clé
	"🔑", // clé
	"🗝️", // vieille clé
	"🛠️", // outils
	"🔨", // marteau
	"🔧", // clé
	"🔩", // boulon
	"⚙️", // engrenage
	"⚒️", // marteau et pioche
	"🛡️", // bouclier
	"⚖️", // balance
	"🔗", // lien
	"⛓️", // chaînes
];

export const getRandomEmoji = () => {
	return workEmojis[Math.floor(Math.random() * workEmojis.length)];
};
