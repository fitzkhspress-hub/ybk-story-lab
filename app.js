(function () {
  'use strict';

  var TITLE = 'LQTQ Story Lab';
  var STORE = 'lqtq-story-lab-v1';
  var MODULES = { 1: 'Leads', 2: 'Quotes', 3: 'Transitions', 4: 'LQTQ Formula' };

  /* ---------- Course content ---------- */
  var STEPS = [
    // ===== Module 1: Leads =====
    { id: 'l1', m: 1, type: 'lesson', title: 'The first line has one job',
      html:
        '<p class="lead-in">The lead is the first paragraph and the most important part of the story. Its only job is to make the reader keep going.</p>' +
        '<div class="grid2">' +
          '<div class="panel blue"><h3>Traditional news lead</h3><ul><li>1 sentence, 35 words or less</li><li>Sums up the most important 5 W’s and H</li><li>Used for breaking news</li></ul>' +
          '<p class="ex">Students will pay 75 cents more for school lunches this year after the district updated its food budget.</p></div>' +
          '<div class="panel lav"><h3 class="lav">Feature lead</h3><ul><li>Hooks the reader</li><li>1 to 2 sentences. Aim for under 35 words.</li><li>Used for features, sports, profiles and most yearbook copy</li></ul>' +
          '<p class="ex">As the wind roared through the stadium, Jared Flannigan tipped his cap and shifted on the mound. A single pitch left.</p></div>' +
        '</div>' +
        '<div class="callout"><b>Why yearbook uses feature leads:</b> by the time the book comes out, the news is months old. Readers already know who won. Pull them into one moment, one person or one angle, and save the 5 W’s and H for the nutgraf.</div>' },

    { id: 'q1', m: 1, type: 'sort', title: 'Sort the first lines',
      prompt: 'Your editor dropped four first lines into the shared folder. Is each one a news lead or a feature lead?',
      buckets: ['News lead', 'Feature lead'],
      items: [
        { t: 'Student Council collected 1,200 canned goods during its November food drive, 300 more than last year.', a: 0, why: 'It sums up who, what and when in one sentence. That is a news lead.' },
        { t: 'Junior Talia Brooks keeps a pencil behind each ear during every yearbook deadline. One is for edits. The other is for emergencies.', a: 1, why: 'A short true story about one person. That hook is a feature lead (anecdote).' },
        { t: 'Glitter. It covered the gym floor, the bleachers and 40 seniors after the pep rally.', a: 1, why: 'One word, then the story. That is a short and punchy feature lead.' },
        { t: 'The district will add two career courses, welding and culinary arts, starting next fall.', a: 0, why: 'It reports the main facts of an announcement. That is a news lead.' }
      ],
      explain: 'News leads sum up the 5 W’s and H. Feature leads hook the reader with one moment, person or angle.' },

    { id: 'l2', m: 1, type: 'lesson', title: 'What a good lead does — and never does',
      html:
        '<div class="grid2 grid3">' +
          '<div class="panel blue"><h3>Hooks</h3><p>It makes the reader want the second sentence.</p></div>' +
          '<div class="panel lav"><h3 class="lav">Stays true</h3><p>Creative, but never made up or exaggerated. Every detail is real.</p></div>' +
          '<div class="panel blue"><h3>Focuses</h3><p>One moment, one person or one angle. Not the whole season.</p></div>' +
        '</div>' +
        '<div class="panel plain"><h3 style="color:var(--bad)">Never start with</h3><ul class="no">' +
          '<li>A quote. Quotes go after the lead.</li><li>A question. “Have you ever wondered…?”</li><li>The weather. “It was a bright, sunny day.”</li>' +
          '<li>“You’d never guess…” or “You might be surprised…”</li><li>A thesis, like an English essay.</li><li>Clichés and puns. “Every year…” “Hard work pays off.”</li>' +
          '<li>Long, rambling or overly poetic sentences</li><li>The school name. Readers know where they go.</li></ul></div>' },

    { id: 'q2', m: 1, type: 'mc', title: 'Editor’s desk: the school store story',
      prompt: 'A staff writer turns in a story about the school store. It opens: <span class="ex" style="display:block">Have you ever wondered what it takes to run the school store?</span> What note do you leave on the draft?',
      options: [
        { t: 'It starts with a question. Open with one real moment from the store instead.', ok: true, fb: 'Right. Questions are on the never-start-with list. A real moment hooks the reader.' },
        { t: 'It is too long. Cut it to under 35 words.', fb: 'Count again: it is only 12 words. Length is not the problem here.' },
        { t: 'Put a student quote first so readers hear from someone who works there.', fb: 'Quotes go after the lead. Starting with a quote is also on the never list.' },
        { t: 'It works. Questions get readers thinking.', fb: 'The lead guide says never start with a question like “Have you ever wondered…?”' }
      ] },

    { id: 'q3', m: 1, type: 'multi', title: 'Flag the broken leads',
      prompt: 'Select every lead that breaks a “never start with” rule.',
      options: [
        { t: 'It was a cold, gray morning when the swim team arrived at the natatorium.', ok: true, why: 'Weather opening.' },
        { t: '“This season meant everything to me,” senior Omar Haddad said.', ok: true, why: 'Starts with a quote.' },
        { t: 'Senior Maya Chen counts every stitch out loud while she sews costumes for the fall play. Her record is 412 in one night.', why: 'This one works: an anecdote with a real, specific detail.' },
        { t: 'Every year, the choir works hard, and this year was no different.', ok: true, why: 'Cliché. It could open any story about any group.' },
        { t: 'You’d never guess that the quiet student in third period is a nationally ranked chess player.', ok: true, why: '“You’d never guess…” is on the never list, and it talks to the reader.' },
        { t: 'Four inches. That is how far the ball rolled past the cup on the final putt of the season.', why: 'This one works: a short and punchy lead built on one moment.' }
      ],
      explain: 'Weather, quote, cliché and “you’d never guess” are all on the never list. The anecdote and the short and punchy lead both hook with one real moment.' },

    { id: 'l3', m: 1, type: 'lesson', title: 'Four feature leads',
      html:
        '<div class="grid2">' +
          '<div class="panel blue"><h3>Anecdote</h3><p>A short true story about one person that shows what the whole story is about. <span class="muted">Profiles, clubs, classes</span></p><p class="frame">[Grade + name] [does a specific action]. [One detail that shows why it matters.]</p></div>' +
          '<div class="panel lav"><h3 class="lav">Scene-setting</h3><p>Sensory details put the reader in the room: what you see, hear, smell or feel. <span class="muted">Events, performances, games</span></p><p class="frame">[A sound, smell or sight]. [Who is there and what they are doing], [as / while the moment starts].</p></div>' +
          '<div class="panel lav"><h3 class="lav">Blast</h3><p>A short, surprising fact that makes the reader stop. Use it sparingly. <span class="muted">Records, big numbers, firsts</span></p><p class="frame">[Surprising number or fact]. [Why it is surprising.]</p></div>' +
          '<div class="panel blue"><h3>Short and punchy</h3><p>One word or a short fragment, then the story. Each fragment is a beat. <span class="muted">Sports, moments with tension</span></p><p class="frame">[One word or short phrase]. [Sentence that explains it.]</p></div>' +
        '</div>' +
        '<div class="callout"><b>Write it in 4 steps:</b> pick the one angle · choose the lead type that fits · write it three different ways and keep the best · cut every extra word and count: under 35?</div>' },

    { id: 'q4', m: 1, type: 'sort', title: 'Name that lead',
      prompt: 'Match each lead to its type.',
      buckets: ['Anecdote', 'Scene-setting', 'Blast', 'Short and punchy'],
      items: [
        { t: 'Freshman Eli Grant writes his opponent’s name on his wrist tape before every wrestling match. He crosses it out only after he wins.', a: 0, why: 'One person, one specific habit that shows what the story is about: anecdote.' },
        { t: 'Sawdust drifts under the stage lights. Nine crew members drill the last hinge into place as the house doors open.', a: 1, why: 'Sight and smell put the reader in the room as the moment starts: scene-setting.' },
        { t: 'The cafeteria serves 1,850 lunches a day. Four people cook them.', a: 2, why: 'A surprising number, then why it is surprising: blast.' },
        { t: 'Overtime. Again. For the third straight Friday, the soccer team needed extra minutes to settle a tie.', a: 3, why: 'Fragments as beats, then the sentence that explains them: short and punchy.' }
      ],
      explain: 'Each lead follows the frame for its type. Use the frames when you draft.' },

    { id: 'q5', m: 1, type: 'mc', title: 'Draft the tech crew lead',
      notes: { tag: 'Reporter’s notes · Theatre tech crew', t: '9 crew members · built the fall play set in 3 weeks · used more than 400 screws · junior stage manager Lena Ortiz calls 112 light and sound cues from a headset · the scene shop smelled like sawdust and paint the night before opening' },
      prompt: 'Which scene-setting lead is ready for the page?',
      options: [
        { t: 'Sawdust and wet paint hang in the air of the scene shop. Nine crew members drive the last of more than 400 screws the night before opening.', ok: true, fb: 'Yes. Sensory details from the notes, one moment, under 35 words, and every detail is true.' },
        { t: 'Tears streamed down every face in the scene shop as the crew finished the greatest set in school history.', fb: 'Nothing in the notes says anyone cried or that it was the greatest set. A lead stays true: never made up or exaggerated.' },
        { t: 'Every year, the tech crew works behind the scenes, and this year was no different.', fb: 'That is a cliché. It could open any story about any crew.' },
        { t: 'The smell of sawdust, the whine of drills, the slap of paint brushes, the clatter of ladders, the hum of the lights and the chatter of nine crew members filled the shop late into the night as the fall play got closer.', fb: 'Real details, but it rambles past 35 words. Cut every extra word.' }
      ] },

    { id: 'q6', m: 1, type: 'mc', title: 'Weak or strong?',
      prompt: 'You are writing about the cross country district meet. Which lead could only open <em>this</em> story?',
      options: [
        { t: 'With 400 meters left at district, junior Sam Ortiz passed three runners on the final hill.', ok: true, fb: 'Yes. One moment, one person, specific details. It could not open any other story.' },
        { t: 'Hard work pays off, and the cross country team proved it this season.', fb: '“Hard work pays off” is a cliché from the never list.' },
        { t: 'The cross country team had a season full of ups and downs.', fb: 'Vague. It could describe any team in any season.' },
        { t: 'It was a windy afternoon when the cross country team ran at district.', fb: 'A weather opening. The handout puts it on the never list.' }
      ] },

    // ===== Module 2: Quotes =====
    { id: 'l4', m: 2, type: 'lesson', title: 'Quotes are the heart of the story',
      html:
        '<p class="lead-in">Quotes give a person’s emotions, opinions and reflections. Choose quotes that only that person could say.</p>' +
        '<div class="grid2">' +
          '<div class="panel blue"><h3>1 · Shows emotion</h3><p>How did the person feel? Nervous, proud, frustrated, relieved.</p></div>' +
          '<div class="panel lav"><h3 class="lav">2 · Shows personality</h3><p>It sounds like that person and nobody else.</p></div>' +
          '<div class="panel lav"><h3 class="lav">3 · Gives details</h3><p>A real moment: what they saw, heard or did.</p></div>' +
          '<div class="panel blue"><h3>4 · Explains why</h3><p>Their opinion or reflection on the fact before it.</p></div>' +
        '</div>' +
        '<div class="panel plain"><h3>Weak · obvious</h3><p class="ex">“I was so excited to win,” senior Britney Harris said.</p>' +
        '<h3 style="color:var(--ok)">Strong · details + emotion</h3><p class="ex">“I couldn’t keep my hands from shaking. I was straining to hear the name over the loudspeaker, but it was just a bunch of mumbo jumbo,” senior Britney Harris said. “But then my mom started screaming in my ear, and I started screaming with her.”</p></div>' +
        '<div class="callout">One sentence usually means you didn’t ask enough questions. <b>Facts go in the transition.</b> Quotes give thoughts, opinions and reactions.</div>' },

    { id: 'q7', m: 2, type: 'sort', title: 'Strong or weak?',
      prompt: 'You are going through quotes from this week’s interviews. Keep the strong ones.',
      buckets: ['Strong', 'Weak'],
      items: [
        { t: '“The trip was fun,” junior Nora Lee said.', a: 1, why: 'Obvious and only one sentence. Go back and ask more questions.' },
        { t: '“I left my passport on the bus and didn’t notice until we were at security,” junior Nora Lee said. “Our sponsor sprinted to the parking lot, and I have never been so relieved to see a blue booklet.”', a: 0, why: 'A real moment with emotion. Only Nora could say it.' },
        { t: '“The club has 45 members and meets every other Thursday,” club president Ian Ruiz said.', a: 1, why: 'Those are facts. Facts go in the transition.' },
        { t: '“At my first match, my hands shook so hard I dropped the controller,” sophomore Priya Das said. “Now I am the one telling the freshmen to breathe.”', a: 0, why: 'Emotion, detail and reflection in two sentences.' }
      ],
      explain: 'Strong quotes show emotion, personality, details or why. Weak quotes are obvious, one sentence or full of facts.' },

    { id: 'q8', m: 2, type: 'mc', title: 'Interview rescue',
      prompt: 'You are interviewing senior goalie Marcus Webb after a playoff win. You asked, “Did you like the game?” The answer: “Yeah.” What do you ask next?',
      options: [
        { t: '“What was going through your mind on the penalty kick?”', ok: true, fb: 'Yes. Open-ended questions get details and emotion. Then follow up: “Tell me more about that.”' },
        { t: '“Was it a good game?”', fb: 'Another yes-or-no question will get another one-word answer.' },
        { t: '“Did you feel happy?”', fb: 'Still yes or no, and it asks for an obvious answer.' },
        { t: '“So you liked it?”', fb: 'That repeats the first question. Ask something that can’t be answered with one word.' }
      ] },

    { id: 'l5', m: 2, type: 'lesson', title: 'The quote formula',
      html:
        '<p>Format every quote the same way.</p>' +
        '<div class="formula"><span class="n">1</span>“Every game gets me so pumped up<span class="n">2</span>,” junior Ray Sanchez said<span class="n">3</span>.<span class="n">4</span> “I try to calm myself down and just do the best I can and that’s how we win most games<span class="n">5</span>.”</div>' +
        '<ul class="numlist">' +
          '<li><b>1</b>No space between the opening quote mark and the first word.</li>' +
          '<li><b>2</b>After the first sentence: comma inside the closing quote mark.</li>' +
          '<li><b>3</b>Attribution after the first sentence: grade, first name, last name, said.</li>' +
          '<li><b>4</b>Period after said. One space after every period.</li>' +
          '<li><b>5</b>Period inside the closing quote mark. No space before it.</li>' +
          '<li><b>!</b>No exclamation points. Ever.</li>' +
        '</ul>' +
        '<div class="callout">“First sentence,” grade First Last said. “Next sentence. Last sentence.”</div>' +
        '<div class="panel plain"><h3 style="color:var(--bad)">Never</h3><ul class="no"><li>Comma outside the quote mark</li><li>Comma after said: <i>Jane Nguyen said, “It’s so frustrating.”</i></li><li>Said at the start or at the very end</li><li>“When asked…” Just use the quote.</li></ul></div>' },

    { id: 'q9', m: 2, type: 'spot', title: 'Copy edit: find every mistake',
      prompt: 'This quote has 3 mistakes. Select each mistake, then check.',
      tokens: [
        { t: '“We lost the first set by two points' },
        { t: '”,', sp: false, err: true, why: 'The comma goes inside the closing quote mark: …points,”' },
        { t: 'explained', err: true, why: 'Only said. And the name comes first: sophomore Tess Grant said.' },
        { t: 'sophomore Tess Grant.' },
        { t: '“After that, I stopped thinking and just played' },
        { t: '!”', sp: false, err: true, why: 'No exclamation points. Ever. End with a period inside the quote mark.' }
      ],
      fixed: '“We lost the first set by two points,” sophomore Tess Grant said. “After that, I stopped thinking and just played.”' },

    { id: 'q10', m: 2, type: 'mc', title: 'Which one follows the formula?',
      prompt: 'Pick the quote that is ready to print.',
      options: [
        { t: 'Junior Ray Sanchez said, “I didn’t sleep the night before auditions. When I saw my name on the cast list, I read it over and over.”', fb: 'Said is at the start, and there is a comma after said. Said goes after the first sentence.' },
        { t: '“I didn’t sleep the night before auditions,” said junior Ray Sanchez. “When I saw my name on the cast list, I read it over and over.”', fb: 'Name first, then said: Ray Sanchez said, not said Ray Sanchez.' },
        { t: '“I didn’t sleep the night before auditions”, junior Ray Sanchez said. “When I saw my name on the cast list, I read it over and over.”', fb: 'Look at the first comma. It belongs inside the closing quote mark.' },
        { t: '“I didn’t sleep the night before auditions,” junior Ray Sanchez said. “When I saw my name on the cast list, I read it over and over.”', ok: true, fb: 'Yes. Comma inside, grade + full name + said after the first sentence, period inside the final quote mark.' }
      ] },

    { id: 'l6', m: 2, type: 'lesson', title: 'Attribution: who said it',
      html:
        '<table><thead><tr><th scope="col">When</th><th scope="col">Write it like this</th></tr></thead><tbody>' +
          '<tr><td>First time · story</td><td>junior Ray Sanchez said<br>history teacher Jane Nguyen said</td></tr>' +
          '<tr><td>First time · caption</td><td>Ray Sanchez (11)</td></tr>' +
          '<tr><td>After · students</td><td>Ray said · he said</td></tr>' +
          '<tr><td>After · adults</td><td>Nguyen said · she said</td></tr>' +
          '<tr><td>Never</td><td>said Ray · Ray says · Sanchez said (student) · Ms. Nguyen said</td></tr>' +
          '<tr><td>Never</td><td>stated, explained, replied, laughed, commented — only said</td></tr>' +
        '</tbody></table>' +
        '<div class="callout"><b>Names:</b> use the legal name from Skyward. No nicknames. If the legal first name is a deadname, use the first initial of the legal first name + last name: senior J. Fraga. Nicknames like JJ still get the legal name.</div>' },

    { id: 'q11', m: 2, type: 'mc', title: 'Second references',
      prompt: 'Junior Ray Sanchez and choir director Melissa Davidson both speak again later in the story. Which pair of attributions is correct?',
      options: [
        { t: 'Sanchez said · Davidson said', fb: 'Students go by first name after the first reference. Only adults go by last name.' },
        { t: 'Ray said · Ms. Davidson said', fb: 'No courtesy titles. Adults go by last name only: Davidson said.' },
        { t: 'Ray said · Davidson said', ok: true, fb: 'Yes. After the first reference, students by first name, adults by last name.' },
        { t: 'said Ray · Melissa said', fb: 'Name first, then said. And adults go by last name.' }
      ] },

    { id: 'q12', m: 2, type: 'mc', title: 'Nickname check',
      prompt: 'A junior everyone calls “JJ” gives you a great quote. Skyward lists the legal name Jamal Fraser. How do you attribute the quote the first time?',
      options: [
        { t: 'junior JJ Fraser said', fb: 'No nicknames. Use the legal name from Skyward.' },
        { t: 'junior Jamal “JJ” Fraser said', fb: 'Close, but the nickname still comes out. Nicknames like JJ still get the legal name.' },
        { t: 'junior Jamal Fraser said', ok: true, fb: 'Yes. Grade + legal first and last name + said.' },
        { t: 'JJ said', fb: 'A first reference needs grade + full legal name.' }
      ] },

    { id: 'q13', m: 2, type: 'mc', title: 'Caption attribution',
      prompt: 'You are writing a photo caption, not a story. How does Ray Sanchez, a junior, appear the first time?',
      options: [
        { t: 'junior Ray Sanchez', fb: 'That is the first-reference style for a story. Captions use a different format.' },
        { t: 'Ray Sanchez (11)', ok: true, fb: 'Yes. In a caption, the first reference is full name + grade in parentheses.' },
        { t: 'Ray (11)', fb: 'The first reference needs the full name.' },
        { t: 'Sanchez, junior', fb: 'Not the caption format. Use full name + grade in parentheses.' }
      ] },

    // ===== Module 3: Transitions =====
    { id: 'l7', m: 3, type: 'lesson', title: 'A transition is a bridge',
      html:
        '<p class="lead-in">Transitions carry the facts. They move the reader from one quote to the next and from one speaker to the next.</p>' +
        '<ol class="chain" aria-label="Quote, then transition, then quote">' +
          '<li><span class="pc q">Q</span><span class="lbl">A person’s feelings about one idea</span><span class="arr" aria-hidden="true">›</span></li>' +
          '<li><span class="pc t">T</span><span class="lbl">New facts that move to the next idea and speaker</span><span class="arr" aria-hidden="true">›</span></li>' +
          '<li><span class="pc q">Q</span><span class="lbl">The next person reacts to those facts</span></li>' +
        '</ol>' +
        '<div class="grid2">' +
          '<div class="panel blue"><h3>Transitions are</h3><ul class="yes"><li>Facts, numbers, dates and names</li><li>Paraphrased (indirect) quotes</li><li>1 to 2 sentences</li><li>Their own paragraph, every time</li><li>Attributed: who says so?</li></ul></div>' +
          '<div class="panel lav"><h3 class="lav">Transitions are not</h3><ul class="no"><li>Opinions or cheerleading</li><li>A repeat of the quote</li><li>Written with you, I, we or our</li><li>Vague: everyone, most, some</li><li>In the same paragraph as a quote</li></ul></div>' +
        '</div>' },

    { id: 'q14', m: 3, type: 'sort', title: 'Fact or feeling?',
      prompt: 'These lines came from your girls’ basketball interviews. Where does each one go?',
      buckets: ['Transition (fact)', 'Quote (feeling)'],
      items: [
        { t: 'The team won 11 of its last 12 games.', a: 0, why: 'A number you can check. Facts go in a transition.' },
        { t: '“I have never been on a team that refused to lose like this.”', a: 1, why: 'A reaction only a player could give. That is quote material.' },
        { t: 'The playoff game starts at 7 p.m. Feb. 20.', a: 0, why: 'A date and time. Fact → transition.' },
        { t: '“My legs were dead by the fourth quarter, but nobody wanted to sit down.”', a: 1, why: 'A feeling and a real moment. Feeling → quote.' },
        { t: 'Head coach Dana Price said the team added a full-court press in January.', a: 0, why: 'A paraphrased quote with attribution. Paraphrases belong in transitions.' }
      ],
      explain: 'Facts and paraphrases go in transitions. Feelings go in quotes.' },

    { id: 'l8', m: 3, type: 'lesson', title: 'Six transition rules',
      html:
        '<ol class="numlist" style="list-style:none;padding:0">' +
          '<li><b>1</b><span><strong>No you, I, we or our.</strong> Never talk to the reader. Never put yourself in the story.</span></li>' +
          '<li><b>2</b><span><strong>No opinion.</strong> Not even a hint. Let a quote give the opinion.</span></li>' +
          '<li><b>3</b><span><strong>Don’t repeat the quote.</strong> Give new facts that set it up.</span></li>' +
          '<li><b>4</b><span><strong>No vague claims.</strong> Skip everyone, most and some unless you polled everyone. Attribute every statement.</span></li>' +
          '<li><b>5</b><span><strong>Give it its own paragraph.</strong> Never combine a transition and a quote. Never put two transitions in a row.</span></li>' +
          '<li><b>6</b><span><strong>Use active verbs.</strong> Cut “be” verbs: is, are, was, were, will be.</span></li>' +
        '</ol>' +
        '<div class="panel plain"><p class="muted" style="margin-bottom:4px">Rule 2 in action</p><p class="ex"><b style="color:var(--bad);font-family:system-ui">WRONG</b> The Cougars played a tough battle against the Hawks Friday night.</p><p class="ex"><b style="color:var(--ok);font-family:system-ui">RIGHT</b> The Cougars kept the Hawks scoreless until the fourth quarter, when receiver Jeremy Davis caught a 12-yard touchdown pass.</p></div>' +
        '<div class="callout"><b>Tired of repeating a name?</b> After the first reference, use another noun: the senior, the drum major, the defending state champion, he or she.</div>' },

    { id: 'q15', m: 3, type: 'sort', title: 'Which rule does it break?',
      prompt: 'Each transition breaks one rule. Match it to the rule.',
      buckets: ['1 · No you, I, we, our', '2 · No opinion', '4 · No vague claims', '6 · Active verbs'],
      items: [
        { t: 'You may have seen the cheer squad’s new routine at the pep rally.', a: 0, why: '“You” talks to the reader. Rule 1.' },
        { t: 'The theatre crew built an incredible set for the fall play.', a: 1, why: '“Incredible” is an opinion. Let a quote say it. Rule 2.' },
        { t: 'Most students skip breakfast on test days.', a: 2, why: '“Most” is vague unless you polled everyone and attribute it. Rule 4.' },
        { t: 'The choir was rehearsing every afternoon in October.', a: 3, why: '“Was rehearsing” is a be verb. Write: The choir rehearsed. Rule 6.' }
      ],
      explain: 'Use the six rules as your checklist every time you write a transition.' },

    { id: 'q16', m: 3, type: 'mc', title: 'Rewrite as fact',
      prompt: 'A staffer wrote: <span class="ex" style="display:block">The art club’s mural looks incredible.</span> Which rewrite works as a transition?',
      options: [
        { t: 'Everyone agrees the art club’s mural looks incredible.', fb: 'Still an opinion, and now it adds a vague claim (everyone).' },
        { t: 'You have to see the art club’s new mural outside the cafeteria.', fb: 'That talks to the reader. No you, I, we or our.' },
        { t: 'Twelve art club members painted the 40-foot mural outside the cafeteria over five Saturdays.', ok: true, fb: 'Yes. Facts, numbers and an active verb. Let a quote say how it looks.' },
        { t: 'The mural was being painted by the art club, and it is beautiful.', fb: 'Be verbs and an opinion word (beautiful).' }
      ] },

    { id: 'l9', m: 3, type: 'lesson', title: 'Three kinds of transitions',
      html:
        '<div class="grid2 grid3">' +
          '<div class="panel blue"><h3>Fact</h3><p>A detail you can check.</p><p class="ex">Summer band began July 21 with eight-hour rehearsals for two weeks.</p></div>' +
          '<div class="panel lav"><h3 class="lav">Paraphrase</h3><p>What a person said, in your words. No quote marks.</p><p class="ex">Band director Kevin Holt said the band scored its highest marks in general effect.</p></div>' +
          '<div class="panel blue"><h3>Partial quote</h3><p>A few of their exact words inside your sentence.</p><p class="ex">Holt called the final run “the best of the season.”</p></div>' +
        '</div>' +
        '<div class="callout"><b>The recipe:</b> New fact about the topic + who it connects to = the next speaker’s quote makes sense.<br><span class="muted">Frame: [Time or fact word], [name or group] [did what, with numbers].</span></div>' +
        '<div class="panel plain"><p><b>Link it.</b> The quote after a transition must come from someone in that fact. A fact about Student Council needs a quote from someone in Student Council, not NHS or Brigade.</p>' +
        '<p class="muted" style="margin:0"><b>Word bank</b> · Time: Then, Meanwhile, Later, Next, Finally · Example: For instance, Specifically · Emphasis: In addition, Moreover, Similarly · Contrast: However, Still, Despite, In contrast</p></div>' },

    { id: 'q17', m: 3, type: 'sort', title: 'Name the transition',
      prompt: 'Your notes from the basketball story turned into three transitions. What kind is each one?',
      buckets: ['Fact', 'Paraphrase', 'Partial quote'],
      items: [
        { t: 'The team forced 23 turnovers against Lake Ridge on Feb. 3.', a: 0, why: 'A detail you can check in the stat book: fact.' },
        { t: 'Head coach Dana Price said the full-court press took three weeks to learn.', a: 1, why: 'Price’s idea in your words, attributed, no quote marks: paraphrase.' },
        { t: 'Price called the Lake Ridge game “the best 32 minutes of the season.”', a: 2, why: 'A few exact words inside your sentence: partial quote.' }
      ],
      explain: 'All three are fair game for a transition, as long as they are attributed and free of your own opinion.' },

    { id: 'q18', m: 3, type: 'mc', title: 'Link it',
      prompt: 'Your transition reads: <span class="ex" style="display:block">Student Council sold 600 tickets to the winter formal, 150 more than last year.</span> Which quote should come next?',
      options: [
        { t: '“Tutoring every Tuesday has made me a better listener,” NHS president Leah Grant said. “I explain things differently now.”', fb: 'Strong quote, wrong group. A Student Council fact needs a Student Council speaker.' },
        { t: '“We sold 600 tickets, which is 150 more than last year,” Student Council secretary Mia Torres said.', fb: 'That repeats the facts. Quotes give reactions, not numbers.' },
        { t: '“We stayed after school three days straight hand-stamping tickets,” Student Council secretary Mia Torres said. “When we sold the last one, I finally exhaled.”', ok: true, fb: 'Yes. Someone in that fact reacts to it with emotion and detail.' },
        { t: '“The DJ was the best part,” freshman Owen Hart said.', fb: 'Not linked to Student Council, and a weak one-sentence quote.' }
      ] },

    { id: 'q19', m: 3, type: 'mc', title: 'Write the bridge',
      notes: { tag: 'Reporter’s notes · Debate team', t: '11 members · competed at 6 tournaments this fall · sophomore Noah Bell joined in August with no debate experience · Noah won 4 of 5 rounds at the Oct. 12 tournament · state qualifier Jan. 18' },
      prompt: 'Before: <span class="ex" style="display:block">“We spend more time arguing with each other than with other schools,” senior captain Zoe Patel said. “It is how we get sharp.”</span>After: <span class="ex" style="display:block">“I had never given a speech before August,” Noah said. “Now I volunteer to go first.”</span>Which transition bridges them?',
      options: [
        { t: 'Sophomore Noah Bell joined the team in August with no debate experience. At the Oct. 12 tournament, the sophomore won four of five rounds.', ok: true, fb: 'Yes. New facts, introduces Noah with grade and full name, and sets up his reaction.' },
        { t: 'Noah Bell is an amazing newcomer, and everyone on the team loves him.', fb: 'Opinion (amazing), a vague claim (everyone) and a be verb.' },
        { t: 'Patel said the team argues with each other so it can get sharp.', fb: 'That repeats the quote before it and points to the wrong speaker.' },
        { t: 'Sophomore Noah Bell joined in August. “I had never given a speech before,” Noah said.', fb: 'A transition and a quote never share a paragraph.' }
      ] },

    // ===== Module 4: LQTQ =====
    { id: 'l10', m: 4, type: 'lesson', title: 'Build every story with LQTQ',
      html:
        '<p class="lead-in">Lead, Quote, Transition, Quote. Facts go in transitions. Feelings go in quotes. Each one gets its own paragraph.</p>' +
        '<ol class="chain" aria-label="Story order">' +
          '<li><span class="pc l">L</span><span class="lbl">Lead: hook the reader</span><span class="arr" aria-hidden="true">›</span></li>' +
          '<li><span class="pc q">Q</span><span class="lbl">Quote: feelings and reactions</span><span class="arr" aria-hidden="true">›</span></li>' +
          '<li><span class="pc t">T</span><span class="lbl">Transition: facts and numbers</span><span class="arr" aria-hidden="true">›</span></li>' +
          '<li><span class="pc q">Q</span><span class="lbl">Quote: reacts to the fact</span><span class="arr" aria-hidden="true">›</span></li>' +
          '<li><span class="pc t">T…</span><span class="lbl">Repeat: keep alternating</span><span class="arr" aria-hidden="true">›</span></li>' +
          '<li><span class="pc q">Q</span><span class="lbl">Conclusion: kicker quote</span></li>' +
        '</ol>' +
        '<div class="callout">The <b>nutgraf</b> comes right after the lead or right after the first quote. It is a fact paragraph that tells what the story is about and adds the 5 W’s and H the lead left out.</div>' +
        '<div class="grid2">' +
          '<div class="panel blue"><h3>Always</h3><ul class="yes"><li>Give each quote and each fact its own paragraph.</li><li>Put a quote between every two transitions.</li><li>Put a transition between every two quotes.</li><li>Write short paragraphs.</li><li>End with a strong kicker quote.</li></ul></div>' +
          '<div class="panel lav"><h3 class="lav">Never</h3><ul class="no"><li>Start the story with a quote or a question.</li><li>Start like an English essay with a thesis.</li><li>Use a cheesy, overused opening.</li><li>Put a quote and a transition in the same paragraph.</li><li>Put two quotes or two transitions in a row.</li></ul></div>' +
        '</div>' },

    { id: 'q20', m: 4, type: 'order', title: 'Assemble the story',
      prompt: 'The tech crew story’s paragraphs got scrambled on the page. Use the arrow buttons to put them in LQTQ order, starting with the lead.',
      items: [
        { k: 'L', t: 'Sawdust and wet paint hung in the air of the scene shop. Nine crew members drove the last screws into the set an hour before the doors opened.' },
        { k: 'N', t: 'The theatre tech crew built the set for the fall play in three weeks. The show ran Nov. 7-9 in the auditorium.' },
        { k: 'Q', t: '“I didn’t sit down once on opening night,” junior stage manager Lena Ortiz said. “When the last cue worked, I finally let myself breathe.”' },
        { k: 'T', t: 'Four of the nine crew members joined this year. Freshman Ben Cho learned to run the light board two weeks before the show.' },
        { k: 'Q', t: '“The first time I touched the board, I blacked out the whole stage,” Ben said. “Lena just laughed and showed me the right fader.”' },
        { k: 'T', t: 'Theatre director Carla Mendez said the crew designed the set’s rotating porch on its own. The crew starts building the spring musical set in February.' },
        { k: 'Q', t: '“They never get a curtain call, but every scene stands on something they built,” Mendez said. “That is the part the audience never sees.”' }
      ],
      start: [4, 1, 6, 0, 3, 2, 5],
      hints: [
        'Start with the lead: a short scene. Not a quote, not a fact paragraph.',
        'Next comes the nutgraf: the fact paragraph that says what the story is about.',
        'Then the first quote. Look for a full first reference: grade or title + full name.',
        'A transition goes between every two quotes. Which fact introduces the next speaker?',
        'This quote must react to the transition right before it. Who was just introduced?',
        'Another transition. Which one introduces a new adult speaker?',
        'End with the kicker quote. Mendez was introduced in a transition, so the second reference is the last name.'
      ],
      explain: 'L, N, Q, T, Q, T, Q. Each quote reacts to the transition before it, and the story ends on a kicker.' },

    { id: 'q21', m: 4, type: 'multi', title: 'Final edit: the golf story',
      draft: [
        'Have you ever wondered what it takes to win state?',
        'The girls’ golf team won the state title May 3, its first since 2011.',
        '“I three-putted the first hole and almost cried,” senior Ella Moss said. “By the back nine, I was laughing with my coach.”',
        '“Winning state was amazing!” junior Ava Reed said.',
        'The team practiced five days a week at Pine Hollow. “We never skipped a day,” Ava said.'
      ],
      prompt: 'Select every problem in this draft.',
      options: [
        { t: 'The lead is a question.', ok: true, why: 'Paragraph 1. Never start with a question.' },
        { t: 'The nutgraf comes right after the lead.', why: 'That is correct placement. The nutgraf belongs right after the lead or the first quote.' },
        { t: 'Two quotes run back to back.', ok: true, why: 'Paragraphs 3 and 4. Put a transition between every two quotes.' },
        { t: 'A quote uses an exclamation point.', ok: true, why: 'Paragraph 4. No exclamation points. Ever.' },
        { t: 'Ella’s quote puts said after the first sentence.', why: 'That is exactly where said belongs.' },
        { t: 'A transition and a quote share a paragraph.', ok: true, why: 'Paragraph 5. Each quote and each fact gets its own paragraph.' }
      ],
      explain: 'Four problems: a question lead, two quotes in a row, an exclamation point, and a transition sharing a paragraph with a quote.' },

    { id: 'q22', m: 4, type: 'mc', title: 'Word choice: no wiggle words',
      prompt: 'Which transition follows the word choice guide?',
      options: [
        { t: 'The yearbook staff sold a lot of books really fast.', fb: '“A lot” and “really” are wiggle words. Give the number.' },
        { t: 'The yearbook staff was selling many books.', fb: 'A be verb and a wiggle word (many).' },
        { t: 'The yearbook staff sold 340 books in the first two weeks of sales.', ok: true, fb: 'Yes. An exact number, a time frame and an active verb.' },
        { t: 'The Kempner yearbook staff sold tons of books at Kempner.', fb: 'Readers know which school it is, and “tons” is a wiggle word.' }
      ] },

    { id: 'q23', m: 4, type: 'mc', title: 'Show it',
      prompt: 'Which sentence follows every word choice rule?',
      options: [
        { t: 'The senior that won the art contest painted the mural with 14 colors.', fb: 'People are who. Things are that.' },
        { t: 'The senior who won the art contest painted a beautiful mural.', fb: 'Show it. Skip nice, sweet, beautiful.' },
        { t: 'The senior who won the art contest was painting the mural very carefully.', fb: 'Be verb (was painting) and a lazy adverb (very carefully).' },
        { t: 'The senior who won the art contest painted the mural with 14 colors.', ok: true, fb: 'Yes. Who for a person, an active verb and a specific detail.' }
      ] },

    { id: 'q24', m: 4, type: 'mc', title: 'Pick the kicker',
      prompt: 'The golf story is fixed. Which quote makes the strongest ending?',
      options: [
        { t: '“The team finished with a score of 612,” Ella said.', fb: 'That is a fact. Facts go in transitions, not quotes.' },
        { t: '“It was fun,” Ella said.', fb: 'Obvious and one sentence. A kicker should feel like the end of a song.' },
        { t: '“My freshman year, I couldn’t get the ball off the ground,” Ella said. “Today I got to hold the trophy over my head.”', ok: true, fb: 'Yes. A powerful reflection that looks back and lands the story.' },
        { t: '“We’ll see what happens next year!” Ella said.', fb: 'An exclamation point, and it fades out instead of landing.' }
      ] }
  ];

  var CHECKS = STEPS.filter(function (s) { return s.type !== 'lesson'; });

  /* ---------- State ---------- */
  function fresh() { return { started: false, i: 0, solved: {}, resp: {}, name: '', done: false, doneAt: '' }; }
  var state = load();
  var certUrl = '';

  function load() {
    try {
      var raw = localStorage.getItem(STORE);
      if (raw) {
        var s = JSON.parse(raw);
        if (s && typeof s === 'object' && s.solved) {
          var f = fresh();
          for (var k in f) if (!(k in s)) s[k] = f[k];
          if (typeof s.i !== 'number' || s.i < 0 || s.i >= STEPS.length) s.i = 0;
          return s;
        }
      }
    } catch (e) { /* storage unavailable */ }
    return fresh();
  }
  function save() { try { localStorage.setItem(STORE, JSON.stringify(state)); } catch (e) { /* ignore */ } }

  /* ---------- Helpers ---------- */
  var main = document.getElementById('main');
  function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function letter(i) { return String.fromCharCode(65 + i); }
  function step() { return STEPS[state.i]; }
  function isSolved(s) { return s.type === 'lesson' || !!state.solved[s.id]; }
  function allSolved() { return CHECKS.every(function (s) { return state.solved[s.id]; }); }
  function firstUnsolvedIndex() {
    for (var i = 0; i < STEPS.length; i++) if (!isSolved(STEPS[i])) return i;
    return STEPS.length - 1;
  }

  /* ---------- Rendering ---------- */
  function render(focusHeading) {
    var resetBtn = document.getElementById('resetBtn');
    var prog = document.getElementById('progress');
    resetBtn.hidden = !state.started;
    if (!state.started) {
      prog.hidden = true;
      renderIntro();
    } else if (state.done && allSolved()) {
      prog.hidden = false;
      setProgress(STEPS.length, 'Complete');
      renderCert();
    } else {
      state.done = false;
      // Never land beyond the first unsolved step.
      var max = firstUnsolvedIndex();
      if (state.i > max) state.i = max;
      prog.hidden = false;
      var s = step();
      setProgress(state.i + 1, 'Module ' + s.m + ' · ' + MODULES[s.m]);
      renderStep(s);
    }
    if (focusHeading) {
      var h = main.querySelector('h1, h2');
      if (h) { h.setAttribute('tabindex', '-1'); h.focus(); }
      window.scrollTo(0, 0);
    }
  }

  function setProgress(n, mod) {
    document.getElementById('progLabel').textContent = n >= STEPS.length && state.done ? 'All ' + STEPS.length + ' steps complete' : 'Step ' + n + ' of ' + STEPS.length;
    document.getElementById('progModule').textContent = mod;
    var pct = Math.round(((state.done ? STEPS.length : n - 1) / STEPS.length) * 100);
    document.getElementById('progFill').style.width = pct + '%';
  }

  function renderIntro() {
    main.innerHTML =
      '<section class="card hero">' +
        '<p class="eyebrow">2027 Yearbook · In the Spotlight</p>' +
        '<h1>LQTQ Story Lab</h1>' +
        '<p class="lead-in">Every yearbook story uses the same pattern: Lead, Quote, Transition, Quote. In this lab you’ll work the copy desk: sort drafts, fix quotes, build bridges and assemble a full story.</p>' +
        '<ul class="modules">' +
          '<li><b>L</b><span>Leads that hook</span></li>' +
          '<li><b>Q</b><span>Quotes worth printing</span></li>' +
          '<li><b>T</b><span>Transitions that bridge</span></li>' +
          '<li><b>LQTQ</b><span>Put it all together</span></li>' +
        '</ul>' +
        '<p class="muted">' + STEPS.length + ' short steps · ' + CHECKS.length + ' checkpoints. Get each checkpoint right to move on, and you can retry as many times as you need. Your progress saves in this browser.</p>' +
        '<button type="button" class="btn btn-primary btn-lg" id="startBtn">Start</button>' +
      '</section>';
  }

  function renderStep(s) {
    var solved = isSolved(s);
    var kind = s.type === 'lesson' ? 'Tip' : 'Checkpoint';
    var html = '<section class="card step">' +
      '<p class="eyebrow">' + kind + ' <span class="kind">· Module ' + s.m + ': ' + MODULES[s.m] + '</span></p>' +
      '<h2 id="stepTitle">' + esc(s.title) + '</h2>';

    if (s.type === 'lesson') html += s.html;
    else {
      if (s.notes) html += '<div class="notes"><span class="tag">' + s.notes.tag + '</span>' + s.notes.t + '</div>';
      if (s.draft) {
        html += '<div class="notes draft"><span class="tag">Draft · paragraphs 1–' + s.draft.length + '</span>';
        s.draft.forEach(function (p, i) { html += '<p><span class="pn">' + (i + 1) + '</span>' + p + '</p>'; });
        html += '</div>';
      }
      html += '<p class="prompt" id="prompt-' + s.id + '">' + s.prompt + '</p>';
      html += '<div id="activity">' + activityHtml(s, solved) + '</div>';
    }

    html += '<div id="fb" class="feedback" role="status" aria-live="polite"></div>';
    html += '<div class="nav">' +
      (state.i > 0 ? '<button type="button" class="btn btn-ghost" id="backBtn">← Back</button>' : '<span></span>') +
      '<button type="button" class="btn btn-primary" id="nextBtn"' + (solved ? '' : ' disabled') + '>' +
        (state.i === STEPS.length - 1 ? 'Finish' : 'Continue →') + '</button>' +
      '</div></section>';
    main.innerHTML = html;
    if (solved && s.type !== 'lesson') showSolvedFeedback(s);
  }

  function activityHtml(s, solved) {
    var r = state.resp[s.id];
    var h = '';
    if (s.type === 'mc') {
      var tried = (r && r.tried) || [];
      h += '<ul class="opts" role="list" aria-labelledby="prompt-' + s.id + '">';
      s.options.forEach(function (o, i) {
        var cls = 'opt';
        if (o.ok && solved) cls += ' correct';
        else if (tried.indexOf(i) > -1 && !o.ok) cls += ' wrong';
        h += '<li><button type="button" class="' + cls + '" data-act="mc" data-i="' + i + '" data-key="mc' + i + '"' + (solved ? ' disabled' : '') + '>' +
          '<span class="key" aria-hidden="true">' + letter(i) + '</span><span>' + o.t + '</span></button></li>';
      });
      h += '</ul>';
    } else if (s.type === 'multi') {
      var sel = (r && r.sel) || [];
      h += '<ul class="opts" role="list">';
      s.options.forEach(function (o, i) {
        var on = sel.indexOf(i) > -1;
        var cls = 'opt check' + (solved && o.ok ? ' correct' : '');
        h += '<li><label class="' + cls + '"><input type="checkbox" data-act="multi" data-i="' + i + '" data-key="mu' + i + '"' + (on ? ' checked' : '') + (solved ? ' disabled' : '') + '><span>' + o.t + '</span></label></li>';
      });
      h += '</ul>';
      if (!solved) h += '<div class="checkrow"><button type="button" class="btn btn-primary" data-act="check" data-key="check">Check my answer</button></div>';
    } else if (s.type === 'sort') {
      var pick = (r && r.pick) || {};
      var marks = (r && r.marks) || {};
      s.items.forEach(function (it, i) {
        var cls = 'sort-item';
        if (solved) cls += ' right';
        else if (marks[i] === true) cls += ' right';
        else if (marks[i] === false) cls += ' miss';
        h += '<div class="' + cls + '"><p id="si-' + s.id + '-' + i + '"><span class="muted">' + (i + 1) + '.</span> ' + it.t + '</p>' +
          '<div class="seg" role="group" aria-labelledby="si-' + s.id + '-' + i + '">';
        s.buckets.forEach(function (b, j) {
          h += '<button type="button" data-act="sort" data-i="' + i + '" data-j="' + j + '" data-key="so' + i + '-' + j + '" aria-pressed="' + (pick[i] === j) + '"' + (solved ? ' disabled' : '') + '>' + esc(b) + '</button>';
        });
        h += '</div></div>';
      });
      if (!solved) h += '<div class="checkrow"><button type="button" class="btn btn-primary" data-act="check" data-key="check">Check my answer</button></div>';
    } else if (s.type === 'order') {
      var ord = (r && r.ord) || s.start.slice();
      h += '<ol class="order" aria-label="Story paragraphs, in current order">';
      ord.forEach(function (idx, pos) {
        var ok = solved;
        h += '<li class="' + (ok ? 'right' : '') + '"><span class="pos" aria-hidden="true">' + (pos + 1) + '</span>' +
          '<span class="txt" id="ord-' + idx + '">' + (ok ? '<b style="font-family:system-ui">' + s.items[idx].k + ' · </b>' : '') + s.items[idx].t + '</span>';
        if (!solved) {
          h += '<span class="mv">' +
            '<button type="button" data-act="up" data-pos="' + pos + '" data-key="up' + idx + '" aria-label="Move paragraph ' + (pos + 1) + ' up"' + (pos === 0 ? ' disabled' : '') + '>↑</button>' +
            '<button type="button" data-act="down" data-pos="' + pos + '" data-key="dn' + idx + '" aria-label="Move paragraph ' + (pos + 1) + ' down"' + (pos === ord.length - 1 ? ' disabled' : '') + '>↓</button>' +
            '</span>';
        }
        h += '</li>';
      });
      h += '</ol>';
      if (!solved) h += '<div class="checkrow"><button type="button" class="btn btn-primary" data-act="check" data-key="check">Check my order</button></div>';
    } else if (s.type === 'spot') {
      var picked = (r && r.sel) || [];
      var flagged = (r && r.flag) || {};
      h += '<div class="spot" role="group" aria-label="Quote to edit. Each part is a button you can select.">';
      s.tokens.forEach(function (tk, i) {
        var on = picked.indexOf(i) > -1;
        var cls = 'tok';
        if (solved && tk.err) cls += ' found';
        else if (flagged[i] === 'false') cls += ' false';
        h += (tk.sp === false ? '' : (i ? ' ' : '')) +
          '<button type="button" class="' + cls + '" data-act="spot" data-i="' + i + '" data-key="sp' + i + '" aria-pressed="' + (solved ? !!tk.err : on) + '"' + (solved ? ' disabled' : '') + '>' + esc(tk.t) + '</button>';
      });
      h += '</div>';
      if (!solved) h += '<div class="checkrow"><button type="button" class="btn btn-primary" data-act="check" data-key="check">Check my edits</button></div>';
    }
    return h;
  }

  function setFeedback(kind, html) {
    var fb = document.getElementById('fb');
    fb.className = 'feedback ' + kind;
    fb.innerHTML = html;
  }

  function showSolvedFeedback(s) {
    var msg = '';
    if (s.type === 'mc') {
      var o = s.options.filter(function (x) { return x.ok; })[0];
      msg = o.fb;
    } else if (s.type === 'spot') {
      msg = 'All 3 mistakes found. Corrected:<p class="ex">' + esc(s.fixed) + '</p>';
    } else {
      msg = s.explain;
    }
    setFeedback('good', '<strong>Correct.</strong>' + msg);
  }

  function rerenderActivity(focusKey) {
    var s = step();
    document.getElementById('activity').innerHTML = activityHtml(s, isSolved(s));
    if (focusKey) {
      var el = main.querySelector('[data-key="' + focusKey + '"]');
      if (el && !el.disabled) el.focus();
      else if (isSolved(s)) document.getElementById('nextBtn').focus();
    }
  }

  function markSolved(s) {
    state.solved[s.id] = true;
    save();
    rerenderActivity(null);
    showSolvedFeedback(s);
    var next = document.getElementById('nextBtn');
    next.disabled = false;
    next.focus();
  }

  /* ---------- Answer handling ---------- */
  function resp(s) { return state.resp[s.id] || (state.resp[s.id] = {}); }

  function onMc(s, i) {
    var r = resp(s);
    r.tried = r.tried || [];
    if (r.tried.indexOf(i) < 0) r.tried.push(i);
    var o = s.options[i];
    if (o.ok) { markSolved(s); return; }
    save();
    rerenderActivity('mc' + i);
    setFeedback('bad', '<strong>Not quite. Try again.</strong>' + o.fb);
  }

  function onCheck(s) {
    var r = resp(s);
    if (s.type === 'multi') {
      var sel = r.sel || [];
      var wrong = sel.filter(function (i) { return !s.options[i].ok; });
      var missing = s.options.filter(function (o, i) { return o.ok && sel.indexOf(i) < 0; }).length;
      if (!wrong.length && !missing) { markSolved(s); return; }
      var msg = '';
      if (wrong.length) msg += '<p>Take another look at: “' + s.options[wrong[0]].t + '” ' + s.options[wrong[0]].why + '</p>';
      if (missing) msg += '<p>You still have ' + missing + ' problem' + (missing > 1 ? 's' : '') + ' left to find.</p>';
      setFeedback('bad', '<strong>Not yet.</strong>' + msg);
    } else if (s.type === 'sort') {
      var pick = r.pick || {};
      var unset = s.items.filter(function (it, i) { return pick[i] === undefined; }).length;
      if (unset) { setFeedback('info', '<strong>Finish sorting first.</strong>Choose a category for every item (' + unset + ' left).'); return; }
      var misses = [];
      r.marks = {};
      s.items.forEach(function (it, i) {
        r.marks[i] = pick[i] === it.a;
        if (!r.marks[i]) misses.push(i);
      });
      if (!misses.length) { r.marks = {}; markSolved(s); return; }
      save();
      rerenderActivity('check');
      var list = '<ul>' + misses.map(function (i) { return '<li>Item ' + (i + 1) + ' needs another look. ' + hintFor(s, i) + '</li>'; }).join('') + '</ul>';
      setFeedback('bad', '<strong>' + (s.items.length - misses.length) + ' of ' + s.items.length + ' correct.</strong>Change the items marked in red, then check again.' + list);
    } else if (s.type === 'order') {
      var ord = r.ord || s.start.slice();
      var right = 0, firstBad = -1;
      ord.forEach(function (idx, pos) { if (idx === pos) right++; else if (firstBad < 0) firstBad = pos; });
      if (right === ord.length) { markSolved(s); return; }
      setFeedback('bad', '<strong>' + right + ' of ' + ord.length + ' paragraphs are in the right spot.</strong>Spot ' + (firstBad + 1) + ': ' + s.hints[firstBad]);
    } else if (s.type === 'spot') {
      var sel2 = r.sel || [];
      var errs = s.tokens.map(function (t, i) { return t.err ? i : -1; }).filter(function (i) { return i > -1; });
      var falseHits = sel2.filter(function (i) { return !s.tokens[i].err; });
      var found = errs.filter(function (i) { return sel2.indexOf(i) > -1; });
      r.flag = {};
      falseHits.forEach(function (i) { r.flag[i] = 'false'; });
      if (!falseHits.length && found.length === errs.length) { r.flag = {}; markSolved(s); return; }
      save();
      rerenderActivity('check');
      var m = '<p>You found ' + found.length + ' of ' + errs.length + ' mistakes.</p>';
      if (falseHits.length) m += '<p>The part marked in red is correct as written. Deselect it.</p>';
      if (found.length) m += '<ul>' + found.map(function (i) { return '<li>“' + esc(s.tokens[i].t) + '” ' + s.tokens[i].why + '</li>'; }).join('') + '</ul>';
      if (found.length < errs.length) m += '<p>Tip: check the punctuation at the end of each sentence and the word right after the first quote.</p>';
      setFeedback('bad', '<strong>Keep editing.</strong>' + m);
    }
  }

  // Gentle hint without giving away the answer.
  function hintFor(s, i) {
    if (s.id === 'q1') return 'Does it sum up the 5 W’s and H, or hook with one moment?';
    if (s.id === 'q4') return 'Compare it to the frame for each lead type.';
    if (s.id === 'q7') return 'Does it show emotion, personality, details or why — or is it obvious, one sentence or a fact?';
    if (s.id === 'q14') return 'Could you check it in a record? Facts go in transitions.';
    if (s.id === 'q15') return 'Look for you/we, an opinion word, a vague word or a be verb.';
    if (s.id === 'q17') return 'Quote marks? Attribution with said? Or a detail you can check?';
    return '';
  }

  /* ---------- Certificate ---------- */
  function renderCert() {
    main.innerHTML =
      '<section class="card">' +
        '<p class="eyebrow">Complete</p>' +
        '<h2>You finished the LQTQ Story Lab</h2>' +
        '<p>You got all ' + CHECKS.length + ' checkpoints right across four modules: leads, quotes, transitions and the LQTQ formula.</p>' +
        '<div class="panel blue"><h3>Before you submit your next story</h3><ul class="yes">' +
          '<li>Lead hooks the reader in under 35 words. No quote or question.</li>' +
          '<li>Nutgraf says what the story is about.</li>' +
          '<li>Quotes and transitions take turns, each in its own paragraph.</li>' +
          '<li>Each quote links to the transition before it.</li>' +
          '<li>Ends with a strong kicker quote.</li></ul></div>' +
        '<div class="field"><label for="nameInput">Your name for the certificate</label>' +
          '<input id="nameInput" type="text" maxlength="80" autocomplete="name" value="' + esc(state.name) + '">' +
          '<span class="hint">Your name stays in this browser. It is not sent anywhere.</span></div>' +
        '<div class="row"><button type="button" class="btn btn-primary" id="makeCert">Create my certificate</button></div>' +
        '<div id="certMsg" class="feedback" role="status" aria-live="polite"></div>' +
        '<div id="certOut" class="cert-preview" hidden></div>' +
        '<div class="nav"><button type="button" class="btn btn-ghost" id="backBtn">← Back</button></div>' +
      '</section>';
  }

  function clearCert() {
    if (certUrl) { URL.revokeObjectURL(certUrl); certUrl = ''; }
    var out = document.getElementById('certOut');
    if (out) { out.hidden = true; out.innerHTML = ''; }
  }

  function makeCert() {
    var input = document.getElementById('nameInput');
    var name = input.value.replace(/\s+/g, ' ').trim();
    var msg = document.getElementById('certMsg');
    if (!name) {
      msg.className = 'feedback bad';
      msg.innerHTML = '<strong>Add your name first.</strong>Type your name, then create the certificate.';
      input.focus();
      return;
    }
    if (!allSolved()) return;
    state.name = name; save();
    clearCert();
    var date = state.doneAt ? new Date(state.doneAt) : new Date();
    var dateStr = date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    var canvas = drawCert(name, dateStr);
    canvas.toBlob(function (blob) {
      if (!blob) return;
      certUrl = URL.createObjectURL(blob);
      var file = 'LQTQ-Story-Lab-Certificate-' + name.replace(/[^a-z0-9]+/gi, '-').replace(/^-|-$/g, '') + '.png';
      var out = document.getElementById('certOut');
      out.innerHTML =
        '<img src="' + certUrl + '" alt="Certificate of completion for ' + esc(name) + ', ' + TITLE + ', completed ' + esc(dateStr) + '">' +
        '<div class="row"><a class="btn btn-primary" id="dlBtn" href="' + certUrl + '" download="' + esc(file) + '">Download certificate (PNG)</a>' +
        '<a class="savelink" id="saveLink" href="' + certUrl + '" download="' + esc(file) + '">Save link</a></div>';
      out.hidden = false;
      msg.className = 'feedback good';
      msg.innerHTML = '<strong>Your certificate is ready.</strong>Download it below.';
      document.getElementById('dlBtn').focus();
    }, 'image/png');
  }

  function drawCert(name, dateStr) {
    var W = 1650, H = 1275;
    var c = document.createElement('canvas');
    c.width = W; c.height = H;
    var x = c.getContext('2d');
    var serif = 'Georgia, "Times New Roman", serif';
    var sans = 'system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif';

    x.fillStyle = '#ffffff'; x.fillRect(0, 0, W, H);
    var g = x.createLinearGradient(0, 0, W, 0);
    g.addColorStop(0, '#8a6cc9'); g.addColorStop(.6, '#4f78c9'); g.addColorStop(1, '#9dbbe6');
    x.fillStyle = g;
    x.fillRect(0, 0, W, 34); x.fillRect(0, H - 34, W, 34);
    x.strokeStyle = '#d6dce8'; x.lineWidth = 4; x.strokeRect(70, 90, W - 140, H - 180);

    // LQTQ tiles
    var tiles = [['L', '#eee8f6', '#6a43a6'], ['Q', '#e5eef9', '#2d5a99'], ['T', '#eee8f6', '#6a43a6'], ['Q', '#e5eef9', '#2d5a99']];
    var tw = 74, gap = 16, tx = (W - (tiles.length * tw + (tiles.length - 1) * gap)) / 2;
    tiles.forEach(function (t, i) {
      var px = tx + i * (tw + gap);
      x.fillStyle = t[1]; roundRect(x, px, 150, tw, tw, 14); x.fill();
      x.fillStyle = t[2]; x.font = '800 40px ' + sans; x.textAlign = 'center'; x.textBaseline = 'middle';
      x.fillText(t[0], px + tw / 2, 150 + tw / 2 + 2);
    });

    x.textAlign = 'center'; x.textBaseline = 'alphabetic';
    x.fillStyle = '#55637a'; x.font = '600 30px ' + sans;
    x.fillText('2027 YEARBOOK · WRITER TRAINING', W / 2, 300);
    x.fillStyle = '#26344a'; x.font = '600 76px ' + serif;
    x.fillText('Certificate of Completion', W / 2, 400);
    x.fillStyle = '#55637a'; x.font = '32px ' + sans;
    x.fillText('This certifies that', W / 2, 485);

    // Name, fitted to width
    var maxW = W - 300, size = 104;
    x.fillStyle = '#2f4190';
    do { x.font = '700 ' + size + 'px ' + serif; size -= 4; } while (x.measureText(name).width > maxW && size >= 40);
    x.fillText(name, W / 2, 605, maxW);
    x.strokeStyle = '#a9b6d6'; x.lineWidth = 2;
    x.beginPath(); x.moveTo(W / 2 - 520, 640); x.lineTo(W / 2 + 520, 640); x.stroke();

    x.fillStyle = '#26344a'; x.font = '32px ' + sans;
    x.fillText('has successfully completed', W / 2, 715);
    x.font = '700 54px ' + serif;
    x.fillText(TITLE, W / 2, 795);

    x.fillStyle = '#55637a'; x.font = '28px ' + sans;
    wrap(x, 'Completion criteria: answered all ' + CHECKS.length + ' checkpoints correctly across four modules — Leads, Quotes, Transitions and the LQTQ Story Formula.', W / 2, 875, 1150, 40);

    x.fillStyle = '#26344a'; x.font = '600 30px ' + sans;
    x.fillText('Completed ' + dateStr, W / 2, 1030);
    x.fillStyle = '#6a43a6'; x.font = 'italic 26px ' + serif;
    x.fillText('Facts go in transitions. Feelings go in quotes.', W / 2, 1100);
    return c;
  }

  function wrap(x, text, cx, y, maxW, lh) {
    var words = text.split(' '), line = '';
    words.forEach(function (w) {
      var test = line ? line + ' ' + w : w;
      if (x.measureText(test).width > maxW && line) { x.fillText(line, cx, y); line = w; y += lh; }
      else line = test;
    });
    if (line) x.fillText(line, cx, y);
  }

  function roundRect(x, px, py, w, h, r) {
    x.beginPath();
    x.moveTo(px + r, py); x.arcTo(px + w, py, px + w, py + h, r); x.arcTo(px + w, py + h, px, py + h, r);
    x.arcTo(px, py + h, px, py, r); x.arcTo(px, py, px + w, py, r); x.closePath();
  }

  /* ---------- Events ---------- */
  main.addEventListener('click', function (e) {
    var t = e.target.closest('button');
    if (!t || t.disabled) return;
    if (t.id === 'startBtn') { state.started = true; state.i = 0; save(); render(true); return; }
    if (t.id === 'backBtn') {
      if (state.done) { state.done = false; clearCert(); state.i = STEPS.length - 1; }
      else if (state.i > 0) state.i--;
      save(); render(true); return;
    }
    if (t.id === 'nextBtn') {
      if (!isSolved(step())) return;
      if (state.i < STEPS.length - 1) state.i++;
      else if (allSolved()) { state.done = true; if (!state.doneAt) state.doneAt = new Date().toISOString(); }
      save(); render(true); return;
    }
    if (t.id === 'makeCert') { makeCert(); return; }

    var s = step();
    if (!s || isSolved(s)) return;
    var act = t.getAttribute('data-act');
    var r;
    if (act === 'mc') onMc(s, +t.getAttribute('data-i'));
    else if (act === 'check') onCheck(s);
    else if (act === 'sort') {
      r = resp(s); r.pick = r.pick || {};
      var i = +t.getAttribute('data-i');
      r.pick[i] = +t.getAttribute('data-j');
      if (r.marks) delete r.marks[i];
      save(); rerenderActivity(t.getAttribute('data-key'));
    } else if (act === 'up' || act === 'down') {
      r = resp(s); r.ord = r.ord || s.start.slice();
      var pos = +t.getAttribute('data-pos'), to = act === 'up' ? pos - 1 : pos + 1;
      if (to < 0 || to >= r.ord.length) return;
      var tmp = r.ord[pos]; r.ord[pos] = r.ord[to]; r.ord[to] = tmp;
      save();
      var key = t.getAttribute('data-key');
      rerenderActivity(key);
      // If the button for this paragraph is now disabled (moved to an end), focus its other arrow.
      if (document.activeElement === document.body || !document.activeElement || document.activeElement.disabled) {
        var other = main.querySelector('[data-key="' + (key.slice(0, 2) === 'up' ? 'dn' : 'up') + key.slice(2) + '"]');
        if (other) other.focus();
      }
      setFeedback('', '');
    } else if (act === 'spot') {
      r = resp(s); r.sel = r.sel || [];
      var k = +t.getAttribute('data-i'), at = r.sel.indexOf(k);
      if (at > -1) r.sel.splice(at, 1); else r.sel.push(k);
      if (r.flag) delete r.flag[k];
      save(); rerenderActivity(t.getAttribute('data-key'));
    }
  });

  main.addEventListener('change', function (e) {
    var t = e.target;
    if (t.getAttribute('data-act') !== 'multi') return;
    var s = step(); if (isSolved(s)) return;
    var r = resp(s); r.sel = r.sel || [];
    var i = +t.getAttribute('data-i'), at = r.sel.indexOf(i);
    if (t.checked && at < 0) r.sel.push(i);
    if (!t.checked && at > -1) r.sel.splice(at, 1);
    save();
  });

  main.addEventListener('input', function (e) {
    if (e.target.id !== 'nameInput') return;
    state.name = e.target.value; save();
    clearCert();
    var msg = document.getElementById('certMsg');
    if (msg) { msg.className = 'feedback'; msg.innerHTML = ''; }
  });

  main.addEventListener('keydown', function (e) {
    if (e.target.id === 'nameInput' && e.key === 'Enter') { e.preventDefault(); makeCert(); }
  });

  // Start over with in-page confirmation
  var confirmBox = document.getElementById('confirm');
  var resetBtn = document.getElementById('resetBtn');
  function openConfirm() { confirmBox.hidden = false; document.getElementById('confirmTitle').focus(); }
  function closeConfirm() { confirmBox.hidden = true; resetBtn.focus(); }
  resetBtn.addEventListener('click', openConfirm);
  document.getElementById('confirmNo').addEventListener('click', closeConfirm);
  document.getElementById('confirmYes').addEventListener('click', function () {
    clearCert();
    try { localStorage.removeItem(STORE); } catch (e) { /* ignore */ }
    state = fresh();
    confirmBox.hidden = true;
    render(true);
  });
  confirmBox.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') { e.preventDefault(); closeConfirm(); }
    if (e.key === 'Tab') {
      var f = confirmBox.querySelectorAll('button');
      var first = f[0], last = f[f.length - 1];
      if (e.shiftKey && (document.activeElement === first || document.activeElement.id === 'confirmTitle')) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });

  render(false);
})();
