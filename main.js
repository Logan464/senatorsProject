import { senators } from './senators.js'
import { representatives } from './representatives.js'

// map example - simplify the object returned from the map function by just creating two properties for each one

const democratSenators = senators.map(rep => {
  return {
    name: `${rep.first_name} ${rep.last_name}`,
    facebook: rep.facebook_account,
    imgURL: `https://www.congress.gov/img/member/${rep.id.toLowerCase()}.jpg`,
    party: rep.party
  }
}).filter(senator => senator.party === 'D')

const republicanSenators = senators.map(rep => {
  return {
    name: `${rep.first_name} ${rep.last_name}`,
    facebook: rep.facebook_account,
    imgURL: `https://www.congress.gov/img/member/${rep.id.toLowerCase()}.jpg`,
    party: rep.party
  }
}).filter(senator => senator.party === 'R')

// filter examples

//console.log(democrats, republicans)

// reduce example

const testArray = [5, 10, 15, 20, 25, 30, 35, 40]

const testResults = testArray.reduce((acc, num) => {
  return acc + num
}, 0)

const allVotes = representatives.reduce((acc, rep) => {
  return acc + rep.total_votes
}, 0)

const allMissedVotes = representatives.reduce((acc, rep) => {
  return acc + rep.missed_votes
}, 0)

// should provide some nice UI to show these results instead of just printing to the console
console.log(testResults, allVotes, allMissedVotes)

const senWithPics = senators.map(senator => {
  
  return senator
})

// now set up some UI elements to display the senator pictures
  const pictureDiv = document.querySelector('.container')

  const removeCards = (() => {
    while(pictureDiv.firstChild) {
      pictureDiv.removeChild(pictureDiv.firstChild)
    }
  })

  function renderPictures(peopleArray) {
    peopleArray.forEach(senator => {
    let senatorPic = document.createElement('img')
    let senatorFig = document.createElement('figure')
    let senatorCap = document.createElement('figcaption')
    senatorCap.textContent = `${senator.name}`
    senatorPic.src = senator.imgURL
    senatorFig.appendChild(senatorPic)
    senatorFig.appendChild(senatorCap)
    pictureDiv.appendChild(senatorFig)
  })
  }

  const rBtn = document.querySelector('#republicanBtn')
  const dBtn = document.querySelector('#democratBtn')

  rBtn.addEventListener('click', function() {
    removeCards()
    renderPictures(republicanSenators)
  })

  dBtn.addEventListener('click', function() {
    removeCards()
    renderPictures(democratSenators)
  })

