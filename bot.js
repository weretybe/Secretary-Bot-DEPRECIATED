const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`I am ready!`);
});

client.on('message', msg => {
  //Simple 1 to 1 responses
  if (msg.content === '!airhorn') {
    msg.channel.send('BRRRR BURR BURR BURR BURRRRRR'); }
  if (msg.content === '!bot') {
    msg.channel.send('I am listening and taking notes'); }
  if (msg.content === '!commands') {
    msg.channel.send('Right now I know airhorn, bot, and maps, and quotelist.');  }     
  if (msg.content === '!quotelist') {
    msg.channel.send('Currently, here are the prefixes for the ![prefix]quote command and the number of quotes for each. Note: all commands for the bot have to be in lower case: **ty** (7 - cougar, pants, rarity, furries, otter, spider, king), **chris** (3 - whales, bones, hawks), **npc** (5), **scott** (3 - macgyver, dragon, cuck), **kristyn** (6 - ass, puppet, king, hedgehog, santa, cougar), **eth** (2 - spider, housecats), **austin** (6 - tacos, possum, volcanoes, magic, funeral, coke), **thunder** (2 - blind, paintball), **devan** (5 - pony, gas, tasteful, genocide, neko), **jake** (4 - avatar, cheese, believe, baby), **megan** (1), **beth** (1). '); } 
  if (msg.content === '!maps') {
    msg.channel.send('I have guided maps for !houston and !nola'); }  
  if (msg.content === '!houston') {
    msg.channel.send('https://drive.google.com/open?id=1Jo_qj2kzXdzza1N-iLxHO5IIWJM'); }   
  if (msg.content === '!nola') {
    msg.channel.send('https://drive.google.com/open?id=174k_24ILN6YkEWdVbTO4x6uGDW2HFRw8'); } 
  
    //Quotes        
  if (msg.content === '!tyquote') {
    msg.channel.send(tyquote()); }       
  if (msg.content === '!chrisquote') {
    msg.channel.send(chrisjquote()); }    
  if (msg.content === '!npcquote') {
    msg.channel.send(npcquote()); }
  if (msg.content === '!scottquote') {
    msg.channel.send(scottquote()); }
  if (msg.content === '!kristynquote') {
    msg.channel.send(kristynquote()); }
  if (msg.content === '!ethquote') {
    msg.channel.send(ethquote()); }   
  if (msg.content === '!austinquote') {
    msg.channel.send(austinquote()); }  
  if (msg.content === '!thunderquote') {
    msg.channel.send(thunderquote()); }  
  if (msg.content === '!devanquote') {
    msg.channel.send(devanquote()); }  
  if (msg.content === '!jakequote') {
      msg.channel.send(jakequote()); }    
  if (msg.content === '!meganquote') {
    msg.channel.send("'**Boobies**, and you can quote me on that' - Megan Vasquez, 2019"); }
   if (msg.content === '!bethquote') {
    msg.channel.send("'If you cum even a single **bee** inside a girl, you are never going to fuck her again' - Beth DeLeon, 2018"); } 

  if (msg.content === '!tyquote pants') {
    msg.channel.send("'You can't naked dat butt with **pants** on.' - Ty Oden, 2017"); }  
  if (msg.content === '!tyquote rarity') {
    msg.channel.send("'If we talking about best fashonista and you are talking some other filly's name besides **Rarity** you need to spit that trash out of your dick catcher you ignorant fuckass.' - Ty Oden, 2017"); }  
  if (msg.content === '!tyquote furries') {
    msg.channel.send("'**Furries** are the blackface of dogs' - Ty Oden, 2018"); }  
  if (msg.content === '!tyquote otter') {
    msg.channel.send("'This **otter** is stupid thicc and the Monteray Bay Aquarium should not have to apoligize for fat shaming their own otter.' - Ty Oden, 2019"); }  
  if (msg.content === '!tyquote spider') {
    msg.channel.send("'That's how you get eaten by a big **spider** disguised as a sexy person' - Ty Oden, 2020"); }  
  if (msg.content === '!tyquote king') {
    msg.channel.send("'Don't let any 5-year age gap or bounce house dominatrix get you down. You're a **King**.' - Ty Oden, 2020"); }  	
 if (msg.content === '!tyquote cougar') {
    msg.channel.send("'New! From the creators of paper>rock>scissors, it's **cougar**>20 something>student debt.' - Ty Oden, 2020"); }
  
  if (msg.content === '!chrisquote whales') {
    msg.channel.send("'I think we need to purge the **whales**' - Chris Johnson, 2017"); } 
  if (msg.content === '!chrisquote hawks') {
    msg.channel.send("'You have the **hawks** of an eagle.' - Chris Johnson, 2014"); } 
  if (msg.content === '!chrisquote bones') {
    msg.channel.send("*After vomiting 'Oh that drink.. Oof my **bones**' - Chris Johnson, aproximately 8 seconds into 2019."); } 	

  if (msg.content === '!scottquote macgyver') {
    msg.channel.send("'I'm going to **MacGyver** my dick into my own ass!' -Scott Gilfoil, 2017"); } 	
  if (msg.content === '!scottquote dragon') {
    msg.channel.send("'[That] is literally my only utility in a world where Devan is a **dragon**' - Scott Gilfoil on Dragon Fucking, 2018"); } 	
  if (msg.content === '!scottquote cuck') {
    msg.channel.send("'Is it possible to **cuck** yourself?' - Scoott Gilfoot, 2018"); } 		

  if (msg.content === '!kristynquote puppet') {
    msg.channel.send("'It's basically like ass-to-mouthing a **puppet**, but yelling while you do it so that your words come out of its mouth' - Kristyn Fusco 2017"); } 
  if (msg.content === '!kristynquote king') {
    msg.channel.send("''Financially assault me, **King**-Daddy' - Ty Oden' - Kristyn Fusco, 2019"); } 
  if (msg.content === '!kristynquote santa') {
    msg.channel.send("'I mean, fuck. If I could hoodwink a **Santa** into sugar-daddying me a DIAMOND MINE, I'd be jingling those bells all the way to the BANK!' - Kristyn Fusco, noted Santa Fetishist, 2018"); } 
  if (msg.content === '!kristynquote hedgehog') {
    msg.channel.send("'Why can't an anthropomorphic **hedgehog** pull a Marilyn Manson in the privacy of in front of his own personal webcam?' - Kristyn Fusco, 2017"); } 
  if (msg.content === '!kristynquote cougar') {
    msg.channel.send("'I could totally top a **cougar**.' - Kristyn Oden, 2020"); }
  
  if (msg.content === '!austinquote possum') {
    msg.channel.send("'**Possum** blood is high in alcohol content. Trust me; I'm a scientist' - Austin McDaniel, 2017"); } 	
  if (msg.content === '!austinquote magic') {
    msg.channel.send("'I will mansplain the shit outta **magic** to you' - Austin McDaniel, 2018"); } 	
  if (msg.content === '!austinquote funeral') {
    msg.channel.send("'I also want a compilation of every pinned quote I've ever earned read out by whomever is presiding over my **funeral**.' - Austin McDaniel, 2019"); } 	
  if (msg.content === '!austinquote volcanoes') {
    msg.channel.send("'I don't think **volcanoes**... cum' - Austin McDaniel, 2019"); } 	
  if (msg.content === '!austinquote coke') {
    msg.channel.send("'Only thing worse than a coke dealer, is a **coke** dealer who refuses to go green' - Austin McDaniel, 2020"); } 	
  if (msg.content === '!austinquote tacos') {
    msg.channel.send("'**Tacos** are the devil's work'-Austin McDaniel, Sandwich Purist, 2020"); }
  
  if (msg.content === '!thunderquote blind') {
    msg.channel.send("'If a level 1 **blind** man showed up at our door I would kick his ass up and down that street' - Thunder O'Brien 2017"); }  
  if (msg.content === '!thunderquote paintball') {
    msg.channel.send("'If we are ever on Queer Eye playing **paintball** I'm going to shoot the goddamn cameraman' - Thunder O'Brien 2018"); }  

  if (msg.content === '!devanquote pony') {
    msg.channel.send("'Now hang on just a darn toot'in minute. How the floppy fuck can someone be anti-**pony**?' - Devan Horn, 2017"); }  
  if (msg.content === '!devanquote gas') {
    msg.channel.send("'[Jake], did you dick the **gas** outta my car?!?' - Devan Horn, 2020"); }  
  if (msg.content === '!devanquote tasteful') {
    msg.channel.send("'There's one or two rapes, but they're **tasteful**' - Devan Horn, 2018"); }  
  if (msg.content === '!devanquote genocide') {
    msg.channel.send("'In all honesty it was a really fair and rational **genocide**' - Devan Horn, 2018"); }  
  if (msg.content === '!devanquote neko') {
    msg.channel.send("'All **neko** genitalia are valid!' - Devan Horn, 2020"); }  

  if (msg.content === '!jakequote cheese') {
    msg.channel.send("'If your vag is stuffed with **cheese** no man mayo is getting in' - Jake, 2020"); }  
  if (msg.content === '!jakequote believe') {
    msg.channel.send("'I **believe** in your testicles, Troy' - Jake, 2019"); }  
  if (msg.content === '!jakequote baby') {
    msg.channel.send("'Oooo **baby**. I just wanna lay ya down a platonically watch a movie together so bad.' - Jake, 2020"); } 
  if (msg.content === '!jakequote avatar') {
    msg.channel.send("'Now the **avatar** must master the 4 elements; Gun, Bear, Man, and Woman' - Jake, 2020"); }
  
  if (msg.content === '!ethquote spider') {
    msg.channel.send("'I was supposed to get **spider** powers. This sucks!' - John Etheridge, 2017"); }  
  if (msg.content === '!ethquote housecats') {
    msg.channel.send("'The 40 hour work week was invented by **housecats** trying to get their humans out of the house for most of the day.' - John Ethridge, 2020"); }  
});

//Quote Funtions
function tyquote() {
  var values = ["'You can't naked dat butt with **pants** on.' - Ty Oden, 2017","'New! From the creators of paper>rock>scissors, it's **cougar**>20 something>student debt.' - Ty Oden, 2020","'If we talking about best fashonista and you are talking some other filly's name besides Rarity you need to spit that trash out of your dick catcher you ignorant fuckass.' - Ty Oden, 2017","'**Furries** are the blackface of dogs' - Ty Oden, 2018","'This **otter** is stupid thicc and the Monteray Bay Aquarium should not have to apoligize for fat shaming their own otter.' - Ty Oden, 2019","'That's how you get eaten by a big **spider** disguised as a sexy person' - Ty Oden, 2020","'Don't let any 5-year age gap or bounce house dominatrix get you down. You're a **King**.' - Ty Oden, 2020"],
      valueToUse = values[Math.floor(Math.random() * values.length)]
  return(valueToUse) }
function chrisjquote() {
    var values = ["'I think we need to purge the **whales**' - Chris Johnson, 2017","'You have the **hawks** of an eagle.' - Chris Johnson, 2014","*After vomiting 'Oh that drink.. Oof my **bones**' - Chris Johnson, aproximately 8 seconds into 2019."],
        valueToUse = values[Math.floor(Math.random() * values.length)]
    return(valueToUse) }
function npcquote() {
    var values = ["'Sir, do you know what month it is?' - Officer Colin, 2017","'For the love of god, stay away from the Dip'N'Dots!' - JR, 2020","'Your legs are like your eyes on the ground' - Amanda, 2018","'Did I just get cucked by God?!' -Ryan, 2017","'Im not nice... I am a death eater. I love Azkaban. There will be no joy here.' - Kelly, 2018"],
        valueToUse = values[Math.floor(Math.random() * values.length)]
    return(valueToUse) }
function scottquote() {
    var values = ["'I'm going to **MacGyver** my dick into my own ass!' -Scott Gilfoil, 2017","'[That] is literally my only utility in a world where Devan is a **dragon**' - Scott Gilfoil on Dragon Fucking, 2018","'Is it possible to **cuck** yourself?' - Scoott Gilfoot, 2018"]
        valueToUse = values[Math.floor(Math.random() * values.length)]
    return(valueToUse) }
function kristynquote() {
  var values = ["'Dev just likes it when I use my **ass** for evil.' - Kristyn Oden, 2020","'It's basically like ass-to-mouthing a **puppet**, but yelling while you do it so that your words come out of its mouth' - Kristyn Fusco 2017","''Financially assault me, **King**-Daddy' - Ty Oden' - Kristyn Oden, 2019","'I mean, fuck. If I could hoodwink a **Santa** into sugar-daddying me a DIAMOND MINE, I'd be jingling those bells all the way to the BANK!' - Kristyn Fusco, noted Santa Fetishist, 2018","'Why can't an anthropomorphic **hedgehog** pull a Marilyn Manson in the privacy of in front of his own personal webcam?' - Kristyn Fusco, 2017","'I could totally top a **cougar**.' - Kristyn Oden, 2020"],
        valueToUse = values[Math.floor(Math.random() * values.length)]
    return(valueToUse) }
function ethquote() {
    var values = ["'I was supposed to get **spider** powers. This sucks!' - John Etheridge, 2017","'The 40 hour work week was invented by **housecats** trying to get their humans out of the house for most of the day.' - John Ethridge, 2020"]
        valueToUse = values[Math.floor(Math.random() * values.length)]
    return(valueToUse) }  
function austinquote() {
    var values = ["'**Tacos** are the devil's work'-Austin McDaniel, Sandwich Purist, 2020","'**Possum** blood is high in alcohol content. Trust me; I'm a scientist' - Austin McDaniel, 2017","'I will mansplain the shit outta **magic** to you' - Austin McDaniel, 2018","'I also want a compilation of every pinned quote I've ever earned read out by whomever is presiding over my **funeral**.' - Austin McDaniel, 2019","'I don't think **volcanoes**... cum' - Austin McDaniel, 2019","'Only thing worse than a coke dealer, is a **coke** dealer who refuses to go green' - Austin McDaniel, 2020"]
        valueToUse = values[Math.floor(Math.random() * values.length)]
    return(valueToUse) }  
function thunderquote() {
    var values = ["'If a level 1 **blind** man showed up at our door I would kick his ass up and down that street' - Thunder O'Brien 2017","'If we are ever on Queer Eye playing **paintball** I'm going to shoot the goddamn cameraman' - Thunder O'Brien 2018"]
        valueToUse = values[Math.floor(Math.random() * values.length)]
    return(valueToUse) }  
function devanquote() {
    var values = ["'Now hang on just a darn toot'in minute. How the floppy fuck can someone be anti-**pony**?' - Devan Horn, 2017","'[Jake], did you dick the **gas** outta my car?!?' - Devan Horn, 2020","'There's one or two rapes, but they're **tasteful**' - Devan Horn, 2018","'In all honesty it was a really fair and rational **genocide**' - Devan Horn, 2018","'All **neko** genitalia are valid!' - Devan Horn, 2020"]
        valueToUse = values[Math.floor(Math.random() * values.length)]
    return(valueToUse) }
function jakequote() {
    var values = ["'If your vag is stuffed with **cheese** no man mayo is getting in' - Jake, 2020","'I **believe** in your testicles, Troy' - Jake, 2019","'Oooo **baby**. I just wanna lay ya down a platonically watch a movie together so bad.' - Jake, 2020","'Now the **avatar** must master the 4 elements; Gun, Bear, Man, and Woman' - Jake, 2020"]
        valueToUse = values[Math.floor(Math.random() * values.length)]
    return(valueToUse) }     

client.login(process.env.BOT_TOKEN);
