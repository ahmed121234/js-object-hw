const pokemon = require('./data.js')

const game = {
  party: [],
  gyms: [
    { location: 'Pewter City', completed: false, difficulty: 1 },
    { location: 'Cerulean City', completed: false, difficulty: 2 },
    { location: 'Vermilion City', completed: false, difficulty: 3 },
    { location: 'Celadon City', completed: false, difficulty: 4 },
    { location: 'Fuchsia City', completed: false, difficulty: 5 },
    { location: 'Saffron City', completed: false, difficulty: 6 },
    { location: 'Cinnabar Island', completed: false, difficulty: 7 },
    { location: 'Viridian City', completed: false, difficulty: 8 }
  ],
  items: [
    { name: 'potion', quantity: 4 },
    { name: 'pokeball', quantity: 8 },
    { name: 'rare candy', quantity: 99 }
  ],
  difficulty: 'Med',

  partyCount: function () {
    return this.party.length
  }
}

console.log(game.partyCount())

const starterPokemon = pokemon.find(
  (pokemon) => pokemon.starter === true && pokemon.number === 4
)

console.log(starterPokemon)
game.party.push(starterPokemon)

console.dir(pokemon, { maxArrayLength: null })

const pokemon59 = pokemon.find((p) => p.number === 59)

console.log(pokemon59.name)

const squirtle = pokemon.find((pokemon) => pokemon.number === 7)
const Pikachu = pokemon.find((pokemon) => pokemon.number === 25)
const Meowth = pokemon.find((pokemon) => pokemon.number === 52)

game.party.push(squirtle, Pikachu, Meowth)

game.gyms.forEach((gym) => {
  if (gym.difficulty < 3) {
    gym.completed = true
  }
})

let evolvedPokemon

if (starterPokemon.name === 'Bulbasaur') {
  evolvedPokemon = pokemon.find((poke) => poke.number === 2)
} else if (starterPokemon.name === 'Charmander') {
  evolvedPokemon = pokemon.find((poke) => poke.number === 5)
} else if (starterPokemon.name === 'Squirtle') {
  evolvedPokemon = pokemon.find((poke) => poke.number === 8)
} else if (starterPokemon.name === 'Pikatchu') {
  evolvedPokemon = pokemon.find((poke) => poke.number === 26)
}

game.party.splice(0, 1, evolvedPokemon)

const starterPokemons = pokemon.filter((pokemon) => pokemon.starter === true)

game.party.forEach((pokemon) => {
  console.log(pokemon.name)
})

starterPokemons.forEach((pokemon) => {
  console.log(pokemon.name)
})

game.catchPokemon = function (pokemonObj) {
  this.party.push(pokemonObj)

  let pokeball = this.items.find((item) => item.name === 'Poleball')

  if (pokeball) {
    pokeball.quantity -= 1
  }

  console.log('Updated Items:', this.items)
  console.log('Updated Party:', this.party)
}
game.catchPokemon(pokemon[0])

for (let i = 0; i < game.gyms.length; i++) {
  if (game.gyms[i].difficulty < 6) {
    game.gyms[i].completed = true
  }
}

game.gymStatus = function () {
  const gymTally = {
    completed: 0,
    incomplete: 0
  }

  for (let i = 0; i < game.gyms.length; i++) {
    if (game.gyms[i].completed) {
      gymTally.completed++
    } else {
      gymTally.incomplete++
    }
  }
  return game.party.length
  console.log(gymTally)
}

game.gymStatus()

game.gyms.forEach((gym) => {
  if (gym.difficulty < 8) {
    gym.completed = true
  }
})

console.log(game.gyms)
console.log(game.party)
console.log(starterPokemons)
console.log(game)
