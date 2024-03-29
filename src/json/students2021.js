const students = {
  "Valerie S": ["micro:bit"],
  "Alexander C": [
    "https://replit.com/@HackingFish/RPGGameThatIsBetter#main.py",
  ],
  "Alexander L": ["https://Meme-WebsiteFinal-project.superstarlex.repl.co"],
  "Alize C": [
    "https://replit.com/@alizecorniel/best-rpg-besides-kaidens#main.py",
  ],
  "Armando V": ["https://replit.com/@TinyT1m/RPGgame#main.py"],
  "Audriana R": ["https://replit.com/@AudrianaNicole/Babysitting-game#no.py"],
  "Austin A": ["https://replit.com/@LordSkittles06/RPJ-Game#main.py"],
  "Benjamin W": [
    "https://replit.com/@AlphaZed73/RPG-Text-Game",
    "https://flaskss.joshuatelford.repl.co",
  ],
  "Bryce T": ["https://flaskss.snailman.repl.co/login"],
  "Caleb P": ["https://replit.com/@CalebPayne/VallHalla#main.py"],
  "Caylee ,": ["micro:bit"],
  "Charly M": ["https://pong-html.charlymidy.repl.co/"],
  "Christian H": [
    "micro:bit",
    "https://sites.google.com/stu.provo.edu/christianhenrie/rpg-game",
  ],
  "Colben B": ["micro:bit"],
  "Corbin C": ["https://replit.com/@CorbinCall/RPG-Game#main.py"],
  "Dallin B": ["micro:bit"],
  "Dana M": [
    "https://replit.com/@Danamendez/SuspiciousGentleControlpanel#main.py",
  ],
  "Daniel R": ["micro:bit"],
  "Daphne R": [
    "https://replit.com/@mikaidrawz/RPG#main.py",
    "https://replit.com/@turtlepattern/game#main.py",
  ],
  "Enoch T": ["micro:bit"],
  "Ethan F": ["micro:bit", "RPG"],
  "Evangeline V": ["https://replit.com/@EvangelineV/RPG-Game-Ruff#main.py"],
  "Heather J": ["https://replit.com/@WillowedTree/RPG-game#gohere.py"],
  "Hope M": ["https://replit.com/@HopeMaxwell/G-A-M-E#main.py"],
  "Hyrum B": ["micro:bit"],
  "Hyrum D": ["micro:bit"],
  "Isaac G": ["micro:bit"],
  "Jake S": ["https://replit.com/@JakeSemanoff/knight-text-adventure-game"],
  "Jayden M": ["https://flaskss.jaydenmcdonald1.repl.co/login"],
  "Jenna H": ["https://replit.com/@mikaidrawz/RPG#main.py"],
  "Jett S": ["micro:bit"],
  "Joshua T": ["https://flaskss.joshuatelford.repl.co/"],
  "Joslyn W": [
    "https://replit.com/@Danamendez/SuspiciousGentleControlpanel#main.py",
  ],
  "Kayden A": ["micro:bit", "https://replit.com/@ExtensivePik/RPG"],
  "Laird P": ["micro:bit"],
  "Leah M": [
    "https://replit.com/@mikaidrawz/RPG#main.py",
    "https://replit.com/@turtlepattern/game#main.py",
  ],
  "Leila B": ["micro:bit"],
  "Lily P": ["https://replit.com/@LillianPotter/BestRPGgame#main.py"],
  "Lizzie G": ["https://replit.com/@hello82306/FinalProject"],
  "Logan L": ["micro:bit"],
  "Maddox M": ["https://Meme-WebsiteFinal-project.superstarlex.repl.co"],
  "Mason R": ["http://cougar.blobbert.io/"],
  "Max S": ["https://Meme-WebsiteFinal-project.superstarlex.repl.co"],
  "Nora G": ["https://replit.com/@tabbytinabean13/AcademyRPG#rooms.py"],
  "Oliver F": ["https://replit.com/@OliverFlinders/rpg#data.py"],
  "Sadie H": [
    "https://replit.com/@Danamendez/SuspiciousGentleControlpanel#main.py",
  ],
  "Teancum N": ["https://replit.com/@diobetes/RPG-game#main.py"],
  "Tony S": ["https://replit.com/@sd737/hangman-game#main.py"],
  "Tyler J": ["https://replit.com/@TylerJensen4/Game#main.py"],
  "Valentina G": ["https://replit.com/@Val100/RPG-Game#main.py"],
  "Veronica P": [
    "https://replit.com/@VeronicaPapini1/Kidnapped-by-a-pillow#room.py",
  ],
};

const studentsSorted = Object.keys(students)
  .sort()
  .reduce((obj, key) => {
    obj[key] = students[key];
    return obj;
  }, {});

export default studentsSorted;
