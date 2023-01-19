import { Pipe, PipeTransform } from "@angular/core";
import { Item } from "../../shared/interfaces";

@Pipe({
  name: "listFilter"
})
export class ListFilterPipe implements PipeTransform {

  transform(list: Item[] | null, value: string): Item[] {
    if (!list) return [];
    return list.filter(el => el.snippet.title.toLowerCase().includes(value.toLowerCase()));
  }

}
