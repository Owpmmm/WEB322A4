const setData = require("../data/setData");
const themeData = require("../data/themeData");

let sets = [];

function initialize() {
  return new Promise((resolve, reject) => {
    setData.forEach(setElement => {
      let setWithTheme = { 
        ...setElement, 
        theme: themeData.find(themeElement => themeElement.id == setElement.theme_id).name 
      };
      sets.push(setWithTheme);
    });
    resolve();
  });
}

function getAllSets() {
  return new Promise((resolve) => {
    resolve(sets);
  });
}

function getSetByNum(setNum) {
  return new Promise((resolve, reject) => {
    let foundSet = sets.find(s => s.set_num == setNum);

    if (foundSet) {
      resolve(foundSet);
    } else {
      reject("Unable to find requested set");
    }
  });
}

function getSetsByTheme(theme) {
  return new Promise((resolve, reject) => {
    let foundSets = sets.filter(s => s.theme.toUpperCase() === theme.toUpperCase());

    if (foundSets.length > 0) {
      resolve(foundSets);
    } else {
      reject("Unable to find requested sets");
    }
  });
}

module.exports = { initialize, getAllSets, getSetByNum, getSetsByTheme };
