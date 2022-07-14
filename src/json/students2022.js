const students = {
  "Blake A": ["https://replit.com/@whassuppal/CYOA-FINAL?v=1"],
  "Ty N": ["https://2vs5qo.csb.app/"],
  "Atticus R": ["https://final-project-cs.mckellhardman.repl.co"],
  "Abby H": ["https://replit.com/@Abbers/CYOA-p5#script.js"],
  "Ayden W": ["https://Actual-Final-CS-Project-Attemt-4.awoof07.repl.co"],
  "Devin H, Ethan A": ["https://DinosaurDE.ethanapsley1.repl.co"],
  "Ben B": ["https://replit.com/@BenBoucher/Circular-Jungle"],
  "Shantel G": ["https://Jarorld-the-Block-Friend.hamyyystar.repl.co"],
  "McKell H": ["https://final-project-cs.mckellhardman.repl.co"],
  "Alan M": ["https://replit.com/@Jibusentanna/DinoGameP5Starter-3"],
  "Gibson T": ["https://replit.com/@Jibusentanna/DinoGameP5Starter-3"],
  "Logan H":["https://bean-jumper.dunkteam42.repl.co/"],
  "Neeve R": ["https://platform-jumping.zebra06.repl.co/"],
  "Isaac H": ["https://Tank-game2.tristan646.repl.co"],
  "Jaxon D": ["https://Final-project-JETPACK-BOIRIDE.jaquaviondamark.repl.co"],
  "Owen C":["https://quandale-dingle-escape.orcowles.repl.co/"],
  "Xane C": [https://replit.com/@mc0398971/Game-JIC?v=1],
  "Lucy G": ["https://1919-Game.lucygolden.repl.co"],
  "Eleanor A" : ["https://Cool-Thing.coolcello.repl.co"],
  "Amy R": ["https://final-project.amyyr21.repl.co/"],
};

const studentsSorted = Object.keys(students)
  .sort()
  .reduce((obj, key) => {
    obj[key] = students[key];
    return obj;
  }, {});

export default studentsSorted;
