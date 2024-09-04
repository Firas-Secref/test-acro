import {CategoryEnum} from "../enums/CategoryEnum";

export interface Symbol {
  text: string;
  category: CategoryEnum;
  score: number
}

export const symbolsArray: Symbol[] = [
  { text: "1+_", category: CategoryEnum.BS, score: 2.5 },
  { text: "2°-", category: CategoryEnum.BS, score: 4.8 },
  { text: "'3=", category: CategoryEnum.OTHER, score: 7.3 },
  { text: "&4'", category: CategoryEnum.BS, score: 5.9 },
  { text: "#5+", category: CategoryEnum.BS, score: 3.1 },
  { text: "/6#", category: CategoryEnum.BS, score: 6.7 },
  { text: "=7&", category: CategoryEnum.FS, score: 9.4 },
  { text: "+8/", category: CategoryEnum.BS, score: 8.2 },
  { text: "9°-", category: CategoryEnum.BS, score: 7.1 },
  { text: "_1'", category: CategoryEnum.FS, score: 4.6 },
  { text: "-2=", category: CategoryEnum.BS, score: 2.3 },
  { text: "'3#", category: CategoryEnum.BS, score: 5.0 },
  { text: "4+/", category: CategoryEnum.BS, score: 9.7 },
  { text: "#5°", category: CategoryEnum.BS, score: 3.4 },
  { text: "/6_", category: CategoryEnum.BS, score: 6.2 },
  { text: "7='", category: CategoryEnum.FS, score: 8.8 },
  { text: "&8+", category: CategoryEnum.BS, score: 7.9 },
  { text: "=9/", category: CategoryEnum.OTHER, score: 2.7 },
  { text: "'1#", category: CategoryEnum.BS, score: 4.2 },
  { text: "+2_", category: CategoryEnum.BS, score: 5.6 },
  { text: "3°-", category: CategoryEnum.BS, score: 6.1 },
  { text: "/4=", category: CategoryEnum.FS, score: 3.8 },
  { text: "_5'", category: CategoryEnum.BS, score: 9.3 },
  { text: "6+&", category: CategoryEnum.BS, score: 7.4 },
  { text: "7°/", category: CategoryEnum.BS, score: 8.5 },
  { text: "-8#", category: CategoryEnum.BS, score: 6.0 },
  { text: "'9_", category: CategoryEnum.BS, score: 5.9 },
  { text: "1#=", category: CategoryEnum.FS, score: 4.5 },
  { text: "2&'", category: CategoryEnum.BS, score: 3.7 },
  { text: "3+_", category: CategoryEnum.BS, score: 9.2 },
  { text: "4-°", category: CategoryEnum.BS, score: 7.6 },
  { text: "5'=", category: CategoryEnum.BS, score: 6.4 },
  { text: "6/#", category: CategoryEnum.BS, score: 4.1 },
  { text: "7°+", category: CategoryEnum.BS, score: 2.9 },
  { text: "8-_", category: CategoryEnum.BS, score: 8.0 },
  { text: "9'=", category: CategoryEnum.BS, score: 7.2 },
  { text: "1/+", category: CategoryEnum.BS, score: 5.7 },
  { text: "#2°", category: CategoryEnum.BS, score: 6.5 },
  { text: "=3'", category: CategoryEnum.BS, score: 8.6 },
  { text: "&4-", category: CategoryEnum.BS, score: 3.0 },
  { text: "_5#", category: CategoryEnum.BS, score: 9.1 },
  { text: "+6/", category: CategoryEnum.OTHER, score: 7.0 },
  { text: "7='", category: CategoryEnum.FS, score: 4.9 },
  { text: "8&_=", category: CategoryEnum.BS, score: 3.6 },
];
