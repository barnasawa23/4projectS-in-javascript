const Hero = () => {
  return (
    <>
        <h5 className="text-gradient">Unleash Your Inner Athlete</h5>
        <ol className="benefits-list">
            <li>Get fit in just 30 days</li>
            <li>Access to personalized training plans</li>
            <li>Get fit, healthy, shredded and strong</li>
            <li>Learn more about Gym, Training and technique.</li>
        </ol>
        <h3>The Rules:</h3>
        <p>To Complete this program, you <b>Must</b> follow these 3 simple rules:</p>
        <ul className="rules-list">
            <div className="rule-item">
                <p><b>Rest</b></p>
                <p>Ensure that you're taking rest days where necessary.</p>
            </div>
            <div className="rule-item">
                <p><b>Reps</b></p>
                <p>Every reps is a pause rep following a <abbr title="2 seconds down - 2 seconds pause - 2 seconds up.">2 - 2 - 2</abbr> tempo.</p>
            </div>
            <div className="rule-item">
                <p><b>Weight*</b></p>
                <p>Select the maximum weight that allows you to complete the set with good form.</p>
            </div>
        </ul>
        <small>* The first and second set should be at 75% and 85% of you working weight used for the last two sets.</small>
        <h3>The training plan:</h3>
        <p>
            This training plan uses a structure know as the <b>Bro Split</b>, and follows this rotation⬇
        </p>
        <p>
            <b><i>Push &rarr; Pull &rarr; Legs &rarr; Repeat </i></b>
        </p>
        <p>Complete all of the workouts below and track your progress along the way✅</p>
    </>
  )
}
export default Hero