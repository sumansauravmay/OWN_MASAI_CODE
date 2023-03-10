
const express=require("express");
const {connection,HeroModel}=require("./db")
const app=express();
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Wecome to home page");
})

app.get("/heroes",async (req,res)=>{
    let query=req.query;
    
    try{
        await HeroModel.insertMany([{
            adult: false,
            backdrop_path: "/14QbnygCuTO0vl7CAFmPf1fgZfV.jpg",
            genre_ids: [28, 12, 878],
            id: 634649,
            media_type: "movie",
            original_language: "en",
            original_title: "Spider-Man: No Way Home",
            overview:
              "Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.",
            popularity: 560.783,
            poster_path: "/uJYYizSuA9Y3DCs0qS4qWvHfZg4.jpg",
            release_date: "2021-12-15",
            title: "Spider-Man: No Way Home",
            video: false,
            vote_average: 8,
            vote_count: 16272,
          },
          {
            adult: false,
            backdrop_path: "/c6H7Z4u73ir3cIoCteuhJh7UCAR.jpg",
            genre_ids: [878, 28, 12],
            id: 524434,
            media_type: "movie",
            original_language: "en",
            original_title: "Eternals",
            overview:
              "The Eternals are a team of ancient aliens who have been living on Earth in secret for thousands of years. When an unexpected tragedy forces them out of the shadows, they are forced to reunite against mankind’s most ancient enemy, the Deviants.",
            popularity: 169.457,
            poster_path: "/lFByFSLV5WDJEv3KabbdAF959F2.jpg",
            release_date: "2021-11-03",
            title: "Eternals",
            video: false,
            vote_average: 7,
            vote_count: 6672,
          },
          {
            adult: false,
            backdrop_path: "/zxWAv1A34kdYslBi4ekMDtgIGUt.jpg",
            genre_ids: [28, 12, 14],
            id: 566525,
            media_type: "movie",
            original_language: "en",
            original_title: "Shang-Chi and the Legend of the Ten Rings",
            overview:
              "Shang-Chi must confront the past he thought he left behind when he is drawn into the web of the mysterious Ten Rings organization.",
            popularity: 174.643,
            poster_path: "/1BIoJGKbXjdFDAqUEiA2VHqkK1Z.jpg",
            release_date: "2021-09-01",
            title: "Shang-Chi and the Legend of the Ten Rings",
            video: false,
            vote_average: 7.6,
            vote_count: 7579,
          },
          {
            adult: false,
            backdrop_path: "/keIxh0wPr2Ymj0Btjh4gW7JJ89e.jpg",
            genre_ids: [28, 12, 878],
            id: 497698,
            media_type: "movie",
            original_language: "en",
            original_title: "Black Widow",
            overview:
              "Natasha Romanoff, also known as Black Widow, confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises. Pursued by a force that will stop at nothing to bring her down, Natasha must deal with her history as a spy and the broken relationships left in her wake long before she became an Avenger.",
            popularity: 117.346,
            poster_path: "/ytnhzdwtj0YfC5NVWrrPRGSGZb7.jpg",
            release_date: "2021-07-07",
            title: "Black Widow",
            video: false,
            vote_average: 7.4,
            vote_count: 8490,
          },
          {
            adult: false,
            backdrop_path: "/ng6SSB3JhbcpKTwbPDsRwUYK8Cq.jpg",
            genre_ids: [28, 12, 878],
            id: 429617,
            media_type: "movie",
            original_language: "en",
            original_title: "Spider-Man: Far from Home",
            overview:
              "Peter Parker and his friends go on a summer trip to Europe. However, they will hardly be able to rest - Peter will have to agree to help Nick Fury uncover the mystery of creatures that cause natural disasters and destruction throughout the continent.",
            popularity: 87.775,
            poster_path: "/4q2NNj4S5dG2RLF9CpXsej7yXl.jpg",
            release_date: "2019-06-28",
            title: "Spider-Man: Far from Home",
            video: false,
            vote_average: 7.5,
            vote_count: 13502,
          },
          {
            adult: false,
            backdrop_path: "/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg",
            genre_ids: [12, 878, 28],
            id: 299534,
            media_type: "movie",
            original_language: "en",
            original_title: "Avengers: Endgame",
            overview:
              "After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos' actions and restore order to the universe once and for all, no matter what consequences may be in store.",
            popularity: 153.223,
            poster_path: "/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
            release_date: "2019-04-24",
            title: "Avengers: Endgame",
            video: false,
            vote_average: 8.3,
            vote_count: 22360,
          },
          {
            adult: false,
            backdrop_path: "/w2PMyoyLU22YvrGK3smVM9fW1jj.jpg",
            genre_ids: [28, 12, 878],
            id: 299537,
            media_type: "movie",
            original_language: "en",
            original_title: "Captain Marvel",
            overview:
              "The story follows Carol Danvers as she becomes one of the universe’s most powerful heroes when Earth is caught in the middle of a galactic war between two alien races. Set in the 1990s, Captain Marvel is an all-new adventure from a previously unseen period in the history of the Marvel Cinematic Universe.",
            popularity: 67.742,
            poster_path: "/AtsgWhDnHTq68L0lLsUrCnM7TjG.jpg",
            release_date: "2019-03-06",
            title: "Captain Marvel",
            video: false,
            vote_average: 6.9,
            vote_count: 13800,
          },
          {
            adult: false,
            backdrop_path: "/2tcTm5oRlRN5fKFvY4Gbrwp8h38.jpg",
            genre_ids: [28, 12, 878],
            id: 363088,
            media_type: "movie",
            original_language: "en",
            original_title: "Ant-Man and the Wasp",
            overview:
              "Just when his time under house arrest is about to end, Scott Lang once again puts his freedom at risk to help Hope van Dyne and Dr. Hank Pym dive into the quantum realm and try to accomplish, against time and any chance of success, a very dangerous rescue mission.",
            popularity: 53.366,
            poster_path: "/cFQEO687n1K6umXbInzocxcnAQz.jpg",
            release_date: "2018-07-04",
            title: "Ant-Man and the Wasp",
            video: false,
            vote_average: 7,
            vote_count: 11729,
          },
          {
            adult: false,
            backdrop_path: "/mDfJG3LC3Dqb67AZ52x3Z0jU0uB.jpg",
            genre_ids: [12, 28, 878],
            id: 299536,
            media_type: "movie",
            original_language: "en",
            original_title: "Avengers: Infinity War",
            overview:
              "As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain.",
            popularity: 229.259,
            poster_path: "/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
            release_date: "2018-04-25",
            title: "Avengers: Infinity War",
            video: false,
            vote_average: 8.3,
            vote_count: 26005,
          },
          {
            adult: false,
            backdrop_path: "/b6ZJZHUdMEFECvGiDpJjlfUWela.jpg",
            genre_ids: [28, 12, 878],
            id: 284054,
            media_type: "movie",
            original_language: "en",
            original_title: "Black Panther",
            overview:
              "King T'Challa returns home to the reclusive, technologically advanced African nation of Wakanda to serve as his country's new leader. However, T'Challa soon finds that he is challenged for the throne by factions within his own country as well as without. Using powers reserved to Wakandan kings, T'Challa assumes the Black Panther mantle to join with ex-girlfriend Nakia, the queen-mother, his princess-kid sister, members of the Dora Milaje (the Wakandan 'special forces') and an American secret agent, to prevent Wakanda from being dragged into a world war.",
            popularity: 189.394,
            poster_path: "/uxzzxijgPIY7slzFvMotPv8wjKA.jpg",
            release_date: "2018-02-13",
            title: "Black Panther",
            video: false,
            vote_average: 7.4,
            vote_count: 20091,
          },
          {
            adult: false,
            backdrop_path: "/5wNUJs23rT5rTBacNyf5h83AynM.jpg",
            genre_ids: [28, 12, 14, 878, 35],
            id: 284053,
            media_type: "movie",
            original_language: "en",
            original_title: "Thor: Ragnarok",
            overview:
              "Thor is imprisoned on the other side of the universe and finds himself in a race against time to get back to Asgard to stop Ragnarok, the destruction of his home-world and the end of Asgardian civilization, at the hands of a powerful new threat, the ruthless Hela.",
            popularity: 82.433,
            poster_path: "/rzRwTcFvttcN1ZpX2xv4j3tSdJu.jpg",
            release_date: "2017-10-24",
            title: "Thor: Ragnarok",
            video: false,
            vote_average: 7.6,
            vote_count: 18594,
          },
          {
            adult: false,
            backdrop_path: "/vc8bCGjdVp0UbMNLzHnHSLRbBWQ.jpg",
            genre_ids: [28, 12, 878, 18],
            id: 315635,
            media_type: "movie",
            original_language: "en",
            original_title: "Spider-Man: Homecoming",
            overview:
              "Following the events of Captain America: Civil War, Peter Parker, with the help of his mentor Tony Stark, tries to balance his life as an ordinary high school student in Queens, New York City, with fighting crime as his superhero alter ego Spider-Man as a new threat, the Vulture, emerges.",
            popularity: 110.399,
            poster_path: "/c24sv2weTHPsmDa7jEMN0m2P3RT.jpg",
            release_date: "2017-07-05",
            title: "Spider-Man: Homecoming",
            video: false,
            vote_average: 7.4,
            vote_count: 19464,
          },
          {
            adult: false,
            backdrop_path: "/aJn9XeesqsrSLKcHfHP4u5985hn.jpg",
            genre_ids: [12, 28, 878],
            id: 283995,
            media_type: "movie",
            original_language: "en",
            original_title: "Guardians of the Galaxy Vol. 2",
            overview:
              "The Guardians must fight to keep their newfound family together as they unravel the mysteries of Peter Quill's true parentage.",
            popularity: 82.443,
            poster_path: "/y4MBh0EjBlMuOzv9axM4qJlmhzz.jpg",
            release_date: "2017-04-19",
            title: "Guardians of the Galaxy Vol. 2",
            video: false,
            vote_average: 7.6,
            vote_count: 19096,
          },
          {
            adult: false,
            backdrop_path: "/9X7YweCJw3q8Mcf6GadxReFEksM.jpg",
            genre_ids: [28, 18, 878],
            id: 263115,
            media_type: "movie",
            original_language: "en",
            original_title: "Logan",
            overview:
              "In the near future, a weary Logan cares for an ailing Professor X in a hideout on the Mexican border. But Logan's attempts to hide from the world and his legacy are upended when a young mutant arrives, pursued by dark forces.",
            popularity: 66.352,
            poster_path: "/fnbjcRDYn6YviCcePDnGdyAkYsB.jpg",
            release_date: "2017-02-28",
            title: "Logan",
            video: false,
            vote_average: 7.8,
            vote_count: 17395,
          },
          {
            adult: false,
            backdrop_path: "/qUv51IFUvVRAP2379ThmA3eLJx6.jpg",
            genre_ids: [28, 12, 14],
            id: 284052,
            media_type: "movie",
            original_language: "en",
            original_title: "Doctor Strange",
            overview:
              "After his career is destroyed, a brilliant but arrogant surgeon gets a new lease on life when a sorcerer takes him under her wing and trains him to defend the world against evil.",
            popularity: 81.699,
            poster_path: "/uGBVj3bEbCoZbDjjl9wTxcygko1.jpg",
            release_date: "2016-10-25",
            title: "Doctor Strange",
            video: false,
            vote_average: 7.4,
            vote_count: 19998,
          },
          {
            adult: false,
            backdrop_path: "/2ex2beZ4ssMeOduLD0ILzXKCiep.jpg",
            genre_ids: [28, 12, 878, 14],
            id: 246655,
            media_type: "movie",
            original_language: "en",
            original_title: "X-Men: Apocalypse",
            overview:
              "After the re-emergence of the world's first mutant, world-destroyer Apocalypse, the X-Men must unite to defeat his extinction level plan.",
            popularity: 64.3,
            poster_path: "/qttNmCib9gHhR5q0QoZ3FgmGom9.jpg",
            release_date: "2016-05-18",
            title: "X-Men: Apocalypse",
            video: false,
            vote_average: 6.5,
            vote_count: 11714,
          },
          {
            adult: false,
            backdrop_path: "/wdwcOBMkt3zmPQuEMxB3FUtMio2.jpg",
            genre_ids: [12, 28, 878],
            id: 271110,
            media_type: "movie",
            original_language: "en",
            original_title: "Captain America: Civil War",
            overview:
              "Following the events of Age of Ultron, the collective governments of the world pass an act designed to regulate all superhuman activity. This polarizes opinion amongst the Avengers, causing two factions to side with Iron Man or Captain America, which causes an epic battle between former allies.",
            popularity: 88.352,
            poster_path: "/rAGiXaUfPzY7CDEyNKUofk3Kw2e.jpg",
            release_date: "2016-04-27",
            title: "Captain America: Civil War",
            video: false,
            vote_average: 7.4,
            vote_count: 20628,
          },
          {
            adult: false,
            backdrop_path: "/en971MEXui9diirXlogOrPKmsEn.jpg",
            genre_ids: [28, 12, 35],
            id: 293660,
            media_type: "movie",
            original_language: "en",
            original_title: "Deadpool",
            overview:
              "The origin story of former Special Forces operative turned mercenary Wade Wilson, who, after being subjected to a rogue experiment that leaves him with accelerated healing powers, adopts the alter ego Deadpool. Armed with his new abilities and a dark, twisted sense of humor, Deadpool hunts down the man who nearly destroyed his life.",
            popularity: 127.507,
            poster_path: "/fSRb7vyIP8rQpL0I47P3qUsEKX3.jpg",
            release_date: "2016-02-09",
            title: "Deadpool",
            video: false,
            vote_average: 7.6,
            vote_count: 27744,
          },
          {
            adult: false,
            backdrop_path: "/gzhVcfC5j0sTnS4WJzBrCS0Vkr0.jpg",
            genre_ids: [28, 12, 878],
            id: 166424,
            media_type: "movie",
            original_language: "en",
            original_title: "Fantastic Four",
            overview:
              "Four young outsiders teleport to a dangerous universe, which alters their physical form in shocking ways. Their lives irrevocably upended, the team must learn to harness their daunting new abilities and work together to save Earth from a former friend turned enemy.",
            popularity: 41.201,
            poster_path: "/oeMpEsjmiT9PEJbRM1Fm7TZ1dE0.jpg",
            release_date: "2015-08-05",
            title: "Fantastic Four",
            video: false,
            vote_average: 4.4,
            vote_count: 5396,
          },
          {
            adult: false,
            backdrop_path: "/a7sAqMKv5tkAdMzFfIhPqIBmQ9g.jpg",
            genre_ids: [878, 28, 12],
            id: 102899,
            media_type: "movie",
            original_language: "en",
            original_title: "Ant-Man",
            overview:
              "Armed with the astonishing ability to shrink in scale but increase in strength, master thief Scott Lang must embrace his inner-hero and help his mentor, Doctor Hank Pym, protect the secret behind his spectacular Ant-Man suit from a new generation of towering threats. Against seemingly insurmountable obstacles, Pym and Lang must plan and pull off a heist that will save the world.",
            popularity: 61.194,
            poster_path: "/4Ky7xCXPMKXGopstPjwPRd4ZDrj.jpg",
            release_date: "2015-07-14",
            title: "Ant-Man",
            video: false,
            vote_average: 7.1,
            vote_count: 17794,
          }])
        const heroes=await HeroModel.find(query)
        res.send(heroes)
    }
    catch(err){
console.log(err)
console.log("err: something went wrong")
}
    // const language=req.query.language
    // const power=req.query.power
    // const heroes=await HeroModel.find({language:language,power:power})
    // const heroes=await HeroModel.find(query)
    // const heroes=await HeroModel.find({language:"French"})
    // res.send(heroes);
})

app.post("/addhero",async (req,res)=>{
    const data=req.body;
    const hero=new HeroModel(data);
    await hero.save();
    console.log(hero);
    res.send("Added the hero")
})

app.patch("/edithero/:id",async(req,res)=>{
    const ID=req.params.id;
    const payload=req.body;
try{
await HeroModel.findByIdAndUpdate({_id:ID},payload);
res.send(`update the hero data whose id is ${ID}`);
}
catch(err){
    console.log(err);
    console.log({"err":err});
}
})

app.delete("/deletehero/:id",async(req,res)=>{
    const ID=req.params.id;
try{
await HeroModel.findByIdAndDelete({_id:ID});
res.send(`Deleted the hero data whose id is ${ID}`);
}
catch(err){
    console.log(err)
    console.log({"err":err})
}
})

app.listen(4500,async()=>{
  try{
    await connection
    console.log("Connected to mongoDB")
  }
  catch(err){
    console.log("Error while connecting to DB")
    console.log(err)
  }
  console.log("Port is runnng on 4500 port")
})