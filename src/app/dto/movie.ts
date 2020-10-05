export default class Movie {
  private _id: number;
  private _title: string;
  private _year: string;
  private _genres: string[];
  private _rating: string;
  private _imageUrl: string;
  private _overview: string;

  get overview(): string {
    return this._overview;
  }

  set overview(value: string) {
    this._overview = value;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get imageUrl(): string {
    return this._imageUrl;
  }

  set imageUrl(value: string) {
    this._imageUrl = value;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get year(): string {
    return this._year;
  }

  set year(value: string) {
    this._year = value;
  }

  get genres(): string[] {
    return this._genres;
  }

  set genres(value: string[]) {
    this._genres = value;
  }

  get rating(): string {
    return this._rating;
  }

  set rating(value: string) {
    this._rating = value;
  }

}
