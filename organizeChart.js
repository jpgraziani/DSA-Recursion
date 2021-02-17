/*

Write a recursive function that prints the following organization chart. Your output should be as shown below with proper indentation to show the hierarchy. You may store the org chart in an object and send that as an input to your program.

*/


let orgChartObj = {
  Zuckerberg: {
    Schroepfer: {
      Bosworth: { Steve: {}, Kyle: {}, Andra: {} },
      Zhao: { Richie: {}, Sofia: {}, Jen: {} }
    },
    Schrage: {
      VanDyck: { Sabrina: {}, Michelle: {}, Josh: {} },
      Swain: { Blanch: {}, Tom: {}, Joe: {} }
    },
    Sandberg: {
      Goler: { Eddie: {}, Julie: {}, Annie: {} },
      Hernandez: { Rowi: {}, Inga: {}, Morgan: {} },
      Moissinac: { Amy: {}, Chuck: {}, Vinni: {} },
      Kelley: { Eric: {}, Ana: {}, Wes: {} }
    }
  }
};

function printOrgChart(org, depth = 0) {
  const spacer = ' '.repeat(depth * 4);

  const keys = Object.keys(org);
  keys.forEach(key => {
    console.log(spacer + key);
    printOrgChart(org[key], depth + 1)
  });
}


