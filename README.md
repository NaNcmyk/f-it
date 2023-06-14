# 🫰 F-It.
### _High-Intensity Interval Training for Programmers_

<br>

🎶 *When your day is long*  
*And the night, the night is yours alone*  
*When you're sure you've had enough*  
*Of* **[^insert name of project]**, *well hang on*  

*Don't let yourself go*  
*Cause everybody cries*  
*[Everybody hurts](https://youtu.be/FfggUztyO00) sometimes* 🎵

<br>

This is the at-home physical therapy and meditation retreat (all rolled into one!) you never knew you needed 😉. Ever wish you could just snap your fingers and all the pesky bugs 🐛🪲 in your code would ✨*whoosh*✨, just like that, vanish into thin air? 🤨🤞 Problem solved! Dear programming friends, the solution is right at your fingertips. Literally. To get that SaaS in your snap, you just need more finger strength 💪. (Some knowledge of [American Sign Language](https://www.nidcd.nih.gov/health/american-sign-language) is helpful, but not required.)

_Disclaimer: The information provided herein should not be used for diagnosing or treating a health problem or disease. Always seek the advice of a qualified IT professional or a more experienced software engineer regarding bug-infested code--not to be confused with the creepy-crawly variety. Otherwise, consult Pest Control._

### 💻 **TECH STACK**
HTML, CSS, Javascript

Key JS Topics:  
✅ `keydown` events  
✅ `setTimeOut`  
✅ `setInterval`  
✅ the `DOM`

---

### **RULES OF ENGAGEMENT**

*F-it* is a [CrossFit](https://www.crossfit.com/what-is-crossfit/)-inspired finger workout, using American Sign Language (ASL). Live demo the app [here](https://f-it-rouge.vercel.app/).

Good luck. You got this ⌨️💪.

<br>

#### 💪 **LEVEL 1**
If you do not know the ABC's of ASL, this foundation class is designed for you. Experienced signers, feel free to use this as a warm-up.  

⚠️ *You'll need your keyboard for this, touchscreen users.*

#### 💪 **LEVEL 2**
Once you have mastered the fundamentals, you can move on to SPELLING in ASL. You'll be completing your sets ([time under tension](https://www.healthline.com/health/exercise-fitness/time-under-tension)) while...*timed under tension*. Don't uhhh...F-it up.  

+ **AMRAP** (as many reps as possible) - Test how many times you can fingerspell a single word within the alloted 20,000-millisecond (20-second) timeframe. Timer starts as soon as the page loads--no time to lose! (If you get caught off guard--no worries. Wait for the next word to pop up on screen. The exercise changes every 20 seconds.)
+ **EMOM** (every minute on the minute) - You'll be presented with a set of 12 fingerspelling exercises to complete for one minute, at intervals of five seconds per word. Words are selected at random. The one-minute timer starts as soon as you hit the *start* button. The EMOM has no set duration. We recommend repeating each one-minute block [3-5 times](https://twitter.com/hubermanlab/status/1553501345084166144?lang=en) to really build up that muscle memory.

#### 💪 **LEVEL 3**
For fluent ASL signers only. Think: karaoke, but...for your fingers. Can you keep up?! No singing 🚫🎤 required unless...you really want to.

<br>

Once you've completed all three levels, congratulations, you now possess the pow-pow-POWERRR to 💥A for *annihilate*💥, 💥B for *banish*💥, 💥C for *crush*💥... alllll the bugs in your code with the tap of your *fit AF* fingers 🥳🎉🎊.

Otherwise, if not, take a breather. Get some fresh air. Eat some good food. Sleep well, tomorrow is a new day 🌞.

<img src="tomorrow.gif" alt="It's OK" width="40%">

---
### **TECHNICAL DETAILS**

📁 Root directory:
1. 4 *.html* files:
    + *index.html* - this is the homepage
    + *level1.html*
    + *level2.html*
    + *level3.html*
2. _README.md_ & _tomorrow.gif_ (from [GIPHY](https://giphy.com/gifs/tomorrow-mFz5kzbDKtwha) by [Memes](https://memes.com/), used in _README.md_)

<br>

📁 Subdirectories (3 subfolders):
1. 📂 *assets* (one subfolder + 4 image files):  
   + 📂 *alphabet* folder (26 *svg* files, one for each ASL alphabet) - All are from [Wikimedia Commons](https://commons.wikimedia.org/wiki/Fingerspelling) by [WPClipart](https://www.wpclipart.com/sign_language/American_ABCs/index.html).  
   + *binary_swirl.png* - from [Pixabay](https://pixabay.com/vectors/binary-random-numbers-digital-ones-1254482/) by [GDJ](https://pixabay.com/users/gdj-1086657/)  
   + logos (*logo32.png* & *logo256.png*) - both from [Flaticon](https://www.flaticon.com/free-icon/easy-to-use_4456893) by [Freepik](https://www.flaticon.com/authors/freepik)  
   + *power-finger.gif* - from [GIPHY](https://giphy.com/gifs/money-twitter-tweet-3IUZ9PpKfTEUQNb4od) by [Antony Hare](https://giphy.com/antonyhare/)

<br>

2. 📂 *scripts* (6 *.js* files): 
   + *alphabet.js* - used by *level1.html* 
      + Listens for `keydown` events, and changes the page's content according to event key (i.e., the keyboard key that corresponds to one of the 26 letters of the alphabet).
      + The `Popover.js` & `bootstrap.min.js` scripts are also included in *level1.html* to use Bootstrap's tooltips. Each tooltip contains the corresponding letter to each displayed ASL alphabet image, on hover over the image.  
   + *copyright.js* - used by all 4 *.html* files
      + Programmatically generates the copyright year and footer text.   
   + *speller.js* - used by *level2.html*  
   + *swirl.js* - used by *index.html*
      + Controls the swirl animation when homepage loads.   
   + *video.js* - used by *level3.html*  
   + *yellow.js* - used by all 4 *.html* files

<br>

3. 📂 *stylesheets* (5 *.css* files):  
    + *styles.css* - general stylesheet used by all 4 *.html* files
    + *index.css* - used by *index.html*
    + *level1.css* - used by *level1.html*
    + *level2.css* - used by *level2.html*
      + *start* button is styled with Bootstrap.
    + *level3.css* - used by *level3.html*
      + *watch live demo* buttons are styled with Bootstrap.