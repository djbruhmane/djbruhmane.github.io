/* ============================================================
   data.js — THE ONLY FILE YOU EVER EDIT
   Edit on github.com → Commit → live in ~1-10 min. That's it.
   cost:   number (points) or "FREE" or any string ("20pt stake")
           "?" renders as a TBC pill
   status: "" | "new" | "updated" | "disabled"
           disabled cards grey out; the badge auto-detects the type
           from the description: (Broadcaster only) / (Mod only) /
           (VIP+ and up) / (Offline) — anything else shows Soon™
   ============================================================ */

window.MENU = {
  streamer: "drewdj45",
  updated: "2026-10-28",

  links: [
    { label: "Twitch", url: "https://www.twitch.tv/drewdj4" },
    { label: "YouTube", url: "https://www.youtube.com/channel/UCOO1k_PDmTEQT6TGnuIFuDA?sub_confirmation=1" },
    { label: "StreamLinkr", url: "https://streamlinkr.tv/" }
  ],

  intro: "<b>AYO YO YO!</b> You earn <b>1 point every minute</b> you watch — as long as you're subbed and actually vibing in chat. Spend 'em on chaos below. In chat? Type <b>!c</b> or <b>!command</b> for the quick list.",

  sections: [
    {
      name: "🎵 Music & Media",
      note: "<b>PRO-TIP:</b> YouTube links are auto-blocked in chat — just paste the <b>11-character video ID</b> instead (e.g. <i>dQw4w9WgXcQ</i>) and it queues automatically. Title + uploader name still works too!",
      items: [
        { name: "!sr ID/Title", cost: 21, desc: "Take over as DJ! Track or playlist, no link needed.", cooldown: "", status: "" },
        { name: "!mrs title", cost: 20, desc: "Classic song request — just like !sr.", cooldown: "", status: "" },
        { name: "!mrv title", cost: 25, desc: "Video request — same vibe, bigger screen.", cooldown: "", status: "" },
        { name: "!bump", cost: 15, desc: "Wanna skip the queue? BUMP IT!", cooldown: "", status: "" },
        { name: "!skip", cost: "?", desc: "Skip the current song or request.", cooldown: "", status: "" },
        { name: "!Gif whatever", cost: 15, desc: "Plays a GIF of whatever you request. Yes, whatever.", cooldown: "", status: "" },
        { name: "!GifClip whatever", cost: 20, desc: "Like !Gif, but a short video clip. Cinema.", cooldown: "", status: "" }
      ]
    },
    {
      name: "💥 Chaos",
      items: [
        { name: "!nuts", cost: 42, desc: "THINK FAST!!!", cooldown: "", status: "" },
        { name: "!TTS text", cost: 15, desc: "Classic text-to-speech. Make the robot say it.", cooldown: "", status: "" },
        { name: "!say text", cost: "?", desc: "Make the bot say something out loud.", cooldown: "", status: "" },
        { name: "!twerk", cost: 31, desc: "Plays WorldStar's Top Video of the Week. You already know.", cooldown: "", status: "" },
        { name: "!brap", cost: 15, desc: "No description available. It speaks for itself. 💨", cooldown: "", status: "" },
        { name: "!Hog", cost: 48, desc: "Summon Him.", cooldown: "", status: "" },
        { name: "!bug", cost: 22, desc: "Take over my keyboard. What could possibly go wrong.", cooldown: "", status: "" },
        { name: "!brbbug", cost: "?", desc: "Plays the bug BRB screen.", cooldown: "", status: "" },
        { name: "!brbspace", cost: "?", desc: "Plays the space BRB screen.", cooldown: "", status: "" },
        { name: "!shutup", cost: 33, desc: "I shut up for 5 minutes. Use it wisely.", cooldown: "", status: "" },
        { name: "!spooky", cost: 55, desc: "BOO!", cooldown: "", status: "" },
        { name: "!chill", cost: 26, desc: "Take a chill pill.", cooldown: "", status: "" },
        { name: "!rainbow", cost: 33, desc: "Taste the Rainbow!!!", cooldown: "", status: "" },
        { name: "!dragon", cost: 33, desc: "Flame!!!", cooldown: "", status: "" },
        { name: "!Chef item", cost: 32, desc: "Tutorial RIGHT NOW. Example: !chef Egg", cooldown: "", status: "" },
        { name: "!gamer", cost: 25, desc: "Tell me how to play — style, strategy, chaos. Your call.", cooldown: "", status: "" },
        { name: "!switchgame", cost: 555, desc: "Pick a game I own and we switch. Big Boss energy.", cooldown: "", status: "" }
      ]
    },
    {
      name: "🎡 The Wheel",
      items: [
        { name: "!spin", cost: 88, desc: "Spin the Wheel! Points, media picks, host challenges, Pick-my-PFP and more. Jackpot up to +222!", cooldown: "", status: "" },
        { name: "!spinner", cost: "?", desc: "Alternative spin command.", cooldown: "", status: "" },
        { name: "!addSpin", cost: 5, desc: "Add YOUR idea to the wheel. Be nice. Ish.", cooldown: "", status: "" },
        { name: "!wheeladd", cost: "?", desc: "Add to the wheel (alias).", cooldown: "", status: "" }
      ]
    },
    {
      name: "🎮 Games & Gambling",
      items: [
        { name: "!bet option amount", cost: "Your bet", desc: "Wager on an option. E.g. !bet Yes 100", cooldown: "", status: "" },
        { name: "!catch", cost: 10, desc: "A wild Pokémon appears! Throw a ball, fill your Pokédex (!pokedex).", cooldown: "", status: "" },
        { name: "!pokedex", cost: "FREE", desc: "Check your caught Pokémon. Gotta catch 'em all, apparently.", cooldown: "", status: "" },
        { name: "!rob @user", cost: "20pt stake", desc: "PvP Heist! 40% chance to steal 10–20% of a lad's points (cap 200). Caught? 15pt fine. Targets need 15+ pts.", cooldown: "15 min", status: "" },
        { name: "!crime", cost: "FREE", desc: "50% chance to earn 15–40pts, 50% chance to pay a 10–25pt fine. No skill required.", cooldown: "15 min", status: "" },
        { name: "!games", cost: "FREE", desc: "List all the available chat games.", cooldown: "", status: "" },
        { name: "!Gamble", cost: "Your bet", desc: "Feeling lucky? The house always wins. (It does.)", cooldown: "", status: "" },
        { name: "!scratchcard", cost: 25, desc: "Tiny odds, but every buy feeds the jackpot pool!", cooldown: "", status: "" },
        { name: "!givepoints @user", cost: "FREE", desc: "Gift some of your points to a homie. Generosity is the meta.", cooldown: "", status: "" }
      ]
    },
    {
      name: "♠️ Blackjack",
      note: "Start a game with <b>!blackjack</b>. You can play the House or duel other chatters. Standard rules apply.",
      items: [
        { name: "!blackjack", cost: "Your bet", desc: "Start a standard game of 21 against the House.", cooldown: "", status: "" },
        { name: "!hit", cost: "FREE", desc: "Take another card.", cooldown: "", status: "" },
        { name: "!stand", cost: "FREE", desc: "Keep your current hand.", cooldown: "", status: "" },
        { name: "!double", cost: "FREE", desc: "Double your bet and take one more card.", cooldown: "", status: "" },
        { name: "!split", cost: "FREE", desc: "Split a pair into two separate hands.", cooldown: "", status: "" },
        { name: "!surrender", cost: "FREE", desc: "Forfeit the hand and lose half your bet.", cooldown: "", status: "" },
        { name: "!duel @user", cost: "?", desc: "Challenge a homie to a 1v1 Blackjack duel.", cooldown: "", status: "" },
        { name: "!accept", cost: "FREE", desc: "Accept an incoming duel request.", cooldown: "", status: "" },
        { name: "!decline", cost: "FREE", desc: "Decline an incoming duel request.", cooldown: "", status: "" },
        { name: "!stats", cost: "FREE", desc: "Check your personal Blackjack win/loss record.", cooldown: "", status: "" },
        { name: "!allstats", cost: "FREE", desc: "Check the global Blackjack leaderboard.", cooldown: "", status: "" },
        { name: "!house", cost: "?", desc: "Start a game against the House.", cooldown: "", status: "" },
        { name: "!join", cost: "FREE", desc: "Join the current House game.", cooldown: "", status: "" },
        { name: "!insurance", cost: "FREE", desc: "Buy insurance against a dealer Blackjack.", cooldown: "", status: "disabled" },
        { name: "!deal", cost: "FREE", desc: "Deal a new hand.", cooldown: "", status: "disabled" },
        { name: "!quit", cost: "FREE", desc: "Quit the current game.", cooldown: "", status: "disabled" },
        { name: "!repeat", cost: "FREE", desc: "Repeat the last bot message.", cooldown: "", status: "disabled" },
        { name: "!resettut", cost: "FREE", desc: "Reset the tutorial (Mod only).", cooldown: "", status: "disabled" }
      ]
    },
    {
      name: "🪢 Hangman",
      note: "Guess the word letter by letter. <b>!g [letter]</b> to guess.",
      items: [
        { name: "!hangman / !hm", cost: "FREE", desc: "Start a game of Hangman.", cooldown: "", status: "" },
        { name: "!g [letter]", cost: "FREE", desc: "Guess a letter.", cooldown: "", status: "" },
        { name: "!hma", cost: "FREE", desc: "Enable Hangman Addict mode for longer words.", cooldown: "", status: "" },
        { name: "!hmr", cost: "FREE", desc: "Repeat the current Hangman board state.", cooldown: "", status: "" },
        { name: "!hmp", cost: "FREE", desc: "Personal Hangman stats (Offline).", cooldown: "", status: "disabled" },
        { name: "!hml", cost: "FREE", desc: "Lookup another user's Hangman stats (Offline).", cooldown: "", status: "disabled" },
        { name: "!hms", cost: "FREE", desc: "Hangman leaderboard (Offline).", cooldown: "", status: "disabled" }
      ]
    },
    {
      name: "🧠 Trivia",
      note: "Match starts with <b>!trivia</b> or <b>!t</b>. Win points based on difficulty!",
      items: [
        { name: "!trivia / !t", cost: "FREE", desc: "Start a Trivia match.", cooldown: "", status: "" },
        { name: "!suggest", cost: "FREE", desc: "Suggest a question for the Trivia pool.", cooldown: "", status: "" },
        { name: "!what", cost: 10, desc: "On-screen guesser. Winner takes the pot. Don't overthink it.", cooldown: "", status: "" },
        { name: "!TA", cost: "FREE", desc: "Trivia Addict status/toggle.", cooldown: "", status: "" },
        { name: "!fctrivia", cost: "FREE", desc: "Force end the current Trivia game (Mod only).", cooldown: "", status: "disabled" },
        { name: "!skiptrivia", cost: "FREE", desc: "Skip the current Trivia question (Mod only).", cooldown: "", status: "disabled" },
        { name: "!tstats", cost: "FREE", desc: "Personal Trivia stats (Offline).", cooldown: "", status: "disabled" },
        { name: "!tss", cost: "FREE", desc: "Search the Trivia leaderboard (Offline).", cooldown: "", status: "disabled" },
        { name: "!ttb", cost: "FREE", desc: "Top Trivia board (Offline).", cooldown: "", status: "disabled" }
      ]
    },
    {
      name: "🎰 Slots",
      items: [
        { name: "!slots", cost: "?", desc: "Play the slot machine. Good luck.", cooldown: "", status: "" }
      ]
    },
    {
      name: "🎲 Quick Games",
      note: "Fast, low-stakes, zero skill required. The bot referees, the bot judges, the bot remembers.",
      items: [
        { name: "!8ball question", cost: "FREE", desc: "Ask the magic 8-ball. It has seen things it cannot unsee.", cooldown: "", status: "" },
        { name: "!rps @user", cost: "FREE", desc: "Rock, Paper, Scissors vs another chatter. No skill. All pride.", cooldown: "", status: "" },
        { name: "!rollp", cost: "?", desc: "Roll for points. The dice are unsympathetic.", cooldown: "", status: "" }, // ⚠ panel looked like Mod+ — move to Mod Tools if so
        { name: "!lockflip", cost: "?", desc: "Coin flip with your points locked in. Call it in the air, coward.", cooldown: "", status: "" },
        { name: "!loan amount", cost: "?", desc: "Borrow points from the bot bank. The interest is real. So is the regret.", cooldown: "", status: "" },
        { name: "!quiz", cost: "FREE", desc: "Quick-fire quiz round. Brains optional, bragging mandatory.", cooldown: "", status: "" },
        { name: "!quizleaderboard", cost: "FREE", desc: "The quiz leaderboard. Flex responsibly.", cooldown: "", status: "" },
        { name: "!challenge @user", cost: "FREE", desc: "Challenge a homie to a bot-run showdown.", cooldown: "", status: "" },
        { name: "!challengeStats", cost: "FREE", desc: "Your challenge record. Wins, losses, trauma.", cooldown: "", status: "" },
        { name: "!raffle", cost: "?", desc: "Enter the raffle. Winner picked live on stream.", cooldown: "", status: "" },
        { name: "!lotto", cost: "?", desc: "Buy a lotto ticket. Tiny odds, life-changing channel money.", cooldown: "", status: "" },
        { name: "!mytickets", cost: "FREE", desc: "Check your lotto tickets. One of them is definitely the one.", cooldown: "", status: "" }
      ]
    },
    {
      name: "🚢 Battleship",
      note: "[BG] Battleship — custom-built. Coordinates look like <b>A3</b>. Aim before you fire, coward.",
      items: [
        { name: "!battleship / !bs", cost: "FREE", desc: "Start a game (or challenge someone). Man the cannons. May the best fleet win.", cooldown: "", status: "new" },
        { name: "!fire A3", cost: "FREE", desc: "Fire at a coordinate. Miss and it's just water, everywhere, forever.", cooldown: "", status: "new" },
        { name: "!fleet", cost: "FREE", desc: "See what's left of your ships. Usually: not much.", cooldown: "", status: "new" },
        { name: "!bstats", cost: "FREE", desc: "Season scoreboard. Coded and sitting in the dry dock.", cooldown: "", status: "disabled" },
        { name: "!ballstats", cost: "FREE", desc: "All-time scoreboard. Also in the dry dock.", cooldown: "", status: "disabled" }
      ]
    },
    {
      name: "🏟️ Arena (PvP)",
      note: "Fight other chatters or the boss. Fluffless Cat Arena is active.",
      items: [
        { name: "!fkoth", cost: "FREE", desc: "King of the Hill! Hold the crown.", cooldown: "", status: "" },
        { name: "!fpvp @user", cost: "FREE", desc: "1v1 fight — shows on stream. Square up.", cooldown: "", status: "" },
        { name: "!battle", cost: "FREE", desc: "Challenge another chatter to a duel.", cooldown: "", status: "" },
        { name: "!fboss", cost: "?", desc: "Challenge the Fluffless Cat Arena boss.", cooldown: "", status: "" },
        { name: "!fuser", cost: "?", desc: "Check your Fluffless Cat Arena character profile.", cooldown: "", status: "" },
        { name: "!freset", cost: "?", desc: "Reset your Fluffless Cat Arena character.", cooldown: "", status: "" },
        { name: "!fstop", cost: "FREE", desc: "Stop the current Arena fight (Mod only).", cooldown: "", status: "disabled" }
      ]
    },
    {
      name: "🤖 AI Cohost (StreamLinkr)",
      note: "I've got an AI cohost running the chat. It's powered by <b>StreamLinkr</b> — a desktop app that remembers regulars, tracks the vibe of the room, and can hold actual conversations instead of just spamming canned responses. It handles the greetings, shoutouts, and can even roast you on command. It also does hugs, slaps and bonks on request — the holy trinity. <b>All commands below are FREE unless marked as a game.</b>",
      items: [
        { name: "!bot", cost: "FREE", desc: "Talk to the AI cohost directly. It knows the channel lore.", cooldown: "", status: "new" },
        { name: "!command text", cost: "FREE", desc: "Force the AI cohost to generate a sentence and say it out loud, TTS style. (Mod only — you had your chance.)", cooldown: "60s", status: "disabled" },
        { name: "!roast @user", cost: "FREE", desc: "The AI delivers a personalised roast.", cooldown: "", status: "new" },
        { name: "!compliment @user", cost: "FREE", desc: "The AI says something nice about you. Probably. It has been known to backhand.", cooldown: "", status: "new" },
        { name: "!rank", cost: "FREE", desc: "Get your official chat rank assigned. Results may hurt.", cooldown: "", status: "new" },
        { name: "!hug @user", cost: "FREE", desc: "Wholesome virtual hug. The bot means it. Probably.", cooldown: "", status: "new" },
        { name: "!slap @user", cost: "FREE", desc: "Slap a homie with whatever the bot finds nearby. Classic chat energy.", cooldown: "", status: "new" },
        { name: "!bonk @user", cost: "FREE", desc: "BONK. Straight to jail. (The horny jail is self-serve.)", cooldown: "", status: "new" },
        { name: "!lurk", cost: "FREE", desc: "Tell the bot you're lurking. It'll remember.", cooldown: "", status: "new" },
        { name: "!unlurk", cost: "FREE", desc: "Back from lurk city! The bot noticed you left. It counted the minutes.", cooldown: "", status: "new" },
        { name: "!ignoreme", cost: "FREE", desc: "The bot stops responding to you. Blissful silence, on demand.", cooldown: "", status: "new" },
        { name: "!dontignoreme", cost: "FREE", desc: "Undo !ignoreme. Attention restored, regret pending.", cooldown: "", status: "new" }
      ]
    },
    {
      name: "🧰 Lookups & Extras",
      note: "Info on demand — weather, words, ages, leaderboards. Effort level required from you: zero.",
      items: [
        { name: "!help", cost: "FREE", desc: "The bot explains itself. A rarity among bots.", cooldown: "", status: "" },
        { name: "!weather", cost: "FREE", desc: "Weather check. Touch grass vicariously.", cooldown: "", status: "" },
        { name: "!urban term", cost: "FREE", desc: "Urban Dictionary lookup. Educational. Allegedly. (VIP+ and up.)", cooldown: "", status: "disabled" },
        { name: "!define word", cost: "FREE", desc: "Real dictionary definition. Edu-ma-cation.", cooldown: "", status: "" },
        { name: "!convert amount", cost: "FREE", desc: "Unit & currency converter. Math, but automated.", cooldown: "", status: "" },
        { name: "!firstseen", cost: "FREE", desc: "When you first appeared in this chat. Your origin story.", cooldown: "", status: "" },
        { name: "!topchatter", cost: "FREE", desc: "The loudest legends this channel has produced.", cooldown: "", status: "" },
        { name: "!followage", cost: "FREE", desc: "How long you've followed. Emotional support included.", cooldown: "", status: "" },
        { name: "!accountage", cost: "FREE", desc: "How old your account is. Boomer check.", cooldown: "", status: "" },
        { name: "!leaderboard", cost: "FREE", desc: "The egg economy leaderboard. Top of the food chain.", cooldown: "", status: "" },
        { name: "!counters", cost: "FREE", desc: "Every channel counter and what it's counting.", cooldown: "", status: "" },
        { name: "!points", cost: "FREE", desc: "Check your points balance. Count those eggs.", cooldown: "", status: "" } // ⚠ Utility also lists !points as Offline — delete whichever is wrong
      ]
    },
    {
      name: "❓ Mystery Commands",
      note: "These commands exist in the bot. What they do is between the bot and God. <b>Drew: fill in the blanks.</b>",
      items: [
        { name: "!ao", cost: "FREE", desc: "No description available. It came with the bot. Ask Drew.", cooldown: "", status: "" },
        { name: "!affu", cost: "FREE", desc: "Also no notes. Drew knows. Probably.", cooldown: "", status: "" },
        { name: "!joia", cost: "FREE", desc: "Joia. That's it. That's the command.", cooldown: "", status: "" },
        { name: "!ar", cost: "FREE", desc: "Could be anything. It's probably nothing.", cooldown: "", status: "" },
        { name: "!hpin", cost: "FREE", desc: "HP... in? The bot knows what it means.", cooldown: "", status: "" },
        { name: "!wongkong", cost: "FREE", desc: "Sounds like a place. Or a person. Or a problem.", cooldown: "", status: "" },
        { name: "!warrate", cost: "FREE", desc: "War rate? Win rate? The bot declines to clarify.", cooldown: "", status: "" },
        { name: "!triviacept", cost: "FREE", desc: "Sounds like trivia + accept. Take it up with the bot.", cooldown: "", status: "" },
        { name: "!declinie", cost: "FREE", desc: "!decline's chaotic cousin.", cooldown: "", status: "" },
        { name: "!login", cost: "FREE", desc: "Log in? To what? Where? Unclear. Try it and report back.", cooldown: "", status: "" },
        { name: "!sobathon", cost: "FREE", desc: "Sob-a-thon or sub-a-thon? Drew, confirm before chat finds out.", cooldown: "", status: "" }, // ⚠ sobathon or subathon?
        { name: "!pause", cost: "FREE", desc: "Pauses... something. The suspense is a feature.", cooldown: "", status: "" }
      ]
    },
    {
      name: "🛠️ Utility",
      items: [
        { name: "!note text", cost: "FREE", desc: "Slap a note onto the stream overlay. Multilingual: !postit, !notiz, !merken.", cooldown: "", status: "new" },
        { name: "!shownotes", cost: "FREE", desc: "See all the notes currently on screen.", cooldown: "", status: "new" },
        { name: "!delnote", cost: "FREE", desc: "Delete a specific note. (aka !radier)", cooldown: "", status: "new" },
        { name: "!clearnotes", cost: "FREE", desc: "Nuke ALL notes. Fresh slate. (Mods only, ya gremlins).", cooldown: "", status: "new" },
        { name: "!q / !look", cost: "FREE", desc: "Chat lookup. Searches history and profiles.", cooldown: "", status: "" },
        { name: "!s", cost: "FREE", desc: "Auto-suggest bot for the Discord channel. Don't forget to join!", cooldown: "", status: "" },
        { name: "firstrank", cost: "FREE", desc: "Shows who the first chatter was.", cooldown: "", status: "" },
        { name: "!menu", cost: "FREE", desc: "Drops a link to this very page. You're already here. Hello.", cooldown: "", status: "new" },
        { name: "!so @user", cost: "FREE", desc: "Shoutout another streamer (Mod only).", cooldown: "", status: "disabled" },
        { name: "!addpoints @user", cost: "FREE", desc: "Add points to a user (Mod only).", cooldown: "", status: "disabled" },
        { name: "!points", cost: "FREE", desc: "Check your points balance (Offline).", cooldown: "", status: "disabled" },
        { name: "!setpoints @user", cost: "FREE", desc: "Set a user's points (Mod only).", cooldown: "", status: "disabled" },
        { name: "!giftp @user", cost: "FREE", desc: "Gift points (Offline).", cooldown: "", status: "disabled" }
      ]
    },
    {
      name: "🔧 Mod & Broadcaster Tools",
      note: "Role-locked. Greyed out because they're not for chat — mods and the man himself, this shelf is yours.",
      items: [
        { name: "!tts text", cost: "FREE", desc: "The bot's TTS voice on demand. (Broadcaster only.) Viewers: use the !TTS redeem in Chaos.", cooldown: "", status: "disabled" },
        { name: "!info", cost: "FREE", desc: "Bot and channel info dump. (Mod only.)", cooldown: "", status: "disabled" },
        { name: "!stats", cost: "FREE", desc: "Bot stats. Numbers go up. (Mod only.)", cooldown: "", status: "disabled" },
        { name: "!recap", cost: "FREE", desc: "AI recap of the stream so far. (Mod only.)", cooldown: "", status: "disabled" },
        { name: "!resetwheel", cost: "FREE", desc: "Reset the Challenge Wheel. (Mod only.)", cooldown: "", status: "disabled" },
        { name: "!resetcounter counter", cost: "FREE", desc: "Reset a counter to zero. (Mods only.)", cooldown: "", status: "disabled" },
        { name: "!setcounter counter N", cost: "FREE", desc: "Set a counter to any value. (Mods only.)", cooldown: "", status: "disabled" },
        { name: "!quizleaderboardclear", cost: "FREE", desc: "Wipe the quiz leaderboard. Brutal. (Mod only.)", cooldown: "", status: "disabled" },
        { name: "!deletequote", cost: "FREE", desc: "Delete a quote from the wall. (Broadcaster only.)", cooldown: "", status: "disabled" },
        { name: "!givetickets @user N", cost: "FREE", desc: "Hand out lotto tickets. (Broadcaster only.)", cooldown: "", status: "disabled" },
        { name: "!ticketleaderall", cost: "FREE", desc: "Full ticket leaderboard. (Broadcaster only.)", cooldown: "", status: "disabled" },
        { name: "!givepoints @user N", cost: "FREE", desc: "Mint points out of thin air. (Broadcaster only.)", cooldown: "", status: "disabled" }, // ⚠ Utility's !giftp might be this — keep one
        { name: "!addpoints @user N", cost: "FREE", desc: "Add points to a user. (Broadcaster only.)", cooldown: "", status: "disabled" }, // ⚠ Utility also lists !addpoints — keep one
        { name: "!removepoints @user N", cost: "FREE", desc: "Confiscate points. The IRS of chat. (Broadcaster only.)", cooldown: "", status: "disabled" }
      ]
    }
  ],

  changelog: [
    { date: "2026-10-28", text: "v2 — Massive command dump added (Blackjack, Hangman, Trivia, Slots, Fluffless Cat Arena). Mod/Offline commands are now greyed out." },
    { date: "2026-10-28", text: "🖥️ Co-Host cohost section added. It remembers regulars and talks back." },
    { date: "2026-10-28", text: "v1 — the menu escapes Pastebin. Click-to-copy, live search, category filters, eggs." }
  ]
};
