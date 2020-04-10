var data = "\
1216782378644975620: i will put my heart in soul into the script and into my performance to make sure everyone on earth will understand that sheev indeed fvcked, a LOT_LINE_END_\
1123307794575306752: Venezuelans have Two options.\n1: Risk death now fighting communism\n2: Die in Maduro\'s gulag\n#Venezuela #OperacionLibertad_LINE_END_\
1219255731205046273: Last post about Conor because it’s getting boring but for his fans asking “why don’t you like Conor” here’s why\n\n- Mocks religions\n- Make excuses for every defeat\n- Cheater \n- An actual bitch (brought tons of guys to the bus to fight Khabib, all the fighters who\n\n1/2_LINE_END_\
1182825140154880000: i entered 8 more lotteries for japan muster today pray 4 me_LINE_END_\
1156364098168336384: Yes. Mayor Pete. “It’s time to stop worrying about what the republicans think.” #DemDebate_LINE_END_\
1132306749074083840: is it time to dye my hair my natural color😔✊🏻_LINE_END_\
1170785948063424518: Year: 2008\n\nAge: 13\n\nGrade you were in: 7th \n\nFavorite book: I liked reading Darren Shane books\n\nFavorite TV show: Supernatural  PLL and The Vampire Diaries  \n\nFavorite song: Anything by Katy Perry  \n\nFavorite movie: House Bunny\n\nSend me an emoji & I\'ll give you a year_LINE_END_\
1142960287546564608: Illegals are raping illegals and Carroll has a book to sale. Schumer and Pelosi ignore the same facts so they can win enough votes in 2020._LINE_END_\
1168084832972365824: You should look at some of the conversations I\'ve had. I can hardly remember a Sanders supporter who\'s been civil, let alone actually engaged on discussing policy._LINE_END_\
1230164487317094400: As is Sam, who by no means is on the far left. Yet still..._LINE_END_\
";

data = data.split('_LINE_END_').filter(Boolean).map(item => {
  return {
    id: item.substring(0, item.indexOf(':')),
    tweet: item.substring(item.indexOf(':') + 2),
  }
})
