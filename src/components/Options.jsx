import { REGIONS } from "../regions";
import Option from "./Option";

export default function Options() {
  return REGIONS.map((option) => <Option key={option} option={option} />);
}
