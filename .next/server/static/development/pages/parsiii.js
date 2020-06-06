module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./source/FR/appuhn/parsiii.json":
/*!***************************************!*\
  !*** ./source/FR/appuhn/parsiii.json ***!
  \***************************************/
/*! exports provided: praefatio, definitio, axioma, propositio, appendix, demonstratio, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"praefatio\":\"J’appelle Servitude l’impuissance de l’homme à gouverner et réduire ses affections ; soumis aux affections, en effet, l’homme ne relève pas de lui-même, mais de la fortune, dont le pouvoir est tel sur lui que souvent il est contraint, voyant le meilleur, de faire le pire. Je me suis propose, dans cette Partie, d’expliquer cet état par sa cause et de montrer, en outre, ce qu’il y a de bon et de mauvais dans les affections. Avant de commencer, toutefois, il convient de présenter quelques observations préliminaires sur la perfection et l’imperfection et sur le bien et le mal.<br>Qui a résolu de faire une chose et l’a parfaite, son œuvre est parfaite, seulement à l’en croire, mais au jugement de quiconque sait droitement ou croit savoir la pensée de l’Auteur et son but. Si, par exemple, on voit une œuvre (que je suppose n’être pas achevée) et si l’on voit que le but de l’Auteur est d’édifier une maison, on dira que la maison est imparfaite, et parfaite au contraire sitôt qu’on la verra portée au point d’achèvement que son Auteur avait résolu de lui faire atteindre. Mais, si l’on voit une œuvre sans avoir jamais vu rien de semblable et qu’on ignore la pensée de l’artisan, certes on ne pourra savoir si elle est parfaite ou imparfaite. Telle paraît être la première signification de ces vocables. Quand, toutefois, les hommes eurent commencé de former des idées générales et de se représenter par la pensée des modèles de maisons, d’édifices, de tours, et comme aussi de préférer certains modèles à d’autres, il est advenu que chacun appela parfait ce qu’il voyait s’accorder avec l’idée générale formée par lui des choses de même sorte, et imparfait au contraire ce qu’il voyait qui était moins conforme au modèle conçu par lui, encore que l’artisan eût entièrement exécuté son propre dessein. Il ne paraît pas qu’il y ait d’autre raison pourquoi l’on nomme parfaites ou imparfaites les choses de la nature, c’est-à-dire non faites par la main de l’homme ; les hommes, en effet, ont accoutumé de former tant des choses naturelles que des produits de leur art propre, des idées générales, qu’ils tiennent pour des modèles ; ils croient que la Nature y a égard (suivant leur opinion elle n’agit jamais que pour une fin) et se les propose comme modèles. Lors donc qu’ils voient se faire, dans la Nature, quelque chose de peu conforme au modèle par eux conçu pour une chose de même sorte, ils croient que la Nature elle-même s’est trouvée en défaut ou a péché, et qu’elle a laissé imparfaite son œuvre. Ainsi voyons-nous les hommes appeler coutumièrement parfaites ou imparfaites les choses naturelles, plus en vertu d’un préjugé que par une vraie connaissance de ces choses. Nous l’avons montré en effet dans l’Appendice de la Première Partie, la Nature n’agit pas pour une fin ; cet Être éternel et infini que nous appelons Dieu ou la Nature, agit avec la même nécessité qu’il existe. Car la même nécessité de nature par laquelle il existe, est celle aussi, nous l’avons fait voir (Prop. 16, p. I), par laquelle il agit. Donc la raison, ou la cause, pourquoi Dieu, ou la Nature, agit et pourquoi il existe est une et toujours la même. N’existant pour aucune fin, il n’agit donc aussi pour aucune ; et comme son existence son action aussi n’a ni principe, ni fin. Ce qu’on appelle cause finale n’est d’ailleurs rien que l’appétit humain en tant qu’il est considéré comme le principe ou la cause primitive d’une chose. Quand, par exemple, nous disons que l’habitation a été la cause finale de telle ou telle maison, certes nous n’entendons rien d’autre sinon qu’un homme ayant imaginé les avantages de la vie de maison a eu l’appétit de construire une maison. L’habitation donc, en tant qu’elle est considérée comme une cause finale, n’est rien de plus qu’un appétit singulier, et cet appétit est en réalité une cause efficiente, considérée comme première parce que les hommes ignorent communément les causes de leurs appétits. Ils sont en effet, je l’ai dit souvent, conscients de leurs actions et appétits, mais ignorants des causes par où ils sont déterminés à appéter quelque chose, Pour ce qu’on dit vulgairement, que la Nature est en défaut ou pèche parfois et produit des choses imparfaites, je le range au nombre des propos que j’ai examinés dans l’Appendice de la Première Partie. La perfection donc et l’imperfection ne sont, en réalité, que des modes de penser, je veux dire des notions que nous avons accoutumé de forger parce que nous comparons entre eux les individus de même espèce ou de même genre ; et pour ce motif, j’ai dit plus haut (Défin. 6, p. II) que par perfection et réalité j’entendais la même chose. Nous avons coutume en effet de ramener tous les individus de la Nature à un genre unique appelé généralissime ; autrement dit, à la notion de l’Être qui appartient à tous les individus de la Nature absolument. En tant donc que nous ramenons les individus de la Nature à ce genre et les comparons entre eux, et dans la mesure où nous trouvons que les uns ont plus d’entité ou de réalité que les autres, nous disons qu’ils sont plus parfaits les uns que les autres, et en tant que nous leur attribuons quelque chose qui enveloppe une négation, comme limite, fin, impuissance, nous les appelons imparfaits, parce qu’ils n’affectent pas notre Âme pareillement à ceux que nous appelons parfaits, et non parce qu’il leur manque quelque chose qui leur appartienne ou que la Nature ait péché. Rien en effet n’appartient à la nature d’une chose, sinon ce qui suit de la nécessité de la nature d’une cause efficiente, et tout ce qui suit de la nécessité de la nature d’une cause efficiente arrive nécessairement.<br>Quant au bon et au mauvais, ils n’indiquent également rien de positif dans les choses, considérées du moins en elles-mêmes, et ne sont autre chose que des modes de penser ou des notions que nous formons parce que nous comparons les choses entre elles. Une seule et même chose peut être dans le même temps bonne et mauvaise et aussi indifférente. Par exemple la Musique est bonne pour le Mélancolique, mauvaise pour l’Affligé ; pour le Sourd, elle n’est ni bonne ni mauvaise. Bien qu’il en soit ainsi, cependant il nous faut conserver ces vocables. Désirant en effet former une idée de l’homme qui soit comme un modèle de la nature humaine placé devant nos yeux, il nous sera utile de conserver ces vocables dans le sens que j’ai dit. J’entendrai donc par bon dans ce qui va suivre, ce que nous savons avec certitude qui est un moyen de nous rapprocher de plus en plus du modèle de la nature humaine que nous nous proposons. Par mauvais, au contraire, ce que nous savons avec certitude qui nous empêche de reproduire ce modèle. Nous dirons, en outre, les hommes plus ou moins parfaits, suivant qu’ils se rapprocheront plus ou moins de ce même modèle. Il faut l’observer avant tout en effet, si je dis que quelqu’un passe d’une moindre à une plus grande perfection, ou inversement, je n’entends point par là que d’une essence ou forme il se mue en une autre ; un cheval, par exemple, est détruit aussi bien s’il se mue en homme que s’il se mue en insecte ; c’est sa puissance d’agir, en tant quelle est ce qu’on entend par sa nature, que nous concevons comme accrue ou diminuée. Par perfection en général enfin j’entendrai, comme je l’ai dit, la réalité, c’est-à-dire l’essence d’une chose quelconque en tant qu’elle existe et produit quelque effet en une certaine manière, n’ayant nul égard à sa durée. Nulle chose singulière en effet ne peut être dite plus parfaite, pour la raison quelle a persévéré plus longtemps dans l’existence ; car la durée des choses ne peut être déterminée par leur essence, puisque l’essence des choses n’enveloppe aucun temps certain et déterminé d’existence, mais une chose quelconque, qu’elle soit plus ou moins parfaite, pourra persévérer toujours dans l’existence avec la même force par quoi elle a commencé d’exister, de sorte que toutes sont égales en cela.\",\"definitio\":{\"1\":\"J’entends par bon ce que nous savons avec certitude nous être utile.\",\"2\":\"J’entends par mauvais, au contraire, ce que nous savons avec certitude empêcher que nous ne possédions un bien.\",\"3\":\"J’appelle les choses singulières contingentes, en tant qu’ayant égard à leur seule essence, nous ne trouvons rien qui pose nécessairement leur existence ou l’exclut nécessairement.\",\"4\":\"J’appelle les mêmes choses singulières possibles, en tant qu’ayant égard aux causes par où elles doivent être produites, nous ne savons si ces causes sont déterminées de façon à les produire.<br>(Dans le Scolie 1 de la Prop. 33, p. I, je n’ai fait aucune différence entre possible et contingent, parce qu’il n’était pas nécessaire en cet endroit de les distinguer avec soin).\",\"5\":\"J’entendrai dans ce qui suit par affections contraires celles qui traînent l’homme dans des directions différentes, même si elles sont du même genre, comme la gourmandise et l’avarice qui sont des espèces d’amour ; elles sont contraires non par nature, mais par accident.\",\"6\":\"J’ai expliqué dans les Scolies 1 et 2 de Proposition 18, Partie III, ce que j’entendrai par affection à l’égard d’une chose future, présente et passée ; j’y renvoie.<br>(Il faut cependant noter ici, en outre, que, pas plus qu’une distance de lieu, nous ne pouvons imaginer distinctement une distance de temps au delà d’une certaine limite ; en d’autres termes, comme tous les objets distants de nous de plus de deux cents pieds, ou dont la distance du lieu où nous sommes, dépasse celle que nous imaginons distinctement, nous sont habituellement représentés par l’imagination à égale distance de nous comme s’ils étaient dans le même plan, de même aussi les objets dont nous imaginons que le temps d’existence est séparé du présent par un intervalle plus grand que celui que nous avons accoutumé d’imaginer distinctement, nous nous les représentons tous par l’imagination à égale distance du présent et nous les rapportons en quelque sorte à un même instant du temps).\",\"7\":\"Par fin pour laquelle nous faisons quelque chose j’entends l’appétit.\",\"8\":\"Par vertu et puissance j’entends la même chose ; c’est-à-dire (Prop. 7, p. III) la vertu, en tant qu’elle se rapporte à l’homme, est l’essence même ou la nature de l'homme en tant qu’il a le pouvoir de faire certaines choses se pouvant connaître par les seules lois de sa nature.\"},\"axioma\":{\"1\":\"Il n’est donné dans la Nature aucune chose singulière qu’il n’en soit donné une autre plus puissante et plus forte. Mais, si une chose quelconque est donnée, une autre plus puissante, par laquelle la première peut être détruite, est donnée.\"},\"propositio\":{\"1\":\"Rien de ce qu’une idée fausse a de positif n’est ôté par la présence du vrai, en tant que vrai.\",\"2\":\"Nous pâtissons en tant que nous sommes une partie de la Nature qui ne peut se concevoir par soi sans les autres parties.\",\"3\":\"La force avec laquelle l’homme persévère dans l’existence, est limitée et surpassée infiniment par la puissance des causes extérieures.\",\"4\":\"Il est impossible que l’homme ne soit pas une partie de la Nature et ne puisse éprouver d’autres changements que ceux qui se peuvent connaître par sa seule nature et dont il est cause adéquate.\",\"5\":\"La force et la croissance d’une passion quelconque, et sa persévérance à exister, ne se définissent point par la puissance avec laquelle nous persévérons dans l’existence, mais par la puissance de la cause extérieure comparée à la nôtre.\",\"6\":\"La force d’une passion ou d’une affection peut surpasser les autres actions de l’homme, ou sa puissance, de telle sorte que cette affection demeure attachée à l’homme.\",\"7\":\"Une affection ne peut être réduite ni ôtée sinon par une affection contraire, et plus forte que l’affection à réduire.\",\"8\":\"La connaissance du bon et du mauvais n’est rien d’autre que l’affection de la Joie ou de la Tristesse, en tant que nous en avons conscience.\",\"9\":\"Une affection dont nous imaginons que la cause est actuellement présente, est plus forte que si nous n’imaginions pas la présence de cette cause.\",\"10\":\"À l’égard d’une chose future que nous imaginons devoir être prochainement, nous sommes affectés de façon plus intense que si nous imaginions que son temps d’existence est beaucoup plus éloigné du présent ; et le souvenir d’une chose que nous imaginons n’être pas passée depuis longtemps, nous affecte aussi de façon plus intense que si nous l’imaginions passée depuis longtemps.\",\"11\":\"Une affection se rapportant à une chose que nous imaginons comme nécessaire est plus intense, toutes choses égales d’ailleurs, que si elle se rapportait à une chose possible ou contingente, c’est-à-dire non nécessaire.\",\"12\":\"Une affection se rapportant à une chose que nous savons ne pas exister présentement et que nous imaginons comme possible est, toutes choses égales d’ailleurs, plus intense que si elle se rapportait à une chose contingente.\",\"13\":\"Une affection se rapportant à une chose contingente que nous savons ne pas exister présentement est, toutes choses égales d’ailleurs, plus relâchée qu’une affection se rapportant à une chose passée.\",\"14\":\"La connaissance vraie du bon et du mauvais ne peut, en tant que vraie, réduire aucune affection, mais seulement en tant qu’elle est considérée comme une affection.\",\"15\":\"Un Désir qui naît de la connaissance vraie du bon et du mauvais, peut être éteint ou réduit par beaucoup d’autres Désirs naissant des affections par lesquelles nous sommes dominés.\",\"16\":\"Le Désir qui naît de la connaissance du bon et du mauvais, en tant quelle est relative à l’avenir, peut plus aisément être réduit ou éteint par le Désir des choses qui sont présentement agréables.\",\"17\":\"Un Désir qui naît de la connaissance vraie du bon et du mauvais, en tant quelle a trait à des choses contingentes, peut encore bien plus facilement être réduit par le Désir des choses qui sont présentes.\",\"18\":\"Un Désir qui naît de la Joie est plus fort, toutes choses égales d’ailleurs, qu’un Désir qui naît de la Tristesse.\",\"19\":\"Chacun appète ou a en aversion nécessairement par les lois de sa nature ce qu’il juge être bon ou mauvais.\",\"20\":\"Plus on s’efforce à chercher ce qui est utile, c’est-à-dire à conserver son être, et plus on en a le pouvoir, plus on est doué de vertu ; et au contraire, dans la mesure où l’on omet de conserver ce qui est utile, c’est-à-dire son être, on est impuissant.\",\"21\":\"Nul ne peut désirer de posséder la béatitude, de bien agir et de bien vivre, sans désirer en même temps d’être d’agir et de vivre, c’est-à-dire d’exister en acte.\",\"22\":\"On ne peut concevoir aucune vertu antérieure à celle-là (c’est-à-dire à l’effort pour se conserver).\",\"23\":\"L’homme, en tant qu’il est déterminé à faire quelque chose parce qu’il a des idées inadéquates, ne peut être dit absolument agir par vertu ; mais seulement en tant qu’il est déterminé parce qu’il a une connaissance.\",\"24\":\"Agir par vertu absolument n’est rien d’autre en nous qu’agir, vivre et conserver son être (ces trois choses n’en font qu’une) sous la conduite de la Raison, d’après le principe de la recherche de l’utile propre.\",\"25\":\"Personne ne désire conserver son être à cause d’une autre chose.\",\"26\":\"Tout effort dont la Raison est en nous le principe n’a d’autre objet que la connaissance ; et l’Âme, en tant qu’elle use de la Raison, ne juge pas qu’aucune chose lui soit utile, sinon ce qui conduit à la connaissance.\",\"27\":\"Il n’est aucune chose que nous sachions avec certitude être bonne ou mauvaise, sinon ce qui conduit réellement à la connaissance où peut empêcher que nous ne la possédions.\",\"28\":\"Le bien suprême de l’Âme est la connaissance de Dieu, et la suprême vertu de l’Âme de connaître Dieu.\",\"29\":\"Une chose singulière quelconque, dont la nature est entièrement différente de la nôtre, ne peut ni seconder ni réduire notre puissance d’agir, et, absolument parlant, aucune chose ne peut, être bonne ou mauvaise pour nous, si elle n’a quelque chose de commun avec nous.\",\"30\":\"Nulle chose ne peut être mauvaise par ce qu’elle a de commun avec notre nature, mais dans la mesure où elle est mauvaise pour nous, elle nous est contraire.\",\"31\":\"Dans la mesure où une chose s’accorde avec notre nature, elle est nécessairement bonne.\",\"32\":\"Dans la mesure où les hommes sont soumis aux passions, on ne peut dire qu’ils s’accordent en nature.\",\"33\":\"Les hommes peuvent différer en nature en tant qu’ils sont dominés par des affections qui sont des passions ; et dans la même mesure le même homme est changeant et inconstant.\",\"34\":\"En tant que les hommes sont dominés par des affections qui sont des passions, ils peuvent être contraires les uns aux autres.\",\"35\":\"Dans la mesure seulement où les hommes vivent sous la conduite de la Raison, ils s’accordent toujours nécessairement en nature.\",\"36\":\"Le bien suprême de ceux qui sont des suivants de la vertu est commun à tous, et tous peuvent en tirer pareillement de la joie.\",\"37\":\"Le bien qu’appète pour lui-même quiconque est un suivant de la vertu, il le désirera aussi pour les autres hommes, et cela d’autant plus qu’il aura acquis une connaissance plus grande de Dieu.\",\"38\":\"Ce qui dispose le Corps humain de façon qu’il puisse être affecté d’un plus grand nombre de manières ou le rend apte à affecter les corps extérieurs d’un plus grand nombre de manières, est utile à l’homme ; et d’autant plus utile que le Corps est par là rendu plus apte à être affecté et à affecter d’autres corps de plusieurs manières ; est nuisible au contraire ce qui diminue cette aptitude du Corps.\",\"39\":\"Ce qui fait que le rapport de mouvement et de repos qu’ont les parties du Corps humain les unes vis-à-vis des autres se conserve, est bon ; est mauvais au contraire ce qui fait que les parties du Corps humain ont les unes vis-à-vis des autres un autre rapport de repos et de mouvement.\",\"40\":\"Ce qui conduit les hommes vers la Société commune, c’est-à-dire fait qu’ils vivent dans la concorde, est utile ; mauvais au contraire ce qui introduit la discorde dans la Cité.\",\"41\":\"La Joie n’est jamais mauvaise directement mais bonne ; la Tristesse, au contraire, est directement mauvaise.\",\"42\":\"La Gaieté ne peut avoir d’excès mais est toujours bonne ; au contraire, la Mélancolie est toujours mauvaise.\",\"43\":\"Le Chatouillement peut avoir de l’excès et être mauvais ; la Douleur peut être bonne dans la mesure où le Chatouillement, qui est une Joie, est mauvais.\",\"44\":\"L’Amour et le Désir peuvent avoir de l’excès.\",\"45\":\"La Haine ne peut jamais être bonne.\",\"46\":\"Qui vit sous la conduite de la Raison, s’efforce, autant qu’il peut, de compenser par l’Amour ou la Générosité, la Haine, la Colère, le Mépris qu’un autre a pour lui.\",\"47\":\"Les affections de l’Espoir et de la Crainte ne peuvent être bonnes par elles-mêmes.\",\"48\":\"Les affections de la Surestime et de la Mésestime sont toujours mauvaises.\",\"49\":\"La Surestime rend facilement orgueilleux l’homme qui est surestimé.\",\"50\":\"La Commisération est en elle-même mauvaise et inutile, dans un homme qui vit sous la conduite de la Raison.\",\"51\":\"La Faveur n’est pas opposée à la Raison, mais peut s’accorder avec elle et en naître.\",\"52\":\"Le Contentement de soi peut tirer son origine de la Raison, et seul ce contentement qui tire son origine de la Raison, est le plus grand possible.\",\"53\":\"L’Humilité n’est pas une vertu, c’est-à-dire qu’elle ne tire pas de la Raison son origine.\",\"54\":\"Le Repentir n’est pas une vertu, c’est-à-dire qu’il ne tire pas son origine de la Raison ; mais celui qui se repent de ce qu’il a fait, est deux fois misérable ou impuissant.\",\"55\":\"Le plus haut degré d’Orgueil ou de Mésestime de soi est la plus entière ignorance de soi.\",\"56\":\"Le plus haut degré d’Orgueil ou de Mésestime de soi indique la plus grande impuissance intérieure.\",\"57\":\"L’Orgueilleux aime la présente des parasites ou des flatteurs, il hait celle des généreux.\",\"58\":\"La Gloire n’est pas opposée à la Raison, mais peut tirer d’elle son origine.\",\"59\":\"À toutes les actions auxquelles nous sommes déterminés par une affection qui est une passion, nous pouvons être déterminés sans elle par la Raison.\",\"60\":\"Un Désir, tirant son origine d’une Joie ou d’une Tristesse qui se rapporte à une seule des parties du Corps, ou à quelques-unes, mais non à toutes, n’a point égard à l’utilité de l’homme entier.\",\"61\":\"Un Désir tirant son origine de la Raison ne peut avoir d’excès.\",\"62\":\"En tant que l’Âme conçoit les choses suivant le commandement de la Raison, elle est également affectée, que l’idée soit celle d’une chose future ou passée, ou celle d’une chose présente.\",\"63\":\"Qui est dirigé par la Crainte et fait ce qui est bon pour éviter un mal, n’est pas conduit par la Raison.\",\"64\":\"La connaissance d’un mal est une connaissance inadéquate.\",\"65\":\"De deux biens nous rechercherons sous la conduite de la Raison le plus grand, et de deux maux le moindre.\",\"66\":\"Nous préférerons sous la conduite de la Raison un bien plus grand futur à un moindre présent, et un mal moindre présent à un plus grand futur.\",\"67\":\"Un homme libre ne pense à aucune chose moins qu’à la mort ; et sa sagesse est une méditation non de la mort mais de la vie.\",\"68\":\"Si les hommes naissaient libres, ils ne formeraient aucun concept de chose bonne ou mauvaise aussi longtemps qu’ils seraient libres.\",\"69\":\"La vertu d’un homme libre se montre aussi grande quand il évite les dangers que quand il en triomphe.\",\"70\":\"L’homme libre qui vit parmi les ignorants, s’applique autant qu’il peut à éviter leurs bienfaits.\",\"71\":\"Seuls les hommes libres sont très reconnaissants les uns à l’égard des autres.\",\"72\":\"L’homme libre n’agit jamais en trompeur, mais toujours de bonne foi.\",\"73\":\"L’homme qui est dirigé par la Raison, est plus libre dans la Cité où il vit selon le décret commun, que dans la solitude où il n’obéit qu’à lui-même.\"},\"appendix\":{\"txt\":\"Ce que foi exposé dans cette Partie sur la conduite droite de la vie, n’a pas été disposé de façon qu’on le put voir d’ensemble, mais a été démontré par moi dans l’ordre dispersé ou la déduction successive de chaque vérité se faisait le plus facilement. Je me suis donc résolu à le rassembler ici et à le résumer en chapitres principaux.\",\"caputs\":[{\"caputIndex\":\"1\",\"txt\":\"Tous nos efforts ou Désirs suivent de la nécessité de notre nature de façon qu’ils se puissent connaître ou par elle seule comme par leur cause prochaine, ou en tant que nous sommes une partie de la Nature qui ne peut être conçue adéquatement par elle-même sans les autres individus.\"},{\"caputIndex\":\"2\",\"txt\":\"Les Désirs qui suivent de notre nature de façon qu’ils se puissent connaître par elle seule, sont ceux qui se rapportent à l’Âme en tant qu’on la conçoit comme composée d’idées adéquates ; pour les autres Désirs, ils ne se rapportent à l’Âme qu’en tant qu’elle conçoit les choses inadéquatement ; leur force et leur croissance doivent être définies parla puissance non de l’homme, mais des choses extérieures ; par suite, les premiers Désirs sont appelés actions droites, les seconds passions ; les uns témoignent en effet de notre puissance, les autres, au contraire, de notre impuissance et d’une connaissance mutilée.\"},{\"caputIndex\":\"3\",\"txt\":\"Nos actions, c’est-à-dire ces Désirs qui sont définis par la puissance de l’homme ou la Raison, sont toujours bonnes ; les autres désirs peuvent être aussi bien bons que mauvais.\"},{\"caputIndex\":\"4\",\"txt\":\"Il est donc utile avant tout dans la vie de perfectionner l’Entendement ou la Raison autant que nous pouvons ; et en cela seul consiste la félicité suprême ou béatitude de l’homme ; car la béatitude de l’homme n’est rien d’autre que le contentement intérieur lui-même, lequel naît de la connaissance intuitive de Dieu ; et perfectionner l’Entendement n’est rien d’autre aussi que connaître Dieu et les attributs de Dieu et les actions qui suivent de la nécessité de sa nature. C’est pourquoi la fin ultime d’un homme qui est dirigé par la Raison, c’est-à-dire le Désir suprême par lequel il s’applique à gouverner tous les autres, est celui qui le porte à se concevoir adéquatement et à concevoir adéquatement toutes les choses pouvant être pour lui objets de connaissance claire\"},{\"caputIndex\":\"5\",\"txt\":\"Il n’y a donc point de vie conforme à la raison sans la connaissance claire ; et les choses sont bonnes dans la mesure seulement où elles aident l’homme à jouir de la vie de l’Âme, qui se définit par la connaissance claire. Celles qui, au contraire, empêchent que l’homme ne perfectionne la Raison et ne jouisse d’une vie conforme à elle, celles-là seules, nous disons qu’elles sont mauvaises\"},{\"caputIndex\":\"6\",\"txt\":\"Puis donc que tout ce dont l’homme est cause efficiente, est nécessairement bon, rien de mauvais ne peut arriver à l’homme si ce n’est de causes extérieures ; je veux dire en tant qu’il est une partie de la Nature entière, aux lois de qui la nature humaine doit obéir et à qui elle est contrainte de s’adapter d’une infinité presque de manières\"},{\"caputIndex\":\"7\",\"txt\":\"Il est impossible que l’homme ne soit pas une partie de la Nature et n’en suive pas l’ordre commun. Si, cependant, il vit parmi des individus tels que leur nature s’accorde avec la sienne, par cela même sa puissance d’agir sera secondée et alimentée. Si, par contre, il se trouve parmi des individus tels qu’ils ne s’accordent nullement avec sa nature, il ne peut guère s’adapter à eux sans un grand changement de lui-même\"},{\"caputIndex\":\"8\",\"txt\":\"Tout ce qu’il y a dans la Nature que nous jugeons qui est mauvais, autrement dit, que nous jugeons capable d’empêcher que nous ne puissions exister et jouir d’une vie conforme à la raison, il nous est permis de l’écarter par la voie paraissant la plus sûre ; tout ce qu’il y a, au contraire, que nous jugeons qui est bon ou utile à la conservation de notre être et à la jouissance de la vie conforme à la Raison, il nous est permis de le prendre pour notre usage et de nous en servir de toute façon ; et absolument parlant il est permis à chacun, suivant le droit suprême de la Nature, de faire ce qu’il juge convenir à son utilité\"},{\"caputIndex\":\"9\",\"txt\":\"Rien ne peut mieux s’accorder avec la nature d’une chose que les autres individus de même espèce ; il n’y a donc rien de plus utile pour la conservation de l’être propre et la jouissance de la vie conforme à la raison qu’un homme dirigé par la Raison. En outre, puisque parmi les choses singulières nous ne savons rien qui ait plus de prix qu’un homme dirigé par la Raison, personne ne peut mieux montrer ce qu’il vaut par son habileté et ses aptitudes, qu’en élevant des hommes de façon qu’ils vivent enfin sous la propre souveraineté de la Raison.\"},{\"caputIndex\":\"10\",\"txt\":\"Dans la mesure où les hommes sont animés les uns contre les autres d’Envie ou de quelque affection de Haine, ils sont contraires les uns aux autres et, par suite, d’autant plus à craindre que leur pouvoir est plus grand que celui des autres individus de la Nature.\"},{\"caputIndex\":\"11\",\"txt\":\"Les cœurs ne sont cependant pas vaincus par les armes mais par l’Amour et la Générosité.\"},{\"caputIndex\":\"12\",\"txt\":\"Il est utile aux hommes, avant tout, d’avoir des relations sociales entre eux, de s’astreindre et lier de façon qu’ils puissent former un tout bien uni et, absolument, de faire ce qui peut rendre les amitiés plus solides.\"},{\"caputIndex\":\"13\",\"txt\":\"De l’art et de la vigilance, toutefois, sont pour cela requis. Les hommes en effet sont divers (rares ceux qui vivent suivant les préceptes de la Raison) et cependant envieux pour la plupart, plus enclins à la vengeance qu’à la Miséricorde. Pour les accepter tous avec leur complexion propre et se retenir d’imiter leurs affections, il est besoin d’une singulière puissance sur soi-même. Ceux qui, d’ailleurs, s’entendent à censurer les hommes et à flétrir leurs vices plus qu’à enseigner les vertus, à briser les âmes au lieu de les fortifier sont insupportables à eux-mêmes et aux autres ; beaucoup, par suite, trop peu capables de patience et égarés par un zèle soi-disant religieux, ont mieux aimé vivre parmi les bêtes que parmi les hommes ; ainsi des enfants et des adolescents, ne pouvant supporter d’une âme égale les reproches de leurs parents, se réfugient dans le service militaire ; ils préfèrent les peines de la guerre et le pouvoir sans contrôle d’un chef aux douceurs de la vie de famille avec les remontrances paternelles, et acceptent docilement quelque fardeau que ce soit, pourvu qu’ils se vengent de leurs parents.\"},{\"caputIndex\":\"14\",\"txt\":\"Encore que les hommes se gouvernent en tout, le plus souvent suivant leur appétit sensuel, la vie sociale a cependant beaucoup plus de conséquences avantageuses que de dommageables. Il vaut donc mieux supporter leurs offenses d’une âme égale et travailler avec zèle à établir la concorde et l’amitié.\"},{\"caputIndex\":\"15\",\"txt\":\"Ce qui engendre la concorde, se ramène à la justice, à l’équité et à l’honnêteté. Les hommes en effet supportent mal, outre l’injuste et l’inique, ce qui passe pour vilain et ne souffrent pas que l’on fasse fi des coutumes reçues dans la Cité. Pour gagner l’Amour est, avant tout, nécessaire ce qui se rapporte à la Religion et à la Moralité ; voir à ce sujet Scolies 1 et 2 de la Proposition 37, Scolie de la Proposition 46 et Scolie de la Proposition 73.\"},{\"caputIndex\":\"16\",\"txt\":\"La concorde est encore engendrée par la Crainte mais sans bonne foi. De plus, la Crainte tire son origine de l’impuissance de l’âme et n’appartient donc pas à l’usage de la Raison ; il en est de même de la Commisération, bien qu’elle ait l’apparence extérieure de la Moralité.\"},{\"caputIndex\":\"17\",\"txt\":\"Les hommes sont encore conquis par les largesses, ceux-là surtout qui n’ont pas de quoi se procurer les choses nécessaires à leur subsistance. Porter secours, toutefois, à chaque indigent, cela dépasse de beaucoup les forces et l’intérêt d’un particulier. Ses richesses ne sauraient à beaucoup près y suffire, et la limitation de ses facultés ne lui permet pas de se rendre l’ami de tous ; le soin des pauvres s’impose donc à la société entière et concerne seulement l’intérêt commun.\"},{\"caputIndex\":\"18\",\"txt\":\"Dans l’acceptation des bienfaits et les témoignages de reconnaissance à donner, de tout autres soins sont nécessaires ; voir sur ce sujet Scolie de la Proposition 70 et Scolie de la Proposition 71.\"},{\"caputIndex\":\"19\",\"txt\":\"L’amour sensuel, c’est-à-dire l’appétit d’engendrer qui naît de la beauté, et en général tout Amour ayant une autre cause que la liberté de l’âme, se change facilement en Haine ; à moins, chose pire, qu’il ne soit une espèce de délire, auquel cas la discorde, plus que la concorde, est alimentée. Voir Scolie de la Proposition 31, partie III.\"},{\"caputIndex\":\"20\",\"txt\":\"Pour le mariage, il est certain qu’il s’accorde avec la Raison si le Désir de l’union des corps n’est pas engendré seulement par la beauté, mais par l’Amour de procréer des enfants et de les élever sagement ; si, en outre, l’Amour de l’un et de l’autre, c’est-à-dire de l’homme et delà femme, a pour cause principale non la seule beauté, mais la liberté intérieure\"},{\"caputIndex\":\"21\",\"txt\":\"La flatterie encore engendre la concorde ; mais avec la souillure de la servitude ou la mauvaise foi : nul n’est plus conquis par la flatterie que l’orgueilleux, qui veut être le premier et ne l’est pas.\"},{\"caputIndex\":\"22\",\"txt\":\"La Mésestime de soi a une fausse apparence de moralité et de religion ; et, bien que la Mésestime de soi s’oppose à l’Orgueil, celui qui se mésestime est cependant très proche de l’orgueilleux. Voir Scolie de la Proposition 57.\"},{\"caputIndex\":\"23\",\"txt\":\"La Honte en outre ne contribue à la concorde qu’en ce qui peut se cacher, Puisque, d’autre part, la Honte est une espèce de Tristesse, elle ne concerne pas l’usage de la Raison.\"},{\"caputIndex\":\"24\",\"txt\":\"Les autres affections de Tristesse dirigées contre des hommes sont directement opposées à la justice, à l’équité, à l’honnêteté, à la moralité et à la religion ; et, bien que l’indignation ait l’apparence extérieure de l’équité, il n’y a pas de lois réglant la vie, où il est permis à chacun de porter un jugement sur les actes d’autrui et de venger son droit ou celui d’autrui.\"},{\"caputIndex\":\"25\",\"txt\":\"La Modestie, c’est-à-dire le Désir de plaire aux hommes, quand la Raison le détermine, se ramène à la Moralité (comme nous l’avons dit dans le Scolie 1 de la Prop. 37). Mais, si elle tire son origine d’une affection, la Modestie est l’Ambition, c’est-à-dire un Désir pour lequel les hommes le plus souvent excitent des discordes et des séditions sous une fausse couleur de moralité. Qui, en effet, désire assister les autres de ses conseils ou en action, pour parvenir en commun, à la jouissance du souverain bien, il travaillera avant tout à gagner leur Amour ; non pas à se faire admirer d’eux pour qu’une discipline porte son nom, non plus, qu’à donner aucun autre motif d’Envie. Dans les conversations, il se gardera, de rapporter les vices des hommes et aura soin de ne parler qu’avec ménagement de leur impuissance, amplement au contraire de la vertu ou puissance de l’homme, et de la voie à suivre pour la porter à sa perfection ; de façon que les hommes, non par crainte ou aversion, mais affectés seulement d’une émotion de Joie, s’efforcent à vivre, autant qu’il est en eux, suivant les préceptes de la Raison.\"},{\"caputIndex\":\"26\",\"txt\":\"Outre les hommes, nous ne savons dans la Nature aucune chose singulière dont l’Âme nous puisse donner de la joie, et à laquelle nous puissions nous joindre ; par l’amitié ou aucun genre de relation sociale ; ce qu’il y a donc dans la Nature en dehors des hommes, la règle de l’utile ne demande pas que nous le conservions, mais nous pouvons, suivant cette règle, le conserver pour divers usages, le détruire ou l’adapter à notre usage par tous les moyens.\"},{\"caputIndex\":\"27\",\"txt\":\"L’utilité qui se tire des choses extérieures, outre l’expérience et la connaissance acquises par leur observation et les transformations que nous leur faisons subir, est surtout la conservation du Corps ; pour cette raison les choses utiles sont, avant tout, celtes qui peuvent alimenter le Corps et le nourrir de façon que toutes ses parties puissent s’acquitter convenablement de leur office. Plus le Corps est apte en effet à être affecté de plusieurs manières et à affecter les corps extérieurs d’un très grand nombre de manières, plus l’Âme est apte à penser (Prop. 38 et 39). Mais les choses de cette sorte semblent être très peu nombreuses dans la Nature, et par suite pour nourrir le Corps, comme il est requis, il est nécessaire d’user d’aliments nombreux de nature diverse. Le Corps humain, en effet, est composé d’un très grand nombre de parties de nature différente qui ont constamment besoin d’aliments variés, afin que tout le Corps soit également apte à tout ce qui peut suivre de sa nature et que l’Âme en conséquence soit aussi également apte à concevoir plusieurs choses.\"},{\"caputIndex\":\"28\",\"txt\":\"Pour se procurer ce nécessaire, les forces de chacun ne suffiraient guère si les hommes ne se rendaient de mutuels services. Mais l’argent est devenu le signe dans lequel se résument toutes les richesses, si bien que son image occupe d’ordinaire plus qu’aucune chose l’Âme du vulgaire ; on ne peut guère en effet imaginer aucune sorte de Joie, sinon avec l’accompagnement comme cause de l’idée de la monnaie.\"},{\"caputIndex\":\"29\",\"txt\":\"Cela, toutefois, n’est un vice que chez ceux qui sont en quête d’argent, non par besoin ni pour pourvoir aux nécessités de la vie, mais parce qu’ils ont appris l’art varié de s’enrichir et se font honneur dé le posséder. Ils donnent bien au Corps sa pâture selon la coutume, mais en cherchant à épargner, parce qu’ils croient perdue toute partie de leur avoir dépensée pour la conservation du Corps. Pour ceux qui savent le vrai usage de la monnaie et règlent leur richesse sur le besoin seulement, ils vivent contents de peu.\"},{\"caputIndex\":\"30\",\"txt\":\"Ces choses donc étant bonnes qui aident les parties du Corps à s’acquitter de leur office, et la Joie consistant en ce que la puissance de l’homme, en tant qu’il est composé d’une Âme et d’un Corps, est secondée ou accrue, tout ce qui donne de la Joie, est bon. L’action des choses toutefois n’a point pour fin qu’elles nous affectent de joie, et leur puissance d’agir n’est point réglée sur notre utilité ; enfin la Joie se rapporte le plus souvent de façon toute spéciale à une partie unique du Corps ; pour ces raisons (à moins que la Raison et la vigilance n’interviennent) la plupart des affections de Joie et conséquemment aussi les Désirs qui en naissent ont de l’excès ; à quoi s’ajoute que, sous l’empire d’une affection, nous donnons la première place à ce qui est présentement agréable, et ne pouvons dans l’appréciation des choses futures apporter pareil sentiment. Voir Scolie de la Proposition 44 et Scolie de la Proposition 60.\"},{\"caputIndex\":\"31\",\"txt\":\"La superstition, par contre, semble admettre que le bien, c’est ce qui apporte de la Tristesse, ; le mal, ce qui donne de la Joie, Mais, comme nous l’avons dit déjà (Scolie de la Prop. 45), seul un envieux peut prendre plaisir à mon impuissance et à ma peine. Plus grande est la Joie dont nous sommes affectés en effet, plus grande la perfection à laquelle nous passons et plus, par conséquent, nous participons de là nature divine ; et jamais ne peut être mauvaise une Joie réglée par l’entente vraie de notre utilité. Qui, au contraire, est dirigé par la Crainte et fait le bien pour éviter le mal, n’est pas conduit par la Raison.\"},{\"caputIndex\":\"32\",\"txt\":\"Mais la puissance de l’homme est extrêmement limitée et infiniment surpassée par celle des causes extérieures ; nous n’avons donc pas un pouvoir absolu d’adapter à notre usage les choses extérieures. Nous supporterons, toutefois, d’une âme égale les événements contraires à ce qu’exige la considération de notre intérêt, si nous avons conscience de nous être acquittés de notre office, savons que notre puissance n’allait pas jusqu’à nous permettre de les éviter, et avons présente cette idée que nous sommes une partie de la Nature entière dont nous suivons l’ordre. Si nous connaissons cela clairement et distinctement, cette partie de nous qui se définit par la connaissance claire, c’est-à-dire la partie la meilleure de nous, trouvera là un plein contentement et s’efforcera de persévérer dans ce contentement. En tant en effet que nous sommes connaissants, nous ne pouvons rien appéter que ce qui en soi est nécessaire et, absolument, ne trouver de contentement que dans le vrai ; dans la mesure donc où nous connaissons cela droitement, l’effort de la meilleure partie de nous-mêmes s’accorde avec l’ordre de la Nature entière.\"}]},\"demonstratio\":[{\"propositioId\":\"1\",\"demonstratioIndex\":\"1\",\"txt\":\"La fausseté consiste seulement dans la privation de connaissance qu’enveloppent les idées inadéquates (Prop. 35, p. II), et elles n’ont rien de positif à cause de quoi elles sont dites fausses (Prop. 33, p. II). Mais, au contraire, en tant qu’elles se rapportent à Dieu, elles sont vraies (Prop. 32, p. II). Si donc ce qu’une idée fausse a de positif était ôté par la présence du vrai en tant qu’il est vrai, une idée vraie serait ôtée par elle-même, ce qui (Prop. 4, p. III) est absurde. Donc rien de ce qu’une idée fausse, etc. C. Q. F. D.\"},{\"propositioId\":\"2\",\"demonstratioIndex\":\"1\",\"txt\":\"Nous sommes dits passifs quand quelque chose se produit en nous de quoi nous ne sommes cause que partiellement (Défin. 2, p. III), c’est-à-dire (Défin. 1, p. III) quelque chose qui ne peut être déduit des seules lois de notre nature. Nous pâtissons donc en tant que nous sommes une partie de la Nature qui ne peut se concevoir par soi sans les autres parties. C. Q. F. D.\"},{\"propositioId\":\"3\",\"demonstratioIndex\":\"1\",\"txt\":\"Cela est évident, par l’Axiome de cette Partie. Car, si un homme est donné, quelque autre chose plus puissante, disons A, est donnée, et si A est donné, quelque autre chose encore, disons B, plus puissante que A, et cela à l’infini ; par suite, la puissance de l’homme est limitée par celle d’une autre chose et infiniment surpassée par celle des causes extérieures. C. Q. F. D.\"},{\"propositioId\":\"4\",\"demonstratioIndex\":\"1\",\"txt\":\"La puissance par laquelle les choses singulières et conséquemment l’homme conservent leur être est la puissance même de Dieu ou de la Nature (Coroll. de la prop. 24, p. I), non en tant qu’elle est infinie, mais en tant qu’elle peut s’expliquer par une essence, humaine actuelle (Prop. 7, p. III). Donc la puissance de l’homme, en tant qu’elle s’explique par son essence actuelle est une partie de la puissance infinie, c’est-à-dire de l’essence (Prop. 34, p. I), de Dieu ou de la Nature : ce qui était le premier point. Si maintenant il était possible que l’homme pût n’éprouver d’autres changements que ceux qui se peuvent connaître par la seule nature de l’homme lui-même, il s’ensuivrait (Prop. 4 et 6, p. III) qu’il ne pourrait périr mais existerait toujours nécessairement ; et cela devrait suivre d’une cause dont la puissance fût finie ou infinie ; je veux dire ou bien delà seule puissance de l’homme, qui pourrait donc écarter de lui-même les autres changements pouvant venir de causes extérieures ; ou bien par la puissance infinie de la Nature dirigeant toutes les choses singulières de façon que l’homme pût éprouver ces changements seulement qui servent à sa conservation, Mais la première hypothèse est absurde (par la Proposition précédente dont la démonstration est universelle et peut être appliquée à toutes les choses singulières). Si donc il se pouvait que l’homme n’éprouvât d’autres changements que ceux qui se peuvent connaître par sa seule nature et conséquemment (comme nous venons de le montrer) existât toujours, cela devrait suivre de la puissance infinie de Dieu ; et en conséquence (Prop, 16, p. I) de la nécessité de la nature divine, en tant qu’elle est considérée comme affectée de l’idée d’un homme, devrait se déduire tout l’ordre de la Nature conçue sous les attributs de l’Étendue et de la Pensée. Il suivrait de là (Prop. 21, p. I) que l’homme serait infini, ce qui (par la première partie de cette démonstration) est absurde. Il est donc impossible que l’homme n’éprouve d’autres changements que ceux dont il est cause adéquate. C. Q. F. D.\"},{\"propositioId\":\"5\",\"demonstratioIndex\":\"1\",\"txt\":\"L’essence d’une passion ne peut s’expliquer par notre seule essence (Défin. 1 et 2, p. III), c’est-à-dire (Prop. 7, p. III) la puissance d’une passion ne peut se définir par la puissance avec laquelle nous persévérons dans notre, être, mais (comme nous l’avons montré Prop. 16, p. II) doit se définir nécessairement par la puissance de la cause extérieure comparée à la nôtre. C. Q. F. D.\"}]}");

/***/ }),

/***/ "./src/components/text/Appendix.tsx":
/*!******************************************!*\
  !*** ./src/components/text/Appendix.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Caput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Caput */ "./src/components/text/Caput.tsx");
var _jsxFileName = "/Users/pedenys/Sandbox/ethicaspinoza/src/components/text/Appendix.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const Appendix = ({
  caputs,
  txt
}) => {
  return __jsx("div", {
    className: "jsx-2862174311",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, __jsx("h2", {
    className: "jsx-2862174311",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, "Appendice"), __jsx("p", {
    className: "jsx-2862174311",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, txt), caputs && __jsx("div", {
    className: "jsx-2862174311" + " " + "caputContainer",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, caputs.map(caput => __jsx(_Caput__WEBPACK_IMPORTED_MODULE_2__["default"], {
    txt: caput.txt,
    index: caput.caputIndex,
    key: caput.txt[0] + caput.caputIndex.toString(),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2862174311",
    __self: undefined
  }, "h2.jsx-2862174311{font-weight:500;font-size:24px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wZWRlbnlzL1NhbmRib3gvZXRoaWNhc3Bpbm96YS9zcmMvY29tcG9uZW50cy90ZXh0L0FwcGVuZGl4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3QmtCLEFBRzJCLGdCQUNELGVBQ2pCIiwiZmlsZSI6Ii9Vc2Vycy9wZWRlbnlzL1NhbmRib3gvZXRoaWNhc3Bpbm96YS9zcmMvY29tcG9uZW50cy90ZXh0L0FwcGVuZGl4LnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IENhcHV0IGZyb20gXCIuL0NhcHV0XCJcblxuaW50ZXJmYWNlIEFwcGVuZGl4UHJvcHMge1xuICBjYXB1dHM/OiBBcnJheTx7IGNhcHV0SW5kZXg6IHN0cmluZzsgdHh0OiBzdHJpbmcgfT5cbiAgdHh0OiBzdHJpbmdcbn1cblxuY29uc3QgQXBwZW5kaXg6IFJlYWN0LkZDPEFwcGVuZGl4UHJvcHM+ID0gKHsgY2FwdXRzLCB0eHQgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDI+QXBwZW5kaWNlPC9oMj5cbiAgICAgIDxwPnt0eHR9PC9wPlxuICAgICAge2NhcHV0cyAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FwdXRDb250YWluZXJcIj5cbiAgICAgICAgICB7Y2FwdXRzLm1hcCgoY2FwdXQpID0+IChcbiAgICAgICAgICAgIDxDYXB1dFxuICAgICAgICAgICAgICB0eHQ9e2NhcHV0LnR4dH1cbiAgICAgICAgICAgICAgaW5kZXg9e2NhcHV0LmNhcHV0SW5kZXh9XG4gICAgICAgICAgICAgIGtleT17Y2FwdXQudHh0WzBdICsgY2FwdXQuY2FwdXRJbmRleC50b1N0cmluZygpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBoMiB7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHBlbmRpeFxuIl19 */\n/*@ sourceURL=/Users/pedenys/Sandbox/ethicaspinoza/src/components/text/Appendix.tsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Appendix);

/***/ }),

/***/ "./src/components/text/Caput.tsx":
/*!***************************************!*\
  !*** ./src/components/text/Caput.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/pedenys/Sandbox/ethicaspinoza/src/components/text/Caput.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const Caput = ({
  index,
  txt
}) => {
  return __jsx("div", {
    className: "jsx-804592194",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, __jsx("h3", {
    className: "jsx-804592194",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, "Chapitre ", index), __jsx("p", {
    className: "jsx-804592194",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, txt), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "804592194",
    __self: undefined
  }, "h3.jsx-804592194{font-size:20px;font-weight:400;}p.jsx-804592194{font-size:16px;font-weight:300;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wZWRlbnlzL1NhbmRib3gvZXRoaWNhc3Bpbm96YS9zcmMvY29tcG9uZW50cy90ZXh0L0NhcHV0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFhUyxBQUc0QixBQUlBLGVBSEMsQUFJQSxnQkFIbEIsQUFJQSIsImZpbGUiOiIvVXNlcnMvcGVkZW55cy9TYW5kYm94L2V0aGljYXNwaW5vemEvc3JjL2NvbXBvbmVudHMvdGV4dC9DYXB1dC50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcblxuaW50ZXJmYWNlIENhcHV0UHJvcHMge1xuICB0eHQ6IHN0cmluZ1xuICBpbmRleDogc3RyaW5nXG59XG5cbmNvbnN0IENhcHV0OiBSZWFjdC5GQzxDYXB1dFByb3BzPiA9ICh7IGluZGV4LCB0eHQgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDM+Q2hhcGl0cmUge2luZGV4fTwvaDM+XG4gICAgICA8cD57dHh0fTwvcD5cbiAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtgXG4gICAgICAgICAgaDMge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgcCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FwdXRcbiJdfQ== */\n/*@ sourceURL=/Users/pedenys/Sandbox/ethicaspinoza/src/components/text/Caput.tsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Caput);

/***/ }),

/***/ "./src/components/text/Demonstratio.tsx":
/*!**********************************************!*\
  !*** ./src/components/text/Demonstratio.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/pedenys/Sandbox/ethicaspinoza/src/components/text/Demonstratio.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const Demonstratio = ({
  txt
}) => {
  return __jsx("div", {
    className: "jsx-4137250724",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx("h3", {
    className: "jsx-4137250724",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }, "D\xE9monstration"), __jsx("p", {
    className: "jsx-4137250724",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }, txt), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4137250724",
    __self: undefined
  }, "h3.jsx-4137250724{font-size:20px;font-weight:400;color:#333;}p.jsx-4137250724{font-size:16px;font-weight:300;color:#555;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wZWRlbnlzL1NhbmRib3gvZXRoaWNhc3Bpbm96YS9zcmMvY29tcG9uZW50cy90ZXh0L0RlbW9uc3RyYXRpby50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBU1MsQUFHNEIsQUFLQSxlQUpDLEFBS0EsZ0JBSkwsQUFLQSxXQUpiLEFBS0EiLCJmaWxlIjoiL1VzZXJzL3BlZGVueXMvU2FuZGJveC9ldGhpY2FzcGlub3phL3NyYy9jb21wb25lbnRzL3RleHQvRGVtb25zdHJhdGlvLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuXG5jb25zdCBEZW1vbnN0cmF0aW8gPSAoeyB0eHQgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDM+RMOpbW9uc3RyYXRpb248L2gzPlxuICAgICAgPHA+e3R4dH08L3A+XG5cbiAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtgXG4gICAgICAgICAgaDMge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgICAgIH1cbiAgICAgICAgICBwIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgICAgICBjb2xvcjogIzU1NTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IERlbW9uc3RyYXRpb1xuIl19 */\n/*@ sourceURL=/Users/pedenys/Sandbox/ethicaspinoza/src/components/text/Demonstratio.tsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Demonstratio);

/***/ }),

/***/ "./src/components/text/Praefatio.tsx":
/*!*******************************************!*\
  !*** ./src/components/text/Praefatio.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/pedenys/Sandbox/ethicaspinoza/src/components/text/Praefatio.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const Praefatio = ({
  txt
}) => {
  return __jsx("div", {
    className: "jsx-2468405472",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, __jsx("h3", {
    className: "jsx-2468405472",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, "Pr\xE9face"), __jsx("p", {
    dangerouslySetInnerHTML: {
      __html: txt
    },
    className: "jsx-2468405472",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2468405472",
    __self: undefined
  }, "p.jsx-2468405472{font-size:16px;font-weight:300;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wZWRlbnlzL1NhbmRib3gvZXRoaWNhc3Bpbm96YS9zcmMvY29tcG9uZW50cy90ZXh0L1ByYWVmYXRpby50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBVWtCLEFBRzBCLGVBQ0MsZ0JBQ2xCIiwiZmlsZSI6Ii9Vc2Vycy9wZWRlbnlzL1NhbmRib3gvZXRoaWNhc3Bpbm96YS9zcmMvY29tcG9uZW50cy90ZXh0L1ByYWVmYXRpby50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmludGVyZmFjZSBQcmFlZmF0aW9Qcm9wcyB7XG4gIHR4dDogc3RyaW5nXG59XG5cbmNvbnN0IFByYWVmYXRpbzogUmVhY3QuRkM8UHJhZWZhdGlvUHJvcHM+ID0gKHsgdHh0IH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgzPlByw6lmYWNlPC9oMz5cbiAgICAgIDxwIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogdHh0IH19PjwvcD5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgcCB7XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcmFlZmF0aW9cbiJdfQ== */\n/*@ sourceURL=/Users/pedenys/Sandbox/ethicaspinoza/src/components/text/Praefatio.tsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Praefatio);

/***/ }),

/***/ "./src/components/text/Propositio.tsx":
/*!********************************************!*\
  !*** ./src/components/text/Propositio.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/pedenys/Sandbox/ethicaspinoza/src/components/text/Propositio.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const PropositioTitle = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.h2.withConfig({
  displayName: "Propositio__PropositioTitle",
  componentId: "sc-23o5k6-0"
})(["font-size:24px;font-weight:500;color:#111;"]);
const PropositioText = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.h2.withConfig({
  displayName: "Propositio__PropositioText",
  componentId: "sc-23o5k6-1"
})(["font-size:16px;font-weight:300;color:#333;"]);

const Propositio = ({
  id,
  pars,
  txt
}) => {
  return __jsx("div", {
    id: `pars${pars}-propositio${id}`,
    className: "jsx-2763296308",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }
  }, __jsx(PropositioTitle, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, "Proposition ", id), __jsx(PropositioText, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }, txt), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2763296308",
    __self: undefined
  }, "h2.jsx-2763296308{font-size:24px;font-weight:500;color:#111;}p.jsx-2763296308{font-size:16px;font-weight:300;color:#333;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wZWRlbnlzL1NhbmRib3gvZXRoaWNhc3Bpbm96YS9zcmMvY29tcG9uZW50cy90ZXh0L1Byb3Bvc2l0aW8udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlCa0IsQUFHMEIsQUFLQSxlQUpDLEFBS0EsZ0JBSkwsQUFLQSxXQUpiLEFBS0EiLCJmaWxlIjoiL1VzZXJzL3BlZGVueXMvU2FuZGJveC9ldGhpY2FzcGlub3phL3NyYy9jb21wb25lbnRzL3RleHQvUHJvcG9zaXRpby50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCJcblxuY29uc3QgUHJvcG9zaXRpb1RpdGxlID0gc3R5bGVkLmgyYFxuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjMTExO1xuYFxuXG5jb25zdCBQcm9wb3NpdGlvVGV4dCA9IHN0eWxlZC5oMmBcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBjb2xvcjogIzMzMztcbmBcbmludGVyZmFjZSBQcm9wb3NpdGlvUHJvcHMge1xuICBpZDogc3RyaW5nXG4gIHBhcnM6IHN0cmluZ1xuICB0eHQ6IHN0cmluZ1xufVxuXG5jb25zdCBQcm9wb3NpdGlvOiBSZWFjdC5GQzxQcm9wb3NpdGlvUHJvcHM+ID0gKHsgaWQsIHBhcnMsIHR4dCB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBpZD17YHBhcnMke3BhcnN9LXByb3Bvc2l0aW8ke2lkfWB9PlxuICAgICAgPFByb3Bvc2l0aW9UaXRsZT5Qcm9wb3NpdGlvbiB7aWR9PC9Qcm9wb3NpdGlvVGl0bGU+XG4gICAgICA8UHJvcG9zaXRpb1RleHQ+e3R4dH08L1Byb3Bvc2l0aW9UZXh0PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBoMiB7XG4gICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgY29sb3I6ICMxMTE7XG4gICAgICAgIH1cbiAgICAgICAgcCB7XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9wb3NpdGlvXG4iXX0= */\n/*@ sourceURL=/Users/pedenys/Sandbox/ethicaspinoza/src/components/text/Propositio.tsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Propositio);

/***/ }),

/***/ "./src/pages/parsiii.tsx":
/*!*******************************!*\
  !*** ./src/pages/parsiii.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _source_FR_appuhn_parsiii_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../source/FR/appuhn/parsiii.json */ "./source/FR/appuhn/parsiii.json");
var _source_FR_appuhn_parsiii_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../source/FR/appuhn/parsiii.json */ "./source/FR/appuhn/parsiii.json", 1);
/* harmony import */ var _components_text_Propositio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/text/Propositio */ "./src/components/text/Propositio.tsx");
/* harmony import */ var _components_text_Demonstratio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/text/Demonstratio */ "./src/components/text/Demonstratio.tsx");
/* harmony import */ var _components_text_Appendix__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/text/Appendix */ "./src/components/text/Appendix.tsx");
/* harmony import */ var _components_text_Praefatio__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/text/Praefatio */ "./src/components/text/Praefatio.tsx");
var _jsxFileName = "/Users/pedenys/Sandbox/ethicaspinoza/src/pages/parsiii.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const ParsIII = () => {
  const getDemonstratioArray = i => {
    return _source_FR_appuhn_parsiii_json__WEBPACK_IMPORTED_MODULE_1__.demonstratio.reduce((arrayOfTxt, dem) => {
      if (dem.propositioId === i.toString()) {
        arrayOfTxt.push(dem.txt);
      }

      return arrayOfTxt;
    }, []);
  };

  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  }, __jsx(_components_text_Praefatio__WEBPACK_IMPORTED_MODULE_5__["default"], {
    txt: _source_FR_appuhn_parsiii_json__WEBPACK_IMPORTED_MODULE_1__.praefatio,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }), Array.from({
    length: 73
  }).map((item, i) => __jsx("span", {
    key: i.toString() + _source_FR_appuhn_parsiii_json__WEBPACK_IMPORTED_MODULE_1__.propositio[i + 1][0],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, __jsx(_components_text_Propositio__WEBPACK_IMPORTED_MODULE_2__["default"], {
    id: (i + 1).toString(),
    pars: "3",
    txt: _source_FR_appuhn_parsiii_json__WEBPACK_IMPORTED_MODULE_1__.propositio[i + 1],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }
  }), getDemonstratioArray(i + 1).map((txt, index) => __jsx(_components_text_Demonstratio__WEBPACK_IMPORTED_MODULE_3__["default"], {
    txt: txt,
    key: txt[0] + index.toString(),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  })))), __jsx(_components_text_Appendix__WEBPACK_IMPORTED_MODULE_4__["default"], {
    txt: _source_FR_appuhn_parsiii_json__WEBPACK_IMPORTED_MODULE_1__.appendix.txt,
    caputs: _source_FR_appuhn_parsiii_json__WEBPACK_IMPORTED_MODULE_1__.appendix.caputs,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ParsIII);

/***/ }),

/***/ 3:
/*!*************************************!*\
  !*** multi ./src/pages/parsiii.tsx ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/pedenys/Sandbox/ethicaspinoza/src/pages/parsiii.tsx */"./src/pages/parsiii.tsx");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdGV4dC9BcHBlbmRpeC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdGV4dC9DYXB1dC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdGV4dC9EZW1vbnN0cmF0aW8udHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3RleHQvUHJhZWZhdGlvLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90ZXh0L1Byb3Bvc2l0aW8udHN4Iiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9wYXJzaWlpLnRzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWpzeC9zdHlsZVwiIl0sIm5hbWVzIjpbIkFwcGVuZGl4IiwiY2FwdXRzIiwidHh0IiwibWFwIiwiY2FwdXQiLCJjYXB1dEluZGV4IiwidG9TdHJpbmciLCJDYXB1dCIsImluZGV4IiwiRGVtb25zdHJhdGlvIiwiUHJhZWZhdGlvIiwiX19odG1sIiwiUHJvcG9zaXRpb1RpdGxlIiwic3R5bGVkIiwiaDIiLCJQcm9wb3NpdGlvVGV4dCIsIlByb3Bvc2l0aW8iLCJpZCIsInBhcnMiLCJQYXJzSUlJIiwiZ2V0RGVtb25zdHJhdGlvQXJyYXkiLCJpIiwianNvbiIsImRlbW9uc3RyYXRpbyIsInJlZHVjZSIsImFycmF5T2ZUeHQiLCJkZW0iLCJwcm9wb3NpdGlvSWQiLCJwdXNoIiwicHJhZWZhdGlvIiwiQXJyYXkiLCJmcm9tIiwibGVuZ3RoIiwiaXRlbSIsInByb3Bvc2l0aW8iLCJhcHBlbmRpeCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FB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QUssQ0FBQ0YsUUFBTixFQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREQsQ0FOSCxDQURELENBSEgsRUFnQkUsTUFBQyxpRUFBRDtBQUFVLE9BQUcsRUFBRWdCLDJEQUFJLENBQUNhLFFBQUwsQ0FBY2pDLEdBQTdCO0FBQWtDLFVBQU0sRUFBRW9CLDJEQUFJLENBQUNhLFFBQUwsQ0FBY2xDLE1BQXhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFoQkYsQ0FERjtBQW9CRCxDQTlCRDs7QUFnQ2VrQixzRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZDQSxrQzs7Ozs7Ozs7Ozs7QUNBQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSw2QyIsImZpbGUiOiJzdGF0aWMvZGV2ZWxvcG1lbnQvcGFnZXMvcGFyc2lpaS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAzKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IENhcHV0IGZyb20gXCIuL0NhcHV0XCJcblxuaW50ZXJmYWNlIEFwcGVuZGl4UHJvcHMge1xuICBjYXB1dHM/OiBBcnJheTx7IGNhcHV0SW5kZXg6IHN0cmluZzsgdHh0OiBzdHJpbmcgfT5cbiAgdHh0OiBzdHJpbmdcbn1cblxuY29uc3QgQXBwZW5kaXg6IFJlYWN0LkZDPEFwcGVuZGl4UHJvcHM+ID0gKHsgY2FwdXRzLCB0eHQgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDI+QXBwZW5kaWNlPC9oMj5cbiAgICAgIDxwPnt0eHR9PC9wPlxuICAgICAge2NhcHV0cyAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FwdXRDb250YWluZXJcIj5cbiAgICAgICAgICB7Y2FwdXRzLm1hcCgoY2FwdXQpID0+IChcbiAgICAgICAgICAgIDxDYXB1dFxuICAgICAgICAgICAgICB0eHQ9e2NhcHV0LnR4dH1cbiAgICAgICAgICAgICAgaW5kZXg9e2NhcHV0LmNhcHV0SW5kZXh9XG4gICAgICAgICAgICAgIGtleT17Y2FwdXQudHh0WzBdICsgY2FwdXQuY2FwdXRJbmRleC50b1N0cmluZygpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBoMiB7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHBlbmRpeFxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5cbmludGVyZmFjZSBDYXB1dFByb3BzIHtcbiAgdHh0OiBzdHJpbmdcbiAgaW5kZXg6IHN0cmluZ1xufVxuXG5jb25zdCBDYXB1dDogUmVhY3QuRkM8Q2FwdXRQcm9wcz4gPSAoeyBpbmRleCwgdHh0IH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgzPkNoYXBpdHJlIHtpbmRleH08L2gzPlxuICAgICAgPHA+e3R4dH08L3A+XG4gICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YFxuICAgICAgICAgIGgzIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIHAge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENhcHV0XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcblxuY29uc3QgRGVtb25zdHJhdGlvID0gKHsgdHh0IH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgzPkTDqW1vbnN0cmF0aW9uPC9oMz5cbiAgICAgIDxwPnt0eHR9PC9wPlxuXG4gICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YFxuICAgICAgICAgIGgzIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgICAgICB9XG4gICAgICAgICAgcCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgICAgY29sb3I6ICM1NTU7XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBEZW1vbnN0cmF0aW9cbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW50ZXJmYWNlIFByYWVmYXRpb1Byb3BzIHtcbiAgdHh0OiBzdHJpbmdcbn1cblxuY29uc3QgUHJhZWZhdGlvOiBSZWFjdC5GQzxQcmFlZmF0aW9Qcm9wcz4gPSAoeyB0eHQgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDM+UHLDqWZhY2U8L2gzPlxuICAgICAgPHAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiB0eHQgfX0+PC9wPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBwIHtcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFByYWVmYXRpb1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiXG5cbmNvbnN0IFByb3Bvc2l0aW9UaXRsZSA9IHN0eWxlZC5oMmBcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogIzExMTtcbmBcblxuY29uc3QgUHJvcG9zaXRpb1RleHQgPSBzdHlsZWQuaDJgXG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgY29sb3I6ICMzMzM7XG5gXG5pbnRlcmZhY2UgUHJvcG9zaXRpb1Byb3BzIHtcbiAgaWQ6IHN0cmluZ1xuICBwYXJzOiBzdHJpbmdcbiAgdHh0OiBzdHJpbmdcbn1cblxuY29uc3QgUHJvcG9zaXRpbzogUmVhY3QuRkM8UHJvcG9zaXRpb1Byb3BzPiA9ICh7IGlkLCBwYXJzLCB0eHQgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgaWQ9e2BwYXJzJHtwYXJzfS1wcm9wb3NpdGlvJHtpZH1gfT5cbiAgICAgIDxQcm9wb3NpdGlvVGl0bGU+UHJvcG9zaXRpb24ge2lkfTwvUHJvcG9zaXRpb1RpdGxlPlxuICAgICAgPFByb3Bvc2l0aW9UZXh0Pnt0eHR9PC9Qcm9wb3NpdGlvVGV4dD5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgaDIge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgIGNvbG9yOiAjMTExO1xuICAgICAgICB9XG4gICAgICAgIHAge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvcG9zaXRpb1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQganNvbiBmcm9tIFwiLi4vLi4vc291cmNlL0ZSL2FwcHVobi9wYXJzaWlpLmpzb25cIlxuaW1wb3J0IFByb3Bvc2l0aW8gZnJvbSBcIi4uL2NvbXBvbmVudHMvdGV4dC9Qcm9wb3NpdGlvXCJcbmltcG9ydCBEZW1vbnN0cmF0aW8gZnJvbSBcIi4uL2NvbXBvbmVudHMvdGV4dC9EZW1vbnN0cmF0aW9cIlxuaW1wb3J0IEFwcGVuZGl4IGZyb20gXCIuLi9jb21wb25lbnRzL3RleHQvQXBwZW5kaXhcIlxuaW1wb3J0IFByYWVmYXRpbyBmcm9tIFwiLi4vY29tcG9uZW50cy90ZXh0L1ByYWVmYXRpb1wiXG5cbmNvbnN0IFBhcnNJSUkgPSAoKSA9PiB7XG4gIGNvbnN0IGdldERlbW9uc3RyYXRpb0FycmF5ID0gKGk6IG51bWJlcikgPT4ge1xuICAgIHJldHVybiBqc29uLmRlbW9uc3RyYXRpby5yZWR1Y2U8QXJyYXk8c3RyaW5nPj4oKGFycmF5T2ZUeHQsIGRlbSkgPT4ge1xuICAgICAgaWYgKGRlbS5wcm9wb3NpdGlvSWQgPT09IGkudG9TdHJpbmcoKSkge1xuICAgICAgICBhcnJheU9mVHh0LnB1c2goZGVtLnR4dClcbiAgICAgIH1cbiAgICAgIHJldHVybiBhcnJheU9mVHh0XG4gICAgfSwgW10pXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8UHJhZWZhdGlvIHR4dD17anNvbi5wcmFlZmF0aW99IC8+XG4gICAgICB7LyogUHJvcG9zaXRpbyAqL31cbiAgICAgIHtBcnJheS5mcm9tKHsgbGVuZ3RoOiA3MyB9KS5tYXAoKGl0ZW0sIGkpID0+IChcbiAgICAgICAgPHNwYW4ga2V5PXtpLnRvU3RyaW5nKCkgKyBqc29uLnByb3Bvc2l0aW9baSArIDFdWzBdfT5cbiAgICAgICAgICA8UHJvcG9zaXRpb1xuICAgICAgICAgICAgaWQ9eyhpICsgMSkudG9TdHJpbmcoKX1cbiAgICAgICAgICAgIHBhcnM9e1wiM1wifVxuICAgICAgICAgICAgdHh0PXtqc29uLnByb3Bvc2l0aW9baSArIDFdfVxuICAgICAgICAgIC8+XG4gICAgICAgICAge2dldERlbW9uc3RyYXRpb0FycmF5KGkgKyAxKS5tYXAoKHR4dCwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxEZW1vbnN0cmF0aW8gdHh0PXt0eHR9IGtleT17dHh0WzBdICsgaW5kZXgudG9TdHJpbmcoKX0gLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9zcGFuPlxuICAgICAgKSl9XG4gICAgICB7LyogQXBwZW5kaXggKi99XG4gICAgICA8QXBwZW5kaXggdHh0PXtqc29uLmFwcGVuZGl4LnR4dH0gY2FwdXRzPXtqc29uLmFwcGVuZGl4LmNhcHV0c30gLz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQYXJzSUlJXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtanN4L3N0eWxlXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=