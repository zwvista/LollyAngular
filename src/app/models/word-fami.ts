export class WordsFami {
  WORDSFAMI: WordFami[];
}
export class WordFami {
  ID = 0;
  LANGID = 0;
  TEXTBOOKID = 0;
  UNIT = 0;
  PART = 0;
  SEQNUM = 0;
  WORD = '';
  NOTE: string | null = null;
  WORDID = 0;
  FAMIID = 0;
  LEVEL = 0;

  get unitPartSeqnum(): string {
    return String(this.UNIT).padStart(3) +
      String(this.PART).padStart(3) +
      String(this.SEQNUM).padStart(3);
  }
}
