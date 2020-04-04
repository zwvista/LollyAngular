export class MUSMappings {
  records!: MUSMapping[];
}
export class MUSMapping {
  ID = 0;
  NAME = '';
  KIND = 0;
  ENTITYID = 0;
  VALUEID = 0;
  LEVEL = 0;

  static NAME_USLANGID = 'USLANGID';
  static NAME_USROWSPERPAGEOPTIONS = 'USROWSPERPAGEOPTIONS';
  static NAME_USROWSPERPAGE = 'USROWSPERPAGE';
  static NAME_USLEVELCOLORS = 'USLEVELCOLORS';
  static NAME_USSCANINTERVAL = 'USSCANINTERVAL';
  static NAME_USREVIEWINTERVAL = 'USREVIEWINTERVAL';

  static NAME_USTEXTBOOKID = 'USTEXTBOOKID';
  static NAME_USDICTITEM = 'USDICTITEM';
  static NAME_USDICTNOTEID = 'USDICTNOTEID';
  static NAME_USDICTITEMS = 'USDICTITEMS';
  static NAME_USDICTTRANSLATIONID = 'USDICTTRANSLATIONID';
  static NAME_USMACVOICEID = 'USMACVOICEID';
  static NAME_USIOSVOICEID = 'USIOSVOICEID';
  static NAME_USANDROIDVOICEID = 'USANDROIDVOICEID';
  static NAME_USWEBVOICEID = 'USWEBVOICEID';
  static NAME_USWINDOWSVOICEID = 'USWINDOWSVOICEID';

  static NAME_USUNITFROM = 'USUNITFROM';
  static NAME_USPARTFROM = 'USPARTFROM';
  static NAME_USUNITTO = 'USUNITTO';
  static NAME_USPARTTO = 'USPARTTO';
}