const games = [
  {
    title: "Subway Surfers",
    desc: "Run and dodge trains in this classic endless runner.",
    image: "https://d2j6dbq0eux0bg.cloudfront.net/images/58568613/2572025164.jpg",
  },
  {
    title: "Among Us",
    desc: "Find the imposter in this viral multiplayer classic!",
    image: "https://cdn.now.gg/apps-content/com.innersloth.spacemafia.png",
  },
  {
    title: "Roblox",
    desc: "Play millions of user-created worlds and games.",
    image: "https://cdn.now.gg/apps-content/com.roblox.client.png",
  },
  {
    title: "Minecraft Trial",
    desc: "Explore and create worlds in the iconic sandbox adventure.",
    image: "https://cdn.now.gg/apps-content/com.mojang.minecraftpe.png",
  },
  {
    title: "Gacha Life",
    desc: "Create your own anime characters and stories.",
    image: "https://cdn.now.gg/apps-content/air.com.lunime.gachalife.png",
  },
];

export default function GameGrid() {
  return (
    <section className="game-grid">
      {games.map((game, idx) => (
        <div className="game-card" key={idx}>
          <img src={game.image} alt={game.title} className="game-thumb" />
          <div className="game-title">{game.title}</div>
          <div className="game-desc">{game.desc}</div>
        </div>
      ))}
    </section>
  );
}
