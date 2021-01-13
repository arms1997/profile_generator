const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name? Nicknames are also acceptable :): ', (answer1) => {
  rl.question('What\'s an activity you like doing?', (answer2) => {
    rl.question('What do you listen to while doing that?', (answer3) => {
      rl.question('Which meal is you favourite(eg: dinner, brunch, etc)', (answer4) => {
        rl.question('What\'s your favourite thing to eat for that meal?', (answer5) => {
          rl.question('Which sport is your absolute favourite?', (answer6) => {
            rl.question('What is your superpower? In a few words, tell us what you are amazing at!', (answer7) => {
              console.log(`
                Name/Nickname: ${answer1} \n
                Activity: ${answer2} \n
                Music during Activity: ${answer3} \n
                Favourite Meal: ${answer4} \n
                Favourite food for that Meal: ${answer5} \n
                Favourite Sport: ${answer6} \n
                Superpower: ${answer7}
              `)

              rl.close()
            })
            
          })
          // rl.close()
        })
        // rl.close()
      })
      // rl.close()
    })
    // rl.close()
  })
  // rl.close();
});