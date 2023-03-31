//import Bst from "../src/bst.js";
const Bst = require("../src/bst.js");

describe("Test insert", ()=>{
    it("Should set bst root to added number", ()=>{
        const tree = new Bst();
        tree.insert(9);
        expect(tree.root.data).toEqual(9);
    });
    it("Should add all numbers to the bst", ()=>{
        const input = [2, 1, 3];
        const output = [1, 2, 3];
        const tree = new Bst();
        input.forEach((num)=>tree.insert(num));
        expect(tree.inOrder()).toEqual(output);

    });
    it("Should return the correct size of the bst", ()=>{
        const values = [...Array(5).keys()];
        const tree = new Bst();
        values.forEach((val)=> tree.insert(val));
        console.log(tree.root.data, tree.root.left, tree.root.right);
        expect(tree.size()).toEqual(5);
    });
});