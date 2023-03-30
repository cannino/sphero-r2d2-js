// offset is the time which the intro ends; also when you should start this program
const offset = 1 * 60 + 25

async function startProgram() {	
	await setStance(Stance.Bipod)
	domePlay(Sound.R2D2.Chatty.Chatty47)
	
	setupReactions()
	
	await delay(50 * 60) // complete program after 50 minutes; delay() unit of measurement is seconds
}

function setupReactions() {
	// play.bind is used to create a new function with the argument sound.
	// calling just setTimeout(play, millis) will pass an undefined sound argument.
	// so we use this one weird trick to pass arguments to deferred functions, more details here:
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind
	setTimeout(play.bind(null, Sound.R2D2.Sad.Sad7), toMillis(1, 50))
	setTimeout(play.bind(null, Sound.R2D2.Alarm.Alarm15), toMillis(2, 15))
	setTimeout(play.bind(null, Sound.R2D2.Laugh), toMillis(2, 34))
	setTimeout(play.bind(null, Sound.R2D2.Hey.Hey1), toMillis(2, 35))
	setTimeout(domePlay.bind(null, Sound.R2D2.General.HeadSpin), toMillis(2, 41))
	setTimeout(play.bind(null, Sound.R2D2.Excited.Excited10), toMillis(3, 24))
	setTimeout(play.bind(null, Sound.R2D2.Negative.Negative14), toMillis(4, 0))
	setTimeout(play.bind(null, Sound.R2D2.Positive.Positive20), toMillis(4, 39))
	setTimeout(play.bind(null, Sound.R2D2.Sad.Sad11), toMillis(4, 56))
	setTimeout(play.bind(null, Sound.R2D2.Hey.Hey3), toMillis(5, 0))
	setTimeout(play.bind(null, Sound.R2D2.Chatty.Chatty8), toMillis(5, 6))
	setTimeout(play.bind(null, Sound.R2D2.Alarm.Alarm7), toMillis(5, 7))
	setTimeout(domePlay.bind(null, Sound.R2D2.Sad.Sad25), toMillis(5, 15))
	setTimeout(play.bind(null, Sound.R2D2.Excited), toMillis(5, 30))
	setTimeout(play.bind(null, Sound.R2D2.Negative.Negative23), toMillis(5, 35))

}

async function domePlay(sound) {
	setDomePosition(145)
	sound.play()
	await delay(1.5)
	setDomePosition(10)
}

function play(sound) {
	sound.play()
	
}

function toMillis(min, sec) {
	return (min * 60 + sec - offset) * 1000
}