/* ============================================================
   data.js — THE ONLY FILE YOU EVER EDIT
   Edit on github.com → Commit → live in ~1-10 min. That's it.
   cost:   number (points) or "FREE" or any string ("20pt stake")
   status: "" | "new" | "updated" | "disabled" (disabled = Soon™)
   ⚠ Items marked TODO were stubbed — your paste cut off after !What.
   ============================================================ */

window.MENU = {
  streamer: "drewdj45",
  updated: "2026-10-28",

  links: [
    { label: "YouTube", url: "https://www.youtube.com/@drewdj45" }
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
        { name: "!Gif whatever", cost: 15, desc: "Plays a GIF of whatever you request. Yes, whatever.", cooldown: "", status: "" },
        { name: "!GifClip whatever", cost: 20, desc: "Like !Gif, but a short video clip. Cinema.", cooldown: "", status: "" }
      ]
    },
    {
      name: "💥 Chaos",
      items: [
        { name: "!nuts", cost: 42, desc: "THINK FAST!!!", cooldown: "", status: "" },
        { name: "!TTS text", cost: 15, desc: "Classic text-to-speech. Make the robot say it.", cooldown: "", status: "" },
        { name: "!twerk", cost: 31, desc: "Plays WorldStar's Top Video of the Week. You already know.", cooldown: "", status: "" },
        { name: "!brap", cost: 15, desc: "No description available. It speaks for itself. 💨", cooldown: "", status: "" },
        { name: "!Hog", cost: 48, desc: "Summon Him.", cooldown: "", status: "" },
        { name: "!bug", cost: 22, desc: "Take over my keyboard. What could possibly go wrong.", cooldown: "", status: "" },
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
        { name: "!addSpin", cost: 5, desc: "Add YOUR idea to the wheel. Be nice. Ish.", cooldown: "", status: "" }
      ]
    },
    {
      name: "🎮 Games & Gambling",
      items: [
        { name: "!bet option amount", cost: "Your bet", desc: "Wager on an option. E.g. !bet Yes 100", cooldown: "", status: "" },
        { name: "!catch", cost: 10, desc: "A wild Pokémon appears! Throw a ball, fill your Pokédex (!pokedex).", cooldown: "", status: "" },
        { name: "!rob @user", cost: "20pt stake", desc: "PvP Heist! 40% chance to steal 10–20% of a lad's points (cap 200). Caught? 15pt fine. Targets need 15+ pts.", cooldown: "15 min", status: "" },
        { name: "!crime", cost: "FREE", desc: "50% chance to earn 15–40pts, 50% chance to pay a 10–25pt fine. No skill required.", cooldown: "15 min", status: "" },
        { name: "!What", cost: 10, desc: "On-screen guesser. Winner takes the pot.", cooldown: "", status: "" }, // TODO: your paste cut off here — finish this desc + add the rest of your games below
        { name: "!pokedex", cost: "FREE", desc: "Check your Pokédex. Gotta catch 'em all, apparently.", cooldown: "", status: "" } // TODO: stub — confirm cost/desc
      ]
    },
    {
      name: "🚢 Battleship",
      note: "[BG] Battleship — custom-built. Coordinates look like <b>A3</b>. Aim before you fire, coward.",
      items: [ // TODO: costs weren't in your paste — confirm in Streamer.bot
        { name: "!battleship", cost: "FREE", desc: "Start a game (or challenge someone). May the best fleet win.", cooldown: "", status: "" },
        { name: "!fire A3", cost: "FREE", desc: "Fire at a coordinate. Miss and it's just water, everywhere, forever.", cooldown: "", status: "" },
        { name: "!fleet", cost: "FREE", desc: "See what's left of your ships. Usually: not much.", cooldown: "", status: "" },
        { name: "!bstats", cost: "FREE", desc: "Season scoreboard. Coded and sitting in the hangar.", cooldown: "", status: "disabled" }, // flip to "" once enabled
        { name: "!ballstats", cost: "FREE", desc: "All-time scoreboard. Also in the hangar.", cooldown: "", status: "disabled" } // flip to "" once enabled
      ]
    },
    {
      name: "🏟️ Arena",
      items: [ // TODO: stub — confirm cost/desc
        { name: "!battle", cost: "FREE", desc: "Challenge another chatter to a duel. Winner gets glory (and probably points). Loser gets silence.", cooldown: "", status: "" }
      ]
    },
    {
      name: "🛠️ Utility",
      items: [ // TODO: stubs — confirm costs, and make !clearnotes Mod-only in Streamer.bot before launch
        { name: "!note", cost: "FREE", desc: "Slap a note onto the stream overlay for everyone to read.", cooldown: "", status: "" },
        { name: "!clearnotes", cost: "FREE", desc: "Wipes all notes from the overlay. Fresh slate.", cooldown: "", status: "" },
        { name: "!menu", cost: "FREE", desc: "Drops a link to this very page. You're already here. Hello.", cooldown: "", status: "new" }
      ]
    }
  ],

  changelog: [
    { date: "2026-10-28", text: "v1 — the menu escapes Pastebin. Click-to-copy, live search, category filters, eggs." },
    { date: "2026-10-28", text: "Battleship scoreboards (!bstats / !ballstats) still Soon™ until enabled." }
  ]
};