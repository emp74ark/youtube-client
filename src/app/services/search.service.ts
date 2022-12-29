import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { IdList, List } from "../shared/interfaces";
import { Subject } from "rxjs";

const { base_url, search, videos, addons, stat, key } = environment;

@Injectable({
  providedIn: "root"
})
export class SearchService {
  searchResults = new Subject<List>();

  constructor(private http: HttpClient) {
  }

  search(request: string, maxResults = 10) {
    this.http.get<IdList>(`${base_url}${search}${addons}&maxResults=${maxResults}&q=${request}&${key}`)
      .subscribe(
        result => {
          const ids = [];
          for (const el of result.items) {
            ids.push(el.id.videoId);
          }
          this.http.get<List>(`${base_url}${videos}${stat}&id=${ids.join("%2C")}&${key}`).subscribe(
            result => {
              this.searchResults.next(result);
            }
          );
        }
      );
  }
}
