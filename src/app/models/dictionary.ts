class Dictionary {
  ID: number;
  LANGIDFROM: number;
  DICTTYPENAME: string;
  DICTNAME: string;
  URL: string;
  CHCONV: string;
  TRANSFORM_MAC: string;
  WAIT: number;
  TEMPLATE: string;
}

export class DictsOnline {
  VDICTSONLINE: DictOnline[];
}
export class DictOnline extends Dictionary {

}
export class DictsOffline {
  VDICTSOFFLINE: DictOffline[];
}
export class DictOffline extends Dictionary {

}
export class DictsNote {
  VDICTSNOTE: DictNote[];
}
export class DictNote extends Dictionary {

}
