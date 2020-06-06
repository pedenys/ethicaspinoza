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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./source/FR/misrahi/parsiii.json":
/*!****************************************!*\
  !*** ./source/FR/misrahi/parsiii.json ***!
  \****************************************/
/*! exports provided: praefatio, definitio, axioma, propositio, appendix, demonstratio, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"praefatio\":\"J’appelle Servitude l’impuissance humaine à diriger et à réprimer les affects. Soumis aux affects, en effet, l’homme ne relève pas de lui-même mais de la fortune, et il est au pouvoir de celle-ci à un point tel qu’il est souvent contraint, voyant le meilleur, de faire le pire. Je me suis proposé, dans cette Partie, de démontrer la cause ce ces faits, et aussi de dire ce que les affects ont de bon ou de mauvais. Mais, avant de commencer, il convient d’abord de dire quelques mots sur la perfection et l’imperfection, et sur le bien et sur le mal.<br> Non seulement celui qui a décidé de faire quelque chose et a achevé son œuvre dira qu’elle est parfaite, mais encore quiconque connaît vraiment ou croit connaître la pensée et l’intention de l’auteur. Si, par exemple, on voit une œuvre (que je suppose n’être pas encore achevée) et si l’on sait que l’intention de l’auteur est d’édifier une maison, on dira que cette maison est imparfaite, et au contraire on la dira parfaite dès qu’on verra l’œuvre conduite au terme que l’auteur avait décidé de lui donner. Mais si l’on voit une œuvre dont on n’a jamais vu d’exemplaire semblable, et si l’on ignore la pensée de l’artisan, on ne pourra certes pas savoir si cette œuvre est parfaite ou imparfaite. Et tel paraît bien être le premier sens de ces termes. Mais quand les hommes eurent commencé à former des idées générales et à se représenter des modèles de maisons, d’édifices, de tours, etc., puis à préférer certains modèles à d’autres, on en vint à nommer parfait ce qu’on voyait s’accorder avec l’idée générale qu’on avait formée des objets de même nature, et on appela au contraire imparfait ce qu’on voyait s’accorder le moins avec le concept qu’on avait du modèle, l’artisan eût-il entièrement réalisé son projet. Et il ne semble pas qu’il y ait d’autre raison pour laquelle, couramment, on appelle aussi parfaites ou imparfaites les choses naturelles, c’est-à-dire celles qui ne furent pas faites de mains d’hommes. Car ceux-ci ont l’habitude de former, aussi bien des choses naturelles que des objets artificiels, des idées générales qu’ils tiennent pour modèles, et ils croient que la Nature (dont ils pensent qu’elle n’agit jamais qu’en vue d’une fin) se réfère à ces idées et se les propose comme modèles. Aussi lorsqu’ils voient se produire dans la Nature quelque chose qui s’accorde fort peu avec le concept qu’ils ont du modèle d’un certain genre d’objets, croient-ils que c’est la Nature qui s’est trouvée en défaut ou qui a péché, et qu’elle a laissé son œuvre imparfaite. Ainsi nous voyons que si les hommes ont l’habitude d’appeler parfaites ou imparfaites les choses naturelles, c’est plus en vertu d’un préjugé que par une connaissance vraie de ces choses. Nous avons en effet montré, dans l’Appendice de la Partie I, que la Nature n’agit pas en vue d’une fin. Car cet Être éternel et infini que nous appelons Dieu ou Nature, agit avec la même nécessité qu’il existe. Nous avons montré en effet (Proposition 16, Partie I) que la nécessité de nature par laquelle il existe est la même que celle par laquelle il agit. Aussi, la raison ou la cause par laquelle Dieu ou la Nature agit et celle par laquelle il existe sont une seule et même chose. N’existant donc pour aucune fin, il n’agit pas non plus en vue d’une fin, et, comme son existence, son action ne comporte aucun principe ni aucune finalité. D’ailleurs, la cause qu’on appelle finale n’est rien d’autre que l’appétit humain lui-même en tant qu’on le considère comme le principe ou la cause primaire d’une chose. Lorsque nous disons par exemple que l’habitation a été la cause finale de telle ou telle demeure, nous n’entendons certes rien dire d’autre sinon qu’un homme, ayant imaginé les avantages de la vie domestique, eut le désir d’édifier une demeure. C’est pourquoi l’habitation, en tant qu’on la considère comme la cause finale, n’est rien d’autre qu’un appétit singulier qui est en réalité une cause efficiente, considérée elle-même comme première parce que les hommes ignorent communément les causes de leurs appétits. Comme je l’ai souvent dit, ils sont en effet conscients de leurs appétits et de leurs actions, mais ignorants des causes par lesquelles ils sont déterminés à poursuivre quelque chose. Quant à l’affirmation vulgaire selon laquelle la Nature, parfois, est en défaut ou pèche, produisant ainsi des choses imparfaites, je la compte parmi les fables que j’ai examinées dans l’Appendice de la Première Partie. Ainsi donc, la perfection et l’imperfection ne sont en réalité que des modes du penser, c’est-à-dire des notions que nous avons l’habitude de forger parce que nous comparons entre eux des individus de même espèce ou de même genre : et c’est pourquoi j’ai dit plus haut (Définition 6, Partie II) que par réalité et par perfection j’entendais la même chose. Nous avons en effet l’habitude de ramener tous les individus de la Nature à un seul genre, qu’on appelle genre suprême ; c’est-à-dire à la notion d’Être, qui appartient, absolument parlant, à tous les individus de la Nature. Par conséquent, en tant que nous ramenons les individus de la Nature à ce genre, et que nous les comparons entre eux, en tant aussi que nous trouvons que certains individus ont plus d’entité ou de réalité que d’autres, nous disons que les uns sont plus parfaits que les autres, et en tant que nous leur attribuons quelque chose qui enveloppe une négation, telle une limite, une fin, ou une impuissance, etc., nous les appelons imparfaits parce qu’ils n’affectent pas notre esprit d’une façon égale à celle dont nous affectent les individus que nous appelons parfaits, et non parce qu’il leur manquerait quelque chose qui leur appartiendrait en propre, ou parce que la Nature aurait péché. Rien, en effet, n’appartient à la nature d’une chose, si ce n’est ce qui suit de la nécessité d’une cause efficiente, et tout ce qui suit de la nécessité d’une cause efficiente se produit nécessairement.<br>En ce qui concerne le bien et le mal, ces termes n’indiquent non plus rien de positif dans les choses, considérées en elles-mêmes, et le bien et le mal ne sont rien d’autre que des modes du penser ou des notions que nous formons parce que nous comparons les choses entre elles. Une seule et même chose peut être en même temps bonne et mauvaise, et aussi indifférente. Par exemple, la Musique est bonne pour le Mélancolique, mauvaise pour le Malheureux, mais pour le Sourd, elle n’est ni bonne ni mauvaise. Pourtant, bien que la réalité soit telle, nous devons conserver ces termes. Puisqu’en effet nous désirons former une idée de l’homme qui soit comme un modèle de la nature humaine auquel nous puissions nous référer, il nous sera utile de conserver ces termes dans le sens que j’ai dit. Par bien j’entendrai donc désormais ce qu’avec certitude nous savons être un moyen de nous rapprocher toujours plus du modèle de la nature humaine que nous nous proposons de réaliser. Par mal, au contraire, ce qu’avec certitude nous savons qui nous empêche de nous rapporter à ce modèle. Nous dirons en outre que les hommes sont plus parfaits ou plus imparfaits, selon qu’ils se rapprocheront plus ou moins de ce même modèle. Car il importe de le remarquer, lorsque je dis que quelqu’un passe d’une perfection moindre à une plus grande perfection, et inversement, je ne veux pas dire qu’il passe d’une essence ou forme à une autre essence. Car un cheval, par exemple, est aussi bien détruit s’il se change en homme que s’il se change en insecte. Je veux dire que c’est la puissance d’agir, en tant qu’elle est comprise comme la nature même de l’individu, que nous concevons comme s’accroissant ou se réduisant. Par perfection, en général, j’entendrai enfin la réalité, comme je l’ai dit, c’est-à-dire l’essence d’une chose en tant qu’elle existe et qu’elle agit selon une certaine modalité, sans qu’il soit tenu compte de sa durée. Car aucune chose singulière ne peut être dite plus parfaite parce qu’elle a persévéré plus longtemps dans l’existence. La durée des choses ne peut en effet être déterminée par leur essence, puisque l’essence des choses n’enveloppe aucun temps précis et déterminé d’existence. Au contraire, une chose quelconque, qu’elle soit plus parfaite ou moins parfaite, pourra persévérer toujours dans l’existence avec la même force que celle par laquelle elle a commencé d’exister, de sorte que, sous ce rapport, toutes sont égales.\",\"definitio\":{\"1\":\"J’entendrai par bien ce que nous savons avec certitude nous être utile.\",\"2\":\"Mais par mal, ce que nous savons avec certitude être un obstacle à la possession de quelque bien.\",\"3\":\"J’appelle contingentes les choses singulières, quand, par le seul examen de leur essence, nous ne trouvons rien qui pose nécessairement leur existence, ou qui l’exclut nécessairement.\",\"4\":\"J’appelle possibles les choses singulières, quand, par l’examen des causes qui doivent les produire, nous ne savons pas si ces causes sont déterminées à les produire.<br> (Dans le Scolie 1 de la Proposition 33 de la Partie I, je n’ai fait aucune différence entre le possible et le contingent, parce qu’il n’était pas utile en cet endroit de les distinguer avec soin.)\",\"5\":\"J’entendrai désormais par affects contraires ceux qui tirent l’homme en des sens opposés bien qu’ils soient du même genre, comme l’intempérance et l’avarice, qui sont des espèces de l’amour. Ils ne sont pas contraires par nature, mais par accident.\",\"6\":\"J’ai expliqué dans les Scolies 1 et 2 de la Proposition 18 de la Partie III, auxquels je renvoie, ce que j’entends par affect à l’égard d’une chose future, présente ou passée.<br> (Il convient cependant de noter ici que, comme pour le lieu, nous ne pouvons imaginer distinctement une distance de temps au-delà d’une certaine limite ; c’est-à-dire que, de même que tous les objets éloignés de plus de deux cents pieds, ou dont l’éloignement dépasse celui que nous imaginons distinctement, sont habituellement imaginés à une distance égale par rapport à nous et comme s’ils étaient dans le même plan, de même les objets, dont nous imaginons que l’existence est séparée du présent par un intervalle de temps supérieur à celui que nous avons l’habitude d’imaginer distinctement, nous sont donnés par l’imagination dans un éloignement identique du présent et nous les rapportons comme à un seul moment du temps).\",\"7\":\"J’entends par fin, en raison de laquelle nous faisons quelque chose, l’appétit.\",\"8\":\"J’entends la même chose par vertu et par puissance. C’est-à-dire que (par la Proposition 7, Partie III), en tant qu’on la rapporte à l’homme, la vertu est l’essence ou la nature même de l’homme en tant qu’il a le pouvoir d’accomplir des actions qui peuvent être comprises par les seules lois de sa nature.\"},\"axioma\":{\"1\":\"Il n’est donné dans la Nature aucune chose singulière, qu’il n’en soit donné une autre plus puissante et plus forte. Mais si une chose est donnée, une autre plus puissante existe par laquelle la première peut être détruite.\"},\"propositio\":{\"1\":\"Rien de ce qu’une idée fausse a de positif n’est supprimé par la présence du vrai, en tant que vrai.\",\"2\":\"Nous sommes passifs en tant que nous sommes une partie de la Nature qui ne peut être conçue par elle seule, sans les autres parties.\",\"3\":\"La force par laquelle l’homme persévère dans l’existence est limitée, et elle est infiniment surpassée par la puissance des causes extérieures.\",\"4\":\"Il est impossible que l’homme ne soit pas une partie de la Nature et ne puisse subir d’autres changements que ceux qui peuvent se comprendre par sa seule nature et dont il est la cause adéquate.\",\"5\":\"La force et l’accroissement d’une passion ainsi que sa persévérance à exister ne se définissent pas par la puissance par laquelle nous nous efforçons de persévérer dans l’existence, mais par la puissance d’une cause extérieure, comparée à notre puissance.\",\"6\":\"La force d’une passion, ou affect, peut surpasser les autres actions d’un homme, ou sa puissance, au point que l’affect se fixe en lui d’une façon tenace.\",\"7\":\"Un affect ne peut être ni réprimé ni supprimé si ce n’est par un affect contraire et plus fort que l’affect à réprimer.\",\"8\":\"La connaissance du bien et du mal n’est rien d’autre qu’un affect de Joie ou de Tristesse, en tant que nous en sommes conscients.\",\"9\":\"Un affect, dont nous imaginons que la cause nous est actuellement présente, est plus fort que si nous imaginions cette cause comme absente.\",\"10\":\"Nous sommes plus intensément affectés à l’égard d’un objet que nous imaginons dans un futur rapproché que si nous l’imaginions dans un futur très lointain, et le souvenir d’une chose que nous imaginons dans un passé récent nous affecte aussi plus intensément que si nous l’imaginions dans un passé plus lointain.\",\"11\":\"Un affect pour un objet que nous imaginons comme nécessaire, toutes choses égales d’ailleurs, est plus intense que pour un objet possible ou contingent, c’est-à-dire non nécessaire.\",\"12\":\"Un affect pour un objet que nous savons ne pas exister actuellement et que nous imaginons comme possible, toutes choses égales d’ailleurs, est plus intense que pour un objet contingent.\",\"13\":\"Un affect pour un objet contingent que nous savons ne pas exister dans le présent est plus faible, toutes choses égales d’ailleurs, qu’un affect pour un objet passé.\",\"14\":\"La connaissance vraie du bien et du mal ne peut réprimer aucun affect en tant que cette connaissance est vraie, mais seulement en tant qu’elle est considérée comme un affect.\",\"15\":\"Un Désir qui naît de la connaissance vraie du bien et du mal peut être détruit ou réprimé par les nombreux autres Désirs qui naissent des affects qui nous tourmentent.\",\"16\":\"Le Désir qui naît de la connaissance du bien et du mal, en tant que cette connaissance se rapporte à l’avenir, peut-être plus aisément réprimé ou détruit par le Désir des choses qui sont agréables et présentes.\",\"17\":\"Un Désir qui naît de la connaissance vraie du bien et du mal, en tant qu’elle concerne des choses contingentes, peut-être réprimé beaucoup plus facilement encore par le Désir des choses qui sont présentes.\",\"18\":\"Un Désir qui naît de la Joie est, toutes choses égales d’ailleurs, plus fort qu’un Désir qui naît de la Tristesse.\",\"19\":\"Chacun par les lois de sa nature, poursuit ou repousse nécessairement ce qu’il juge être un bien ou un mal.\",\"20\":\"Plus on s’efforce et l’on a le pouvoir de rechercher son utile propre, c’est-à-dire de conserver son être, plus on est doué de vertu, au contraire, dans la mesure où l’on néglige de conserver son utile propre, c’est-à-dire son être, on est impuissant.\",\"21\":\"Personne ne peut désirer être heureux, bien agir et bien vivre, qu’il ne désire en même temps être, agir et vivre, c’est-à-dire exister en acte.\",\"22\":\"On ne peut concevoir aucune vertu qui soit antérieure à celle-là (c’est-à-dire à l’effort pour se conserver).\",\"23\":\"On ne peut dire en toute rigueur, que l’homme qui est déterminé à agir par des idées inadéquates agisse par vertu, mais il agit par vertu en tant seulement qu’il est déterminé par le fait qu’il comprend.\",\"24\":\"Agir par vertu n’est rien d’autre pour nous, en toute rigueur, qu’agir, vivre, conserver son être (ces trois termes signifient la même chose) sous la conduite de la Raison et sur le fondement de la recherche de l’utile propre.\",\"25\":\"Personne ne s’efforce de conserver son être en raison d’une autre chose.\",\"26\":\"Ce à quoi nous nous efforçons par la Raison, ce n’est rien d’autre que l’acte de comprendre ; et l’Esprit, en tant qu’il use de la Raison, ne juge pas qu’autre chose lui soit utile que ce qui conduit à la compréhension.\",\"27\":\"Nous ne connaissons avec certitude rien qui soit un bien ou un mal, si ce n’est ce qui conduit réellement à la compréhension, ou ce qui peut nous empêcher de comprendre.\",\"28\":\"Le bien suprême de l’Esprit est la connaissance de Dieu, et la suprême vertu de l’Esprit est de connaître Dieu.\",\"29\":\"Une chose singulière, dont la nature est totalement différente de la nôtre, ne peut ni seconder ni réprimer notre puissance d’agir et, d’une manière générale, rien ne peut être bon ou mauvais pour nous s’il n’a avec nous-même quelque chose de commun.\",\"30\":\"Rien ne peut être mauvais par ce qu’il a de commun avec notre nature, mais en tant qu’une chose est mauvaise pour nous, elle nous est contraire.\",\"31\":\"Dans la mesure où une chose s’accorde avec notre nature, elle est nécessairement bonne.\",\"32\":\"Dans la mesure où les hommes sont soumis aux passions, on ne peut pas dire qu’ils s’accordent par nature.\",\"33\":\"Les hommes peuvent se distinguer par nature en tant qu’ils sont tourmentés par des affects qui sont des passions, et dans cette mesure aussi, un seul et même homme peut être divers et inconstant.\",\"34\":\"En tant que les hommes sont tourmentés par des affects qui sont des passions, ils peuvent être réciproquement contraires les uns aux autres.\",\"35\":\"C’est dans la seule mesure où les hommes vivent sous la conduite de la Raison qu’ils s’accordent toujours nécessairement par nature.\",\"36\":\"Le bien suprême de ceux qui recherchent la vertu est commun à tous, et tous peuvent également s’en réjouir.\",\"37\":\"Le bien que tout homme recherchant la vertu poursuit pour lui-même, il le désirera aussi pour les autres, et cela d’autant plus qu’il aura une plus grande connaissance de Dieu.\",\"38\":\"Ce qui prédispose le Corps humain à être affecté selon de nombreuses modalités, ou le rend capable d’affecter les corps extérieurs selon de nombreuses modalités, est utile à l’homme, et cela d’autant plus que le Corps est par là rendu plus apte à être affecté et à affecter d’autres corps selon des modalités plus nombreuses. Est nuisible au contraire ce qui réduit cette aptitude du Corps.\",\"39\":\"Ce qui conserve le rapport de mouvement et de repos qu’ont entre elles les parties du Corps humain, est bon, mauvais ou contraire ce qui change le rapport de mouvement et de repos des parties du Corps humain.\",\"40\":\"Cela qui conduit les hommes vers la Société commune, c’est-à-dire ce qui fait que les hommes vivent dans la concorde, est utile ; mais au contraire est mauvais cela qui introduit la discorde dans la Cité\",\"41\":\"La Joie n’est pas directement mauvaise mais bonne, la Tristesse au contraire est directement mauvaise.\",\"42\":\"La Gaieté ne peut avoir d’excès et elle est toujours bonne, la Mélancolie au contraire est toujours mauvaise.\",\"43\":\"Le Plaisir peut avoir de l’excès et être mauvais ; et la Douleur peut être bonne dans la mesure où le Plaisir, autrement dit la Joie est mauvais.\",\"44\":\"L’Amour et le Désir peuvent avoir de l’excès.\",\"45\":\"La Haine ne peut jamais être bonne.\",\"46\":\"Celui qui vit sous la conduite de la Raison s’efforce, autant qu’il le peut, de compenser par l’Amour, c’est-à-dire la Générosité, les affects de Haine, de Colère, de Mépris, etc. qu’un autre a envers lui.\",\"47\":\"Les affects d’Espoir et de Crainte ne peuvent pas être bons par eux-mêmes.\",\"48\":\"Les affects de Surestime et de Mésestime sont toujours mauvais.\",\"49\":\"La Surestime rend aisément orgueilleux celui que l’on surestime.\",\"50\":\"La Pitié, chez un homme qui vit sous la conduite de la Raison, est en elle-même mauvaise et inutile.\",\"51\":\"La Faveur ne s’oppose pas à la Raison, mais peut s’accorder avec elle et naître d’elle.\",\"52\":\"La Satisfaction de soi peut naître de la Raison et seule cette Satisfaction qui naît de la Raison est la plus haute qui puisse être donnée.\",\"53\":\"L’Humilité n’est pas une vertu, c’est-à-dire qu’elle ne naît pas de la Raison.\",\"54\":\"Le Repentir n’est pas une vertu, c’est-à-dire qu’il ne naît pas de la Raison ; mais celui qui se repent de ses actes est deux fois malheureux ou impuissant.\",\"55\":\"Le plus grand Orgueil ou le plus grand Mépris de soi est la plus grande ignorance de soi.\",\"56\":\"Le plus grand Orgueil ou le plus grand Mépris de soi manifeste la plus grande impuissance de l’âme.\",\"57\":\"L’Orgueilleux aime la présence des parasites ou des flatteurs mais il hait celle des esprits généreux.\",\"58\":\"La Gloire n’est pas opposée à la Raison, mais elle peut en provenir.\",\"59\":\"Toutes les actions que nous sommes déterminés à accomplir par un affect qui est une passion, nous pouvons être déterminés à les accomplir, sans lui, par la Raison.\",\"60\":\"Un Désir, né d’une Joie ou d’une Tristesse qui se rapporte à une ou à plusieurs mais non pas à toutes les parties du Corps, ne tient pas compte de l’utilité de l’homme total.\",\"61\":\"Un Désir né de la Raison ne peut avoir d'excès.\",\"62\":\"En tant que l’Esprit conçoit les choses selon le commandement de la Raison, il est affecté de la même façon par l’idée d’une chose future ou passée, et par l’idée d’une chose présente.\",\"63\":\"Celui qui est conduit par la Crainte et accomplit le bien pour éviter le mal n’est pas conduit par la Raison.\",\"64\":\"La connaissance du mal est une connaissance inadéquate.\",\"65\":\"Sous la conduite de la Raison nous rechercherons de deux biens le plus grand, et de deux maux le moindre.\",\"66\":\"Sous la conduite de la Raison, nous poursuivrons plutôt un plus grand bien à venir qu’un moindre bien présent et un plus petit mal présent qu’un plus grand mal à venir.\",\"67\":\"L’homme libre ne pense à rien moins qu’à la mort et sa sagesse est une médiation non de la mort mais de la vie.\",\"68\":\"Si les hommes naissaient libres, et tant qu’ils seraient libres, ils ne formeraient aucun concept du bien et du mal.\",\"69\":\"La vertu de l’homme libre s’avère aussi grande à éviter les périls qu’à les surmonter.\",\"70\":\"L’homme libre qui vit parmi les ignorants s’applique, autant qu’il le peut, à éviter leurs bienfaits.\",\"71\":\"Seuls les hommes libres ont réciproquement, les uns pour les autres, la plus haute reconnaissance.\",\"72\":\"L’homme libre n’agit jamais par ruse, mais toujours avec loyauté.\",\"73\":\"L’homme qui est conduit par la Raison est plus libre dans la Cité où il vit selon le décret commun, que dans la solitude où il n’obéit qu’à lui-même.\"},\"appendix\":\"Les vérités que j’ai exposées dans cette Partie sur les justes principes de la conduite n’ont pas été agencées de telle sorte qu’on puisse les saisir d’un seul regard mais ont été démontrées selon l’ordre dispersé qui me rendait plus facile la déduction de l’une à partir de l’autre. Je me suis donc proposé de les rassembler ici et de les présenter sous forme de chapitres essentiels.\",\"demonstratio\":[{\"propositioId\":\"1\",\"demonstratioIndex\":\"1\",\"txt\":\"La fausseté consiste en la seule privation de connaissance qu’enveloppent les idées inadéquates (par la Proposition 35, Partie II), et ce pour quoi on les dit fausses n’est rien de positif (par la Proposition 33, Partie II). Si donc ce qu’a de positif une idée fausse était supprimé par la présence du vrai en tant que vrai, une idée vraie serait supprimée par elle-même, ce qui (par la Proposition 4, Partie III) est absurde. Donc, rien de ce qu’une idée fausse, etc. C.Q.F.D.\"},{\"propositioId\":\"2\",\"demonstratioIndex\":\"1\",\"txt\":\"Nous sommes définis comme passifs lorsqu’il se produit en nous quelque chose dont nous ne sommes qu’une cause partielle (par la Définition 2, Partie III), c’est-à-dire (par la Définition 1, Partie III), quelque chose qui ne peut être déduit des seules lois de notre nature. Nous sommes donc passifs en tant que nous sommes une partie de la Nature qui ne peut être conçue par elle seule, sans les autres parties. C.Q.F.D.\"},{\"propositioId\":\"3\",\"demonstratioIndex\":\"1\",\"txt\":\"Cela est évident, par l’Axiome de cette Partie. Car, si un homme est donné, quelque autre chose plus puissante, disons A, est donnée, et si A est donné, quelque autre chose plus puissante que A, disons B, est encore donnée, et ainsi de suite à l’infini ; par suite, la puissance de l’homme est limitée par celle d’une autre chose et elle est infiniment surpassée par la puissance des causes extérieures. C.Q.F.D.\"},{\"propositioId\":\"4\",\"demonstratioIndex\":\"1\",\"txt\":\"La puissance par laquelle les choses singulières, et donc l’homme, conservent leur être est la puissance même de Dieu, c’est-à-dire de la Nature (par le Corollaire de la Proposition 24, Partie I), non pas en tant qu’elle est infinie, mais en tant qu’elle peut s’expliquer par une essence humaine actuelle (par la Proposition 7, Partie III). Ainsi la puissance de l’homme, en tant qu’elle s’explique par son essence actuelle, est une partie de la puissance infinie de Dieu, ou de la Nature, c’est-à-dire (par la Proposition 34, Partie I) de son essence. Ce qui était le premier point. Ensuite, s’il était possible que l’homme ne pût subir d’autres changements que ceux qui peuvent se comprendre par la seule nature de l’homme même, il s’ensuivrait (par les Propositions 4 et 6, Partie III) qu’il ne pourrait périr mais que, au contraire, il existerait nécessairement toujours. Et cela devrait suivre d’une cause dont la puissance serait ou finie ou infinie, c’est-à-dire soit de la seule puissance de l’homme qui serait ainsi capable d’écarter de lui les autres changements pouvant provenir de causes extérieures, soit de la puissance infinie de la Nature qui dirigerait toutes les choses singulières de telle sorte que l’homme ne pût subir d’autres changements que ceux qui serviraient à sa conservation. Mais la première hypothèse est absurde (par la Proposition précédente dont la Démonstration est générale et peut être appliquée à toutes les choses singulières). Donc, s’il était possible que l’homme ne pût subir d’autres changements que ceux qui peuvent se comprendre par la seule nature de l’homme, et par conséquent (comme nous venons de le montrer) s’il était possible qu’il existât nécessairement toujours, cela devrait découler de la puissance infinie de Dieu ; et, par suite, (par la Proposition 16, Partie I) de la nécessité de la nature divine, en tant qu’elle est considérée comme étant affectée de l’idée d’un homme, devrait se déduire l’ordre entier de la Nature en tant qu’elle est conçue sous les attributs de l’Étendue et de la Pensée. Il suivrait donc de là (par la Proposition 21, Partie I) que l’homme est infini, ce qui (par la première partie de cette Démonstration) est absurde. Il est donc impossible que l’homme ne puisse subir d’autres changements que ceux dont il est la cause adéquate. C.Q.F.D.\"},{\"propositioId\":\"5\",\"demonstratioIndex\":\"1\",\"txt\":\"L’essence d’une passion ne peut s’expliquer par notre seule essence (par les Définitions 1 et 2, Partie III), c’est-à-dire que (par la Proposition 7, Partie III) la puissance d’une passion ne peut se définir par la puissance par laquelle nous nous efforçons de persévérer dans notre être, mais (comme nous l’avons montré à la Proposition 16, Partie II) elle doit nécessairement se définir par la puissance d’une cause extérieure comparée à notre puissance. C.Q.F.D.\"}]}");

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
    id: `pars${pars.toString()}-propositio${id}`,
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
  }, "h2.jsx-2763296308{font-size:24px;font-weight:500;color:#111;}p.jsx-2763296308{font-size:16px;font-weight:300;color:#333;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wZWRlbnlzL1NhbmRib3gvZXRoaWNhc3Bpbm96YS9zcmMvY29tcG9uZW50cy90ZXh0L1Byb3Bvc2l0aW8udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlCa0IsQUFHMEIsQUFLQSxlQUpDLEFBS0EsZ0JBSkwsQUFLQSxXQUpiLEFBS0EiLCJmaWxlIjoiL1VzZXJzL3BlZGVueXMvU2FuZGJveC9ldGhpY2FzcGlub3phL3NyYy9jb21wb25lbnRzL3RleHQvUHJvcG9zaXRpby50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCJcblxuY29uc3QgUHJvcG9zaXRpb1RpdGxlID0gc3R5bGVkLmgyYFxuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjMTExO1xuYFxuXG5jb25zdCBQcm9wb3NpdGlvVGV4dCA9IHN0eWxlZC5oMmBcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBjb2xvcjogIzMzMztcbmBcbmludGVyZmFjZSBQcm9wb3NpdGlvUHJvcHMge1xuICBpZDogbnVtYmVyXG4gIHBhcnM6IG51bWJlclxuICB0eHQ6IHN0cmluZ1xufVxuXG5jb25zdCBQcm9wb3NpdGlvOiBSZWFjdC5GQzxQcm9wb3NpdGlvUHJvcHM+ID0gKHsgaWQsIHBhcnMsIHR4dCB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBpZD17YHBhcnMke3BhcnMudG9TdHJpbmcoKX0tcHJvcG9zaXRpbyR7aWR9YH0+XG4gICAgICA8UHJvcG9zaXRpb1RpdGxlPlByb3Bvc2l0aW9uIHtpZH08L1Byb3Bvc2l0aW9UaXRsZT5cbiAgICAgIDxQcm9wb3NpdGlvVGV4dD57dHh0fTwvUHJvcG9zaXRpb1RleHQ+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGgyIHtcbiAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICBjb2xvcjogIzExMTtcbiAgICAgICAgfVxuICAgICAgICBwIHtcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb3Bvc2l0aW9cbiJdfQ== */\n/*@ sourceURL=/Users/pedenys/Sandbox/ethicaspinoza/src/components/text/Propositio.tsx */"));
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
/* harmony import */ var _source_FR_misrahi_parsiii_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../source/FR/misrahi/parsiii.json */ "./source/FR/misrahi/parsiii.json");
var _source_FR_misrahi_parsiii_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../source/FR/misrahi/parsiii.json */ "./source/FR/misrahi/parsiii.json", 1);
/* harmony import */ var _components_text_Propositio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/text/Propositio */ "./src/components/text/Propositio.tsx");
/* harmony import */ var _components_text_Demonstratio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/text/Demonstratio */ "./src/components/text/Demonstratio.tsx");
var _jsxFileName = "/Users/pedenys/Sandbox/ethicaspinoza/src/pages/parsiii.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const ParsIII = () => {
  const getDemonstratioArray = i => {
    return _source_FR_misrahi_parsiii_json__WEBPACK_IMPORTED_MODULE_1__.demonstratio.reduce((arrayOfTxt, dem) => {
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
      lineNumber: 17,
      columnNumber: 5
    }
  }, Array.from({
    length: 73
  }).map((item, index) => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_text_Propositio__WEBPACK_IMPORTED_MODULE_2__["default"], {
    id: index + 1,
    pars: 3,
    txt: _source_FR_misrahi_parsiii_json__WEBPACK_IMPORTED_MODULE_1__.propositio[index + 1],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 11
    }
  }), getDemonstratioArray(index + 1).map(txt => __jsx(_components_text_Demonstratio__WEBPACK_IMPORTED_MODULE_3__["default"], {
    txt: txt,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (ParsIII);

/***/ }),

/***/ 4:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdGV4dC9EZW1vbnN0cmF0aW8udHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3RleHQvUHJvcG9zaXRpby50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL3BhcnNpaWkudHN4Iiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtanN4L3N0eWxlXCIiXSwibmFtZXMiOlsiRGVtb25zdHJhdGlvIiwidHh0IiwiUHJvcG9zaXRpb1RpdGxlIiwic3R5bGVkIiwiaDIiLCJQcm9wb3NpdGlvVGV4dCIsIlByb3Bvc2l0aW8iLCJpZCIsInBhcnMiLCJ0b1N0cmluZyIsIlBhcnNJSUkiLCJnZXREZW1vbnN0cmF0aW9BcnJheSIsImkiLCJqc29uIiwiZGVtb25zdHJhdGlvIiwicmVkdWNlIiwiYXJyYXlPZlR4dCIsImRlbSIsInByb3Bvc2l0aW9JZCIsInB1c2giLCJBcnJheSIsImZyb20iLCJsZW5ndGgiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJwcm9wb3NpdGlvIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTs7QUFFQSxNQUFNQSxZQUFZLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBYTtBQUNoQyxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFJQSxHQUFKLENBRkY7QUFBQTtBQUFBO0FBQUEsMnhDQURGO0FBcUJELENBdEJEOztBQXdCZUQsMkVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFCQTtBQUNBO0FBRUEsTUFBTUUsZUFBZSxHQUFHQyx3REFBTSxDQUFDQyxFQUFWO0FBQUE7QUFBQTtBQUFBLGtEQUFyQjtBQU1BLE1BQU1DLGNBQWMsR0FBR0Ysd0RBQU0sQ0FBQ0MsRUFBVjtBQUFBO0FBQUE7QUFBQSxrREFBcEI7O0FBV0EsTUFBTUUsVUFBcUMsR0FBRyxDQUFDO0FBQUVDLElBQUY7QUFBTUMsTUFBTjtBQUFZUDtBQUFaLENBQUQsS0FBdUI7QUFDbkUsU0FDRTtBQUFLLE1BQUUsRUFBRyxPQUFNTyxJQUFJLENBQUNDLFFBQUwsRUFBZ0IsY0FBYUYsRUFBRyxFQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBOEJBLEVBQTlCLENBREYsRUFFRSxNQUFDLGNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFpQk4sR0FBakIsQ0FGRjtBQUFBO0FBQUE7QUFBQSxxekRBREY7QUFrQkQsQ0FuQkQ7O0FBcUJlSyx5RUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6Q0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUksT0FBTyxHQUFHLE1BQU07QUFDcEIsUUFBTUMsb0JBQW9CLEdBQUlDLENBQUQsSUFBZTtBQUMxQyxXQUFPQyw0REFBSSxDQUFDQyxZQUFMLENBQWtCQyxNQUFsQixDQUF3QyxDQUFDQyxVQUFELEVBQWFDLEdBQWIsS0FBcUI7QUFDbEUsVUFBSUEsR0FBRyxDQUFDQyxZQUFKLEtBQXFCTixDQUFDLENBQUNILFFBQUYsRUFBekIsRUFBdUM7QUFDckNPLGtCQUFVLENBQUNHLElBQVgsQ0FBZ0JGLEdBQUcsQ0FBQ2hCLEdBQXBCO0FBQ0Q7O0FBQ0QsYUFBT2UsVUFBUDtBQUNELEtBTE0sRUFLSixFQUxJLENBQVA7QUFNRCxHQVBEOztBQVNBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHSSxLQUFLLENBQUNDLElBQU4sQ0FBVztBQUFFQyxVQUFNLEVBQUU7QUFBVixHQUFYLEVBQTJCQyxHQUEzQixDQUErQixDQUFDQyxJQUFELEVBQU9DLEtBQVAsS0FDOUIsbUVBQ0UsTUFBQyxtRUFBRDtBQUNFLE1BQUUsRUFBRUEsS0FBSyxHQUFHLENBRGQ7QUFFRSxRQUFJLEVBQUUsQ0FGUjtBQUdFLE9BQUcsRUFBRVosNERBQUksQ0FBQ2EsVUFBTCxDQUFnQkQsS0FBSyxHQUFHLENBQXhCLENBSFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBTUdkLG9CQUFvQixDQUFDYyxLQUFLLEdBQUcsQ0FBVCxDQUFwQixDQUFnQ0YsR0FBaEMsQ0FBcUN0QixHQUFELElBQ25DLE1BQUMscUVBQUQ7QUFBYyxPQUFHLEVBQUVBLEdBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERCxDQU5ILENBREQsQ0FESCxDQURGO0FBZ0JELENBMUJEOztBQTRCZVMsc0VBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQ0Esa0M7Ozs7Ozs7Ozs7O0FDQUEsOEM7Ozs7Ozs7Ozs7O0FDQUEsNkMiLCJmaWxlIjoic3RhdGljL2RldmVsb3BtZW50L3BhZ2VzL3BhcnNpaWkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNCk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcblxuY29uc3QgRGVtb25zdHJhdGlvID0gKHsgdHh0IH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgzPkTDqW1vbnN0cmF0aW9uPC9oMz5cbiAgICAgIDxwPnt0eHR9PC9wPlxuXG4gICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YFxuICAgICAgICAgIGgzIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgICAgICB9XG4gICAgICAgICAgcCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgICAgY29sb3I6ICM1NTU7XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBEZW1vbnN0cmF0aW9cbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIlxuXG5jb25zdCBQcm9wb3NpdGlvVGl0bGUgPSBzdHlsZWQuaDJgXG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICMxMTE7XG5gXG5cbmNvbnN0IFByb3Bvc2l0aW9UZXh0ID0gc3R5bGVkLmgyYFxuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGNvbG9yOiAjMzMzO1xuYFxuaW50ZXJmYWNlIFByb3Bvc2l0aW9Qcm9wcyB7XG4gIGlkOiBudW1iZXJcbiAgcGFyczogbnVtYmVyXG4gIHR4dDogc3RyaW5nXG59XG5cbmNvbnN0IFByb3Bvc2l0aW86IFJlYWN0LkZDPFByb3Bvc2l0aW9Qcm9wcz4gPSAoeyBpZCwgcGFycywgdHh0IH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGlkPXtgcGFycyR7cGFycy50b1N0cmluZygpfS1wcm9wb3NpdGlvJHtpZH1gfT5cbiAgICAgIDxQcm9wb3NpdGlvVGl0bGU+UHJvcG9zaXRpb24ge2lkfTwvUHJvcG9zaXRpb1RpdGxlPlxuICAgICAgPFByb3Bvc2l0aW9UZXh0Pnt0eHR9PC9Qcm9wb3NpdGlvVGV4dD5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgaDIge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgIGNvbG9yOiAjMTExO1xuICAgICAgICB9XG4gICAgICAgIHAge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvcG9zaXRpb1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQganNvbiBmcm9tIFwiLi4vLi4vc291cmNlL0ZSL21pc3JhaGkvcGFyc2lpaS5qc29uXCJcbmltcG9ydCBQcm9wb3NpdGlvIGZyb20gXCIuLi9jb21wb25lbnRzL3RleHQvUHJvcG9zaXRpb1wiXG5pbXBvcnQgRGVtb25zdHJhdGlvIGZyb20gXCIuLi9jb21wb25lbnRzL3RleHQvRGVtb25zdHJhdGlvXCJcblxuY29uc3QgUGFyc0lJSSA9ICgpID0+IHtcbiAgY29uc3QgZ2V0RGVtb25zdHJhdGlvQXJyYXkgPSAoaTogbnVtYmVyKSA9PiB7XG4gICAgcmV0dXJuIGpzb24uZGVtb25zdHJhdGlvLnJlZHVjZTxBcnJheTxzdHJpbmc+PigoYXJyYXlPZlR4dCwgZGVtKSA9PiB7XG4gICAgICBpZiAoZGVtLnByb3Bvc2l0aW9JZCA9PT0gaS50b1N0cmluZygpKSB7XG4gICAgICAgIGFycmF5T2ZUeHQucHVzaChkZW0udHh0KVxuICAgICAgfVxuICAgICAgcmV0dXJuIGFycmF5T2ZUeHRcbiAgICB9LCBbXSlcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIHtBcnJheS5mcm9tKHsgbGVuZ3RoOiA3MyB9KS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPFByb3Bvc2l0aW9cbiAgICAgICAgICAgIGlkPXtpbmRleCArIDF9XG4gICAgICAgICAgICBwYXJzPXszfVxuICAgICAgICAgICAgdHh0PXtqc29uLnByb3Bvc2l0aW9baW5kZXggKyAxXX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIHtnZXREZW1vbnN0cmF0aW9BcnJheShpbmRleCArIDEpLm1hcCgodHh0KSA9PiAoXG4gICAgICAgICAgICA8RGVtb25zdHJhdGlvIHR4dD17dHh0fSAvPlxuICAgICAgICAgICkpfVxuICAgICAgICA8Lz5cbiAgICAgICkpfVxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBhcnNJSUlcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1qc3gvc3R5bGVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==