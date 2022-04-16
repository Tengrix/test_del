import {createContext} from "react";
import {CtxType} from "../types/contextTypes";

export const AuthContext = createContext<CtxType|null>(null)