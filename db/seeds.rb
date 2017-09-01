#Users -------------------------------
User.create(
	username: "breakingbadfan91",
	password: "denversunshine88",
	gender: "female",
	hometown: "Denver",
	occupation: "welder",
	description: "My goal is to find a cache in every US State. Cache life!"
	)
User.create(
	username: "makeamericagreat123",
	password: "trumplife5",
	gender: "male",
	hometown: "Knoxville",
	occupation: "nurse",
	description: "Love caching, especially in the mountains!!!"
	)
User.create(
	username: "starcraftislife",
	password: "zergrush666",
	gender: "male",
	hometown: "Tuscaloosa",
	occupation: "cashier",
	description: "I organize Alabama caching trips on the first Saturday of ever month. Hit me up if you want to join!"
	)
User.create(
	username: "realcoreydoctorow",
	password: "5239480758740568586783456834760496834704865708634056983460958758754830674358473056983745609348843649999568734673444586097",
	gender: "male",
	hometown: "Toronto",
	occupation: "blogger",
	description: "Using GPS on cache trips helps me remember that the government is always watching me! :D "
	)
User.create(
	username: "crosschokeaustin",
	password: "ricksonisgod",
	gender: "female",
	hometown: "Austin",
	occupation: "accountant",
	description: "Brazilian jiu-jitsu is my life!!! Every new town I travel too, I try to train at the local bjj gym and find (or create) a cache!"
	)
User.create(
	username: "anthony756",
	password: "password",
	gender: "male",
	hometown: "Portland",
	occupation: "customer service",
	description: "just looking around"
	)
User.create(
	username: "samantha87",
	password: "greedoshotfirst",
	gender: "other",
	hometown: "Coalwood",
	occupation: "miner",
	description: "cache life woot"
	)
User.create(
	username: "tonyrobbinsisgod",
	password: "seriouslythotonyrobbins",
	gender: "male",
	hometown: "San Francisco",
	occupation: "teacher",
	description: "Life is an adventure, let's live it!"
	)
User.create(
	username: "leet_haxor_4_real",
	password: "password",
	gender: "other",
	hometown: "New York",
	occupation: "studemt",
	description: "i will sql inject ur maneframe also i like geocashing"
	)

# Caches ----------------------------------------------

Cache.create(
	latitude: Faker::Address.latitude,
	longitude: Faker::Address.longitude,
	difficulty: "Moderate",
	number_of_visits: 3,
	creator_id: 4,
	description: "Be sure to wear galoshes for this one! The cache is in an old green army ammo container. Good luck!"
)
Cache.create(
	latitude: Faker::Address.latitude,
	longitude: Faker::Address.longitude,
	difficulty: "Challenging",
	number_of_visits: 1,
	creator_id: 4,
	description: "You will need to work through some tough terrain on this one. Be sure to stop once in a while to enjoy the view. Start early!"
)
Cache.create(
	latitude: Faker::Address.latitude,
	longitude: Faker::Address.longitude,
	difficulty: "Easy",
	number_of_visits: 4,
	creator_id: 8,
	description: "A nice little adventure in the city. Treat yourself to some gyro afterwards, you'll see the spot. ;)"
)
Cache.create(
	latitude: Faker::Address.latitude,
	longitude: Faker::Address.longitude,
	difficulty: "Easy",
	number_of_visits: 2,
	creator_id: 1,
	description: "The locals are super nice, they'll point you in the right direction if you get stumped. Bring bug spray!"
)
Cache.create(
	latitude: Faker::Address.latitude,
	longitude: Faker::Address.longitude,
	difficulty: "Difficult",
	number_of_visits: 7,
	creator_id: 8,
	description: "Hint: water"
)
Cache.create(
	latitude: Faker::Address.latitude,
	longitude: Faker::Address.longitude,
	difficulty: "Challenging",
	number_of_visits: 2,
	creator_id: 2,
	description: "You'll need some kind of boat. You might try the kayak rental place on the edge of lake. The cache will not be touching the ground."
)
Cache.create(
	latitude: Faker::Address.latitude,
	longitude: Faker::Address.longitude,
	difficulty: "Difficult",
	number_of_visits: 3,
	creator_id: 7,
	description: "This is a tough one, best done over the course of two days. Bring camping equipment and food. It's not terribly difficult to find though, just stick with the trail. Bring bear mace,"
)
Cache.create(
	latitude: Faker::Address.latitude,
	longitude: Faker::Address.longitude,
	difficulty: "Very Easy",
	number_of_visits: 0,
	creator_id: 9,
	description: "hey i live here not teknically a cash, we can hang out and stuff i have videogames u can call me if u need directions"
)

#Items -------------------------------------------------------

Item.create(
	name: "Granddad's compass",
	description: "My grandfather's compass from when he fought in the French Foreign Legion",
	cache_id: 5
	)
Item.create(
	name: "'Grit' by Angela Duckworth",
	description: "Just a great book I think everyone should read",
	cache_id: 4
	)
Item.create(
	name: "Starcraft 1",
	description: "My first ever starcraft CD. It changed my life, keep it safe",
	cache_id: 8
	)
Item.create(
	name: "'Make America Great Again' Hat",
	description: "An interesting piece of American history",
	cache_id: 7
	)
Item.create(
	name: "Handmade Knife",
	description: "I make these by hand for a living. The handle on this one's rosewood.",
	cache_id: 6
	)
Item.create(
	name: "Coffee with kettle and reusable filter",
	description: "Surprise! There's a tap just around the corner! Have a cup!",
	cache_id: 4
	)
Item.create(
	name: "Blue Belt",
	description: "My jiu-jitu blue belt. Good times. I can't believe I'm a brown belt now!",
	cache_id: 5
	)
Item.create(
	name: "'Dangal' DVD",
	description: "I'm not huge on bollywood movies, but this one is pretty sweet",
	cache_id: 3
	)
Item.create(
	name: "Farady Pouch",
	description: "Put your phone in this on the way back so the government can't track you",
	cache_id: 2
	)
Item.create(
	name: "Leather Keychain",
	description: "Written on it is 'Not all those who wander are lost'. It's a J.R.R. Tolkien quote, or so I'm told",
	cache_id: 1
	)