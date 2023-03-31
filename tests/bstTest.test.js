//import Bst from "../src/bst.js";
const Bst = require("../src/bst.js");

describe("Test insert", ()=>{
    it("Should set bst root to added number", ()=>{
        const tree = new Bst();
        tree.insert(9);
        expect(tree.root.data).toEqual(9);
    });
});