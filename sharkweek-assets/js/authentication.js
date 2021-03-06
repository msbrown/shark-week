// User Authentication
function authenticateUser(chosenProvider) {
	switch(chosenProvider)
    {
      case "Twitter":
        provider = new firebase.auth.TwitterAuthProvider();
      break;
      case "Facebook":
        provider = new firebase.auth.FacebookAuthProvider();
        provider.addScope('public_profile');
      break;
      case "Google":
        provider = new firebase.auth.GoogleAuthProvider();
      break;
    }

    firebase.auth().signInWithRedirect(provider);
}

// Give the user an option to sign out
function authenticateSignOut() {
	firebase.auth().signOut().then(function() {
	  // Sign-out successful.
	  displayName = "";
	  uid = "";
	}, function(error) {
	  // An error happened.
	});
}

// Display Name Parser
function cleanDisplayName(name) {

	// Good Words
	var goodWords = ["elections","vote","ballot","integrity"];
	var badWords = ["2g1c","2girls1cup","acrotomophilia","anal","anilingus","anus","arsehole","ass","asshole","assmunch","autoerotic","autoerotic","babeland","babybatter","ballgag","ballgravy","ballkicking","balllicking","ballsack","ballsucking","bangbros","bareback","barelylegal","barenaked","bastardo","bastinado","bbw","bdsm","beavercleaver","beaverlips","bestiality","bicurious","bigblack","bigbreasts","bigknockers","bigtits","bimbos","birdlock","bitch","blackcock","blondeaction","blondeonblondeaction","blowj","blowyourl","bluewaffle","blumpkin","bollocks","bondage","boner","boob","boobs","bootycall","brownshowers","brunetteaction","bukkake","bulldyke","bulletvibe","bunghole","bunghole","busty","butt","buttcheeks","butthole","cameltoe","camgirl","camslut","camwhore","carpetmuncher","carpetmuncher","chocolaterosebuds","circlejerk","clevelandsteamer","clit","clitoris","cloverclamps","clusterfuck","cock","cocks","coprolagnia","coprophilia","cornhole","cum","cumming","cunnilingus","cunt","darkie","daterape","daterape","deepthroat","deepthroat","dick","dildo","dirtypillows","dirtysanchez","dogstyle","doggiestyle","doggiestyle","doggystyle","doggystyle","dolcett","domination","dominatrix","dommes","donkeypunch","doubledong","doublepenetration","dpaction","eatmyass","ecchi","ejaculation","erotic","erotism","escort","ethicalslut","eunuch","faggot","fecal","felch","fellatio","feltch","femalesquirting","femdom","figging","fingering","fisting","footfetish","footjob","frotting","fuck","fuckbuttons","fudgepacker","fudgepacker","futanari","g-spot","gangbang","gaysex","genitals","giantcock","girlon","girlontop","girlsgonewild","goatcx","goatse","gokkun","goldenshower","googirl","goodpoop","goregasm","grope","groupsex","guro","handjob","handjob","hardcore","hardcore","hentai","hoe","homoerotic","honkey","hooker","hotchick","howtokill","howtomurder","hugefat","humping","incest","intercourse","jackoff","jailbait","jailbait","jerkoff","jigaboo","jiggaboo","jiggerboo","jizz","juggs","kike","kinbaku","kinkster","kinky","knobbing","leatherrestraint","leatherstraightjacket","lemonparty","lolita","lovemaking","makemecome","malesquirting","masturbate","menageatrois","milf","missionaryposition","motherfucker","moundofvenus","mrhands","muffdiver","muffdiving","nambla","nawashi","negro","neonazi","nignog","nigga","nigger","nimphomania","nipple","nipples","nsfwimages","nude","nudity","nympho","nymphomania","octopussy","omorashi","onecuptwogirls","oneguyonejar","orgasm","orgy","paedophile","panties","panty","pedobear","pedophile","pegging","penis","phonesex","pieceofshit","pisspig","pissing","pisspig","playboy","pleasurechest","polesmoker","ponyplay","poof","poopchute","poopchute","porn","porno","pornography","princealbertpiercing","pthc","pubes","pussy","queef","raghead","ragingboner","rape","raping","rapist","rectum","reversecowgirl","rimjob","rimming","rosypalm","rosypalmandher5sisters","rustytrombone","s&m","sadism","scat","schlong","scissoring","semen","sex","sexo","sexy","shavedbeaver","shavedpussy","shemale","shibari","shit","shota","shrimping","slanteye","slut","smut","snatch","snowballing","sodomize","sodomy","spic","spooge","spreadlegs","strapon","strapon","strappado","stripclub","styledoggy","suck","sucks","suicidegirls","sultrywomen","swastika","swinger","taintedlove","tastemy","teabagging","threesome","throating","tiedup","tightwhite","tit","tits","titties","titty","tongueina","topless","tosser","towelhead","tranny","tribadism","tubgirl","tubgirl","tushy","twat","twink","twinkie","twogirlsonecup","undressing","upskirt","urethraplay","urophilia","vagina","venusmound","vibrator","violetwand","vorarephilia","voyeur","vulva","wank","wetdream","wetback","whitepower","womenrapping","wrappingmen","wrinkledstarfish","xx","xxx","yaoi","yellowshowers","yiffy","zoophilia"];

	$.each(badWords, function(key,badword) {
		var re = new RegExp(badword,"gi");
		name = name.replace(re, function(matched){
			var key = Math.floor(Math.random() * goodWords.length);
			return goodWords[key];
		});
	});

	var fullName = name.split(/\s+/);
	var count = fullName.length;
	var firstName = fullName[0];
	var lastName = fullName[1];
	var cleanedName = "";

	// If we have a first & last name
	if(count > 1) {
		cleanedName = firstName+" "+lastName.charAt(0).toUpperCase();
	}
	else {
		cleanedName = firstName;
	}
	return cleanedName;
}