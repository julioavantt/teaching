const object = {
  pedro: "pedro",
};

///console.log("OBJ JAVASCRIPT", object);

const objectStringify = JSON.stringify(object);

//console.log("JSON", objectStringify);

const objectParse = JSON.parse(objectStringify);

//console.log("OBJ JAVASCRIPT PARSEADO", objectParse.pedro);


