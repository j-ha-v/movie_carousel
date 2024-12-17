let base;
let i = -1
// let p=parent.GetPlayer();
// let knowledgeCheck = p.GetVar("knowledgeCheck")
function init(){
    base = document.getElementById("base");
    replaceImage(0);

}
function replaceImage(){
    i = (i + 1) % images.length; 
    image = images[i].img;
    // console.log(`url(img/${image}.png)`)
    const replace = document.createElement("div");
    replace.style.backgroundImage = `url('img/${image}.png')`;
    
    document.body.appendChild(replace);
    replace.classList.add("replace");
    sleep(10).then(() => {
        replace.classList.add("enter")
    })
    

    sleep(1500).then(() => {
        base.style.backgroundImage = replace.style.backgroundImage;
        replace.remove();
    })
    
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  function test(){
    replaceImage();
  }

  const images = [
    {
      id: "choice-a",
      answer: "Jaws: the Revenge (1987)",
      status: "correct",
      stars: 0,
      img: "jaws",
      response:
        "The last and worst of the killer shark franchise, it was rushed out in under nine months to make a summer release. Its infamous tagline 'This time, it's personal' may have been taken seriously by some critics.",
      quote:
        "What happens at the end? Ellen Brody has become convinced that the shark is following her. It wants revenge against her entire family. Her friends pooh-pooh the notion that a shark could identify, follow or even care about one individual human being, but I am willing to grant the point, for the benefit of the plot.<br><br>I believe that the shark wants revenge against Mrs. Brody. I do. I really do believe it. After all, her husband was one of the men who hunted this shark and killed it, blowing it to bits. And what shark wouldn't want revenge against the survivors of the men who killed it?",
      link: "https://www.rogerebert.com/reviews/jaws-the-revenge-1987",
    },

    {
      id: "choice-b",
      answer: "The Last Airbender (2010)",
      status: "incorrect",
      stars: 0.5,
      img: "airbender",
      response:
        "This live action retelling of the animated series' first season was universally panned for its dingy special effects and muted acting, a tonal mistep considering the bright and fanciful source material. In retrospect, the director of 'The Sixth Sense' may not have been the best pick to adapt a children's cartoon.",
      quote:
        "'The Last Airbender' is an agonizing experience in every category I can think of and others still waiting to be invented. The laws of chance suggest that something should have gone right. Not here. It puts a nail in the coffin of low-rent 3D, but it will need a lot more coffins than that.<br><br>...I close with the hope that the title proves prophetic.",
      link: "https://www.rogerebert.com/reviews/the-last-airbender-2010",
    },

    {
      id: "choice-c",
      answer: "Battle: Los Angeles (2011)",
      status: "incorrect",
      stars: 0.5,
      img: "losangeles",
      response: "Marines are sent to combat a worldwide alien invasion from the strategic stronghold of Los Angeles. Themes of self-sacrifice, bravery, and camraderie are undercut by clichéd dialogue, lack of character development, and incoherent storytelling.",
      quote: "'Battle: Los Angeles' is noisy, violent, ugly and stupid. Its manufacture is a reflection of appalling cynicism on the part of its makers, who don't even try to make it more than senseless chaos. Here's a science-fiction film that's an insult to the words 'science' and 'fiction,' and the hyphen in between them. You want to cut it up to clean under your fingernails.",
      link: "https://www.rogerebert.com/reviews/battle-los-angeles-2011",
    },

    {
      id: "choice-d",
      answer: "Jack Frost (1998)",
      status: "incorrect",
      stars: 1,
      img: "jackfrost",
      response: "This dark comedy was originally set to star George Clooney with Sam Raimi directing. It was initially slated to be a more direct interpretation of 'Frosty the Snowman'. Clooney dropped the project and Raimi soon followed, but not before Jim Henson's Creature Shop finished the snowman suit.",
      quote: "What possessed anyone to think this was a plausible idea for a movie? It's a bad film, yes, but that's not the real problem. 'Jack Frost' could have been co-directed by Orson Welles and Steven Spielberg and still be unwatchable, because of that damned snowman.<br><br>The snowman gave me the creeps. Never have I disliked a movie character more. They say state-of-the-art special effects can create the illusion of anything on the screen, and now we have proof: It's possible for the Jim Henson folks and Industrial Light and Magic to put their heads together and come up with the most repulsive single creature in the history of special effects, and I am not forgetting the Chucky doll or the desert intestine from 'Star Wars.'",
      link: "https://www.rogerebert.com/reviews/jack-frost-1998",
    },

    {
      id: "choice-e",
      answer: "An Alan Smithee Film Burn Hollywood Burn (1997)",
      status: "correct",
      stars: 0,
      img: "alansmithee",
      response: "Monty Python alumni Eric Idle plays a director whose latest film is so bad, he steals the negatives before the film can be released. This mockumentary's actual director could sympathize.",
      quote: "There's a rich irony connected with the title. 'Alan Smithee' is the pseudonym that a Hollywood studio slaps on a film's credits if the original director insists on having his name removed from the project. The plot of 'AASFBHB' involves a film so bad that the director wants his name removed, but since his real name is Alan Smithee, what can he do? Ho, ho.<br><br>Wait, it gets better. The movie was directed by Arthur Hiller, who hated the way the film was edited so much that, yes, he insisted his name be removed from the credits. So now it really is an Alan Smithee Film. That leaves one mystery: Why didn't Joe Eszterhas, the film's writer, take off his name, too? I fear it is because this version of the film does indeed reflect his vision. Eszterhas is sometimes a good writer, but this time he has had a complete lapse of judgment.",
      link: "https://www.rogerebert.com/reviews/an-alan-smithee-film-burn-hollywood-burn-1998",
    },

    {
      id: "choice-f",
      answer: "My Name is Bruce (2007)",
      status: "incorrect",
      stars: 2,
      img: "bruce",
      response: "Bruce Campbell plays Bruce Campbell, B-movie star who is kidnapped by a fan to save the day from a B-movie villain who, unbenownst to Bruce, is not another actor in a cheap suit.",
      quote: "Many's the actor who has brooded in his trailer and pondered: 'Maybe I could direct better than this idiot.' With Bruce Campbell, that is often true, with the exceptions of such directors as Sam Raimi, with whom he has worked 11 times, and the Coen brothers, four....<br>You see that Bruce Campbell often returns value for money. And in that spirit, I welcome his first work as a director since 'The Man With the Screaming Brain' (2005). <br><br>Here he plays himself in a lampoon of his career, his movies, his genres and everything else he stands for. Maybe it's only 'one-note insider navel-gazing,' writes one of its critics, but if the navel has been there, done that and had unspeakable horrors wreaked onto it, the navel has paid its dues.",
      link: "https://www.rogerebert.com/reviews/my-name-is-bruce-2008",
    },

    {
      id: "choice-g",
      answer: "North (1994)",
      status: "correct",
      stars: 0,
      img: "north",
      response: "A young Elijah Woods is searching for new parents, as he's filed to 'divorce' his current pair. He visits a cast of would-be parents representing a wide range of culturally insensitive stereotypes, before facing assassination at the hands of his attorneys when he tries to undo his error.",
      quote: "I have no idea why Rob Reiner, or anyone else, <br>wanted to make this story into a movie, and close examination of the film itself is no help. 'North' is one of the most unpleasant, contrived, artificial, cloying experiences I've had at the movies. To call it manipulative would be inaccurate; it has an ambition to manipulate, but fails.<br><br>...I hated this movie. Hated hated hated hated hated this movie. Hated it. Hated every simpering stupid vacant audience-insulting moment of it. Hated the sensibility that thought anyone would like it. Hated the implied insult to the audience by its belief that anyone would be entertained by it.",
      link: "https://www.rogerebert.com/reviews/north-1994",
    },
  ]