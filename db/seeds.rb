# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
User.destroy_all
League.destroy_all
Team.destroy_all
Player.destroy_all

puts "creating users!"

user1 = User.create(username: "Csumm999", email:"csumm999@gmail.com", password: "Csumm9999", name:"Caleb Summeralls")
user2 = User.create(username: "Jimbob4", email:"jimbob4@gmail.com", password: "Jimbob4444", name: "Jimbob Mcgee")
user3 = User.create(username: "BillyN123", email:"billyn123@gmail.com", password: "Billyn123", name: "Billy Napier")
user4 = User.create(username: "KirbyS123", email:"Kirbys123@gmail.com", password: "Kirbys123", name: "Kirby Smart")
user5 = User.create(username: "Venny567", email:"venny567@gmail.com", password: "Venny567", name: "Ventrell Miller")
db = User.create(username: "DB", email:"DB@gmail.com", password: "Admin123", name: "ADMIN")

puts "users done!"

puts "creating leagues!"

league1= League.create(league_name: "Lab Lifters", commisioner_name:"Csumm999",  favorite: true)
league2= League.create(league_name: "NFL Sucks", commisioner_name: "BillyN123",  favorite: true)
free_agents=League.create(league_name: "Database", commisioner_name: "ADMIN",  favorite: true)

puts "Leagues done!"

puts "creating teams"

team1 = Team.create(team_name: "Caleb's Synergy Boys", user: user1, league: league1)
team2 = Team.create(team_name: "Caleb's Salty Sailors", user: user1, league: league2)
team3 = Team.create(team_name: "Jimbobs silly men", user: user3, league: league1)
team4 = Team.create(team_name: "Scared Money Don't Make Money", user: user4, league: league1)
team5 = Team.create(team_name: "I hate the Gators", user: user5, league: league1)
team6 = Team.create(team_name: "My team sucks", user: user2, league: league2)

freeagents = Team.create(team_name: "Free Agents", user: db, league: free_agents)

puts "teams done!"

puts "Creating Quarterbacks"
willrogers = Player.create(team: team3 , player_name: "Will Rogers", position: "QB", passing_yards: 2555, passing_touchdowns: 23, interceptions: 4, passing_attempts: 380, passing_completions: 258)
stetsonbennett = Player.create(team: freeagents, player_name: "Stetson Bennett", position: "QB", passing_yards: 2349, passing_touchdowns: 9, interceptions: 3, passing_attempts: 267, passing_completions: 181)
hendonhooker = Player.create(team: team2, player_name: "Hendon Hooker", position: "QB", passing_yards: 2338, passing_touchdowns: 21, interceptions: 1, passing_attempts: 219, passing_completions: 156, rushing_yards: 338, rushing_touchdowns: 4)
jaxsondart = Player.create(team: team5, player_name: "Jaxson Dart", position: "QB", passing_yards: 1911, passing_touchdowns: 14, interceptions: 7, passing_attempts: 216, passing_completions: 132, rushing_yards: 473)
bryceyoung = Player.create(team: team4, player_name: "Bryce Young", position: "QB", passing_yards: 1906, passing_touchdowns: 3, interceptions: 3, passing_attempts: 221, passing_completions: 146)
jaydendaniels = Player.create(team: team6, player_name: "Jayden Daniels", position: "QB", passing_yards: 1812, passing_touchdowns: 12, interceptions: 1, passing_attempts: 236, passing_completions: 165, rushing_yards: 524, rushing_touchdowns: 9)
willlevis = Player.create( team: freeagents, player_name: "Will Levis", position: "QB", passing_yards: 1733, passing_touchdowns: 13, interceptions: 8, passing_attempts: 191, passing_completions: 130)
kjjefferson = Player.create(team: freeagents, player_name: "KJ Jefferson", position: "QB", passing_yards: 1697, passing_touchdowns: 15, interceptions: 1, passing_attempts: 185, passing_completions: 125, rushing_yards: 389, rushing_touchdowns: 6)
bradycook = Player.create(team: freeagents, player_name: "Brady Cook", position: "QB", passing_yards: 1652, passing_touchdowns: 6, interceptions: 7, passing_attempts: 222, passing_completions:145 , rushing_yards: 215, rushing_touchdowns: 3)
anthonyrichardson = Player.create(team: team1, player_name: "Anthony Richardson", position: "QB", passing_yards: 1638, passing_touchdowns: 7, interceptions: 7, passing_attempts: 207, passing_completions: 114, rushing_yards: 414, rushing_touchdowns: 6)
spencerrattler = Player.create( team: freeagents, player_name: "Spencer Rattler", position: "QB", passing_yards: 1637, passing_touchdowns: 5, interceptions: 9, passing_attempts: 225, passing_completions: 144)
robbyashford = Player.create(team: freeagents, player_name: "Robby Ashford", position: "QB", passing_yards: 1299, passing_touchdowns: 5, interceptions: 5, passing_attempts: 173, passing_completions: 91, rushing_yards: 397, rushing_touchdowns: 3)
ajswann = Player.create(team: freeagents, player_name: "AJ Swann", position: "QB", passing_yards: 1068, passing_touchdowns: 8, interceptions: 1, passing_attempts: 163, passing_completions: 94)
haynesking = Player.create(team: freeagents, player_name: "Haynes King", position: "QB", passing_yards: 941, passing_touchdowns: 6, interceptions: 6, passing_attempts: 142, passing_completions: 81)

puts "QBs done!"

puts "Creating Runningbacks"

raheimsanders= Player.create(team: team1, player_name: "Raheim Sanders", position: "RB", rushing_yards: 1041, rushing_touchdowns: 7, receptions: 16, receiving_yards: 195, receiving_touchdowns:1)
quinshonjudkins= Player.create(team: team2, player_name: "Quinshon Judkins", position: "RB", rushing_yards: 1036, rushing_touchdowns: 13)
devonachane= Player.create(team: team2, player_name: "Devon Achane", position: "RB", rushing_yards: 765, rushing_touchdowns: 4, receptions: 33, receiving_yards: 195, receiving_touchdowns:2)
zachevans= Player.create(team: team3, player_name: "Zach Evans", position: "RB", rushing_yards: 680, rushing_touchdowns: 7)
jahmyrgibbs= Player.create(team:team3 , player_name: "Jahmyr Gibbs", position: "RB", rushing_yards: 672, rushing_touchdowns: 6, receptions: 31, receiving_yards: 301, receiving_touchdowns:3)
tankbigsby= Player.create(team: team4, player_name: "Tank Bigsby", position: "RB", rushing_yards: 587, rushing_touchdowns: 7)
raydavis= Player.create(team: team4, player_name: "Ray Davis", position: "RB", rushing_yards: 564, rushing_touchdowns: 4)
marshawnlloyd= Player.create(team: team5, player_name: "Marshawn Lloyd", position: "RB", rushing_yards: 556, rushing_touchdowns: 9)
jaylenwright= Player.create(team: team5, player_name: "Jaylen Wright", position:"RB" , rushing_yards: 478, rushing_touchdowns: 5)
jabarismall= Player.create(team: team6, player_name: "Jabari Small", position: "RB", rushing_yards: 475, rushing_touchdowns: 5)
chrisrodriguezjr= Player.create(team: team6, player_name: "Chris Rodriguez Jr", position: "RB", rushing_yards: 459, rushing_touchdowns: 4)
montrelljohnsonjr= Player.create(team: team1, player_name: "Montrell Johnson Jr", position: "RB", rushing_yards: 449, rushing_touchdowns: 7)
coryschrader= Player.create(team: freeagents, player_name: "Cory Schrader", position: "RB", rushing_yards: 444 , rushing_touchdowns: 5)
daijunedwards= Player.create(team: freeagents, player_name: "Daijun Edwards", position:"RB" , rushing_yards: 440, rushing_touchdowns: 7)
dillonjohnson= Player.create(team: freeagents, player_name: "Dillon Johnson", position:"RB" , rushing_yards: 407, rushing_touchdowns: 3, receptions: 31, receiving_yards: 215)
nathanielpeat= Player.create(team: freeagents, player_name: "Nathaniel Peat", position:"RB" , rushing_yards: 387, rushing_touchdowns: 2)
trevoretienne= Player.create(team: freeagents, player_name: "Trevor Etienne", position: "RB", rushing_yards: 387, rushing_touchdowns: 4)
kennymcintosh= Player.create(team: freeagents, player_name: "Kenny MCIntosh", position:"RB" , rushing_yards:332 , rushing_touchdowns: 6, receptions: 29, receiving_yards: 265, receiving_touchdowns:1)
jasemcclellan= Player.create(team: freeagents, player_name: "Jase McClellan", position: "RB", rushing_yards: 312, rushing_touchdowns: 3)
joquaviousmarks= Player.create(team: freeagents, player_name: "Jo'quavious Marks", position: "RB", rushing_yards:312 , rushing_touchdowns:6 , receptions: 32, receiving_yards: 200)
joshwilliams= Player.create(team: freeagents, player_name: "Josh Williams", position: "RB", rushing_yards: 305, rushing_touchdowns: 4)
kavosieysmoke= Player.create(team: freeagents, player_name: "Kavosiey Smoke", position:"RB" , rushing_yards: 275, rushing_touchdowns: 1)
jarquezhunter= Player.create(team: freeagents, player_name: "Jarquez Hunter", position: "RB", rushing_yards: 257, rushing_touchdowns: 5)
ajgreen= Player.create(team: freeagents, player_name: "AJ Green", position:"RB" , rushing_yards: 207, rushing_touchdowns: 2)

puts "RBs Done!"

puts "Creating Receivers"
jalinhyatt = Player.create(team:team1, player_name: "Jalin Hyatt", position: "WR" , receiving_yards: 907, receptions: 45, receiving_touchdowns:14)
jonathanmingo = Player.create(team:team1, player_name: "Jonathan Mingo", position: "WR" , receiving_yards: 664, receptions: 30, receiving_touchdowns:4)
dominiclovett = Player.create(team:team2, player_name: "Dominic Lovett", position: "WR" , receiving_yards: 659, receptions: 45, receiving_touchdowns:2)
willsheppard = Player.create(team:team2, player_name: "Will Sheppard", position: "WR" , receiving_yards: 525, receptions: 41, receiving_touchdowns:8)
malikheath = Player.create(team:team3, player_name: "Malik Heath", position: "WR" , receiving_yards: 491, receptions: 32, receiving_touchdowns: 3)
evanstewart = Player.create(team:team3, player_name: "Evan Stewart", position: "WR" , receiving_yards: 478, receptions: 38, receiving_touchdowns: 2)
mattlanders = Player.create(team:team4, player_name: "Matt Landers", position: "WR" , receiving_yards: 475, receptions: 29, receiving_touchdowns:3)
justinshorter = Player.create(team:team4, player_name: "Justin Shorter", position: "WR" , receiving_yards: 471, receptions: 21, receiving_touchdowns: 2)
jadonhaselwood = Player.create(team:team5, player_name: "Jadon Haselwood", position: "WR" , receiving_yards: 467, receptions: 36, receiving_touchdowns:3)
antwanewellsjr = Player.create(team:team5, player_name: "Antwane Wells Jr", position: "WR" , receiving_yards: 464, receptions: 37, receiving_touchdowns:2)
rarathomas = Player.create(team:team1 , player_name:"Rara Thomas" , position: "WR" , receiving_yards: 456, receptions: 30, receiving_touchdowns:3)
maliknabers = Player.create(team:team2, player_name: "Malik Nabers", position: "WR" , receiving_yards: 455, receptions: 36 , receiving_touchdowns:1) 
brumccoy = Player.create(team:team3, player_name: "Bru McCoy", position: "WR" , receiving_yards: 451, receptions: 30, receiving_touchdowns:2)
laddmcconkey = Player.create(team:team4, player_name: "Ladd McConkey", position: "WR" , receiving_yards: 413 , receptions:33 , receiving_touchdowns:2)
tayvionrobinson = Player.create(team:team5, player_name:"Tayvion Robinson" , position: "WR" , receiving_yards: 403, receptions: 29, receiving_touchdowns:3)
javarriusjohnson = Player.create(team:team6, player_name: "Ja'Varrius Johnson", position: "WR" , receiving_yards: 399, receptions: 22, receiving_touchdowns:1)
jaydenmcgowan = Player.create(team: freeagents, player_name: "Jayden Mcgowan", position: "WR" , receiving_yards: 391, receptions: 34, receiving_touchdowns:2)
jacoreybrooks = Player.create(team: freeagents, player_name: "Ja'Corey Brooks", position: "WR" , receiving_yards: 376, receptions: 21, receiving_touchdowns:4)
calebducking= Player.create(team: freeagents, player_name: "Caleb Ducking", position: "WR" , receiving_yards: 365, receptions: 35, receiving_touchdowns:7)
xzavierhenderson = Player.create(team: freeagents, player_name: "Xzavier Henderson", position: "WR" , receiving_yards: 362, receptions: 32, receiving_touchdowns:2)
barionbrown = Player.create(team: freeagents, player_name: "Barion Brown", position: "WR" , receiving_yards: 362, receptions: 26, receiving_touchdowns:2)
ramelkeyton = Player.create(team: freeagents, player_name: "Ramel Keyton", position: "WR" , receiving_yards: 357, receptions: 20, receiving_touchdowns:2)
moosemuhammad = Player.create(team: freeagents, player_name: "Moose Muhammad III", position: "WR" , receiving_yards: 342, receptions: 23, receiving_touchdowns:3)
rickypearsall = Player.create(team: freeagents, player_name: "Ricky Pearsall", position: "WR" , receiving_yards: 341, receptions: 19, receiving_touchdowns: 2)
jalenbrooks = Player.create(team: freeagents, player_name: "Jalen Brooks", position: "WR" , receiving_yards: 340, receptions: 21)
jordanwatkins= Player.create(team: freeagents, player_name: "Jordan Watkins", position: "WR" , receiving_yards: 335, receptions: 24, receiving_touchdowns:1 )
danekey = Player.create(team: freeagents, player_name: "Dane Key", position: "WR" , receiving_yards: 330, receptions: 21, receiving_touchdowns:3)
rufusharvey = Player.create(team: freeagents, player_name: "Rufus Harvey", position: "WR" , receiving_yards: 310, receptions:33 , receiving_touchdowns:2)
jermaineburton= Player.create(team: freeagents, player_name: "Jermaine Burton", position: "WR" , receiving_yards: 306, receptions: 20, receiving_touchdowns:3)
ainiassmith = Player.create(team: freeagents, player_name:"Ainias Smith" , position: "WR" , receiving_yards: 291, receptions: 15, receiving_touchdowns:2)
jarayjenkins = Player.create(team: freeagents, player_name: "Jaray Jenkins", position: "WR" , receiving_yards: 288, receptions: 20, receiving_touchdowns: 5)
kayshonboutte = Player.create(team: freeagents, player_name: "Kayshon Boutte", position: "WR" , receiving_yards: 288, receptions: 27, receiving_touchdowns:1)
brianthomasjr = Player.create(team: freeagents, player_name: "Brian Thomas Jr", position: "WR" , receiving_yards: 280, receptions: 20, receiving_touchdowns: 3)
kobeprentice = Player.create(team: freeagents, player_name:"Kobe Prentice" , position: "WR" , receiving_yards: 279, receptions: 28, receiving_touchdowns:1)
lideatrickgriffin = Player.create(team: freeagents, player_name: "Lideatrick Griffin", position: "WR" , receiving_yards: 273, receptions: 23, receiving_touchdowns:1)
cedrictillman = Player.create(team: freeagents, player_name: "Cedric Tillman", position: "WR" , receiving_yards: 268, receptions: 21, receiving_touchdowns: 1)
traeshonholden = Player.create(team: freeagents, player_name: "Traeshon Holden", position: "WR" , receiving_yards: 266, receptions: 21, receiving_touchdowns: 5)
barrettbanister = Player.create(team: freeagents, player_name: "Barrett Banister", position: "WR" , receiving_yards: 197 , receptions: 18)

puts "Receivers done"

puts "Creating Tight Ends"
brockbowers = Player.create(team: team1, player_name: "Brock Bowers", position: "TE" , receiving_yards: 547, receptions: 31, receiving_touchdowns:3)
darnellwashington = Player.create(team: team2, player_name:  "Darnell Washington",position: "TE" , receiving_yards: 332, receptions: 19)
treyknox = Player.create(team: team3, player_name:  "Trey Knox",position: "TE" , receiving_yards: 220, receptions: 17, receiving_touchdowns:3)
cameronlatu = Player.create(team: team4, player_name:  "Cameron Latu",position: "TE" , receiving_yards: 217, receptions: 18, receiving_touchdowns:2)
johnsamuelshenker = Player.create(team: team5, player_name:  "John Samuel Shenker",position: "TE" , receiving_yards: 208, receptions: 20, receiving_touchdowns:1)
austinstogner = Player.create(team: team6, player_name:  "Austin Stogner",position: "TE" , receiving_yards: 203, receptions: 17, receiving_touchdowns:1)

puts "Tight Ends Done!"


puts "Seeding Complete"