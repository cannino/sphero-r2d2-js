// offset is the time which the intro ends at 1:25; also when you should start this program
const offset = 1 * 60000 + 24900

async function startProgram() {	
	calibrate()
	setupReactions()
	
	await setStance(Stance.Bipod)
	domePlay(Sound.R2D2.Chatty.Chatty47)
	
	await delay(50 * 60) // complete program after 50 minutes; delay() function's unit of measurement is seconds
}

/**
 * You should here this at 1:34 when the sandcruisers loop around the 
 * circular building
 */
function calibrate() {
	setTimeout(play.bind(null, Sound.R2D2.Chatty.Chatty15), toMillis(1, 34000))
	setTimeout(play.bind(null, Sound.R2D2.Chatty.Chatty15), toMillis(1, 35100))
}

function setupReactions() {
	// play.bind is used to create a new function with the argument sound.
	// calling just setTimeout(play, millis) will pass an undefined sound argument.
	// so we use this one weird trick to pass arguments to deferred functions, more details here:
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind
	setTimeout(play.bind(null, Sound.R2D2.Sad.Sad7), toMillis(1, 50000))
	setTimeout(play.bind(null, Sound.R2D2.Alarm.Alarm15), toMillis(2, 15000))
	setTimeout(play.bind(null, Sound.R2D2.Laugh), toMillis(2, 34000))
	setTimeout(play.bind(null, Sound.R2D2.Hey.Hey1), toMillis(2, 35000))
	setTimeout(domePlay.bind(null, Sound.R2D2.General.HeadSpin), toMillis(2, 41000))
	setTimeout(play.bind(null, Sound.R2D2.Excited.Excited10), toMillis(3, 24000))
	setTimeout(play.bind(null, Sound.R2D2.Negative.Negative14), toMillis(4, 0))
	setTimeout(play.bind(null, Sound.R2D2.Positive.Positive20), toMillis(4, 39000))
	setTimeout(play.bind(null, Sound.R2D2.Sad.Sad11), toMillis(4, 56000))
	setTimeout(play.bind(null, Sound.R2D2.Hey.Hey3), toMillis(5, 0))
	setTimeout(play.bind(null, Sound.R2D2.Chatty.Chatty8), toMillis(5, 6000))
	setTimeout(play.bind(null, Sound.R2D2.Alarm.Alarm7), toMillis(5, 7000))
	setTimeout(domePlay.bind(null, Sound.R2D2.Sad.Sad25), toMillis(5, 15000))
	setTimeout(play.bind(null, Sound.R2D2.Excited), toMillis(5, 30000))
	setTimeout(play.bind(null, Sound.R2D2.Sad.Sad21), toMillis(5, 35000)) // "i'll sell ya back to the jawas"; mad
	setTimeout(play.bind(null, Sound.R2D2.Sad.Sad7), toMillis(5, 47000)) // being dropped in the starship; scared / sad
	setTimeout(play.bind(null, Sound.R2D2.Positive.Positive21), toMillis(5, 54000)) // "act like one"; confident
	setTimeout(play.bind(null, Sound.R2D2.Hey.Hey10), toMillis(5, 58000)) // "circuitry is fragile"; annoyed / alarmed
	setTimeout(play.bind(null, Sound.R2D2.General.Scream), toMillis(6, 8000)) //launching up; waaaaaaaaaaa
	setTimeout(play.bind(null, Sound.R2D2.Chatty.Chatty47), toMillis(6, 21500)) // fireworks; amazed 
	setTimeout(play.bind(null, Sound.R2D2.Chatty.Chatty59), toMillis(6, 48000)) // showing mandilore; wowed
	setTimeout(play.bind(null, Sound.R2D2.General.Scream2), toMillis(7, 38000)) // ship turns; waaaaaaa
	setTimeout(play.bind(null, Sound.R2D2.Alarm.Alarm12), toMillis(7, 53000)) // -8:10 turbulance and clouds
	setTimeout(play.bind(null, Sound.R2D2.Alarm.Alarm7), toMillis(8, 10400)) // break through clouds
	setTimeout(play.bind(null, Sound.R2D2.Chatty.Chatty53), toMillis(8, 26000)) // mando talking techie stuff; confused
	setTimeout(play.bind(null, Sound.R2D2.Sad.Sad1), toMillis(8, 36000)) // "cut off from the rest of the galaxy"; scared
	setTimeout(domePlay.bind(null, Sound.R2D2.General.HeadSpin), toMillis(8, 53000)) // mando scans; scan
	setTimeout(play.bind(null, Sound.R2D2.Sad.Sad25), toMillis(9, 5000)) // "scout ahead analyze atmosphere"; unsure 
	setTimeout(play.bind(null, Sound.R2D2.General.Fall), toMillis(9, 9800)) // "it wasn't a question", gets shot out of ship; clunk
	setTimeout(tripodMotor, toMillis(9, 18000)) // tripod; then make rolling sound
	setTimeout(playWeird, toMillis(9, 28000)) // 9:18-9:28 scared; weird not working sounds
	setTimeout(play.bind(null, Sound.R2D2.Chatty.Chatty45), toMillis(9, 37000)) // confirmation alert sound
	setTimeout(domePlay.bind(null, Sound.R2D2.Laugh.Laugh1), toMillis(9, 39000)) // full dome turn around, make baby sound; mando replies "don't be a baby"
	setTimeout(play.bind(null, Sound.R2D2.Positive.Positive12), toMillis(9, 47500)) // respond; toot toot sound, driving off sound
	setTimeout(play.bind(null, Sound.R2D2.Laugh), toMillis(10, 1800)) // droid behind rock; loud squeal followed by laugh
	setTimeout(play.bind(null, Sound.R2D2.Sad.Sad10), toMillis(10, 19000)) // disappears from scope; suspense
	setTimeout(play.bind(null, Sound.R2D2.Sad.Sad7), toMillis(10, 32000)) // "fine i'll go get him", grogu worried
	setTimeout(play.bind(null, Sound.R2D2.Hit.Hit3), toMillis(11, 9800)) // thunder
	setTimeout(domeLight.bind(null, Sound.R2D2.Sad.Sad12), toMillis(11, 25000)) // mando walks into cave
	setTimeout(play.bind(null, Sound.R2D2.Positive), toMillis(11, 48200)) // inner mando city bold music
	setTimeout(play.bind(null, Sound.R2D2.Positive.Positive6), toMillis(11, 58000)) // fight club time
	setTimeout(play.bind(null, Sound.R2D2.Hey.Hey9), toMillis(12, 50600)) // mando finds driod, fight ends; hello it's me noise
	setTimeout(play.bind(null, Sound.R2D2.Sad.Sad4), toMillis(13, 4000)) // more hello worried noises till 13:04; stands up
	setTimeout(play.bind(null, Sound.R2D2.General.Motor), toMillis(13, 11000)) // heading back to ship
	setTimeout(play.bind(null, Sound.R2D2.Chatty.Chatty48), toMillis(13, 28500)) // "analysis on atmosphere?"; hologram at 13:33
	setTimeout(play.bind(null, Sound.R2D2.Hey.Hey8), toMillis(13, 44000)) // "mandalor is not cursed"
	setTimeout(domeLight.bind(null, Sound.R2D2.Sad.Sad12), toMillis(14, 1000)) // into cave again
	setTimeout(play.bind(null, Sound.R2D2.Alarm.Alarm12), toMillis(14, 38700)) // jets blast as jump down
	setTimeout(play.bind(null, Sound.R2D2.Step), toMillis(15, 21800)) // mando landing on ground
	setTimeout(play.bind(null, Sound.R2D2.Hit.Hit1), toMillis(15, 41000)) // flashlight on
	setTimeout(play.bind(null, Sound.R2D2.General.Scream), toMillis(16, 5300)) // monster noise, pod speeds up
	setTimeout(play.bind(null, Sound.R2D2.General.Motor), toMillis(16, 55000))
	setTimeout(play.bind(null, Sound.R2D2.Negative.Negative15), toMillis(17, 0)) // scanning sounds before, 17:00 mask in dirt; alert/suprised sound
	setTimeout(play.bind(null, Sound.R2D2.General.Scream), toMillis(17, 23600)) // huge trap
	setTimeout(play.bind(null, Sound.R2D2.Chatty.Chatty31), toMillis(17, 36000)) // struggling with monster
	setTimeout(play.bind(null, Sound.R2D2.Chatty.Chatty18), toMillis(17, 54000)) // grogu shy and concerned
	setTimeout(play.bind(null, Sound.R2D2.Chatty.Chatty14), toMillis(18, 24000)) // grogu spying and concerned
	setTimeout(play.bind(null, Sound.R2D2.Alarm.Alarm1), toMillis(18, 42500)) // large eye shot; shriek
	setTimeout(play.bind(null, Sound.R2D2.Sad.Sad7), toMillis(19, 0)) // small creature comes out
	setTimeout(play.bind(null, Sound.R2D2.Positive.Positive19), toMillis(19, 27300)) // activates switch; electronic sound
	setTimeout(domeSteps, toMillis(19, 41500)) // dumps weapons on ground; 2 clunks 19:45 second
	setTimeout(tiptoe, toMillis(20, 5000)) // grogu tiptoeing till 20:15
	setTimeout(useTheForce, toMillis(20, 32000)) // grogu force
	setTimeout(play.bind(null, Sound.R2D2.Alarm.Alarm9), toMillis(20, 49000)) // cage breaks, "get to bogatan"; sudden	
	setTimeout(play.bind(null, Sound.R2D2.Excited.Excited15), toMillis(20, 54000)) // jumps in pod
	setTimeout(play.bind(null, Sound.R2D2.Alarm.Alarm7), toMillis(21, 12200)) // monster snaps; scared suspense
	setTimeout(play.bind(null, Sound.R2D2.Excited.Excited8), toMillis(21, 19000)) // pod zooms upwards
	setTimeout(play.bind(null, Sound.R2D2.General.Scream), toMillis(21, 30000)) // ape thing jumps into frame
	setTimeout(play.bind(null, Sound.R2D2.Excited), toMillis(21, 37200)) // ape gets tossed; happy / excited
	setTimeout(play.bind(null, Sound.R2D2.Hey.Hey8), toMillis(21, 44000)) // droid; wow woo wee
	setTimeout(play.bind(null, Sound.R2D2.Negative), toMillis(21, 54800)) // monster smashes into cockpit
	setTimeout(domeSpin, toMillis(21, 58000)) // droid head spin 360
	setTimeout(play.bind(null, Sound.R2D2.General.EngageHyperdrive), toMillis(22, 4000)) // victory fly away; cheer
	setTimeout(play.bind(null, Sound.R2D2.Hey.Hey10), toMillis(22, 24900)) // "an unscheduled visitor"
	setTimeout(play.bind(null, Sound.R2D2.Sad.Sad10), toMillis(23, 1000)) // grogu pops out of cockpit; "i want to be left alone"
	setTimeout(download), toMillis(23, 16700)) // "download the astromech"
	setTimeout(clouds, toMillis(23, 35200)) // through clouds till 23:49
	setTimeout(play.bind(null, Sound.R2D2.Alarm.Alarm7), toMillis(24, 33500)) // jets landing
	setTimeout(play.bind(null, Sound.R2D2.General.HeadSpin), toMillis(24, 41800)) // grogu yes; scan then yes
	setTimeout(play.bind(null, Sound.R2D2.Negative.Negative18), toMillis(25, 5800)) // droid wait for me, 25:11 plugs in port
	setTimeout(domeLight.bind(null, Sound.R2D2.Laugh.Laugh2), toMillis(25, 30000)) // rotate dome, turn light on, laugh
	setTimeout(play.bind(null, Sound.R2D2.Sad), toMillis(26, 13000)) // "now it's a tomb"; sad
	setTimeout(play.bind(null, Sound.R2D2.General.Shortout), toMillis(26, 39000)) // landing in water 
	setTimeout(play.bind(null, Sound.R2D2.Sad.Sad21), toMillis(26, 56800)) // grogu scared
	setTimeout(play.bind(null, Sound.R2D2.General.Annoyed), toMillis(27, 12500)) // grogu snort
	setTimeout(play.bind(null, Sound.R2D2.Laugh.Laugh1), toMillis(27, 48800)) // sarcasm
	setTimeout(slide, toMillis(28, 3800)) // pushes pod gently away; sliding sound
	setTimeout(play.bind(null, Sound.R2D2.Alarm.Alarm1), toMillis(28, 18200)) // blasters at ceiling, monster drops
	setTimeout(play.bind(null, Sound.R2D2.Positive.Positive21), toMillis(28, 30600)) // wire trip monster; whoo hooo
	setTimeout(play.bind(null, Sound.R2D2.Negative), toMillis(28, 54600)) // "did you think your dad was the only mandalorian?"
	setTimeout(play.bind(null, Sound.R2D2.Negative.Negative3), toMillis(29, 12200)) // kicks droid on
	setTimeout(play.bind(null, Sound.R2D2.Negative.Negative6), toMillis(29, 32000)) // pokes droid
	setTimeout(play.bind(null, Sound.R2D2.Negative.Negative23), toMillis(29, 42800)) // droid scared, then pumping blood
	setTimeout(play.bind(null, Sound.R2D2.Negative.Negative16), toMillis(29, 54600)) // droid shot; malfunction sound
	setTimeout(play.bind(null, Sound.R2D2.Chatty.Chatty26), toMillis(29, 59500)) // blast shoots bogatan down, 30:04 and 30:07 also
	setTimeout(play.bind(null, Sound.R2D2.Chatty.Chatty27), toMillis(30, 4000))
	setTimeout(play.bind(null, Sound.R2D2.Chatty.Chatty26), toMillis(30, 7000))
	setTimeout(play.bind(null, Sound.R2D2.Positive), toMillis(30, 23000)) // dark saber kill electro monster, falls at 30:29500
	setTimeout(tiptoe), toMillis(30, 39800)) // eye is alive, crawling at 30:44
	setTimeout(play.bind(null, Sound.R2D2.Alarm.Alarm13), toMillis(30, 55800)) // "behind you!"
	setTimeout(play.bind(null, Sound.R2D2.Positive.Positive21), toMillis(31, 0)) // slices electro monster hand off
	setTimeout(play.bind(null, Sound.R2D2.Laugh.Laugh2), toMillis(31, 11000)) // slices leg, falls, then overhead kill at 31:17.5
	setTimeout(play.bind(null, Sound.R2D2.Hey.Hey8), toMillis(31, 51800)) // "your kid, he's tougher than he looks"; whistle?
	setTimeout(play.bind(null, Sound.R2D2.Negative.Negative18), toMillis(32, 36000)) // "you've never eaten pog soup?"
	setTimeout(play.bind(null, Sound.R2D2.Positive.Positive12), toMillis(33, 11000)) // continue to the mines "so that i may be redeemed"
	setTimeout(play.bind(null, Sound.R2D2.Negative.Negative13), toMillis(33, 56500)) // grogu makes squeaky groan noise
	setTimeout(play.bind(null, Sound.R2D2.Positive.Positive3), toMillis(34, 53800)) // entrance to mines of mandalor; amazement
	setTimeout(play.bind(null, Sound.R2D2.Negative.Negative20), toMillis(36, 11000)) // this is the way. then "what are you lookin' at?"; scared
	setTimeout(play.bind(null, Sound.R2D2.Chatty.Chatty34), toMillis(37, 12000)) // "din, are you alright?" mando takes off equipment and bathes
	setTimeout(play.bind(null, Sound.R2D2.General.Shortout), toMillis(37, 44600)) // walks into water "i swear on my name"; stepping down stairs
	setTimeout(play.bind(null, Sound.R2D2.Laugh.Laugh4), toMillis(37, 46600))
	setTimeout(play.bind(null, Sound.R2D2.Alarm.Alarm6), toMillis(38, 2000)) // mando gets sucked under, intense music till...
	setTimeout(play.bind(null, Sound.R2D2.Hey), toMillis(38, 44000)) // finds mando
	setTimeout(play.bind(null, Sound.R2D2.Chatty), toMillis(38, 50000)) // grunts and launches up
	setTimeout(play.bind(null, Sound.R2D2.Positive.Positive22), toMillis(39, 4500)) // sees the water beast through 39:12
	setTimeout(play.bind(null, Sound.R2D2.General.Fall), toMillis(39, 21000)) // shoots out of water, saved; big clunk sound
	setTimeout(domePlay.bind(null, Sound.R2D2.Chatty.Chatty37), toMillis(39, 31500)) // mando coughing, bogatan breathes quickly shocked by water beast; shock / end applause
}

async function slide() {
	for (i = 0; i < 4; i++) {
		Sound.R2D2.Positive.Positive10.play()
		await delay(.7)
	}
}

async function clouds() {
	for (i = 0; i < 3; i++) {
		Sound.R2D2.Chatty.Chatty32.play()
		await delay(1)
		Sound.R2D2.Positive.Positive11.play()
		await delay(1)
		Sound.R2D2.Positive.Positive16.play()
		await delay(1)
	}
}

async function download() {
	setLogicDisplayLeds(255)
	Sound.R2D2.Chatty.Chatty51.play()
	await delay(1)
	Sound.R2D2.Chatty.Chatty52.play()
	setLogicDisplayLeds(0)
}

async function domeSpin() {
	setDomePosition(-160)
	Sound.R2D2.General.HeadSpin.play()
	await delay(1.5)
	setDomePosition(180)
	await delay(1.5)
	setDomePosition(10)
}

async function useTheForce() {
	Sound.R2D2.Positive.Positive10.play()
	await delay(.7)
	Sound.R2D2.Positive.Positive11.play()
}

async function tiptoe() {
	for (i = 0; i < 20; i++) {
		Sound.R2D2.Step.Step3.play()
		await delay(.25)
		Sound.R2D2.Step.Step4.play()
		await delay(.25)
	}
}

async function domePlay(sound) {
	setDomePosition(getRandomInt(145, 180))
	sound.play()
	await delay(1.5)
	setDomePosition(10)
}

async function domeSteps() {
	setDomePosition(145)
	Sound.R2D2.Step.Step1.play()
	await delay(3.5)
	Sound.R2D2.Step.Step1.play()
	setDomePosition(10)
	await delay(1)
	Sound.R2D2.Laugh.Laugh2.play()
}

async function tripodMotor() {
	await setStance(Stance.Tripod)
	Sound.R2D2.General.Motor.play()
	await delay(8)
	await setStance(Stance.Bipod)
}

async function playWeird() {
	Sound.R2D2.Positive.Positive20.play()
	await delay(1)
	Sound.R2D2.Laugh.Laugh3.play()
	await delay(1)
	Sound.R2D2.Chatty.Chatty58.play()
	await delay(2)
	Sound.R2D2.Chatty.Chatty53.play()
	await delay(1)
	Sound.R2D2.Excited.Excited14.play()
}

async function domeLight(sound) {
	setDomePosition(180)
	await delay(2)
	setHoloProjectorLed(175)
	await delay(3)
	setDomePosition(10)
	await delay(1.5)
	setHoloProjectorLed(0)

	if (sound) {
		sound.play()
	}
}

function play(sound) {
	sound.play()
}

function toMillis(min, millis) {
	// minutes * the number of millis in a minute plus millis minute the offset
	return (min * 60000 + millis) - offset
}