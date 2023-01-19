import { createAction, props } from "@ngrx/store";
import { Card } from "../../shared/interfaces";

export enum CardsActionsTypes {
  GetAllCards = "[Cards] Get all cards",
  AddNewCard = "[Cards] Add new card"
}

export const getAllCards = createAction(CardsActionsTypes.GetAllCards);

export const addNewCard = createAction(
  CardsActionsTypes.AddNewCard,
  props<{ payload: Card }>()
);
