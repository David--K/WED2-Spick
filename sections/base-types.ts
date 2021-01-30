let myNumArray: number[] = [1, 2, 3];
let myTupel: [number, string] = [1, 'abcd']
// jedem value kann ein value mit einem beliebigen Typ zugeweisen werden
let myNotInferredTupel = [1, 'abcd'];
enum Color {Red, Green, Blue};// enum declaration
enum StrColor {Red = "red", Green = "green"};
type StrLitColor = "red" | "green";
let c: Color = Color.Green; // enum verwenden
let myTupel2: [Color, number] = [Color.Green, 1];
function add(n1: number, n2: number): number;
//function Parameter
numFun: (prevRes: number, current: number) => number
class Counter {
  private _doors: number;
  public static readonly WOOD_FACTORS = {'oak': 80, 'pine': 20};
  constructor({doors = 2}: {doors?: number} = {}) {
    this.doors = doors;/*Fehler wenn doors nicht gesetzt, korrekt in JS*/}
  set doors(newDoorCount: number) {
    this._doors = newDoorCount;}
  get doors() {
    return this._doors;}
}
class SportsCar {
  //Verkürzte Syntax zur Initialisierung von Properties im Konstruktor
  constructor(
  public make: string,
  public color: SportsCarColor,
  ) { //kein code nötig }
}
interface IPoint {
  readonly x: number;
  readonly y: number;
}
interface ILikableItem { likes?: number; }
class DescribableItem {
  constructor(
    public description: string
  ){}
}
class PointOfInterest extends DescribableItem implements IPoint, ILikableItem {
  constructor(public x: number, public y: number, description: string, public likes?:number) {
    super(description);
  }
}
interface CalcRequest extends Request {// Express types
  body: {num1?: string; num2?: string}
}