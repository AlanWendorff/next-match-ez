import { TSections } from "types/sections";

export interface IHandleSelection {
  section?: TSections;
  handleSection: (section: TSections) => void;
}

export default IHandleSelection;
