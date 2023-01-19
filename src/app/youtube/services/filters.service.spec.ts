import { FiltersService } from "./filters.service";
import { FiltersState } from "../../shared/interfaces";

const mockInitialFilterState: FiltersState = { visibility: false, date: "asc", views: "asc", text: "" };

describe("FilterService", () => {
  let filters: FiltersService;
  beforeEach(() => {
    filters = new FiltersService();
  });

  it("Get initial filters state", () => {
    filters.settings.subscribe(
      value => {
        expect(value).toEqual(mockInitialFilterState);
      }
    );
  });

  it("Toggle date filter", () => {
    filters.toggleDateFilter();
    filters.settings.subscribe(
      value => {
        expect(value.date).toBe("desc");
      }
    );
  });

  it("Toggle views filter", () => {
    filters.toggleViewsFilter();
    filters.settings.subscribe(
      value => {
        expect(value.views).toBe("desc");
      }
    );
  });

  it("Toggle text filter", () => {
    filters.updTextFilter("cat");
    filters.settings.subscribe(
      value => {
        expect(value.text).toBe("cat");
      }
    );
  });
});
