import { Pipe, PipeTransform } from "@angular/core";
import { Item } from "../shared/interfaces";

@Pipe({
  name: "listOrder"
})
export class ListOrderPipe implements PipeTransform {

  transform(list: Item[], criteria: string, direction: "asc" | "desc"): Item[] {
    if (criteria === "publishedAt" && direction === "asc") {
      return list.sort((a, b) => Date.parse(a.snippet.publishedAt) - Date.parse(b.snippet.publishedAt));
    } else if (criteria === "publishedAt" && direction === "desc") {
      return list.sort((a, b) => Date.parse(b.snippet.publishedAt) - Date.parse(a.snippet.publishedAt));
    } else if (criteria === "viewCount" && direction === "asc") {
      return list.sort((a, b) => Number(a.statistics.viewCount) - Number(b.statistics.viewCount));
    } else if (criteria === "viewCount" && direction === "desc") {
      return list.sort((a, b) => Number(b.statistics.viewCount) - Number(a.statistics.viewCount));
    }
    return list;
  }
}
